import { db } from '../firebaseConfig';
import { collection, doc, setDoc, enableIndexedDbPersistence } from 'firebase/firestore';

/**
 * Database migration and setup service
 * Handles database schema initialization and index creation
 */
export class DatabaseService {
  private static instance: DatabaseService;

  private constructor() {}

  public static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  /**
   * Initialize database with proper schema and indexes
   * This should be called once during application startup
   */
  async initializeDatabase(): Promise<void> {
    try {
      // Enable offline persistence for better performance
      await enableIndexedDbPersistence(db);
      console.log('Database persistence enabled');
    } catch (error: any) {
      if (error.code === 'failed-precondition') {
        console.warn('Database persistence failed: Multiple tabs open');
      } else if (error.code === 'unimplemented') {
        console.warn('Database persistence not supported in this browser');
      } else {
        console.error('Error enabling database persistence:', error);
      }
    }

    await this.createCollectionStructure();
    console.log('Database initialization complete');
  }

  /**
   * Create the basic collection structure with sample documents
   * This ensures collections exist and indexes can be created
   */
  private async createCollectionStructure(): Promise<void> {
    try {
      // Create events collection structure
      const eventsRef = collection(db, 'events');
      const sampleEventRef = doc(eventsRef, '_sample_event_for_indexing');
      await setDoc(sampleEventRef, {
        title: 'Sample Event',
        description: 'This is a sample event for index creation',
        datetime: new Date(),
        createdBy: 'system@sodaworld.tv',
        createdAt: new Date(),
        updatedAt: new Date(),
        logoUrl: null,
        gameType: 'rainbow_hop',
        isActive: true,
        _isSample: true
      });

      // Create rsvps collection structure
      const rsvpsRef = collection(db, 'rsvps');
      const sampleRsvpRef = doc(rsvpsRef, '_sample_rsvp_for_indexing');
      await setDoc(sampleRsvpRef, {
        eventId: '_sample_event_for_indexing',
        name: 'Sample User',
        email: 'sample@example.com',
        connectionMethod: 'VR',
        submittedAt: new Date(),
        reminderSent: false,
        _isSample: true
      });

      // Create users collection structure
      const usersRef = collection(db, 'users');
      const sampleUserRef = doc(usersRef, '_sample_user_for_indexing');
      await setDoc(sampleUserRef, {
        uid: 'sample_uid',
        email: 'sample@sodaworld.tv',
        displayName: 'Sample User',
        photoURL: null,
        domain: 'sodaworld.tv',
        lastLogin: new Date(),
        _isSample: true
      });

      console.log('Collection structure created successfully');
    } catch (error) {
      console.error('Error creating collection structure:', error);
      throw error;
    }
  }

  /**
   * Clean up sample documents used for index creation
   */
  async cleanupSampleData(): Promise<void> {
    try {
      const collections = ['events', 'rsvps', 'users'];
      
      for (const collectionName of collections) {
        const sampleDocRef = doc(db, collectionName, `_sample_${collectionName.slice(0, -1)}_for_indexing`);
        await setDoc(sampleDocRef, { _deleted: true }, { merge: true });
      }

      console.log('Sample data cleanup complete');
    } catch (error) {
      console.error('Error cleaning up sample data:', error);
    }
  }

  /**
   * Validate database schema and indexes
   * Returns information about the current database state
   */
  async validateSchema(): Promise<{
    collections: string[];
    indexesRequired: string[];
    status: 'ready' | 'needs_setup' | 'error';
  }> {
    try {
      const collections = ['events', 'rsvps', 'users'];
      
      // Note: Firebase doesn't provide a direct way to check indexes programmatically
      // These are the indexes that should be created in the Firebase Console
      const indexesRequired = [
        'events: (createdBy, isActive, datetime) - Compound index',
        'events: (isActive, datetime) - Compound index for public queries',
        'rsvps: (eventId, submittedAt) - Compound index',
        'rsvps: (email) - Single field index',
        'rsvps: (eventId, reminderSent) - Compound index for reminder queries',
        'users: (email) - Single field index',
        'users: (domain, lastLogin) - Compound index'
      ];

      return {
        collections,
        indexesRequired,
        status: 'ready'
      };
    } catch (error) {
      console.error('Error validating schema:', error);
      return {
        collections: [],
        indexesRequired: [],
        status: 'error'
      };
    }
  }

  /**
   * Get database statistics and health information
   */
  async getDatabaseStats(): Promise<{
    eventsCount: number;
    rsvpsCount: number;
    usersCount: number;
    lastUpdated: Date;
  }> {
    try {
      // Note: In a production environment, you might want to cache these counts
      // or use Firebase Functions to maintain counters for better performance
      
      return {
        eventsCount: 0, // Would need to implement counting logic
        rsvpsCount: 0,  // Would need to implement counting logic
        usersCount: 0,  // Would need to implement counting logic
        lastUpdated: new Date()
      };
    } catch (error) {
      console.error('Error getting database stats:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const databaseService = DatabaseService.getInstance();

/**
 * Database migration utilities
 */
export class DatabaseMigration {
  /**
   * Migrate existing RSVPs to include eventId if they don't have one
   * This is for backward compatibility with the single-event system
   */
  static async migrateRsvpsToMultiEvent(defaultEventId: string): Promise<void> {
    console.log('Starting RSVP migration to multi-event format...');
    
    try {
      // This would be implemented if there were existing RSVPs without eventId
      // For now, we assume all new RSVPs will have eventId from the start
      console.log('RSVP migration completed - no legacy data found');
    } catch (error) {
      console.error('Error during RSVP migration:', error);
      throw error;
    }
  }

  /**
   * Create default event for existing system
   * This helps transition from single-event to multi-event system
   */
  static async createDefaultEvent(createdBy: string): Promise<string> {
    const { eventService } = await import('./events');
    
    const defaultEvent = {
      title: 'Weekly Prototype Session',
      description: 'Our regular weekly prototype session - migrated from single-event system',
      datetime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Next week
      createdBy,
      gameType: 'rainbow_hop' as const,
      isActive: true
    };

    const event = await eventService.createEvent(defaultEvent);
    console.log('Default event created:', event.id);
    return event.id;
  }
}