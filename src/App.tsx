import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/common/AuthProvider';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import RsvpPage from './pages/RsvpPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
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