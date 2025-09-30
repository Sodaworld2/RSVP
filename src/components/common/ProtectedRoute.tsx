import React, { ReactNode } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  fallback 
}) => {
  const { user, loading, isAuthorized } = useAuthContext();

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: '#6B46C1',
        color: 'white'
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  if (!user || !isAuthorized) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: '#6B46C1',
        color: 'white',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h2>Access Denied</h2>
        <p>You need to sign in with a sodaworld.tv email address to access this page.</p>
      </div>
    );
  }

  return <>{children}</>;
};