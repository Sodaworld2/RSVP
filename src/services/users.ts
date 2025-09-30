import { User } from '../types';
import { db } from '../firebaseConfig';
import { 
  collection, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  getDocs,
  query, 
  where, 
  orderBy,
  Timestamp 
} from 'firebase/firestore';

export interface UserService {
  createOrUpdateUser(user: User): Promise<void>;
  getUserById(uid: string): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;
  getUsersByDomain(domain: string): Promise<User[]>;
  updateLastLogin(uid: string): Promise<void>;
}

class UserServiceImpl implements UserService {
  private readonly collectionName = 'users';

  async createOrUpdateUser(user: User): Promise<void> {
    const docRef = doc(db, this.collectionName, user.uid);
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || null,
      photoURL: user.photoURL || null,
      domain: user.domain,
      lastLogin: Timestamp.fromDate(user.lastLogin),
    };

    await setDoc(docRef, userData, { merge: true });
  }

  async getUserById(uid: string): Promise<User | null> {
    const docRef = doc(db, this.collectionName, uid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return this.mapDocToUser(docSnap);
    }
    return null;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const q = query(
      collection(db, this.collectionName),
      where('email', '==', email)
    );
    
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return this.mapDocToUser(querySnapshot.docs[0]);
    }
    return null;
  }

  async getUsersByDomain(domain: string): Promise<User[]> {
    const q = query(
      collection(db, this.collectionName),
      where('domain', '==', domain),
      orderBy('lastLogin', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => this.mapDocToUser(doc));
  }

  async updateLastLogin(uid: string): Promise<void> {
    const docRef = doc(db, this.collectionName, uid);
    await updateDoc(docRef, {
      lastLogin: Timestamp.fromDate(new Date())
    });
  }

  private mapDocToUser(doc: any): User {
    const data = doc.data();
    return {
      uid: data.uid,
      email: data.email,
      displayName: data.displayName,
      photoURL: data.photoURL,
      domain: data.domain,
      lastLogin: data.lastLogin.toDate(),
    };
  }
}

export const userService = new UserServiceImpl();