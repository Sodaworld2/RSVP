import React from 'react';
import Flyer from '../common/Flyer';

interface SplashPageProps {
  onContinue: () => void;
}

const SplashPage: React.FC<SplashPageProps> = ({ onContinue }) => {
  return (
    <div 
        className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-[#8A2BE2] text-white cursor-pointer" 
        onClick={onContinue}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && onContinue()}
        aria-label="Continue to RSVP form"
    >
      <main className="w-full max-w-md mx-auto flex flex-col items-center">
        <div className="w-full max-w-xs sm:max-w-sm transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Flyer />
        </div>
        <p className="mt-8 text-2xl" style={{fontFamily: "'Fredoka One', cursive"}}>Click anywhere to RSVP</p>
      </main>
      <footer className="absolute bottom-4 text-center text-white text-opacity-70 text-sm">
        <p>Created with fun by a World-Class React Engineer</p>
      </footer>
    </div>
  );
};

export default SplashPage;