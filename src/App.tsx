import React, { useState, useCallback } from 'react';
import RsvpForm from './components/rsvp/RsvpForm';
import Game from './components/games/Game';
import Flyer from './components/common/Flyer';
import SplashPage from './components/rsvp/SplashPage';

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContinueToForm = useCallback(() => {
    setShowForm(true);
  }, []);

  const handleRsvpSubmit = useCallback(() => {
    setIsSubmitted(true);
  }, []);

  const handleBackToForm = useCallback(() => {
    setIsSubmitted(false);
  }, []);


  if (!showForm) {
    return <SplashPage onContinue={handleContinueToForm} />;
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-[#8A2BE2] text-slate-800">
      <main className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500">
          <div className="bg-yellow-400 p-6">
             <div className="w-48 h-48 mx-auto">
                <Flyer />
             </div>
          </div>

          <div className="p-8">
            {isSubmitted ? (
              <Game onPlayAgain={handleBackToForm} />
            ) : (
              <RsvpForm onSubmit={handleRsvpSubmit} />
            )}
          </div>
        </div>
        <footer className="text-center text-white text-opacity-70 mt-4 text-sm">
          <p>Created with fun by a World-Class React Engineer</p>
        </footer>
      </main>
    </div>
  );
};

export default App;