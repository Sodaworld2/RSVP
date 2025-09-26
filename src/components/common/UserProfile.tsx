import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

interface UserProfileProps {
  showSignOut?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const UserProfile: React.FC<UserProfileProps> = ({ 
  showSignOut = true, 
  className, 
  style 
}) => {
  const { user, signOut, loading } = useAuthContext();

  if (!user) {
    return null;
  }

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  return (
    <div 
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        ...style
      }}
    >
      {user.photoURL && (
        <img
          src={user.photoURL}
          alt={user.displayName || 'User'}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ 
          fontSize: '14px', 
          fontWeight: '600', 
          color: 'white',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {user.displayName || 'User'}
        </div>
        <div style={{ 
          fontSize: '12px', 
          color: 'rgba(255, 255, 255, 0.8)',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {user.email}
        </div>
      </div>
      {showSignOut && (
        <button
          onClick={handleSignOut}
          disabled={loading}
          style={{
            backgroundColor: 'transparent',
            color: 'rgba(255, 255, 255, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '4px',
            padding: '4px 8px',
            fontSize: '12px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
            transition: 'all 0.2s ease'
          }}
        >
          {loading ? '...' : 'Sign Out'}
        </button>
      )}
    </div>
  );
};