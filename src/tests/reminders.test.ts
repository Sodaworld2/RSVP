import { describe, it, expect, vi, beforeEach } from 'vitest';
import { reminderService } from '../services/reminders';
import { eventService } from '../services/events';
import { rsvpService } from '../services/rsvps';
import { emailService } from '../services/email';
import { Event, RsvpData, GameType, ConnectionMethod } from '../types';

// Mock all the services
vi.mock('../services/events');
vi.mock('../services/rsvps');
vi.mock('../services/email');

const mockEventService = vi.mocked(eventService);
const mockRsvpService = vi.mocked(rsvpService);
const mockEmailService = vi.mocked(emailService);

describe('Reminder Service', () => {
  const mockEvent: Event = {
    id: 'test-event-id',
    title: 'Test Event Tomorrow',
    description: 'A test event happening tomorrow',
    datetime: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
    createdBy: 'organizer@sodaworld.tv',
    createdAt: new Date(),
    updatedAt: new Date(),
    gameType: GameType.RAINBOW_HOP,
    isActive: true,
  };

  const mockRsvps: RsvpData[] = [
    {
      id: 'rsvp-1',
      eventId: 'test-event-id',
      name: 'John Doe',
      email: 'john@example.com',
      connectionMethod: ConnectionMethod.VR,
      submittedAt: new Date(),
      reminderSent: false,
    },
    {
      id: 'rsvp-2',
      eventId: 'test-event-id',
      name: 'Jane Smith',
      email: 'jane@example.com',
      connectionMethod: ConnectionMethod.ZOOM,
      submittedAt: new Date(),
      reminderSent: false,
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('processEventReminders', () => {
    it('should process reminders for events happening tomorrow', async () => {
      // Setup mocks
      mockEventService.getEventsForReminders.mockResolvedValue([mockEvent]);
      mockRsvpService.getRsvpsNeedingReminders.mockResolvedValue(mockRsvps);
      mockEmailService.sendEventReminder.mockResolvedValue();
      mockRsvpService.markReminderSent.mockResolvedValue();

      // Execute
      await reminderService.processEventReminders();

      // Verify
      expect(mockEventService.getEventsForReminders).toHaveBeenCalledOnce();
      expect(mockRsvpService.getRsvpsNeedingReminders).toHaveBeenCalledWith('test-event-id');
      expect(mockEmailService.sendEventReminder).toHaveBeenCalledWith(
        ['john@example.com', 'jane@example.com'],
        mockEvent
      );
      expect(mockRsvpService.markReminderSent).toHaveBeenCalledWith(['rsvp-1', 'rsvp-2']);
    });

    it('should skip events with no RSVPs needing reminders', async () => {
      // Setup mocks
      mockEventService.getEventsForReminders.mockResolvedValue([mockEvent]);
      mockRsvpService.getRsvpsNeedingReminders.mockResolvedValue([]);
      mockEmailService.sendEventReminder.mockResolvedValue();
      mockRsvpService.markReminderSent.mockResolvedValue();

      // Execute
      await reminderService.processEventReminders();

      // Verify
      expect(mockEmailService.sendEventReminder).not.toHaveBeenCalled();
      expect(mockRsvpService.markReminderSent).not.toHaveBeenCalled();
    });

    it('should handle email sending errors gracefully', async () => {
      // Setup mocks
      mockEventService.getEventsForReminders.mockResolvedValue([mockEvent]);
      mockRsvpService.getRsvpsNeedingReminders.mockResolvedValue(mockRsvps);
      mockEmailService.sendEventReminder.mockRejectedValue(new Error('Email service unavailable'));
      mockRsvpService.markReminderSent.mockResolvedValue();

      // Execute - should not throw
      await reminderService.processEventReminders();

      // Verify that it tried to send email but didn't mark as sent due to error
      expect(mockEmailService.sendEventReminder).toHaveBeenCalled();
      expect(mockRsvpService.markReminderSent).not.toHaveBeenCalled();
    });

    it('should process multiple events', async () => {
      const secondEvent: Event = {
        ...mockEvent,
        id: 'test-event-2',
        title: 'Second Test Event',
      };

      const secondEventRsvps: RsvpData[] = [
        {
          ...mockRsvps[0],
          id: 'rsvp-3',
          eventId: 'test-event-2',
          email: 'third@example.com',
        },
      ];

      // Setup mocks
      mockEventService.getEventsForReminders.mockResolvedValue([mockEvent, secondEvent]);
      mockRsvpService.getRsvpsNeedingReminders
        .mockResolvedValueOnce(mockRsvps)
        .mockResolvedValueOnce(secondEventRsvps);
      mockEmailService.sendEventReminder.mockResolvedValue();
      mockRsvpService.markReminderSent.mockResolvedValue();

      // Execute
      await reminderService.processEventReminders();

      // Verify both events were processed
      expect(mockRsvpService.getRsvpsNeedingReminders).toHaveBeenCalledTimes(2);
      expect(mockEmailService.sendEventReminder).toHaveBeenCalledTimes(2);
      expect(mockRsvpService.markReminderSent).toHaveBeenCalledTimes(2);
    });
  });

  describe('testReminderForEvent', () => {
    it('should send test reminder for specific event', async () => {
      // Setup mocks
      mockEventService.getEventById.mockResolvedValue(mockEvent);
      mockRsvpService.getRsvpsNeedingReminders.mockResolvedValue(mockRsvps);
      mockEmailService.sendEventReminder.mockResolvedValue();
      mockRsvpService.markReminderSent.mockResolvedValue();

      // Execute
      await reminderService.testReminderForEvent('test-event-id');

      // Verify
      expect(mockEventService.getEventById).toHaveBeenCalledWith('test-event-id');
      expect(mockEmailService.sendEventReminder).toHaveBeenCalledWith(
        ['john@example.com', 'jane@example.com'],
        mockEvent
      );
    });

    it('should throw error for non-existent event', async () => {
      // Setup mocks
      mockEventService.getEventById.mockResolvedValue(null);

      // Execute and verify
      await expect(reminderService.testReminderForEvent('non-existent')).rejects.toThrow(
        'Event not found: non-existent'
      );
    });
  });
});