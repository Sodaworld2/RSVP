import { describe, it, expect } from 'vitest';
import { validateEvent, GameType } from '../types';

describe('Event Management', () => {
  describe('Event Validation', () => {
    it('should validate a complete event', () => {
      const event = {
        title: 'Test Event',
        description: 'A test event',
        datetime: new Date(Date.now() + 86400000), // Tomorrow
        createdBy: 'test@sodaworld.tv',
        gameType: GameType.RAINBOW_HOP,
        isActive: true,
      };

      const result = validateEvent(event);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should reject event with missing title', () => {
      const event = {
        title: '',
        datetime: new Date(Date.now() + 86400000),
        createdBy: 'test@sodaworld.tv',
        gameType: GameType.RAINBOW_HOP,
        isActive: true,
      };

      const result = validateEvent(event);
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.field === 'title')).toBe(true);
    });

    it('should reject event with past datetime', () => {
      const event = {
        title: 'Test Event',
        datetime: new Date(Date.now() - 86400000), // Yesterday
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
        datetime: new Date(Date.now() + 86400000),
        createdBy: 'invalid-email',
        gameType: GameType.RAINBOW_HOP,
        isActive: true,
      };

      const result = validateEvent(event);
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.field === 'createdBy')).toBe(true);
    });
  });
});