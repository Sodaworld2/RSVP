import React, { useState } from 'react';
import { Event, GameType, validateEvent, isValidImageFile } from '../../types';
import { eventService } from '../../services/events';

interface EventFormProps {
  event?: Event;
  onSubmit: (event: Event) => void;
  onCancel: () => void;
  userEmail: string;
}

const EventForm: React.FC<EventFormProps> = ({ event, onSubmit, onCancel, userEmail }) => {
  const [formData, setFormData] = useState({
    title: event?.title || '',
    description: event?.description || '',
    datetime: event?.datetime ? event.datetime.toISOString().slice(0, 16) : '',
    gameType: event?.gameType || GameType.RAINBOW_HOP,
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(event?.logoUrl ?? null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!isValidImageFile(file)) {
      setErrors(prev => ({ 
        ...prev, 
        logo: 'Please select a valid image file (PNG, JPG, JPEG, GIF) under 5MB' 
      }));
      return;
    }

    setLogoFile(file);
    setErrors(prev => ({ ...prev, logo: '' }));

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setLogoPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      // Prepare event data for validation
      const eventData: any = {
        ...formData,
        datetime: new Date(formData.datetime),
        createdBy: userEmail,
        isActive: true,
      };

      // Validate the event data
      const validation = validateEvent(eventData);
      if (!validation.isValid) {
        const errorMap: Record<string, string> = {};
        validation.errors.forEach(error => {
          errorMap[error.field] = error.message;
        });
        setErrors(errorMap);
        return;
      }

      let logoUrl = event?.logoUrl ?? undefined;

      // Upload logo if a new file was selected
      if (logoFile) {
        logoUrl = await eventService.uploadEventLogo(logoFile);
      }

      const finalEventData: any = {
        ...eventData,
      };

      // Only include logoUrl if it has a value
      if (logoUrl) {
        finalEventData.logoUrl = logoUrl;
      }

      let resultEvent: Event;

      if (event) {
        // Update existing event
        await eventService.updateEvent(event.id, finalEventData);
        resultEvent = { ...event, ...finalEventData };
      } else {
        // For new events, prepare the data but let the parent handle creation
        resultEvent = {
          ...finalEventData,
          id: '', // Temporary ID, will be set by the service
          createdAt: new Date(),
          updatedAt: new Date(),
        } as Event;
      }

      onSubmit(resultEvent);
    } catch (error) {
      console.error('Error saving event:', error);
      console.error('Error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        eventData: eventData
      });
      setErrors({ submit: `Failed to save event: ${error instanceof Error ? error.message : 'Unknown error'}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 text-slate-800">
      <h2 className="text-2xl font-bold mb-6">
        {event ? 'Edit Event' : 'Create New Event'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Event Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-300 text-lg ${
              errors.title ? 'border-red-500' : 'border-slate-300'
            }`}
            placeholder="Enter event title"
            maxLength={100}
          />
          {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description (Optional)
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={3}
            className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-300 text-lg ${
              errors.description ? 'border-red-500' : 'border-slate-300'
            }`}
            placeholder="Enter event description"
            maxLength={500}
          />
          {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
        </div>

        {/* Date and Time */}
        <div>
          <label htmlFor="datetime" className="block text-sm font-medium text-gray-700 mb-2">
            Date & Time *
          </label>
          <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            value={formData.datetime}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-300 text-lg ${
              errors.datetime ? 'border-red-500' : 'border-slate-300'
            }`}
          />
          {errors.datetime && <p className="mt-1 text-sm text-red-600">{errors.datetime}</p>}
        </div>

        {/* Game Type */}
        <div>
          <label htmlFor="gameType" className="block text-sm font-medium text-gray-700 mb-2">
            Post-RSVP Game
          </label>
          <select
            id="gameType"
            name="gameType"
            value={formData.gameType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-300 text-lg"
          >
            <option value={GameType.RAINBOW_HOP}>Rainbow Hop (Jump Game)</option>
            <option value={GameType.SIMPLE_CLICKER}>Simple Clicker (Click for Points)</option>
            <option value={GameType.COLOR_MATCH}>Color Match (Memory Game)</option>
            <option value={GameType.NONE}>No Game</option>
          </select>
          <p className="mt-1 text-sm text-gray-500">Choose what game attendees will see after submitting their RSVP</p>
        </div>

        {/* Logo Upload */}
        <div>
          <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-2">
            Event Logo (Optional)
          </label>
          <input
            type="file"
            id="logo"
            accept="image/png,image/jpeg,image/jpg,image/gif"
            onChange={handleFileChange}
            className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-300 text-lg"
          />
          {errors.logo && <p className="mt-1 text-sm text-red-600">{errors.logo}</p>}
          
          {logoPreview && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Logo Preview:</p>
              <img
                src={logoPreview}
                alt="Logo preview"
                className="w-32 h-32 object-cover rounded-lg border border-gray-300"
              />
            </div>
          )}
        </div>

        {/* Submit Error */}
        {errors.submit && (
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {errors.submit}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-[#FFD700] hover:bg-[#FFC700] text-black font-semibold py-3 px-6 rounded-2xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : (event ? 'Update Event' : 'Create Event')}
          </button>
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-2xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;