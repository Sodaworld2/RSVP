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
  const [isDbInitialized, setIsDbInitialized] = useState(false);
  const [dbError, setDbError] = useState<string | null>(null);

  useEffect(() => {
    const initDb = async () => {
      try {
        await initializeDatabase();
        setIsDbInitialized(true);
      } catch (error) {
        console.error('Database initialization failed:', error);
        setDbError(error instanceof Error ? error.message : 'Database initialization failed');
        // Don't block the app, just log the error
        setIsDbInitialized(true);
      }
    };

    initDb();
  }, []);

  if (!isDbInitialized) {
    return (
      <div className="min-h-screen bg-[#8A2BE2] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Initializing Database</h2>
          <p className="text-gray-600">Setting up the multi-event system...</p>
          {dbError && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              <p className="text-sm">{dbError}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

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