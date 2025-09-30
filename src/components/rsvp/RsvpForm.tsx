import React, { useState } from 'react';
import { ConnectionMethod, RsvpData } from '../../types';
import { rsvpService } from '../../services/rsvps';
import { useFormValidation } from '../../utils/validation';
import { useRetry, retryConditions } from '../../utils/retry';
import ErrorMessage from '../common/ErrorMessage';


interface RsvpFormProps {
  onSubmit: () => void;
  eventId?: string;
}

const RsvpForm: React.FC<RsvpFormProps> = ({ onSubmit, eventId }) => {
  const [formData, setFormData] = useState<RsvpData>({
    name: '',
    email: '',
    connectionMethod: null,
    eventId: eventId || 'default-event', // Use provided eventId or default for backward compatibility
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const { validate } = useFormValidation();

  const { execute, isLoading, error, retry } = useRetry(
    async () => {
      await rsvpService.submitRsvp({
        name: formData.name.trim(),
        email: formData.email.trim(),
        connectionMethod: formData.connectionMethod!,
        eventId: formData.eventId,
      });
    },
    {
      maxAttempts: 3,
      delayMs: 1000,
      onRetry: (attempt, error) => {
        console.log(`RSVP submission attempt ${attempt} failed:`, error.message);
      }
    }
  );

  // Update eventId when prop changes
  React.useEffect(() => {
    setFormData(prev => ({ ...prev, eventId: eventId || 'default-event' }));
  }, [eventId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleMethodChange = (method: ConnectionMethod) => {
    setFormData(prev => ({...prev, connectionMethod: method}));

    // Clear connection method error when selected
    if (fieldErrors.connectionMethod) {
      setFieldErrors(prev => ({ ...prev, connectionMethod: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    // Validate form using enhanced validation
    const validation = validate((validator) => {
      validator
        .required(formData.name, 'name', 'Please enter your name')
        .minLength(formData.name || '', 2, 'name', 'Name must be at least 2 characters')
        .maxLength(formData.name || '', 100, 'name', 'Name must be no more than 100 characters')
        .required(formData.email, 'email', 'Please enter your email')
        .email(formData.email || '', 'email')
        .custom(!!formData.connectionMethod, 'connectionMethod', 'Please select how you will connect');
    });

    if (!validation.isValid) {
      const errorMap: Record<string, string> = {};
      validation.errors.forEach(error => {
        errorMap[error.field] = error.message;
      });
      setFieldErrors(errorMap);
      return;
    }

    // Clear field errors on successful validation
    setFieldErrors({});

    try {
      await execute();
      console.log("RSVP submitted successfully");
      onSubmit();
    } catch (e) {
      console.error('Failed to submit RSVP:', e);
      // Error is handled by useRetry hook
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition duration-300 text-lg ${
            fieldErrors.name ? 'border-red-500' : 'border-slate-300'
          }`}
          placeholder="Your Name"
        />
        {fieldErrors.name && <p className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition duration-300 text-lg ${
            fieldErrors.email ? 'border-red-500' : 'border-slate-300'
          }`}
          placeholder="your@email.com"
        />
        {fieldErrors.email && <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">How will you connect?</label>
        <div className="grid grid-cols-3 gap-3">
          {(Object.keys(ConnectionMethod) as Array<keyof typeof ConnectionMethod>).map(method => (
              <div key={method}>
                  <input type="radio" id={method} name="connectionMethod" value={method} className="sr-only peer" checked={formData.connectionMethod === method} onChange={() => handleMethodChange(ConnectionMethod[method])} />
                  <label htmlFor={method} className={`flex items-center justify-center w-full p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 peer-checked:bg-purple-500 peer-checked:text-white peer-checked:border-purple-500 hover:border-purple-400 ${
                    fieldErrors.connectionMethod ? 'border-red-500' : 'border-slate-300'
                  }`}>
                      {ConnectionMethod[method]}
                  </label>
              </div>
          ))}
        </div>
        {fieldErrors.connectionMethod && <p className="mt-1 text-sm text-red-600">{fieldErrors.connectionMethod}</p>}
      </div>
      <ErrorMessage
        error={error}
        onRetry={retry}
        variant="error"
        className="mt-4"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-bold text-2xl py-4 px-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isLoading ? 'Submitting...' : 'Submit RSVP'}
      </button>
    </form>
  );
};

export default RsvpForm;