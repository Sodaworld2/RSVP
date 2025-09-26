import React, { useState } from 'react';
import './App.css';
import SplashPage from './components/SplashPage';
import RsvpForm from './components/RsvpForm';
import RainbowHopGame from './components/RainbowHopGame';

type Page = 'splash' | 'rsvp' | 'game';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('splash');

  const handleEnter = () => {
    setCurrentPage('rsvp');
  };

  const handleRsvpSuccess = () => {
    setCurrentPage('game');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'splash':
        return <SplashPage onEnter={handleEnter} />;
      case 'rsvp':
        return <RsvpForm onSuccess={handleRsvpSuccess} />;
      case 'game':
        return <RainbowHopGame />;
      default:
        return <SplashPage onEnter={handleEnter} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
