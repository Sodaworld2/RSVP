import React, { useState } from 'react';
import { reminderScheduler, runRemindersNow } from '../../services/scheduler';
import { reminderService } from '../../services/reminders';

const ReminderPanel: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [testEventId, setTestEventId] = useState('');
  const [lastRunResult, setLastRunResult] = useState<string>('');

  const handleRunReminders = async () => {
    setIsProcessing(true);
    setLastRunResult('');

    try {
      await runRemindersNow();
      setLastRunResult('✅ Reminder processing completed successfully');
    } catch (error) {
      setLastRunResult(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleTestEventReminder = async () => {
    if (!testEventId.trim()) {
      setLastRunResult('❌ Please enter an event ID');
      return;
    }

    setIsProcessing(true);
    setLastRunResult('');

    try {
      await reminderService.testReminderForEvent(testEventId.trim());
      setLastRunResult('✅ Test reminder sent successfully');
    } catch (error) {
      setLastRunResult(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleStartScheduler = () => {
    try {
      reminderScheduler.startScheduled(9); // 9 AM daily
      setLastRunResult('✅ Daily reminder scheduler started (9:00 AM)');
    } catch (error) {
      setLastRunResult(`❌ Error starting scheduler: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const handleStopScheduler = () => {
    try {
      reminderScheduler.stop();
      setLastRunResult('✅ Reminder scheduler stopped');
    } catch (error) {
      setLastRunResult(`❌ Error stopping scheduler: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 text-slate-800">
      <h3 className="text-xl font-bold mb-4 text-center">📨 Reminder Management</h3>

      <div className="space-y-4">
        {/* Manual Reminder Processing */}
        <div className="border border-gray-200 rounded-xl p-4">
          <h4 className="font-semibold mb-2">Manual Processing</h4>
          <p className="text-sm text-gray-600 mb-3">
            Process reminders for all events happening tomorrow
          </p>
          <button
            onClick={handleRunReminders}
            disabled={isProcessing}
            className="w-full bg-[#FFD700] hover:bg-[#FFC700] text-black font-semibold py-2 px-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? 'Processing...' : 'Run Reminders Now'}
          </button>
        </div>

        {/* Test Single Event */}
        <div className="border border-gray-200 rounded-xl p-4">
          <h4 className="font-semibold mb-2">Test Event Reminder</h4>
          <p className="text-sm text-gray-600 mb-3">
            Send test reminder for a specific event
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              value={testEventId}
              onChange={(e) => setTestEventId(e.target.value)}
              placeholder="Enter event ID"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            <button
              onClick={handleTestEventReminder}
              disabled={isProcessing || !testEventId.trim()}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Test
            </button>
          </div>
        </div>

        {/* Scheduler Controls */}
        <div className="border border-gray-200 rounded-xl p-4">
          <h4 className="font-semibold mb-2">Automatic Scheduler</h4>
          <p className="text-sm text-gray-600 mb-3">
            {reminderScheduler.running
              ? 'Scheduler is running (daily at 9:00 AM)'
              : 'Scheduler is stopped'
            }
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleStartScheduler}
              disabled={reminderScheduler.running}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Start Daily
            </button>
            <button
              onClick={handleStopScheduler}
              disabled={!reminderScheduler.running}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Stop
            </button>
          </div>
        </div>

        {/* Result Display */}
        {lastRunResult && (
          <div className={`p-3 rounded-lg text-sm ${
            lastRunResult.startsWith('✅')
              ? 'bg-green-100 text-green-800 border border-green-200'
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {lastRunResult}
          </div>
        )}

        {/* Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-sm text-blue-800">
            <strong>How it works:</strong> Reminders are sent to attendees for events happening tomorrow.
            Each attendee receives only one reminder per event. The system tracks sent reminders to prevent duplicates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReminderPanel;