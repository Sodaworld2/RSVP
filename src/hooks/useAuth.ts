import { useState, useEffect } from 'react';
import { User } from '../types';
import { authService } from '../services/auth';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signIn = async () => {
    try {
      const user = await authService.signInWithGoogle();
      if (!authService.isAuthorized(user)) {
        await authService.signOut();
        throw new Error('Unauthorized domain. Only sodaworld.tv emails are allowed.');
      }
      return user;
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await authService.signOut();
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  };

  return {
    user,
    loading,
    signIn,
    signOut,
    isAuthorized: user ? authService.isAuthorized(user) : false,
  };
};