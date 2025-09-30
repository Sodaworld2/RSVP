import { describe, it, expect, vi } from 'vitest';
import { emailService } from '../services/email';
import { Event, RsvpData, GameType, ConnectionMethod } from '../types';

// Mock fetch globally
global.fetch = vi.fn();

describe('Email Service', () => {
  const mockEvent: Event = {
    id: 'test-event-id',
    title: 'Test Event',
    description: 'A test event for our email service',
    datetime: new Date('2025-02-15T18:00:00Z'),
    createdBy: 'organizer@sodaworld.tv',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameType: GameType.RAINBOW_HOP,
    isActive: true,
  };

  const mockRsvp: RsvpData = {
    id: 'test-rsvp-id',
    eventId: 'test-event-id',
    name: 'John Doe',
    email: 'john@example.com',
    connectionMethod: ConnectionMethod.VR,
    submittedAt: new Date(),
    reminderSent: false,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (fetch as any).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true }),
      text: () => Promise.resolve(''),
    });
  });

  describe('sendRsvpConfirmation', () => {
    it('should send confirmation email with correct payload', async () => {
      await emailService.sendRsvpConfirmation(mockRsvp, mockEvent);

      expect(fetch).toHaveBeenCalledWith(
        'https://sendemail-be5gtmizmq-uc.a.run.app',
        expect.objectContaining({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: expect.stringContaining('"to":["john@example.com"]'),
        })
      );

      const callArgs = (fetch as any).mock.calls[0];
      const body = JSON.parse(callArgs[1].body);

      expect(body.to).toEqual(['john@example.com']);
      expect(body.subject).toContain('RSVP Confirmation: Test Event');
      expect(body.html).toContain('John Doe');
      expect(body.html).toContain('Test Event');
      expect(body.html).toContain('VR');
    });
  });

  describe('sendOrganizerNotification', () => {
    it('should send organizer notification with correct payload', async () => {
      await emailService.sendOrganizerNotification(mockRsvp, mockEvent);

      expect(fetch).toHaveBeenCalledWith(
        'https://sendemail-be5gtmizmq-uc.a.run.app',
        expect.objectContaining({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: expect.stringContaining('"to":["organizer@sodaworld.tv"]'),
        })
      );

      const callArgs = (fetch as any).mock.calls[0];
      const body = JSON.parse(callArgs[1].body);

      expect(body.to).toEqual(['organizer@sodaworld.tv']);
      expect(body.subject).toContain('New RSVP for Test Event');
      expect(body.html).toContain('John Doe');
      expect(body.html).toContain('john@example.com');
      expect(body.html).toContain('VR');
    });
  });

  describe('sendEventReminder', () => {
    it('should send reminder email to multiple recipients', async () => {
      const recipients = ['attendee1@example.com', 'attendee2@example.com', 'organizer@sodaworld.tv'];

      await emailService.sendEventReminder(recipients, mockEvent);

      expect(fetch).toHaveBeenCalledWith(
        'https://sendemail-be5gtmizmq-uc.a.run.app',
        expect.objectContaining({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: expect.stringContaining('"to":["attendee1@example.com","attendee2@example.com","organizer@sodaworld.tv"]'),
        })
      );

      const callArgs = (fetch as any).mock.calls[0];
      const body = JSON.parse(callArgs[1].body);

      expect(body.to).toEqual(recipients);
      expect(body.subject).toContain('Reminder: Test Event is tomorrow!');
      expect(body.html).toContain('Test Event');
    });
  });

  describe('error handling', () => {
    it('should throw error when API responds with non-200 status', async () => {
      (fetch as any).mockResolvedValue({
        ok: false,
        status: 500,
        text: () => Promise.resolve('Server Error'),
      });

      await expect(
        emailService.sendRsvpConfirmation(mockRsvp, mockEvent)
      ).rejects.toThrow('Email delivery failed: Email API responded with status: 500, body: Server Error');
    });

    it('should throw error when fetch fails', async () => {
      (fetch as any).mockRejectedValue(new Error('Network error'));

      await expect(
        emailService.sendRsvpConfirmation(mockRsvp, mockEvent)
      ).rejects.toThrow('Email delivery failed: Network error');
    });
  });

  describe('email templates', () => {
    it('should generate HTML emails with proper styling', async () => {
      await emailService.sendRsvpConfirmation(mockRsvp, mockEvent);

      const callArgs = (fetch as any).mock.calls[0];
      const body = JSON.parse(callArgs[1].body);

      expect(body.html).toContain('<!DOCTYPE html>');
      expect(body.html).toContain('<style>');
      expect(body.html).toContain('background-color: #8A2BE2'); // Purple theme color
      expect(body.html).toContain('background-color: #FFD700'); // Yellow theme color
    });

    it('should include event description when available', async () => {
      await emailService.sendRsvpConfirmation(mockRsvp, mockEvent);

      const callArgs = (fetch as any).mock.calls[0];
      const body = JSON.parse(callArgs[1].body);

      expect(body.html).toContain('A test event for our email service');
    });
  });
});