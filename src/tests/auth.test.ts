// This is a manual test file to verify authentication functionality
// Run this in the browser console to test the auth service

import { authService } from '../services/auth';
import { User } from '../types';

// Test 1: Domain validation
export const testDomainValidation = () => {
  console.log('🧪 Testing domain validation...');
  
  const validUser: User = {
    uid: 'test-uid',
    email: 'test@sodaworld.tv',
    domain: 'sodaworld.tv',
    lastLogin: new Date()
  };
  
  const invalidUser: User = {
    uid: 'test-uid-2',
    email: 'test@gmail.com',
    domain: 'gmail.com',
    lastLogin: new Date()
  };
  
  console.log('✅ Valid user authorized:', authService.isAuthorized(validUser)); // Should be true
  console.log('❌ Invalid user authorized:', authService.isAuthorized(invalidUser)); // Should be false
};

// Test 2: Current user state
export const testCurrentUser = () => {
  console.log('🧪 Testing current user state...');
  const currentUser = authService.getCurrentUser();
  console.log('Current user:', currentUser);
  
  if (currentUser) {
    console.log('User is signed in:', currentUser.email);
    console.log('User is authorized:', authService.isAuthorized(currentUser));
  } else {
    console.log('No user is currently signed in');
  }
};

// Test 3: Authentication state listener
export const testAuthStateListener = () => {
  console.log('🧪 Testing auth state listener...');
  
  const unsubscribe = authService.onAuthStateChanged((user) => {
    if (user) {
      console.log('🔐 User signed in:', user.email);
      console.log('🔑 User authorized:', authService.isAuthorized(user));
    } else {
      console.log('🚪 User signed out');
    }
  });
  
  // Return unsubscribe function for cleanup
  return unsubscribe;
};

// Run all tests
export const runAuthTests = () => {
  console.log('🚀 Running authentication tests...');
  testDomainValidation();
  testCurrentUser();
  const unsubscribe = testAuthStateListener();
  
  console.log('✅ Tests completed. Auth state listener is active.');
  console.log('💡 Try signing in/out to see the listener in action.');
  console.log('🧹 Call the returned unsubscribe function to stop listening.');
  
  return unsubscribe;
};

// Export for browser console testing
(window as any).authTests = {
  testDomainValidation,
  testCurrentUser,
  testAuthStateListener,
  runAuthTests
};