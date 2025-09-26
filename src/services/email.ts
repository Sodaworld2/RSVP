import { EmailService, EmailPayload, RsvpData, Event } from '../types';

class EmailServiceImpl implements EmailService {
  private readonly emailApiUrl = 'https://sendemail-be5gtmizmq-uc.a.run.app';

  async sendRsvpConfirmation(rsvp: RsvpData, event: Event): Promise<void> {
    const payload: EmailPayload = {
      to: [rsvp.email],
      subject: `RSVP Confirmation: ${event.title}`,
      html: this.generateConfirmationEmail(rsvp, event),
    };

    await this.sendEmail(payload);
  }

  async sendOrganizerNotification(rsvp: RsvpData, event: Event): Promise<void> {
    const payload: EmailPayload = {
      to: [event.createdBy],
      subject: `New RSVP for ${event.title}`,
      html: this.generateOrganizerNotificationEmail(rsvp, event),
    };

    await this.sendEmail(payload);
  }

  async sendEventReminder(recipients: string[], event: Event): Promise<void> {
    const payload: EmailPayload = {
      to: recipients,
      subject: `Reminder: ${event.title} is tomorrow!`,
      html: this.generateReminderEmail(event),
    };

    await this.sendEmail(payload);
  }

  private async sendEmail(payload: EmailPayload): Promise<void> {
    try {
      const response = await fetch(this.emailApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Email API responded with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      throw error;
    }
  }

  private generateConfirmationEmail(rsvp: RsvpData, event: Event): string {
    return `
      <h2>RSVP Confirmation</h2>
      <p>Hi ${rsvp.name},</p>
      <p>Thank you for your RSVP to <strong>${event.title}</strong>!</p>
      <p><strong>Event Details:</strong></p>
      <ul>
        <li>Date: ${event.datetime.toLocaleDateString()}</li>
        <li>Time: ${event.datetime.toLocaleTimeString()}</li>
        <li>Connection Method: ${rsvp.connectionMethod}</li>
      </ul>
      <p>We look forward to seeing you there!</p>
    `;
  }

  private generateOrganizerNotificationEmail(rsvp: RsvpData, event: Event): string {
    return `
      <h2>New RSVP Received</h2>
      <p>You have a new RSVP for <strong>${event.title}</strong>:</p>
      <ul>
        <li>Name: ${rsvp.name}</li>
        <li>Email: ${rsvp.email}</li>
        <li>Connection Method: ${rsvp.connectionMethod}</li>
        <li>RSVP Time: ${rsvp.submittedAt?.toLocaleString()}</li>
      </ul>
    `;
  }

  private generateReminderEmail(event: Event): string {
    return `
      <h2>Event Reminder</h2>
      <p><strong>${event.title}</strong> is happening tomorrow!</p>
      <p><strong>Event Details:</strong></p>
      <ul>
        <li>Date: ${event.datetime.toLocaleDateString()}</li>
        <li>Time: ${event.datetime.toLocaleTimeString()}</li>
      </ul>
      <p>Don't forget to join us!</p>
    `;
  }
}

export const emailService = new EmailServiceImpl();