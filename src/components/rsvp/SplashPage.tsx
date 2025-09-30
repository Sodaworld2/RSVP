import React from 'react';
import Flyer from '../common/Flyer';

interface SplashPageProps {
  onContinue: () => void;
}

const SplashPage: React.FC<SplashPageProps> = ({ onContinue }) => {
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
              <Flyer />
          </div>
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