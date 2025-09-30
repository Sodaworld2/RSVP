import { Event, EventService, GameType } from '../types';
import { db, storage } from '../firebaseConfig';
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

class EventServiceImpl implements EventService {
  private readonly collectionName = 'events';

  async createEvent(eventData: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>): Promise<Event> {
    const now = new Date();
    const docData = {
      ...eventData,
      datetime: Timestamp.fromDate(eventData.datetime),
      createdAt: Timestamp.fromDate(now),
      updatedAt: Timestamp.fromDate(now),
    };

    const docRef = await addDoc(collection(db, this.collectionName), docData);
    
    return {
      ...eventData,
      id: docRef.id,
      createdAt: now,
      updatedAt: now,
    };
  }

  async getEventsByUser(userEmail: string): Promise<Event[]> {
    const q = query(
      collection(db, this.collectionName),
      where('createdBy', '==', userEmail),
      where('isActive', '==', true),
      orderBy('datetime', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => this.mapDocToEvent(doc));
  }

  async getActiveEvents(): Promise<Event[]> {
    const now = new Date();
    const q = query(
      collection(db, this.collectionName),
      where('isActive', '==', true),
      where('datetime', '>', Timestamp.fromDate(now)),
      orderBy('datetime', 'asc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => this.mapDocToEvent(doc));
  }

  async getEventsForReminders(): Promise<Event[]> {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const dayAfterTomorrow = new Date(tomorrow);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1);
    
    const q = query(
      collection(db, this.collectionName),
      where('isActive', '==', true),
      where('datetime', '>=', Timestamp.fromDate(tomorrow)),
      where('datetime', '<', Timestamp.fromDate(dayAfterTomorrow))
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => this.mapDocToEvent(doc));
  }

  async getEventById(id: string): Promise<Event | null> {
    const docRef = doc(db, this.collectionName, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return this.mapDocToEvent(docSnap);
    }
    return null;
  }

  async updateEvent(id: string, updates: Partial<Event>): Promise<void> {
    const docRef = doc(db, this.collectionName, id);
    const updateData: any = {
      ...updates,
      updatedAt: Timestamp.fromDate(new Date()),
    };

    if (updates.datetime) {
      updateData.datetime = Timestamp.fromDate(updates.datetime);
    }

    await updateDoc(docRef, updateData);
  }

  async deleteEvent(id: string): Promise<void> {
    const docRef = doc(db, this.collectionName, id);
    await deleteDoc(docRef);
  }

  async uploadEventLogo(file: File): Promise<string> {
    const timestamp = Date.now();
    const fileName = `event-logos/${timestamp}-${file.name}`;
    const storageRef = ref(storage, fileName);
    
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  }

  private mapDocToEvent(doc: any): Event {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title,
      description: data.description,
      datetime: data.datetime.toDate(),
      createdBy: data.createdBy,
      createdAt: data.createdAt.toDate(),
      updatedAt: data.updatedAt.toDate(),
      logoUrl: data.logoUrl,
      gameType: data.gameType || GameType.RAINBOW_HOP,
      isActive: data.isActive ?? true,
    };
  }
}

export const eventService = new EventServiceImpl();