import React from 'react';
import { AuthProvider } from '../common/AuthProvider';
import { LoginButton } from '../common/LoginButton';
import { UserProfile } from '../common/UserProfile';
import { ProtectedRoute } from '../common/ProtectedRoute';
import { useAuthContext } from '../../hooks/useAuthContext';

const AuthenticatedContent: React.FC = () => {
  const { user, isAuthorized } = useAuthContext();

  return (
    <div style={{
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '12px',
      margin: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ color: '#6B46C1', marginBottom: '16px' }}>
        🎉 Authentication Successful!
      </h2>
      <p style={{ marginBottom: '16px' }}>
        Welcome to the protected area. You are signed in with a valid sodaworld.tv email.
      </p>
      <div style={{
        backgroundColor: '#F3F4F6',
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '16px'
      }}>
        <strong>User Details:</strong>
        <br />
        <strong>Email:</strong> {user?.email}
        <br />
        <strong>Domain:</strong> {user?.domain}
        <br />
        <strong>Authorized:</strong> {isAuthorized ? '✅ Yes' : '❌ No'}
      </div>
    </div>
  );
};

const LoginScreen: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#6B46C1',
      color: 'white',
      padding: '20px'
    }}>
      <h1 style={{ marginBottom: '20px', fontSize: '2rem' }}>
        🔐 Authentication Demo
      </h1>
      <p style={{ marginBottom: '30px', textAlign: 'center', maxWidth: '400px' }}>
        This demo tests the Firebase Authentication with Google and domain restrictions.
        Only sodaworld.tv email addresses are allowed.
      </p>
      <LoginButton />
    </div>
  );
};

export const AuthDemo: React.FC = () => {
  return (
    <AuthProvider>
      <div style={{ minHeight: '100vh', backgroundColor: '#6B46C1' }}>
        {/* Header with user profile if authenticated */}
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000
        }}>
          <UserProfile />
        </div>

        {/* Main content */}
        <ProtectedRoute fallback={<LoginScreen />}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '20px'
          }}>
            <AuthenticatedContent />
          </div>
        </ProtectedRoute>
      </div>
    </AuthProvider>
  );
};