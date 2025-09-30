import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

interface LoginButtonProps {
  className?: string;
  style?: React.CSSProperties;
}

export const LoginButton: React.FC<LoginButtonProps> = ({ className, style }) => {
  const { signIn, loading, error, clearError } = useAuthContext();

  const handleSignIn = async () => {
    try {
      clearError();
      await signIn();
    } catch (error) {
      // Error is already handled in the hook
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <button
        onClick={handleSignIn}
        disabled={loading}
        className={className}
        style={{
          backgroundColor: '#FCD34D',
          color: '#1F2937',
          border: 'none',
          borderRadius: '8px',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1,
          transition: 'all 0.2s ease',
          ...style
        }}
      >
        {loading ? 'Signing in...' : 'Sign in with Google'}
      </button>
      {error && (
        <div style={{
          marginTop: '10px',
          padding: '10px',
          backgroundColor: '#FEE2E2',
          color: '#DC2626',
          borderRadius: '6px',
          fontSize: '14px'
        }}>
          {error}
        </div>
      )}
    </div>
  );
};