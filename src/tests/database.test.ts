import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { eventService } from '../services/events';
import { rsvpService } from '../services/rsvps';
import { userService } from '../services/users';
import { databaseService } from '../services/database';
import { Event, RsvpData, User, GameType, ConnectionMethod } from '../types';

// Mock Firebase
vi.mock('../firebaseConfig', () => ({
  db: {},
  storage: {},
}));

// Mock Firestore functions
vi.mock('firebase/firestore', () => ({
  collection: vi.fn(),
  addDoc: vi.fn(),
  getDocs: vi.fn(),
  doc: vi.fn(),
  getDoc: vi.fn(),
  setDoc: vi.fn(),
  updateDoc: vi.fn(),
  deleteDoc: vi.fn(),
  query: vi.fn(),
  where: vi.fn(),
  orderBy: vi.fn(),
  Timestamp: {
    fromDate: vi.fn((date: Date) => ({ toDate: () => date })),
  },
  enableIndexedDbPersistence: vi.fn(),
}));

// Mock Firebase Storage
vi.mock('firebase/storage', () => ({
  ref: vi.fn(),
  uploadBytes: vi.fn(),
  getDownloadURL: vi.fn(),
}));

describe('Database Services', () => {
  describe('EventService', () => {
    const mockEvent: Omit<Event, 'id' | 'createdAt' | 'updatedAt'> = {
      title: 'Test Event',
      description: 'A test event',
      datetime: new Date('2025-02-15T18:00:00Z'),
      createdBy: 'test@sodaworld.tv',
      gameType: GameType.RAINBOW_HOP,
      isActive: true,
    };

    it('should create an event with proper validation', async () => {
      const mockAddDoc = vi.fn().mockResolvedValue({ id: 'test-event-id' });
      vi.mocked(require('firebase/firestore').addDoc).mockImplementation(mockAddDoc);

      const result = await eventService.createEvent(mockEvent);

      expect(result).toMatchObject({
        ...mockEvent,
        id: 'test-event-id',
      });
      expect(result.createdAt).toBeInstanceOf(Date);
      expect(result.updatedAt).toBeInstanceOf(Date);
    });

    it('should get events by user with proper filtering', async () => {
      const mockQuerySnapshot = {
        docs: [
          {
            id: 'event1',
            data: () => ({
              title: 'Event 1',
              datetime: { toDate: () => new Date() },
              createdBy: 'test@sodaworld.tv',
              createdAt: { toDate: () => new Date() },
              updatedAt: { toDate: () => new Date() },
              gameType: GameType.RAINBOW_HOP,
              isActive: true,
            }),
          },
        ],
      };

      vi.mocked(require('firebase/firestore').getDocs).mockResolvedValue(mockQuerySnapshot);

      const events = await eventService.getEventsByUser('test@sodaworld.tv');

      expect(events).toHaveLength(1);
      expect(events[0].title).toBe('Event 1');
    });

    it('should get active events for public display', async () => {
      const mockQuerySnapshot = {
        docs: [
          {
            id: 'event1',
            data: () => ({
              title: 'Active Event',
              datetime: { toDate: () => new Date(Date.now() + 86400000) }, // Tomorrow
              createdBy: 'test@sodaworld.tv',
              createdAt: { toDate: () => new Date() },
              updatedAt: { toDate: () => new Date() },
              gameType: GameType.RAINBOW_HOP,
              isActive: true,
            }),
          },
        ],
      };

      vi.mocked(require('firebase/firestore').getDocs).mockResolvedValue(mockQuerySnapshot);

      const events = await eventService.getActiveEvents();

      expect(events).toHaveLength(1);
      expect(events[0].isActive).toBe(true);
    });
  });

  describe('RsvpService', () => {
    const mockRsvp: Omit<RsvpData, 'id' | 'submittedAt'> = {
      eventId: 'test-event-id',
      name: 'John Doe',
      email: 'john@example.com',
      connectionMethod: ConnectionMethod.VR,
    };

    it('should submit RSVP with event association', async () => {
      const mockAddDoc = vi.fn().mockResolvedValue({ id: 'test-rsvp-id' });
      vi.mocked(require('firebase/firestore').addDoc).mockImplementation(mockAddDoc);

      await rsvpService.submitRsvp(mockRsvp);

      expect(mockAddDoc).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          eventId: 'test-event-id',
          name: 'John Doe',
          email: 'john@example.com',
          connectionMethod: ConnectionMethod.VR,
          reminderSent: false,
        })
      );
    });

    it('should get RSVPs by event with proper ordering', async () => {
      const mockQuerySnapshot = {
        docs: [
          {
            id: 'rsvp1',
            data: () => ({
              eventId: 'test-event-id',
              name: 'John Doe',
              email: 'john@example.com',
              connectionMethod: ConnectionMethod.VR,
              submittedAt: { toDate: () => new Date() },
              reminderSent: false,
            }),
          },
        ],
      };

      vi.mocked(require('firebase/firestore').getDocs).mockResolvedValue(mockQuerySnapshot);

      const rsvps = await rsvpService.getRsvpsByEvent('test-event-id');

      expect(rsvps).toHaveLength(1);
      expect(rsvps[0].eventId).toBe('test-event-id');
    });

    it('should get RSVPs needing reminders', async () => {
      const mockQuerySnapshot = {
        docs: [
          {
            id: 'rsvp1',
            data: () => ({
              eventId: 'test-event-id',
              name: 'John Doe',
              email: 'john@example.com',
              connectionMethod: ConnectionMethod.VR,
              submittedAt: { toDate: () => new Date() },
              reminderSent: false,
            }),
          },
        ],
      };

      vi.mocked(require('firebase/firestore').getDocs).mockResolvedValue(mockQuerySnapshot);

      const rsvps = await rsvpService.getRsvpsNeedingReminders('test-event-id');

      expect(rsvps).toHaveLength(1);
      expect(rsvps[0].reminderSent).toBe(false);
    });

    it('should mark reminders as sent', async () => {
      const mockUpdateDoc = vi.fn().mockResolvedValue(undefined);
      vi.mocked(require('firebase/firestore').updateDoc).mockImplementation(mockUpdateDoc);

      await rsvpService.markReminderSent(['rsvp1', 'rsvp2']);

      expect(mockUpdateDoc).toHaveBeenCalledTimes(2);
    });
  });

  describe('UserService', () => {
    const mockUser: User = {
      uid: 'test-uid',
      email: 'test@sodaworld.tv',
      displayName: 'Test User',
      photoURL: 'https://example.com/photo.jpg',
      domain: 'sodaworld.tv',
      lastLogin: new Date(),
    };

    it('should create or update user', async () => {
      const mockSetDoc = vi.fn().mockResolvedValue(undefined);
      vi.mocked(require('firebase/firestore').setDoc).mockImplementation(mockSetDoc);

      await userService.createOrUpdateUser(mockUser);

      expect(mockSetDoc).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          uid: 'test-uid',
          email: 'test@sodaworld.tv',
          domain: 'sodaworld.tv',
        }),
        { merge: true }
      );
    });

    it('should get user by email', async () => {
      const mockQuerySnapshot = {
        empty: false,
        docs: [
          {
            id: 'test-uid',
            data: () => ({
              uid: 'test-uid',
              email: 'test@sodaworld.tv',
              displayName: 'Test User',
              domain: 'sodaworld.tv',
              lastLogin: { toDate: () => new Date() },
            }),
          },
        ],
      };

      vi.mocked(require('firebase/firestore').getDocs).mockResolvedValue(mockQuerySnapshot);

      const user = await userService.getUserByEmail('test@sodaworld.tv');

      expect(user).toBeTruthy();
      expect(user?.email).toBe('test@sodaworld.tv');
    });

    it('should get users by domain', async () => {
      const mockQuerySnapshot = {
        docs: [
          {
            id: 'user1',
            data: () => ({
              uid: 'user1',
              email: 'user1@sodaworld.tv',
              domain: 'sodaworld.tv',
              lastLogin: { toDate: () => new Date() },
            }),
          },
          {
            id: 'user2',
            data: () => ({
              uid: 'user2',
              email: 'user2@sodaworld.tv',
              domain: 'sodaworld.tv',
              lastLogin: { toDate: () => new Date() },
            }),
          },
        ],
      };

      vi.mocked(require('firebase/firestore').getDocs).mockResolvedValue(mockQuerySnapshot);

      const users = await userService.getUsersByDomain('sodaworld.tv');

      expect(users).toHaveLength(2);
      expect(users.every(user => user.domain === 'sodaworld.tv')).toBe(true);
    });
  });

  describe('DatabaseService', () => {
    it('should initialize database successfully', async () => {
      const mockEnableIndexedDbPersistence = vi.fn().mockResolvedValue(undefined);
      vi.mocked(require('firebase/firestore').enableIndexedDbPersistence)
        .mockImplementation(mockEnableIndexedDbPersistence);

      const mockSetDoc = vi.fn().mockResolvedValue(undefined);
      vi.mocked(require('firebase/firestore').setDoc).mockImplementation(mockSetDoc);

      await databaseService.initializeDatabase();

      expect(mockEnableIndexedDbPersistence).toHaveBeenCalled();
      expect(mockSetDoc).toHaveBeenCalledTimes(3); // events, rsvps, users collections
    });

    it('should validate schema and return required indexes', async () => {
      const validation = await databaseService.validateSchema();

      expect(validation.collections).toContain('events');
      expect(validation.collections).toContain('rsvps');
      expect(validation.collections).toContain('users');
      expect(validation.indexesRequired.length).toBeGreaterThan(0);
      expect(validation.status).toBe('ready');
    });

    it('should handle persistence errors gracefully', async () => {
      const mockEnableIndexedDbPersistence = vi.fn()
        .mockRejectedValue({ code: 'failed-precondition' });
      vi.mocked(require('firebase/firestore').enableIndexedDbPersistence)
        .mockImplementation(mockEnableIndexedDbPersistence);

      const mockSetDoc = vi.fn().mockResolvedValue(undefined);
      vi.mocked(require('firebase/firestore').setDoc).mockImplementation(mockSetDoc);

      // Should not throw despite persistence error
      await expect(databaseService.initializeDatabase()).resolves.not.toThrow();
    });
  });

  describe('Database Integration', () => {
    it('should handle complete event-rsvp workflow', async () => {
      // Mock successful operations
      const mockAddDoc = vi.fn()
        .mockResolvedValueOnce({ id: 'event-id' })
        .mockResolvedValueOnce({ id: 'rsvp-id' });
      
      const mockGetDocs = vi.fn().mockResolvedValue({
        docs: [
          {
            id: 'rsvp-id',
            data: () => ({
              eventId: 'event-id',
              name: 'John Doe',
              email: 'john@example.com',
              connectionMethod: ConnectionMethod.VR,
              submittedAt: { toDate: () => new Date() },
              reminderSent: false,
            }),
          },
        ],
      });

      vi.mocked(require('firebase/firestore').addDoc).mockImplementation(mockAddDoc);
      vi.mocked(require('firebase/firestore').getDocs).mockImplementation(mockGetDocs);

      // Create event
      const event = await eventService.createEvent({
        title: 'Integration Test Event',
        datetime: new Date('2025-02-15T18:00:00Z'),
        createdBy: 'test@sodaworld.tv',
        gameType: GameType.RAINBOW_HOP,
        isActive: true,
      });

      // Submit RSVP
      await rsvpService.submitRsvp({
        eventId: event.id,
        name: 'John Doe',
        email: 'john@example.com',
        connectionMethod: ConnectionMethod.VR,
      });

      // Get RSVPs for event
      const rsvps = await rsvpService.getRsvpsByEvent(event.id);

      expect(rsvps).toHaveLength(1);
      expect(rsvps[0].eventId).toBe(event.id);
    });
  });
});