import { User, AuthService } from '../types';
import { auth } from '../firebaseConfig';
import { GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';

class AuthServiceImpl implements AuthService {
  async signInWithGoogle(): Promise<User> {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return this.mapFirebaseUser(result.user);
  }

  async signOut(): Promise<void> {
    await firebaseSignOut(auth);
  }

  getCurrentUser(): User | null {
    const firebaseUser = auth.currentUser;
    return firebaseUser ? this.mapFirebaseUser(firebaseUser) : null;
  }

  isAuthorized(user: User): boolean {
    return user.domain === 'sodaworld.tv';
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