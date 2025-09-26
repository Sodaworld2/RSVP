import { useState, useEffect } from 'react';
import { Event } from '../types';
import { eventService } from '../services/events';

export const useEvents = (userEmail?: string) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userEmail) {
      setLoading(false);
      return;
    }

    const fetchEvents = async () => {
      try {
        setLoading(true);
        const userEvents = await eventService.getEventsByUser(userEmail);
        setEvents(userEvents);
        setError(null);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [userEmail]);

  const createEvent = async (eventData: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const newEvent = await eventService.createEvent(eventData);
      setEvents(prev => [newEvent, ...prev]);
      return newEvent;
    } catch (err) {
      console.error('Error creating event:', err);
      throw err;
    }
  };

  const updateEvent = async (id: string, updates: Partial<Event>) => {
    try {
      await eventService.updateEvent(id, updates);
      setEvents(prev => prev.map(event => 
        event.id === id ? { ...event, ...updates } : event
      ));
    } catch (err) {
      console.error('Error updating event:', err);
      throw err;
    }
  };

  const deleteEvent = async (id: string) => {
    try {
      await eventService.deleteEvent(id);
      setEvents(prev => prev.filter(event => event.id !== id));
    } catch (err) {
      console.error('Error deleting event:', err);
      throw err;
    }
  };

  return {
    events,
    loading,
    error,
    createEvent,
    updateEvent,
    deleteEvent,
  };
};