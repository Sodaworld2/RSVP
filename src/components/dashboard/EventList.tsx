import React, { useState } from 'react';
import { Event } from '../../types';
import EventCard from './EventCard';

interface EventListProps {
  events: Event[];
  loading: boolean;
  onEditEvent: (event: Event) => void;
  onDeleteEvent: (eventId: string) => void;
  onCreateEvent: () => void;
}

const EventList: React.FC<EventListProps> = ({
  events,
  loading,
  onEditEvent,
  onDeleteEvent,
  onCreateEvent,
}) => {
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const handleDeleteClick = (eventId: string) => {
    setDeleteConfirm(eventId);
  };

  const handleDeleteConfirm = (eventId: string) => {
    onDeleteEvent(eventId);
    setDeleteConfirm(null);
  };

  const handleDeleteCancel = () => {
    setDeleteConfirm(null);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 text-slate-800">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8A2BE2]"></div>
          <span className="ml-4 text-lg">Loading events...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Create Button */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 text-slate-800">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Your Events</h2>
            <p className="text-gray-600 mt-1">
              {events.length === 0 
                ? 'No events created yet' 
                : `${events.length} event${events.length === 1 ? '' : 's'} created`
              }
            </p>
          </div>
          <button
            onClick={onCreateEvent}
            className="bg-[#FFD700] hover:bg-[#FFC700] text-black font-semibold py-3 px-6 rounded-2xl transition-colors"
          >
            Create New Event
          </button>
        </div>
      </div>

      {/* Events Grid */}
      {events.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-slate-800 text-center">
          <div className="py-12">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-2">No Events Yet</h3>
            <p className="text-gray-600 mb-6">
              Get started by creating your first event. You'll be able to manage RSVPs and track attendance.
            </p>
            <button
              onClick={onCreateEvent}
              className="bg-[#FFD700] hover:bg-[#FFC700] text-black font-semibold py-3 px-6 rounded-2xl transition-colors"
            >
              Create Your First Event
            </button>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onEdit={() => onEditEvent(event)}
              onDelete={() => handleDeleteClick(event.id)}
              showDeleteConfirm={deleteConfirm === event.id}
              onDeleteConfirm={() => handleDeleteConfirm(event.id)}
              onDeleteCancel={handleDeleteCancel}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;