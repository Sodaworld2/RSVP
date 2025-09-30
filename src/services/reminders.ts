import { eventService } from './events';
import { rsvpService } from './rsvps';
import { emailService } from './email';
import { Event, RsvpData } from '../types';

class ReminderService {
  async processEventReminders(): Promise<void> {
    try {
      console.log('Starting event reminder processing...');

      // Get events happening tomorrow
      const upcomingEvents = await this.getEventsTomorrow();
      console.log(`Found ${upcomingEvents.length} events happening tomorrow`);

      for (const event of upcomingEvents) {
        await this.processEventReminder(event);
      }

      console.log('Event reminder processing completed');
    } catch (error) {
      console.error('Error processing event reminders:', error);
      throw error;
    }
  }

  private async getEventsTomorrow(): Promise<Event[]> {
    // Use the existing method that gets events happening tomorrow
    return await eventService.getEventsForReminders();
  }

  private async processEventReminder(event: Event): Promise<void> {
    try {
      console.log(`Processing reminders for event: ${event.title}`);

      // Get RSVPs that need reminders for this event
      const rsvpsNeedingReminders = await rsvpService.getRsvpsNeedingReminders(event.id);

      if (rsvpsNeedingReminders.length === 0) {
        console.log(`No reminders needed for event: ${event.title}`);
        return;
      }

      console.log(`Sending reminders to ${rsvpsNeedingReminders.length} attendees for event: ${event.title}`);

      // Extract email addresses
      const recipients = rsvpsNeedingReminders.map(rsvp => rsvp.email);

      // Send batch reminder email
      await emailService.sendEventReminder(recipients, event);

      // Mark reminders as sent
      const rsvpIds = rsvpsNeedingReminders.map(rsvp => rsvp.id);
      await rsvpService.markReminderSent(rsvpIds);

      console.log(`Successfully sent reminders for event: ${event.title}`);

    } catch (error) {
      console.error(`Failed to process reminder for event ${event.title}:`, error);
      // Don't throw - continue processing other events
    }
  }

  async processEventRemindersWithRetry(maxRetries: number = 3): Promise<void> {
    let attempts = 0;

    while (attempts < maxRetries) {
      try {
        await this.processEventReminders();
        return; // Success, exit retry loop
      } catch (error) {
        attempts++;
        console.error(`Reminder processing attempt ${attempts} failed:`, error);

        if (attempts < maxRetries) {
          const delay = Math.pow(2, attempts) * 1000; // Exponential backoff
          console.log(`Retrying in ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
        } else {
          console.error('All reminder processing attempts failed');
          throw error;
        }
      }
    }
  }

  // Manual trigger for testing
  async testReminderForEvent(eventId: string): Promise<void> {
    try {
      const event = await eventService.getEventById(eventId);
      if (!event) {
        throw new Error(`Event not found: ${eventId}`);
      }

      console.log(`Testing reminder for event: ${event.title}`);
      await this.processEventReminder(event);
    } catch (error) {
      console.error('Error testing event reminder:', error);
      throw error;
    }
  }
}

export const reminderService = new ReminderService();