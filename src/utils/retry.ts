export interface RetryOptions {
  maxAttempts?: number;
  delayMs?: number;
  backoffMultiplier?: number;
  maxDelayMs?: number;
  onRetry?: (attempt: number, error: Error) => void;
}

export class RetryError extends Error {
  constructor(
    message: string,
    public lastError: Error,
    public attempts: number
  ) {
    super(message);
    this.name = 'RetryError';
  }
}

export async function retry<T>(
  operation: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const {
    maxAttempts = 3,
    delayMs = 1000,
    backoffMultiplier = 2,
    maxDelayMs = 30000,
    onRetry
  } = options;

  let lastError: Error;
  let currentDelay = delayMs;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      // If this was the last attempt, throw the retry error
      if (attempt === maxAttempts) {
        throw new RetryError(
          `Operation failed after ${maxAttempts} attempts: ${lastError.message}`,
          lastError,
          attempt
        );
      }

      // Call retry callback if provided
      if (onRetry) {
        onRetry(attempt, lastError);
      }

      // Wait before next attempt
      await sleep(Math.min(currentDelay, maxDelayMs));
      currentDelay *= backoffMultiplier;
    }
  }

  // This should never be reached, but TypeScript requires it
  throw lastError!;
}

export async function retryWithCondition<T>(
  operation: () => Promise<T>,
  shouldRetry: (error: Error) => boolean,
  options: RetryOptions = {}
): Promise<T> {
  const {
    maxAttempts = 3,
    delayMs = 1000,
    backoffMultiplier = 2,
    maxDelayMs = 30000,
    onRetry
  } = options;

  let lastError: Error;
  let currentDelay = delayMs;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      // Check if we should retry this error
      if (!shouldRetry(lastError) || attempt === maxAttempts) {
        throw lastError;
      }

      // Call retry callback if provided
      if (onRetry) {
        onRetry(attempt, lastError);
      }

      // Wait before next attempt
      await sleep(Math.min(currentDelay, maxDelayMs));
      currentDelay *= backoffMultiplier;
    }
  }

  throw lastError!;
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Common retry conditions
export const retryConditions = {
  // Retry on network errors
  networkError: (error: Error): boolean => {
    const message = error.message.toLowerCase();
    return (
      message.includes('network') ||
      message.includes('fetch') ||
      message.includes('connection') ||
      message.includes('timeout') ||
      message.includes('offline')
    );
  },

  // Retry on HTTP 5xx errors
  serverError: (error: Error): boolean => {
    const message = error.message;
    return /5\d\d/.test(message);
  },

  // Retry on specific HTTP status codes
  specificStatusCodes: (codes: number[]) => (error: Error): boolean => {
    const message = error.message;
    return codes.some(code => message.includes(String(code)));
  },

  // Retry on Firebase errors that might be transient
  firebaseTransientError: (error: Error): boolean => {
    const message = error.message.toLowerCase();
    return (
      message.includes('unavailable') ||
      message.includes('deadline-exceeded') ||
      message.includes('internal') ||
      message.includes('resource-exhausted')
    );
  }
};

// React Hook for retry operations
import { useState, useCallback } from 'react';

export interface UseRetryResult<T> {
  execute: () => Promise<T | null>;
  isLoading: boolean;
  error: Error | null;
  attempt: number;
  retry: () => Promise<T | null>;
}

export function useRetry<T>(
  operation: () => Promise<T>,
  options: RetryOptions & { autoExecute?: boolean } = {}
): UseRetryResult<T> {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [attempt, setAttempt] = useState(0);

  const execute = useCallback(async (): Promise<T | null> => {
    setIsLoading(true);
    setError(null);
    setAttempt(0);

    try {
      const result = await retry(operation, {
        ...options,
        onRetry: (attemptNum, retryError) => {
          setAttempt(attemptNum);
          if (options.onRetry) {
            options.onRetry(attemptNum, retryError);
          }
        }
      });
      return result;
    } catch (err) {
      const finalError = err instanceof Error ? err : new Error(String(err));
      setError(finalError);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [operation, options]);

  const retryOperation = useCallback(() => execute(), [execute]);

  return {
    execute,
    isLoading,
    error,
    attempt,
    retry: retryOperation
  };
}