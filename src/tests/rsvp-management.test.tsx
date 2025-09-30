import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Event, RsvpData, GameType, ConnectionMethod } from '../types';
import RsvpList from '../components/dashboard/RsvpList';
import { rsvpService } from '../services/rsvps';

// Mock the services
vi.mock('../services/rsvps');
vi.mock('../utils/retry', () => ({
  useRetry: (operation: any, options: any) => ({
    execute: operation,
    isLoading: false,
    error: null,
    retry: vi.fn()
  })
}));

const mockRsvpService = vi.mocked(rsvpService);

const mockEvent: Event = {
  id: 'test-event-id',
  title: 'Test Conference 2024',
  description: 'A test conference',
  datetime: new Date('2024-03-15T14:00:00Z'),
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
    submittedAt: new Date('2024-02-01T10:00:00Z'),
    reminderSent: false,
  },
  {
    id: 'rsvp-2',
    eventId: 'test-event-id',
    name: 'Jane Smith',
    email: 'jane@example.com',
    connectionMethod: ConnectionMethod.ZOOM,
    submittedAt: new Date('2024-02-02T15:30:00Z'),
    reminderSent: true,
  },
  {
    id: 'rsvp-3',
    eventId: 'test-event-id',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    connectionMethod: ConnectionMethod.IN_PERSON,
    submittedAt: new Date('2024-02-03T09:15:00Z'),
    reminderSent: false,
  },
];

describe('RsvpList Component', () => {
  const mockOnBack = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    mockRsvpService.getRsvpsByEvent.mockResolvedValue(mockRsvps);
  });

  it('should render event title and RSVP count', async () => {
    render(<RsvpList event={mockEvent} onBack={mockOnBack} />);

    await waitFor(() => {
      expect(screen.getByText('Test Conference 2024 - RSVPs')).toBeInTheDocument();
      expect(screen.getByText('3 of 3 attendees')).toBeInTheDocument();
    });
  });

  it('should display all attendees in table format', async () => {
    render(<RsvpList event={mockEvent} onBack={mockOnBack} />);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
      expect(screen.getByText('jane@example.com')).toBeInTheDocument();
      expect(screen.getByText('Bob Johnson')).toBeInTheDocument();
      expect(screen.getByText('bob@example.com')).toBeInTheDocument();
    });
  });

  it('should display connection methods with appropriate styling', async () => {
    render(<RsvpList event={mockEvent} onBack={mockOnBack} />);

    await waitFor(() => {
      expect(screen.getByText('VR')).toBeInTheDocument();
      expect(screen.getByText('ZOOM')).toBeInTheDocument();
      expect(screen.getByText('IN_PERSON')).toBeInTheDocument();
    });
  });

  it('should display reminder status correctly', async () => {
    render(<RsvpList event={mockEvent} onBack={mockOnBack} />);

    await waitFor(() => {
      const remindedElements = screen.getAllByText('Reminded');
      const pendingElements = screen.getAllByText('Pending');

      expect(remindedElements).toHaveLength(1); // Jane Smith
      expect(pendingElements).toHaveLength(2); // John Doe and Bob Johnson
    });
  });

  describe('Search and Filter Functionality', () => {
    it('should filter RSVPs by name search', async () => {
      render(<RsvpList event={mockEvent} onBack={mockOnBack} />);

      await waitFor(() => {
        expect(screen.getByText('John Doe')).toBeInTheDocument();
      });

      const searchInput = screen.getByPlaceholderText('Search by name or email...');
      fireEvent.change(searchInput, { target: { value: 'John' } });

      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
      expect(screen.queryByText('Bob Johnson')).not.toBeInTheDocument();
      expect(screen.getByText('1 of 3 attendees (filtered by "John")')).toBeInTheDocument();
    });

    it('should filter RSVPs by email search', async () => {
      render(<RsvpList event={mockEvent} onBack={mockOnBack} />);

      await waitFor(() => {
        expect(screen.getByText('jane@example.com')).toBeInTheDocument();
      });

      const searchInput = screen.getByPlaceholderText('Search by name or email...');
      fireEvent.change(searchInput, { target: { value: 'jane@' } });

      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
      expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
      expect(screen.queryByText('Bob Johnson')).not.toBeInTheDocument();
    });

    it('should filter RSVPs by connection method', async () => {
      render(<RsvpList event={mockEvent} onBack={mockOnBack} />);

      await waitFor(() => {
        expect(screen.getByText('John Doe')).toBeInTheDocument();
      });

      const connectionFilter = screen.getByDisplayValue('All methods');
      fireEvent.change(connectionFilter, { target: { value: ConnectionMethod.VR } });

      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
      expect(screen.queryByText('Bob Johnson')).not.toBeInTheDocument();
    });

    it('should combine search and filter criteria', async () => {
      render(<RsvpList event={mockEvent} onBack={mockOnBack} />);

      await waitFor(() => {
        expect(screen.getByText('John Doe')).toBeInTheDocument();
      });

      // Filter by ZOOM connection method
      const connectionFilter = screen.getByDisplayValue('All methods');
      fireEvent.change(connectionFilter, { target: { value: ConnectionMethod.ZOOM } });

      // Search for "Jane"
      const searchInput = screen.getByPlaceholderText('Search by name or email...');
      fireEvent.change(searchInput, { target: { value: 'Jane' } });

      // Should show only Jane Smith (ZOOM + name match)
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
      expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
      expect(screen.queryByText('Bob Johnson')).not.toBeInTheDocument();
    });
  });

  describe('Sorting Functionality', () => {
    it('should sort by name A-Z', async () => {
      render(<RsvpList event={mockEvent} onBack={mockOnBack} />);

      await waitFor(() => {
        expect(screen.getByText('John Doe')).toBeInTheDocument();
      });

      const sortSelect = screen.getByDisplayValue('RSVP Date (Newest first)');
      fireEvent.change(sortSelect, { target: { value: 'name-asc' } });

      const rows = screen.getAllByRole('row');
      // Skip header row, check data rows
      expect(rows[1]).toHaveTextContent('Bob Johnson');
      expect(rows[2]).toHaveTextContent('Jane Smith');
      expect(rows[3]).toHaveTextContent('John Doe');
    });

    it('should sort by RSVP date newest first by default', async () => {
      render(<RsvpList event={mockEvent} onBack={mockOnBack} />);

      await waitFor(() => {
        expect(screen.getByText('John Doe')).toBeInTheDocument();
      });

      const rows = screen.getAllByRole('row');
      // Default sort should be newest first: Bob (Feb 3), Jane (Feb 2), John (Feb 1)
      expect(rows[1]).toHaveTextContent('Bob Johnson');
      expect(rows[2]).toHaveTextContent('Jane Smith');
      expect(rows[3]).toHaveTextContent('John Doe');
    });
  });

  describe('Export Functionality', () => {
    it('should render export button when RSVPs exist', async () => {
      render(<RsvpList event={mockEvent} onBack={mockOnBack} />);

      await waitFor(() => {
        expect(screen.getByText('📊 Export CSV')).toBeInTheDocument();
      });
    });

    it('should trigger CSV download when export button is clicked', async () => {
      // Mock createElement and document methods for CSV download
      const mockLink = {
        setAttribute: vi.fn(),
        click: vi.fn(),
        style: { visibility: '' }
      };
      const mockCreateElement = vi.spyOn(document, 'createElement').mockReturnValue(mockLink as any);
      const mockAppendChild = vi.spyOn(document.body, 'appendChild').mockImplementation(() => mockLink as any);
      const mockRemoveChild = vi.spyOn(document.body, 'removeChild').mockImplementation(() => mockLink as any);

      render(<RsvpList event={mockEvent} onBack={mockOnBack} />);

      await waitFor(() => {
        expect(screen.getByText('📊 Export CSV')).toBeInTheDocument();
      });

      const exportButton = screen.getByText('📊 Export CSV');
      fireEvent.click(exportButton);

      expect(mockCreateElement).toHaveBeenCalledWith('a');
      expect(mockLink.setAttribute).toHaveBeenCalledWith('download', expect.stringContaining('Test Conference 2024-rsvps-'));
      expect(mockLink.click).toHaveBeenCalled();

      // Cleanup
      mockCreateElement.mockRestore();
      mockAppendChild.mockRestore();
      mockRemoveChild.mockRestore();
    });
  });

  describe('Empty State', () => {
    it('should show empty state when no RSVPs exist', async () => {
      mockRsvpService.getRsvpsByEvent.mockResolvedValue([]);

      render(<RsvpList event={mockEvent} onBack={mockOnBack} />);

      await waitFor(() => {
        expect(screen.getByText('No RSVPs Yet')).toBeInTheDocument();
        expect(screen.getByText('No one has RSVP\'d to this event yet. Share the RSVP link to start getting responses!')).toBeInTheDocument();
      });
    });

    it('should show RSVP link in empty state', async () => {
      mockRsvpService.getRsvpsByEvent.mockResolvedValue([]);

      render(<RsvpList event={mockEvent} onBack={mockOnBack} />);

      await waitFor(() => {
        expect(screen.getByText(/\/rsvp\/test-event-id/)).toBeInTheDocument();
      });
    });

    it('should show no results state when filters return no matches', async () => {
      render(<RsvpList event={mockEvent} onBack={mockOnBack} />);

      await waitFor(() => {
        expect(screen.getByText('John Doe')).toBeInTheDocument();
      });

      const searchInput = screen.getByPlaceholderText('Search by name or email...');
      fireEvent.change(searchInput, { target: { value: 'nonexistent' } });

      expect(screen.getByText('No matching RSVPs')).toBeInTheDocument();
      expect(screen.getByText('No RSVPs match your current search and filter criteria.')).toBeInTheDocument();
    });
  });

  describe('Navigation', () => {
    it('should call onBack when back button is clicked', async () => {
      render(<RsvpList event={mockEvent} onBack={mockOnBack} />);

      await waitFor(() => {
        expect(screen.getByText('← Back to Events')).toBeInTheDocument();
      });

      const backButton = screen.getByText('← Back to Events');
      fireEvent.click(backButton);

      expect(mockOnBack).toHaveBeenCalledTimes(1);
    });
  });
});