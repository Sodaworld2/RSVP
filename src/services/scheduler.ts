import { reminderService } from './reminders';

export class ReminderScheduler {
  private intervalId: NodeJS.Timeout | null = null;
  private isRunning = false;

  // Run reminders once immediately
  async runOnce(): Promise<void> {
    console.log('Running reminder processing once...');
    try {
      await reminderService.processEventRemindersWithRetry();
      console.log('Reminder processing completed successfully');
    } catch (error) {
      console.error('Reminder processing failed:', error);
      throw error;
    }
  }

  // Start scheduled reminder processing (runs daily at specified hour)
  startScheduled(hourOfDay: number = 9): void {
    if (this.isRunning) {
      console.log('Reminder scheduler is already running');
      return;
    }

    console.log(`Starting reminder scheduler to run daily at ${hourOfDay}:00`);
    this.isRunning = true;

    // Calculate milliseconds until next scheduled time
    const getNextRunTime = (): number => {
      const now = new Date();
      const next = new Date();
      next.setHours(hourOfDay, 0, 0, 0);

      // If we've passed today's scheduled time, schedule for tomorrow
      if (next <= now) {
        next.setDate(next.getDate() + 1);
      }

      return next.getTime() - now.getTime();
    };

    // Schedule first run
    const timeUntilNextRun = getNextRunTime();
    console.log(`Next reminder processing scheduled in ${Math.round(timeUntilNextRun / 1000 / 60)} minutes`);

    setTimeout(() => {
      this.executeScheduledRun();

      // Then run every 24 hours
      this.intervalId = setInterval(() => {
        this.executeScheduledRun();
      }, 24 * 60 * 60 * 1000);
    }, timeUntilNextRun);
  }

  // Stop scheduled reminder processing
  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isRunning = false;
    console.log('Reminder scheduler stopped');
  }

  // Check if scheduler is running
  get running(): boolean {
    return this.isRunning;
  }

  private async executeScheduledRun(): Promise<void> {
    console.log('Executing scheduled reminder processing...');
    try {
      await reminderService.processEventRemindersWithRetry();
      console.log('Scheduled reminder processing completed successfully');
    } catch (error) {
      console.error('Scheduled reminder processing failed:', error);
      // Don't stop the scheduler on error - continue with next scheduled run
    }
  }
}

export const reminderScheduler = new ReminderScheduler();

// For development/testing - utility functions
export const runRemindersNow = () => reminderScheduler.runOnce();
export const startDailyReminders = (hour: number = 9) => reminderScheduler.startScheduled(hour);
export const stopReminders = () => reminderScheduler.stop();