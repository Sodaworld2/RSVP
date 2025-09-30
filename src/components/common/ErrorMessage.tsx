import React from 'react';

export interface ErrorMessageProps {
  error: Error | string | null;
  onRetry?: () => void;
  onDismiss?: () => void;
  variant?: 'error' | 'warning' | 'info';
  showDetails?: boolean;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  error,
  onRetry,
  onDismiss,
  variant = 'error',
  showDetails = false,
  className = ''
}) => {
  if (!error) return null;

  const errorMessage = error instanceof Error ? error.message : error;
  const errorStack = error instanceof Error ? error.stack : undefined;

  const getVariantStyles = () => {
    switch (variant) {
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      default:
        return 'bg-red-50 border-red-200 text-red-800';
    }
  };

  const getIcon = () => {
    switch (variant) {
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      default:
        return '❌';
    }
  };

  return (
    <div className={`border rounded-lg p-4 ${getVariantStyles()} ${className}`}>
      <div className="flex items-start space-x-3">
        <div className="text-lg">{getIcon()}</div>

        <div className="flex-1">
          <div className="font-medium">
            {variant === 'error' && 'Error'}
            {variant === 'warning' && 'Warning'}
            {variant === 'info' && 'Information'}
          </div>
          <div className="mt-1 text-sm">
            {errorMessage}
          </div>

          {showDetails && errorStack && (
            <details className="mt-3">
              <summary className="cursor-pointer text-xs hover:underline">
                Show technical details
              </summary>
              <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto max-h-40">
                {errorStack}
              </pre>
            </details>
          )}

          {(onRetry || onDismiss) && (
            <div className="mt-3 flex space-x-2">
              {onRetry && (
                <button
                  onClick={onRetry}
                  className="text-xs bg-white border border-gray-300 rounded px-3 py-1 hover:bg-gray-50 transition-colors"
                >
                  Try Again
                </button>
              )}
              {onDismiss && (
                <button
                  onClick={onDismiss}
                  className="text-xs bg-white border border-gray-300 rounded px-3 py-1 hover:bg-gray-50 transition-colors"
                >
                  Dismiss
                </button>
              )}
            </div>
          )}
        </div>

        {onDismiss && (
          <button
            onClick={onDismiss}
            className="text-gray-400 hover:text-gray-600 text-lg leading-none"
            aria-label="Close"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;