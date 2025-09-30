# Database Indexes Configuration

This document outlines the required Firestore indexes for optimal query performance in the multi-event dashboard system.

## Required Indexes

### Events Collection (`events`)

#### Compound Indexes

1. **User Events Query Index**
   - Collection: `events`
   - Fields: 
     - `createdBy` (Ascending)
     - `isActive` (Ascending) 
     - `datetime` (Descending)
   - Purpose: Efficiently query events created by a specific user, filtered by active status, ordered by date

2. **Public Events Query Index**
   - Collection: `events`
   - Fields:
     - `isActive` (Ascending)
     - `datetime` (Ascending)
   - Purpose: Query active events for public display, ordered chronologically

#### Single Field Indexes

1. **createdBy** - Ascending (for user-specific queries)
2. **datetime** - Ascending (for date-based filtering)
3. **isActive** - Ascending (for active/inactive filtering)

### RSVPs Collection (`rsvps`)

#### Compound Indexes

1. **Event RSVPs Query Index**
   - Collection: `rsvps`
   - Fields:
     - `eventId` (Ascending)
     - `submittedAt` (Descending)
   - Purpose: Get all RSVPs for a specific event, ordered by submission time

2. **Reminder Processing Index**
   - Collection: `rsvps`
   - Fields:
     - `eventId` (Ascending)
     - `reminderSent` (Ascending)
   - Purpose: Efficiently find RSVPs that need reminder emails

3. **User RSVP History Index**
   - Collection: `rsvps`
   - Fields:
     - `email` (Ascending)
     - `submittedAt` (Descending)
   - Purpose: Get RSVP history for a specific user

#### Single Field Indexes

1. **eventId** - Ascending (for event-specific queries)
2. **email** - Ascending (for user-specific queries)
3. **submittedAt** - Descending (for chronological ordering)
4. **reminderSent** - Ascending (for reminder processing)

### Users Collection (`users`)

#### Compound Indexes

1. **Domain Users Index**
   - Collection: `users`
   - Fields:
     - `domain` (Ascending)
     - `lastLogin` (Descending)
   - Purpose: Query users by domain with recent activity first

#### Single Field Indexes

1. **email** - Ascending (for user lookup)
2. **domain** - Ascending (for domain-based filtering)
3. **lastLogin** - Descending (for activity tracking)

## Index Creation Instructions

### Firebase Console Method

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Navigate to Firestore Database
4. Click on "Indexes" tab
5. Click "Create Index" for each compound index listed above
6. Single field indexes are usually created automatically

### Firebase CLI Method

Create a `firestore.indexes.json` file in your project root:

```json
{
  "indexes": [
    {
      "collectionGroup": "events",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "createdBy", "order": "ASCENDING" },
        { "fieldPath": "isActive", "order": "ASCENDING" },
        { "fieldPath": "datetime", "order": "DESCENDING" }
      ]
    },
    {
      "collectionGroup": "events",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "isActive", "order": "ASCENDING" },
        { "fieldPath": "datetime", "order": "ASCENDING" }
      ]
    },
    {
      "collectionGroup": "rsvps",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "eventId", "order": "ASCENDING" },
        { "fieldPath": "submittedAt", "order": "DESCENDING" }
      ]
    },
    {
      "collectionGroup": "rsvps",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "eventId", "order": "ASCENDING" },
        { "fieldPath": "reminderSent", "order": "ASCENDING" }
      ]
    },
    {
      "collectionGroup": "rsvps",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "email", "order": "ASCENDING" },
        { "fieldPath": "submittedAt", "order": "DESCENDING" }
      ]
    },
    {
      "collectionGroup": "users",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "domain", "order": "ASCENDING" },
        { "fieldPath": "lastLogin", "order": "DESCENDING" }
      ]
    }
  ],
  "fieldOverrides": []
}
```

Then deploy with: `firebase deploy --only firestore:indexes`

## Query Patterns Supported

### Events Queries
- Get all events by user: `where('createdBy', '==', email).where('isActive', '==', true).orderBy('datetime', 'desc')`
- Get upcoming public events: `where('isActive', '==', true).where('datetime', '>', now).orderBy('datetime', 'asc')`

### RSVPs Queries
- Get event RSVPs: `where('eventId', '==', eventId).orderBy('submittedAt', 'desc')`
- Get pending reminders: `where('eventId', '==', eventId).where('reminderSent', '==', false)`
- Get user RSVP history: `where('email', '==', email).orderBy('submittedAt', 'desc')`

### Users Queries
- Get domain users: `where('domain', '==', 'sodaworld.tv').orderBy('lastLogin', 'desc')`
- Find user by email: `where('email', '==', email)`

## Performance Considerations

1. **Index Size**: Each compound index increases storage costs
2. **Write Performance**: More indexes mean slower writes
3. **Query Optimization**: Use the most selective field first in compound indexes
4. **Pagination**: Use cursor-based pagination for large result sets

## Monitoring

Monitor index usage in Firebase Console:
1. Go to Firestore Database
2. Click on "Usage" tab
3. Review index usage statistics
4. Remove unused indexes to optimize costs

## Security Rules Considerations

Ensure your security rules work with these indexes:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Events: Users can read all active events, but only manage their own
    match /events/{eventId} {
      allow read: if resource.data.isActive == true;
      allow create, update, delete: if request.auth != null 
        && request.auth.token.email.matches('.*@sodaworld\\.tv$')
        && resource.data.createdBy == request.auth.token.email;
    }
    
    // RSVPs: Public can create, creators can read their event RSVPs
    match /rsvps/{rsvpId} {
      allow create: if request.auth != null || true; // Allow anonymous RSVPs
      allow read: if request.auth != null 
        && request.auth.token.email.matches('.*@sodaworld\\.tv$');
    }
    
    // Users: Users can only access their own data
    match /users/{userId} {
      allow read, write: if request.auth != null 
        && request.auth.uid == userId
        && request.auth.token.email.matches('.*@sodaworld\\.tv$');
    }
  }
}
```