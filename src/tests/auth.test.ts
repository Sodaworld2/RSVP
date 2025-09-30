import { describe, it, expect, beforeEach, vi } from 'vitest';
import { User } from '../types';

// Mock Firebase Auth using vi.hoisted
const mockAuth = vi.hoisted(() => ({
  currentUser: null,
  setPersistence: vi.fn(),
  signInWithPopup: vi.fn(),
  signOut: vi.fn(),
  onAuthStateChanged: vi.fn(),
}));

const mockGoogleAuthProvider = vi.hoisted(() => vi.fn());
const mockSignInWithPopup = vi.hoisted(() => vi.fn());
const mockSignOut = vi.hoisted(() => vi.fn());
const mockOnAuthStateChanged = vi.hoisted(() => vi.fn());
const mockSetPersistence = vi.hoisted(() => vi.fn());

vi.mock('../firebaseConfig', () => ({
  auth: mockAuth,
}));

vi.mock('firebase/auth', () => ({
  GoogleAuthProvider: mockGoogleAuthProvider,
  signInWithPopup: mockSignInWithPopup,
  signOut: mockSignOut,
  onAuthStateChanged: mockOnAuthStateChanged,
  setPersistence: mockSetPersistence,
  browserLocalPersistence: 'local',
}));

// Import after mocks
import { authService } from '../services/auth';

describe('AuthService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockAuth.currentUser = null;
  });

  describe('Domain validation', () => {
    it('should authorize sodaworld.tv users', () => {
      const validUser: User = {
        uid: 'test-uid',
        email: 'test@sodaworld.tv',
        domain: 'sodaworld.tv',
        lastLogin: new Date()
      };

      expect(authService.isAuthorized(validUser)).toBe(true);
    });

    it('should not authorize non-sodaworld.tv users', () => {
      const invalidUser: User = {
        uid: 'test-uid-2',
        email: 'test@gmail.com',
        domain: 'gmail.com',
        lastLogin: new Date()
      };

      expect(authService.isAuthorized(invalidUser)).toBe(false);
    });

    it('should handle case insensitive domain validation', () => {
      const userWithCaps: User = {
        uid: 'test-uid-3',
        email: 'test@SODAWORLD.TV',
        domain: 'SODAWORLD.TV',
        lastLogin: new Date()
      };

      expect(authService.isAuthorized(userWithCaps)).toBe(true);
    });
  });

  describe('Current user state', () => {
    it('should return null when no user is signed in', () => {
      mockAuth.currentUser = null;
      expect(authService.getCurrentUser()).toBeNull();
    });

    it('should return mapped user when user is signed in', () => {
      const mockFirebaseUser = {
        uid: 'test-uid',
        email: 'test@sodaworld.tv',
        displayName: 'Test User',
        photoURL: 'https://example.com/photo.jpg'
      };

      mockAuth.currentUser = mockFirebaseUser;
      const user = authService.getCurrentUser();

      expect(user).toMatchObject({
        uid: 'test-uid',
        email: 'test@sodaworld.tv',
        displayName: 'Test User',
        photoURL: 'https://example.com/photo.jpg',
        domain: 'sodaworld.tv'
      });
      expect(user?.lastLogin).toBeInstanceOf(Date);
    });
  });

  describe('Sign in with Google', () => {
    it('should sign in authorized user successfully', async () => {
      const mockResult = {
        user: {
          uid: 'test-uid',
          email: 'test@sodaworld.tv',
          displayName: 'Test User'
        }
      };

      mockSignInWithPopup.mockResolvedValue(mockResult);
      mockGoogleAuthProvider.mockImplementation(() => ({
        addScope: vi.fn(),
        setCustomParameters: vi.fn()
      }));

      const user = await authService.signInWithGoogle();

      expect(user.email).toBe('test@sodaworld.tv');
      expect(user.domain).toBe('sodaworld.tv');
      expect(mockSignInWithPopup).toHaveBeenCalled();
    });

    it('should reject unauthorized user and sign out', async () => {
      const mockResult = {
        user: {
          uid: 'test-uid',
          email: 'test@gmail.com',
          displayName: 'Test User'
        }
      };

      mockSignInWithPopup.mockResolvedValue(mockResult);
      mockSignOut.mockResolvedValue(undefined);
      mockGoogleAuthProvider.mockImplementation(() => ({
        addScope: vi.fn(),
        setCustomParameters: vi.fn()
      }));

      await expect(authService.signInWithGoogle()).rejects.toThrow('Access denied. Only sodaworld.tv email addresses are allowed.');
      expect(mockSignOut).toHaveBeenCalled();
    });
  });

  describe('Sign out', () => {
    it('should call Firebase signOut', async () => {
      mockSignOut.mockResolvedValue(undefined);
      await authService.signOut();
      expect(mockSignOut).toHaveBeenCalled();
    });
  });

  describe('Authentication state listener', () => {
    it('should set up auth state listener', () => {
      const callback = vi.fn();
      const mockUnsubscribe = vi.fn();
      mockOnAuthStateChanged.mockReturnValue(mockUnsubscribe);

      const unsubscribe = authService.onAuthStateChanged(callback);

      expect(mockOnAuthStateChanged).toHaveBeenCalled();
      expect(unsubscribe).toBe(mockUnsubscribe);
    });

    it('should call callback with mapped user', () => {
      const callback = vi.fn();
      mockOnAuthStateChanged.mockImplementation((auth, cb) => {
        const mockFirebaseUser = {
          uid: 'test-uid',
          email: 'test@sodaworld.tv',
          displayName: 'Test User'
        };
        cb(mockFirebaseUser);
        return vi.fn();
      });

      authService.onAuthStateChanged(callback);

      expect(callback).toHaveBeenCalledWith(
        expect.objectContaining({
          uid: 'test-uid',
          email: 'test@sodaworld.tv',
          domain: 'sodaworld.tv'
        })
      );
    });

    it('should call callback with null when user signs out', () => {
      const callback = vi.fn();
      mockOnAuthStateChanged.mockImplementation((auth, cb) => {
        cb(null);
        return vi.fn();
      });

      authService.onAuthStateChanged(callback);

      expect(callback).toHaveBeenCalledWith(null);
    });
  });
});