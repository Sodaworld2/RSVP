import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/common/AuthProvider';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import RsvpPage from './pages/RsvpPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import { initializeDatabase } from './utils/database-init';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize database in the background without blocking the UI
    const initDb = async () => {
      try {
        await initializeDatabase();
        console.log('Database initialization completed in background');
      } catch (error) {
        console.error('Database initialization failed:', error);
        // Don't block the app, just log the error
      }
    };

    // Run initialization in background
    initDb();
  }, []);

  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public RSVP routes */}
            <Route path="/" element={<RsvpPage />} />
            <Route path="/rsvp/:eventId" element={<RsvpPage />} />
            
            {/* Authentication route */}
            <Route path="/login" element={<LoginPage />} />
            
            {/* Protected dashboard routes */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute fallback={<Navigate to="/login" replace />}>
                  <DashboardPage />
                </ProtectedRoute>
              } 
            />
            
            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;