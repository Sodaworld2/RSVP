import React from 'react';
import Flyer from '../common/Flyer';
import { Event } from '../../types';

interface SplashPageProps {
  onContinue: () => void;
  event?: Event | null;
}

const SplashPage: React.FC<SplashPageProps> = ({ onContinue, event }) => {
  return (
    <div 
        className="min-h-screen w-full flex flex-col bg-[#8A2BE2] text-white cursor-pointer" 
        onClick={onContinue}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && onContinue()}
        aria-label="Continue to RSVP form"
    >
      {/* Main content area that grows to fill available space */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto flex flex-col items-center">
          <div className="w-full max-w-xs sm:max-w-sm transform hover:scale-105 transition-transform duration-300 ease-in-out">
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
          
          {event && (
            <div className="text-center mt-6 mb-4">
              <h1 className="text-3xl font-bold mb-2" style={{fontFamily: "'Fredoka One', cursive"}}>
                {event.title}
              </h1>
              <p className="text-lg text-white text-opacity-90">
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
                <p className="text-white text-opacity-80 mt-2">{event.description}</p>
              )}
            </div>
          )}
          
          <p className="mt-8 text-2xl" style={{fontFamily: "'Fredoka One', cursive"}}>Click anywhere to RSVP</p>
        </div>
      </main>
      
      {/* Footer that stays at bottom but doesn't overlap */}
      <footer className="text-center text-white text-opacity-70 text-sm p-4 pb-6">
        <p>Created with fun by a World-Class React Engineer</p>
      </footer>
    </div>
  );
};

export default SplashPage;