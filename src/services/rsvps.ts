import { RsvpData, RsvpService } from '../types';
import { db } from '../firebaseConfig';
import { emailService } from './email';
import { eventService } from './events';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
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

    // First, save the RSVP to the database
    const docRef = await addDoc(collection(db, this.collectionName), docData);

    // Create complete RSVP data with ID and submission date for emails
    const completeRsvpData: RsvpData = {
      id: docRef.id,
      ...rsvpData,
      submittedAt: docData.submittedAt.toDate(),
      reminderSent: false,
    };

    // Send email notifications (don't let email failures block RSVP)
    try {
      // Get event details for emails
      const event = await eventService.getEventById(rsvpData.eventId);

      if (event) {
        // Send emails in parallel but catch individual failures
        const emailPromises = [
          emailService.sendRsvpConfirmation(completeRsvpData, event).catch(error => {
            console.error('Failed to send RSVP confirmation email:', error);
          }),
          emailService.sendOrganizerNotification(completeRsvpData, event).catch(error => {
            console.error('Failed to send organizer notification email:', error);
          })
        ];

        await Promise.allSettled(emailPromises);
      } else {
        console.error('Event not found for email notifications:', rsvpData.eventId);
      }
    } catch (error) {
      // Log email errors but don't throw - RSVP should still succeed
      console.error('Error during email notification process:', error);
    }
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

  async getRsvpsNeedingReminders(eventId: string): Promise<RsvpData[]> {
    const q = query(
      collection(db, this.collectionName),
      where('eventId', '==', eventId),
      where('reminderSent', '==', false)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => this.mapDocToRsvp(doc));
  }

  async markReminderSent(rsvpIds: string[]): Promise<void> {
    const batch = [];
    for (const rsvpId of rsvpIds) {
      const docRef = doc(db, this.collectionName, rsvpId);
      batch.push(updateDoc(docRef, { reminderSent: true }));
    }
    
    await Promise.all(batch);
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