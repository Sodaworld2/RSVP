import { databaseService } from '../services/database';

/**
 * Initialize the database when the application starts
 * This should be called once during app initialization
 */
export async function initializeDatabase(): Promise<void> {
  try {
    console.log('Initializing database in background...');
    
    // Only do essential initialization that doesn't block the UI
    await databaseService.initializeDatabase();
    
    // Do validation asynchronously without blocking
    setTimeout(async () => {
      try {
        const validation = await databaseService.validateSchema();
        console.log('Database validation:', validation);
        
        if (validation.status === 'ready') {
          console.log('Database is ready for use');
        } else {
          console.warn('Database needs setup. Please check the configuration.');
        }
      } catch (error) {
        console.warn('Database validation failed:', error);
      }
    }, 100);
    
  } catch (error) {
    console.error('Failed to initialize database:', error);
    // Don't throw - let the app continue to work
  }
}

/**
 * Clean up any sample data created during initialization
 * This can be called after the database is properly set up
 */
export async function cleanupDatabase(): Promise<void> {
  try {
    console.log('Cleaning up database sample data...');
    await databaseService.cleanupSampleData();
    console.log('Database cleanup complete');
  } catch (error) {
    console.error('Failed to cleanup database:', error);
    // Don't throw here as this is not critical
  }
}

/**
 * Get database health information
 */
export async function getDatabaseHealth(): Promise<{
  status: 'healthy' | 'warning' | 'error';
  message: string;
  details?: any;
}> {
  try {
    const validation = await databaseService.validateSchema();
    const stats = await databaseService.getDatabaseStats();
    
    return {
      status: validation.status === 'ready' ? 'healthy' : 'warning',
      message: validation.status === 'ready' 
        ? 'Database is operating normally' 
        : 'Database needs configuration',
      details: {
        validation,
        stats
      }
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Database health check failed',
      details: error
    };
  }
}