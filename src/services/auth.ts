import { User, AuthService } from '../types';
import { auth } from '../firebaseConfig';
import { GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut, onAuthStateChanged, User as FirebaseUser, setPersistence, browserLocalPersistence } from 'firebase/auth';

class AuthServiceImpl implements AuthService {
  constructor() {
    // Set persistence to local storage for session management
    this.initializePersistence();
  }

  private async initializePersistence(): Promise<void> {
    try {
      await setPersistence(auth, browserLocalPersistence);
    } catch (error) {
      console.error('Failed to set auth persistence:', error);
    }
  }

  async signInWithGoogle(): Promise<User> {
    const provider = new GoogleAuthProvider();
    
    // Configure Google provider for better user experience
    provider.addScope('email');
    provider.addScope('profile');
    provider.setCustomParameters({
      prompt: 'select_account'
    });

    const result = await signInWithPopup(auth, provider);
    const user = this.mapFirebaseUser(result.user);
    
    // Validate domain immediately after sign in
    if (!this.isAuthorized(user)) {
      await this.signOut();
      throw new Error('Access denied. Only sodaworld.tv email addresses are allowed.');
    }
    
    return user;
  }

  async signOut(): Promise<void> {
    await firebaseSignOut(auth);
  }

  getCurrentUser(): User | null {
    const firebaseUser = auth.currentUser;
    return firebaseUser ? this.mapFirebaseUser(firebaseUser) : null;
  }

  isAuthorized(user: User): boolean {
    // Check if user email domain is exactly 'sodaworld.tv'
    return user.domain.toLowerCase() === 'sodaworld.tv';
  }

  onAuthStateChanged(callback: (user: User | null) => void): () => void {
    return onAuthStateChanged(auth, (firebaseUser) => {
      const user = firebaseUser ? this.mapFirebaseUser(firebaseUser) : null;
      callback(user);
    });
  }

  private mapFirebaseUser(firebaseUser: FirebaseUser): User {
    const email = firebaseUser.email || '';
    const domain = email.split('@')[1] || '';
    
    return {
      uid: firebaseUser.uid,
      email,
      displayName: firebaseUser.displayName || undefined,
      photoURL: firebaseUser.photoURL || undefined,
      domain,
      lastLogin: new Date(),
    };
  }
}

export const authService = new AuthServiceImpl();