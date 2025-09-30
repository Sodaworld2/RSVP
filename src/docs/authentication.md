# Firebase Authentication Implementation

## Overview

This implementation provides Firebase Authentication with Google Sign-In and domain restrictions for the multi-event dashboard system. Only users with `@sodaworld.tv` email addresses are authorized to access protected routes.

## Components

### 1. AuthService (`src/services/auth.ts`)

The core authentication service that handles:
- Google Sign-In with domain validation
- Session persistence using browser local storage
- User state management
- Domain authorization checks

**Key Features:**
- Automatic domain validation during sign-in
- Immediate sign-out if unauthorized domain
- Session persistence across browser sessions
- Custom Google provider configuration

### 2. Authentication Hooks

#### `useAuth` (`src/hooks/useAuth.ts`)
Primary hook for authentication state management:
- User state and loading states
- Sign-in/sign-out functions with error handling
- Authorization status checking
- Error state management

#### `useAuthContext` (`src/hooks/useAuthContext.ts`)
Context hook for global authentication state:
- Provides authentication context type
- Ensures proper context usage
- Type-safe context access

### 3. Authentication Components

#### `AuthProvider` (`src/components/common/AuthProvider.tsx`)
Context provider that wraps the application:
- Provides authentication state to all child components
- Uses the `useAuth` hook internally
- Should wrap the entire application

#### `ProtectedRoute` (`src/components/common/ProtectedRoute.tsx`)
Route protection component:
- Blocks access to unauthorized users
- Shows loading state during authentication check
- Provides customizable fallback UI
- Automatically handles authentication redirects

#### `LoginButton` (`src/components/common/LoginButton.tsx`)
Google Sign-In button component:
- Handles sign-in process
- Shows loading states
- Displays error messages
- Customizable styling

#### `UserProfile` (`src/components/common/UserProfile.tsx`)
User profile display component:
- Shows user avatar, name, and email
- Optional sign-out button
- Responsive design
- Customizable appearance

## Usage Examples

### 1. Basic App Setup

```tsx
import { AuthProvider } from './components/common/AuthProvider';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import { LoginButton } from './components/common/LoginButton';

function App() {
  return (
    <AuthProvider>
      <ProtectedRoute fallback={<LoginScreen />}>
        <Dashboard />
      </ProtectedRoute>
    </AuthProvider>
  );
}

const LoginScreen = () => (
  <div>
    <h1>Please Sign In</h1>
    <LoginButton />
  </div>
);
```

### 2. Using Authentication State

```tsx
import { useAuthContext } from './hooks/useAuthContext';

function MyComponent() {
  const { user, isAuthenticated, isAuthorized, signOut } = useAuthContext();

  if (!isAuthenticated) {
    return <div>Please sign in</div>;
  }

  if (!isAuthorized) {
    return <div>Access denied - sodaworld.tv email required</div>;
  }

  return (
    <div>
      <p>Welcome, {user.displayName}!</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
```

### 3. Manual Authentication Control

```tsx
import { useAuth } from './hooks/useAuth';

function CustomLoginComponent() {
  const { signIn, loading, error, clearError } = useAuth();

  const handleLogin = async () => {
    try {
      clearError();
      await signIn();
      // User is now signed in and authorized
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Signing in...' : 'Sign in with Google'}
      </button>
      {error && <div className="error">{error}</div>}
    </div>
  );
}
```

## Security Features

### Domain Restriction
- Only `@sodaworld.tv` email addresses are authorized
- Domain validation happens immediately after Google sign-in
- Unauthorized users are automatically signed out
- Case-insensitive domain checking

### Session Management
- Uses Firebase's built-in session persistence
- Sessions persist across browser restarts
- Automatic token refresh
- Secure session storage

### Error Handling
- Comprehensive error states in hooks
- User-friendly error messages
- Automatic error clearing
- Graceful fallbacks for failed operations

## Testing

### Manual Testing
Use the authentication demo component:

```tsx
import { AuthDemo } from './components/demo/AuthDemo';

// Replace your App component temporarily
function App() {
  return <AuthDemo />;
}
```

### Browser Console Testing
```javascript
// Run authentication tests in browser console
authTests.runAuthTests();

// Test individual functions
authTests.testDomainValidation();
authTests.testCurrentUser();
```

## Configuration Requirements

### Firebase Console Setup
1. Enable Google Sign-In provider in Firebase Authentication
2. Add your domain to authorized domains
3. Configure OAuth consent screen
4. Set up proper Firebase project configuration

### Environment Variables
Ensure your Firebase configuration is properly set in `src/firebaseConfig.ts`:

```typescript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  // ... other config
};
```

## Requirements Fulfilled

This implementation fulfills all requirements from task 3:

✅ **4.1** - Google authentication required for dashboard access  
✅ **4.2** - Email domain validation for sodaworld.tv  
✅ **4.3** - Access denial and unauthorized message for invalid domains  
✅ **4.4** - User session creation and management  
✅ **4.5** - Session clearing and redirect on logout  

## Next Steps

After implementing this authentication system:

1. **Routing Setup** - Implement React Router with protected routes
2. **Dashboard Integration** - Connect authentication to dashboard components
3. **Database Security** - Configure Firestore security rules
4. **User Management** - Add user profile management features
5. **Testing** - Add comprehensive unit and integration tests