import { RsvpData, RsvpService } from '../types';
import { db } from '../firebaseConfig';
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  orderBy,
  Timestamp 
} from 'firebase/firestore';

class RsvpServiceImpl implements RsvpService {
  private readonly collectionName = 'rsvps';

  async submitRsvp(rsvpData: Omit<RsvpData, 'id' | 'submittedAt'>): Promise<void> {
    const docData = {
      ...rsvpData,
      submittedAt: Timestamp.fromDate(new Date()),
      reminderSent: false,
    };

    await addDoc(collection(db, this.collectionName), docData);
  }

  async getRsvpsByEvent(eventId: string): Promise<RsvpData[]> {
    const q = query(
      collection(db, this.collectionName),
      where('eventId', '==', eventId),
      orderBy('submittedAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => this.mapDocToRsvp(doc));
  }

  async getRsvpsByEmail(email: string): Promise<RsvpData[]> {
    const q = query(
      collection(db, this.collectionName),
      where('email', '==', email),
      orderBy('submittedAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => this.mapDocToRsvp(doc));
  }

  private mapDocToRsvp(doc: any): RsvpData {
    const data = doc.data();
    return {
      id: doc.id,
      eventId: data.eventId,
      name: data.name,
      email: data.email,
      connectionMethod: data.connectionMethod,
      submittedAt: data.submittedAt.toDate(),
      reminderSent: data.reminderSent || false,
    };
  }
}

export const rsvpService = new RsvpServiceImpl();