import React, { ReactNode, useEffect, useState } from 'react';
import { AuthContext, AuthContextType } from '../../hooks/useAuthContext';
import { authService } from '../../services/auth';
import { User } from '../../types';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signIn = async (): Promise<User> => {
    try {
      setError(null);
      setLoading(true);
      const user = await authService.signInWithGoogle();
      setUser(user);
      return user;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Authentication failed';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async (): Promise<void> => {
    try {
      setError(null);
      await authService.signOut();
      setUser(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Sign out failed';
      setError(errorMessage);
      throw err;
    }
  };

  const clearError = (): void => {
    setError(null);
  };

  const isAuthorized = user ? authService.isAuthorized(user) : false;
  const isAuthenticated = user !== null;

  const contextValue: AuthContextType = {
    user,
    loading,
    error,
    signIn,
    signOut,
    clearError,
    isAuthorized,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};