import { EmailService, EmailPayload, RsvpData, Event } from '../types';

class EmailServiceImpl implements EmailService {
  private readonly emailApiUrl = 'https://sendemail-be5gtmizmq-uc.a.run.app';

  async sendRsvpConfirmation(rsvp: RsvpData, event: Event): Promise<void> {
    const payload: EmailPayload = {
      to: [rsvp.email],
      subject: `RSVP Confirmation: ${event.title}`,
      html: this.generateConfirmationEmail(rsvp, event),
      from: 'noreply@sodalabs.live',
    };

    await this.sendEmail(payload);
  }

  async sendOrganizerNotification(rsvp: RsvpData, event: Event): Promise<void> {
    const payload: EmailPayload = {
      to: [event.createdBy],
      subject: `New RSVP for ${event.title}`,
      html: this.generateOrganizerNotificationEmail(rsvp, event),
      from: 'noreply@sodalabs.live',
    };

    await this.sendEmail(payload);
  }

  async sendEventReminder(recipients: string[], event: Event): Promise<void> {
    const payload: EmailPayload = {
      to: recipients,
      subject: `Reminder: ${event.title} is tomorrow!`,
      html: this.generateReminderEmail(event),
      from: 'noreply@sodalabs.live',
    };

    await this.sendEmail(payload);
  }

  private async sendEmail(payload: EmailPayload): Promise<void> {
    try {
      console.log('Sending email to:', payload.to.join(', '), 'Subject:', payload.subject);

      const response = await fetch(this.emailApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        // Add timeout to prevent hanging
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => 'Unknown error');
        throw new Error(`Email API responded with status: ${response.status}, body: ${errorText}`);
      }

      const result = await response.json().catch(() => ({}));
      console.log('Email sent successfully:', result);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('Failed to send email:', {
        error: errorMessage,
        recipients: payload.to,
        subject: payload.subject,
        apiUrl: this.emailApiUrl
      });

      // Re-throw with more context
      throw new Error(`Email delivery failed: ${errorMessage}`);
    }
  }

  private generateConfirmationEmail(rsvp: RsvpData, event: Event): string {
    const eventDate = new Date(event.datetime);
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #8A2BE2; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .highlight { background-color: #FFD700; padding: 15px; border-radius: 5px; margin: 15px 0; }
          .event-details { background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #8A2BE2; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 RSVP Confirmed!</h1>
          </div>
          <div class="content">
            <p>Hi <strong>${rsvp.name}</strong>,</p>
            <p>Great news! Your RSVP for <strong>${event.title}</strong> has been confirmed.</p>

            <div class="event-details">
              <h3>📅 Event Details</h3>
              <p><strong>Event:</strong> ${event.title}</p>
              <p><strong>Date:</strong> ${eventDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</p>
              <p><strong>Time:</strong> ${eventDate.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                timeZoneName: 'short'
              })}</p>
              <p><strong>Your connection method:</strong> ${rsvp.connectionMethod}</p>
              ${event.description ? `<p><strong>Description:</strong> ${event.description}</p>` : ''}
            </div>

            <div class="highlight">
              <p><strong>💡 What's next?</strong></p>
              <p>You'll receive a reminder email the day before the event. If you need to make any changes or have questions, please contact the event organizer.</p>
            </div>

            <p>We're excited to see you there!</p>
            <p>Best regards,<br>The Event Team</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private generateOrganizerNotificationEmail(rsvp: RsvpData, event: Event): string {
    const eventDate = new Date(event.datetime);
    const rsvpDate = rsvp.submittedAt ? new Date(rsvp.submittedAt) : new Date();

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #8A2BE2; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .attendee-info { background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #FFD700; margin: 15px 0; }
          .event-info { background-color: #e8f4fd; padding: 15px; border-radius: 5px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📋 New RSVP Received!</h1>
          </div>
          <div class="content">
            <p>Good news! You have a new RSVP for your event.</p>

            <div class="event-info">
              <h3>📅 Event: ${event.title}</h3>
              <p><strong>Date:</strong> ${eventDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</p>
              <p><strong>Time:</strong> ${eventDate.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit'
              })}</p>
            </div>

            <div class="attendee-info">
              <h3>👤 New Attendee Details</h3>
              <p><strong>Name:</strong> ${rsvp.name}</p>
              <p><strong>Email:</strong> ${rsvp.email}</p>
              <p><strong>Connection Method:</strong> ${rsvp.connectionMethod}</p>
              <p><strong>RSVP Submitted:</strong> ${rsvpDate.toLocaleDateString('en-US')} at ${rsvpDate.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit'
              })}</p>
            </div>

            <p>You can view all RSVPs for this event in your <a href="/dashboard" style="color: #8A2BE2; text-decoration: none;">event dashboard</a>.</p>

            <p>Happy organizing!<br>The Event Team</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private generateReminderEmail(event: Event): string {
    const eventDate = new Date(event.datetime);
    const isToday = eventDate.toDateString() === new Date().toDateString();
    const isTomorrow = eventDate.toDateString() === new Date(Date.now() + 24 * 60 * 60 * 1000).toDateString();

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #FFD700; color: #333; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .event-details { background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #8A2BE2; margin: 15px 0; }
          .highlight { background-color: #FFE4B5; padding: 15px; border-radius: 5px; margin: 15px 0; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>⏰ Event Reminder</h1>
          </div>
          <div class="content">
            <div class="highlight">
              <h2>${isToday ? '🎉 Today is the day!' : isTomorrow ? '📅 Tomorrow is the day!' : '📅 Event reminder'}</h2>
              <p><strong>${event.title}</strong> is ${isToday ? 'happening today' : isTomorrow ? 'happening tomorrow' : 'coming up soon'}!</p>
            </div>

            <div class="event-details">
              <h3>📅 Event Details</h3>
              <p><strong>Event:</strong> ${event.title}</p>
              <p><strong>Date:</strong> ${eventDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</p>
              <p><strong>Time:</strong> ${eventDate.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                timeZoneName: 'short'
              })}</p>
              ${event.description ? `<p><strong>Description:</strong> ${event.description}</p>` : ''}
            </div>

            <p><strong>💡 Getting ready:</strong></p>
            <ul>
              <li>Make sure you have the connection details you provided when you RSVP'd</li>
              <li>Set a reminder on your calendar</li>
              <li>Check your connection method and any necessary software/apps</li>
            </ul>

            <p>We're excited to see you ${isToday ? 'today' : isTomorrow ? 'tomorrow' : 'soon'}!</p>
            <p>Best regards,<br>The Event Team</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}

export const emailService = new EmailServiceImpl();