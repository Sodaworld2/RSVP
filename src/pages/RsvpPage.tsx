import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RsvpForm from '../components/rsvp/RsvpForm';
import Game from '../components/games/Game';
import Flyer from '../components/common/Flyer';
import SplashPage from '../components/rsvp/SplashPage';
import { Event } from '../types';
import { eventService } from '../services/events';

const RsvpPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadEvent = async () => {
      if (!eventId) {
        // For backward compatibility, allow access without eventId (default event)
        setLoading(false);
        return;
      }

      try {
        const eventData = await eventService.getEventById(eventId);
        if (!eventData) {
          setError('Event not found. Please check the URL and try again.');
        } else if (!eventData.isActive) {
          setError('This event is no longer active.');
        } else if (new Date(eventData.datetime) < new Date()) {
          setError('RSVPs for this event are now closed.');
        } else {
          setEvent(eventData);
        }
      } catch (err) {
        console.error('Error loading event:', err);
        setError('Failed to load event details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadEvent();
  }, [eventId]);

  const handleContinueToForm = useCallback(() => {
    setShowForm(true);
  }, []);

  const handleRsvpSubmit = useCallback(() => {
    setIsSubmitted(true);
  }, []);

  const handleBackToForm = useCallback(() => {
    setIsSubmitted(false);
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen w-full flex flex-col bg-[#8A2BE2] text-slate-800">
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading event details...</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen w-full flex flex-col bg-[#8A2BE2] text-slate-800">
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8">
              <div className="text-center">
                <div className="text-red-500 text-6xl mb-4">⚠️</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops!</h2>
                <p className="text-gray-600 mb-6">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-bold py-2 px-6 rounded-xl transition-colors duration-300"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </main>
        <footer className="text-center text-white text-opacity-70 text-sm p-4 pb-6">
          <p>Created with fun by a World-Class React Engineer</p>
        </footer>
      </div>
    );
  }

  if (!showForm) {
    return <SplashPage onContinue={handleContinueToForm} event={event} />;
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#8A2BE2] text-slate-800">
      {/* Main content area that grows to fill available space */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500">
            <div className="bg-yellow-400 p-6">
               <div className="w-48 h-48 mx-auto">
                  {event?.logoUrl ? (
                    <img 
                      src={event.logoUrl} 
                      alt={event.title}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  ) : (
                    <Flyer />
                  )}
               </div>
            </div>

            <div className="p-8">
              {event && (
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h1>
                  <p className="text-gray-600">
                    {new Date(event.datetime).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: '2-digit',
                    })}
                  </p>
                  {event.description && (
                    <p className="text-gray-600 mt-2">{event.description}</p>
                  )}
                </div>
              )}
              
              {isSubmitted ? (
                <Game onPlayAgain={handleBackToForm} gameType={event?.gameType} />
              ) : (
                <RsvpForm onSubmit={handleRsvpSubmit} eventId={eventId} />
              )}
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer that stays at bottom but doesn't overlap */}
      <footer className="text-center text-white text-opacity-70 text-sm p-4 pb-6">
        <p>Created with fun by a World-Class React Engineer</p>
      </footer>
    </div>
  );
};

export default RsvpPage;