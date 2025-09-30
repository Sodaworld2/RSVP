import React from 'react';
import { Event } from '../../types';

interface EventCardProps {
  event: Event;
  onEdit: () => void;
  onDelete: () => void;
  showDeleteConfirm: boolean;
  onDeleteConfirm: () => void;
  onDeleteCancel: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  onEdit,
  onDelete,
  showDeleteConfirm,
  onDeleteConfirm,
  onDeleteCancel,
}) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).format(date);
  };

  const isUpcoming = event.datetime > new Date();
  const isPast = event.datetime < new Date();

  const getStatusColor = () => {
    if (isPast) return 'text-gray-500';
    if (isUpcoming) return 'text-green-600';
    return 'text-blue-600';
  };

  const getStatusText = () => {
    if (isPast) return 'Past Event';
    if (isUpcoming) return 'Upcoming';
    return 'Active';
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Event Logo/Image */}
      <div className="h-48 bg-gradient-to-br from-[#8A2BE2] to-[#6B46C1] relative">
        {event.logoUrl ? (
          <img
            src={event.logoUrl}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-white text-6xl">📅</div>
          </div>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium bg-white ${getStatusColor()}`}>
            {getStatusText()}
          </span>
        </div>
      </div>

      {/* Event Details */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 overflow-hidden" style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
        }}>
          {event.title}
        </h3>
        
        {event.description && (
          <p className="text-gray-600 text-xs sm:text-sm mb-3 overflow-hidden" style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}>
            {event.description}
          </p>
        )}

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-xs sm:text-sm text-gray-600">
            <span className="mr-2">🕒</span>
            <span className="truncate">{formatDate(event.datetime)}</span>
          </div>
          
          <div className="flex items-center text-xs sm:text-sm text-gray-600">
            <span className="mr-2">🎮</span>
            <span className="capitalize">{event.gameType.replace('_', ' ')}</span>
          </div>
        </div>

        {/* Action Buttons */}
        {!showDeleteConfirm ? (
          <div className="flex gap-2">
            <button
              onClick={onEdit}
              className="flex-1 bg-[#FFD700] hover:bg-[#FFC700] text-black font-semibold py-2 px-4 rounded-xl transition-colors text-sm"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl transition-colors text-sm"
            >
              Delete
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-sm text-red-600 font-medium text-center">
              Delete this event?
            </p>
            <div className="flex gap-2">
              <button
                onClick={onDeleteConfirm}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl transition-colors text-sm"
              >
                Yes, Delete
              </button>
              <button
                onClick={onDeleteCancel}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-xl transition-colors text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* RSVP Link */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-1">RSVP Link:</p>
          <div className="flex items-center gap-1 sm:gap-2">
            <input
              type="text"
              value={`${window.location.origin}/rsvp/${event.id}`}
              readOnly
              className="flex-1 text-xs bg-gray-100 px-2 py-1 rounded border text-gray-600 min-w-0"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(`${window.location.origin}/rsvp/${event.id}`);
              }}
              className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded transition-colors flex-shrink-0"
              title="Copy link"
            >
              📋
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;