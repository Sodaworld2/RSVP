import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

interface UserProfileProps {
  showSignOut?: boolean;
  className?: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({ 
  showSignOut = true, 
  className = '' 
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
    <div className={`flex items-center gap-3 p-2 bg-white/10 rounded-lg backdrop-blur-sm ${className}`}>
      {user.photoURL && (
        <img
          src={user.photoURL}
          alt={user.displayName || 'User'}
          className="w-8 h-8 rounded-full object-cover border-2 border-white/20"
        />
      )}
      <div className="flex-1 min-w-0 hidden sm:block">
        <div className="text-sm font-semibold text-white truncate">
          {user.displayName || 'User'}
        </div>
        <div className="text-xs text-white/80 truncate">
          {user.email}
        </div>
      </div>
      {showSignOut && (
        <button
          onClick={handleSignOut}
          disabled={loading}
          className="bg-transparent text-white/80 border border-white/30 rounded px-2 py-1 text-xs hover:bg-white/10 hover:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? '...' : 'Sign Out'}
        </button>
      )}
    </div>
  );
};