import { describe, it, expect } from 'vitest';
import { 
  validateEvent, 
  validateRsvpData, 
  validateUser, 
  isValidSodaworldEmail,
  isValidImageFile,
  GameType, 
  ConnectionMethod 
} from '../types';

describe('Database Schema Validation', () => {
  describe('Event Validation', () => {
    it('should validate a complete event', () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 7); // One week from now
      
      const event = {
        title: 'Test Event',
        description: 'A test event',
        datetime: futureDate,
        createdBy: 'test@sodaworld.tv',
        gameType: GameType.RAINBOW_HOP,
        isActive: true,
      };

      const result = validateEvent(event);
      if (!result.isValid) {
        console.log('Validation errors:', result.errors);
      }
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should reject event with missing title', () => {
      const event = {
        title: '',
        datetime: new Date('2025-02-15T18:00:00Z'),
        createdBy: 'test@sodaworld.tv',
        gameType: GameType.RAINBOW_HOP,
        isActive: true,
      };

      const result = validateEvent(event);
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.field === 'title')).toBe(true);
    });

    it('should reject event with past datetime', () => {
      const pastDate = new Date();
      pastDate.setDate(pastDate.getDate() - 1); // Yesterday
      
      const event = {
        title: 'Test Event',
        datetime: pastDate,
        createdBy: 'test@sodaworld.tv',
        gameType: GameType.RAINBOW_HOP,
        isActive: true,
      };

      const result = validateEvent(event);
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.field === 'datetime')).toBe(true);
    });

    it('should reject event with invalid email', () => {
      const event = {
        title: 'Test Event',
        datetime: new Date('2025-02-15T18:00:00Z'),
        createdBy: 'invalid-email',
        gameType: GameType.RAINBOW_HOP,
        isActive: true,
      };

      const result = validateEvent(event);
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.field === 'createdBy')).toBe(true);
    });
  });

  describe('RSVP Validation', () => {
    it('should validate a complete RSVP', () => {
      const rsvp = {
        eventId: 'test-event-id',
        name: 'John Doe',
        email: 'john@example.com',
        connectionMethod: ConnectionMethod.VR,
      };

      const result = validateRsvpData(rsvp);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should reject RSVP with missing name', () => {
      const rsvp = {
        eventId: 'test-event-id',
        name: '',
        email: 'john@example.com',
        connectionMethod: ConnectionMethod.VR,
      };

      const result = validateRsvpData(rsvp);
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.field === 'name')).toBe(true);
    });

    it('should reject RSVP with invalid email', () => {
      const rsvp = {
        eventId: 'test-event-id',
        name: 'John Doe',
        email: 'invalid-email',
        connectionMethod: ConnectionMethod.VR,
      };

      const result = validateRsvpData(rsvp);
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.field === 'email')).toBe(true);
    });

    it('should reject RSVP with missing eventId', () => {
      const rsvp = {
        eventId: '',
        name: 'John Doe',
        email: 'john@example.com',
        connectionMethod: ConnectionMethod.VR,
      };

      const result = validateRsvpData(rsvp);
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.field === 'eventId')).toBe(true);
    });

    it('should reject RSVP with null connection method', () => {
      const rsvp = {
        eventId: 'test-event-id',
        name: 'John Doe',
        email: 'john@example.com',
        connectionMethod: null,
      };

      const result = validateRsvpData(rsvp);
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.field === 'connectionMethod')).toBe(true);
    });
  });

  describe('User Validation', () => {
    it('should validate a complete user', () => {
      const user = {
        uid: 'test-uid',
        email: 'test@sodaworld.tv',
        displayName: 'Test User',
        domain: 'sodaworld.tv',
        lastLogin: new Date(),
      };

      const result = validateUser(user);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should reject user with missing uid', () => {
      const user = {
        uid: '',
        email: 'test@sodaworld.tv',
        domain: 'sodaworld.tv',
        lastLogin: new Date(),
      };

      const result = validateUser(user);
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.field === 'uid')).toBe(true);
    });

    it('should reject user with invalid email', () => {
      const user = {
        uid: 'test-uid',
        email: 'invalid-email',
        domain: 'sodaworld.tv',
        lastLogin: new Date(),
      };

      const result = validateUser(user);
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.field === 'email')).toBe(true);
    });

    it('should reject user with missing domain', () => {
      const user = {
        uid: 'test-uid',
        email: 'test@sodaworld.tv',
        domain: '',
        lastLogin: new Date(),
      };

      const result = validateUser(user);
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.field === 'domain')).toBe(true);
    });
  });

  describe('Database Schema Structure', () => {
    it('should have proper GameType enum values', () => {
      expect(Object.values(GameType)).toContain('rainbow_hop');
      expect(GameType.RAINBOW_HOP).toBe('rainbow_hop');
    });

    it('should have proper ConnectionMethod enum values', () => {
      expect(Object.values(ConnectionMethod)).toContain('VR');
      expect(Object.values(ConnectionMethod)).toContain('IRL');
      expect(Object.values(ConnectionMethod)).toContain('Online');
    });

    it('should validate email domains correctly', () => {
      expect(isValidSodaworldEmail('test@sodaworld.tv')).toBe(true);
      expect(isValidSodaworldEmail('test@gmail.com')).toBe(false);
      expect(isValidSodaworldEmail('invalid-email')).toBe(false);
    });

    it('should validate image files correctly', () => {
      // Mock File objects
      const validPngFile = new File([''], 'test.png', { type: 'image/png' });
      Object.defineProperty(validPngFile, 'size', { value: 1024 * 1024 }); // 1MB
      
      const invalidTypeFile = new File([''], 'test.txt', { type: 'text/plain' });
      Object.defineProperty(invalidTypeFile, 'size', { value: 1024 });
      
      const oversizedFile = new File([''], 'test.png', { type: 'image/png' });
      Object.defineProperty(oversizedFile, 'size', { value: 10 * 1024 * 1024 }); // 10MB
      
      expect(isValidImageFile(validPngFile)).toBe(true);
      expect(isValidImageFile(invalidTypeFile)).toBe(false);
      expect(isValidImageFile(oversizedFile)).toBe(false);
    });
  });
});