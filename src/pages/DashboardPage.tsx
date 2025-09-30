import React, { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useEvents } from '../hooks/useEvents';
import { UserProfile } from '../components/common/UserProfile';
import EventList from '../components/dashboard/EventList';
import EventForm from '../components/dashboard/EventForm';
import { Event } from '../types';

type ViewMode = 'list' | 'create' | 'edit';

const DashboardPage: React.FC = () => {
  const { user } = useAuthContext();
  const { events, loading, createEvent, updateEvent, deleteEvent } = useEvents(user?.email);
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const handleCreateEvent = () => {
    setEditingEvent(null);
    setViewMode('create');
  };

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event);
    setViewMode('edit');
  };

  const handleDeleteEvent = async (eventId: string) => {
    try {
      await deleteEvent(eventId);
    } catch (error) {
      console.error('Failed to delete event:', error);
      // TODO: Show error toast/notification
    }
  };

  const handleFormSubmit = async (event: Event) => {
    try {
      if (editingEvent) {
        await updateEvent(event.id, event);
      } else {
        await createEvent(event);
      }
      setViewMode('list');
      setEditingEvent(null);
    } catch (error) {
      console.error('Failed to save event:', error);
      // Error handling is done in the form component
    }
  };

  const handleFormCancel = () => {
    setViewMode('list');
    setEditingEvent(null);
  };

  return (
    <div className="min-h-screen bg-[#8A2BE2] text-white">
      <header className="bg-[#6B46C1] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold">Event Dashboard</h1>
              {viewMode !== 'list' && (
                <button
                  onClick={() => setViewMode('list')}
                  className="text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg transition-colors"
                >
                  ← Back to Events
                </button>
              )}
            </div>
            <UserProfile />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {viewMode === 'list' && (
          <EventList
            events={events}
            loading={loading}
            onCreateEvent={handleCreateEvent}
            onEditEvent={handleEditEvent}
            onDeleteEvent={handleDeleteEvent}
          />
        )}

        {(viewMode === 'create' || viewMode === 'edit') && user && (
          <EventForm
            event={editingEvent || undefined}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
            userEmail={user.email}
          />
        )}
      </main>
    </div>
  );
};

export default DashboardPage;