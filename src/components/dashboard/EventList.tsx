import React, { useState } from 'react';
import { Event } from '../../types';
import EventCard from './EventCard';
import ReminderPanel from './ReminderPanel';

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
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-800">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-bold">Your Events</h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              {events.length === 0 
                ? 'No events created yet' 
                : `${events.length} event${events.length === 1 ? '' : 's'} created`
              }
            </p>
          </div>
          <button
            onClick={onCreateEvent}
            className="bg-[#FFD700] hover:bg-[#FFC700] text-black font-semibold py-3 px-4 sm:px-6 rounded-2xl transition-colors text-sm sm:text-base whitespace-nowrap"
          >
            Create New Event
          </button>
        </div>
      </div>

      {/* Reminder Management Panel */}
      <ReminderPanel />

      {/* Events Grid */}
      {events.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-800 text-center">
          <div className="py-8 sm:py-12">
            <div className="text-4xl sm:text-6xl mb-4">📅</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">No Events Yet</h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-md mx-auto">
              Get started by creating your first event. You'll be able to manage RSVPs and track attendance.
            </p>
            <button
              onClick={onCreateEvent}
              className="bg-[#FFD700] hover:bg-[#FFC700] text-black font-semibold py-3 px-4 sm:px-6 rounded-2xl transition-colors text-sm sm:text-base"
            >
              Create Your First Event
            </button>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 sm:gap-6" style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
        }}>
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