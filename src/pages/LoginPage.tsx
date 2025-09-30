import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { LoginButton } from '../components/common/LoginButton';

const LoginPage: React.FC = () => {
  const { user, loading, isAuthorized } = useAuthContext();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#8A2BE2] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // If user is authenticated and authorized, redirect to dashboard
  if (user && isAuthorized) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-[#8A2BE2] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">
          Event Dashboard Login
        </h1>
        
        <p className="text-gray-600 mb-8">
          Sign in with your sodaworld.tv Google account to access the event management dashboard.
        </p>

        <LoginButton />

        {user && !isAuthorized && (
          <div className="mt-6 p-4 bg-red-100 rounded-lg">
            <p className="text-red-800 text-sm">
              Access denied. You must use a sodaworld.tv email address to access the dashboard.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;