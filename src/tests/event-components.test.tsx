import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import EventCard from '../components/dashboard/EventCard';
import EventList from '../components/dashboard/EventList';
import { Event, GameType } from '../types';

// Mock event data
const mockEvent: Event = {
  id: 'test-event-1',
  title: 'Test Event',
  description: 'A test event description',
  datetime: new Date(Date.now() + 86400000), // Tomorrow
  createdBy: 'test@sodaworld.tv',
  createdAt: new Date(),
  updatedAt: new Date(),
  gameType: GameType.RAINBOW_HOP,
  isActive: true,
};

describe('Event Components', () => {
  describe('EventCard', () => {
    it('should render event details correctly', () => {
      const mockProps = {
        event: mockEvent,
        onEdit: vi.fn(),
        onDelete: vi.fn(),
        showDeleteConfirm: false,
        onDeleteConfirm: vi.fn(),
        onDeleteCancel: vi.fn(),
      };

      render(<EventCard {...mockProps} />);

      expect(screen.getByText('Test Event')).toBeInTheDocument();
      expect(screen.getByText('A test event description')).toBeInTheDocument();
      expect(screen.getByText('Edit')).toBeInTheDocument();
      expect(screen.getByText('Delete')).toBeInTheDocument();
      expect(screen.getByText('Upcoming')).toBeInTheDocument();
    });

    it('should show delete confirmation when requested', () => {
      const mockProps = {
        event: mockEvent,
        onEdit: vi.fn(),
        onDelete: vi.fn(),
        showDeleteConfirm: true,
        onDeleteConfirm: vi.fn(),
        onDeleteCancel: vi.fn(),
      };

      render(<EventCard {...mockProps} />);

      expect(screen.getByText('Delete this event?')).toBeInTheDocument();
      expect(screen.getByText('Yes, Delete')).toBeInTheDocument();
      expect(screen.getByText('Cancel')).toBeInTheDocument();
    });
  });

  describe('EventList', () => {
    it('should render empty state when no events', () => {
      const mockProps = {
        events: [],
        loading: false,
        onEditEvent: vi.fn(),
        onDeleteEvent: vi.fn(),
        onCreateEvent: vi.fn(),
      };

      render(<EventList {...mockProps} />);

      expect(screen.getByText('No Events Yet')).toBeInTheDocument();
      expect(screen.getByText('Create Your First Event')).toBeInTheDocument();
    });

    it('should render events when provided', () => {
      const mockProps = {
        events: [mockEvent],
        loading: false,
        onEditEvent: vi.fn(),
        onDeleteEvent: vi.fn(),
        onCreateEvent: vi.fn(),
      };

      render(<EventList {...mockProps} />);

      expect(screen.getByText('Your Events')).toBeInTheDocument();
      expect(screen.getByText('1 event created')).toBeInTheDocument();
      expect(screen.getByText('Create New Event')).toBeInTheDocument();
    });

    it('should show loading state', () => {
      const mockProps = {
        events: [],
        loading: true,
        onEditEvent: vi.fn(),
        onDeleteEvent: vi.fn(),
        onCreateEvent: vi.fn(),
      };

      render(<EventList {...mockProps} />);

      expect(screen.getByText('Loading events...')).toBeInTheDocument();
    });
  });
});