import React, { useState, useEffect, useMemo } from 'react';
import { Event, RsvpData, ConnectionMethod } from '../../types';
import { rsvpService } from '../../services/rsvps';
import { useRetry } from '../../utils/retry';
import ErrorMessage from '../common/ErrorMessage';

interface RsvpListProps {
  event: Event;
  onBack: () => void;
}

const RsvpList: React.FC<RsvpListProps> = ({ event, onBack }) => {
  const [rsvps, setRsvps] = useState<RsvpData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterConnection, setFilterConnection] = useState<ConnectionMethod | 'all'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'email' | 'submittedAt'>('submittedAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const { execute: loadRsvps, isLoading, error, retry } = useRetry(
    async () => {
      const data = await rsvpService.getRsvpsByEvent(event.id);
      setRsvps(data);
      return data;
    },
    {
      maxAttempts: 3,
      delayMs: 1000,
      onRetry: (attempt, error) => {
        console.log(`RSVP loading attempt ${attempt} failed:`, error.message);
      }
    }
  );

  useEffect(() => {
    loadRsvps();
  }, [loadRsvps]);

  // Filter and sort RSVPs
  const filteredAndSortedRsvps = useMemo(() => {
    let filtered = rsvps.filter(rsvp => {
      const matchesSearch =
        rsvp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rsvp.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesConnection =
        filterConnection === 'all' || rsvp.connectionMethod === filterConnection;

      return matchesSearch && matchesConnection;
    });

    // Sort the filtered results
    filtered.sort((a, b) => {
      let aValue: string | Date;
      let bValue: string | Date;

      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'email':
          aValue = a.email.toLowerCase();
          bValue = b.email.toLowerCase();
          break;
        case 'submittedAt':
          aValue = a.submittedAt;
          bValue = b.submittedAt;
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [rsvps, searchTerm, filterConnection, sortBy, sortOrder]);

  const handleSort = (field: 'name' | 'email' | 'submittedAt') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Connection Method', 'RSVP Date', 'Reminder Sent'];
    const csvData = filteredAndSortedRsvps.map(rsvp => [
      `"${rsvp.name}"`,
      `"${rsvp.email}"`,
      `"${rsvp.connectionMethod}"`,
      `"${rsvp.submittedAt.toLocaleDateString()} ${rsvp.submittedAt.toLocaleTimeString()}"`,
      rsvp.reminderSent ? 'Yes' : 'No'
    ]);

    const csvContent = [headers.join(','), ...csvData.map(row => row.join(','))].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${event.title}-rsvps-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getSortIcon = (field: 'name' | 'email' | 'submittedAt') => {
    if (sortBy !== field) return '↕️';
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  const formatDateTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  const getConnectionMethodColor = (method: ConnectionMethod) => {
    switch (method) {
      case ConnectionMethod.VR:
        return 'bg-purple-100 text-purple-800';
      case ConnectionMethod.ZOOM:
        return 'bg-blue-100 text-blue-800';
      case ConnectionMethod.IN_PERSON:
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading && rsvps.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 text-slate-800">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8A2BE2]"></div>
          <span className="ml-4 text-lg">Loading RSVPs...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl shadow-2xl p-6 text-slate-800">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <button
                onClick={onBack}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                ← Back to Events
              </button>
            </div>
            <h2 className="text-2xl font-bold">{event.title} - RSVPs</h2>
            <p className="text-gray-600 mt-1">
              {filteredAndSortedRsvps.length} of {rsvps.length} attendees
              {searchTerm && ` (filtered by "${searchTerm}")`}
            </p>
          </div>

          {rsvps.length > 0 && (
            <button
              onClick={exportToCSV}
              className="bg-[#FFD700] hover:bg-[#FFC700] text-black font-semibold py-2 px-4 rounded-xl transition-colors whitespace-nowrap"
            >
              📊 Export CSV
            </button>
          )}
        </div>
      </div>

      {error && (
        <ErrorMessage
          error={error}
          onRetry={retry}
          variant="error"
        />
      )}

      {/* Filters and Search */}
      {rsvps.length > 0 && (
        <div className="bg-white rounded-3xl shadow-2xl p-6 text-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search attendees
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or email..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            {/* Connection Method Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Connection method
              </label>
              <select
                value={filterConnection}
                onChange={(e) => setFilterConnection(e.target.value as ConnectionMethod | 'all')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="all">All methods</option>
                {Object.values(ConnectionMethod).map(method => (
                  <option key={method} value={method}>{method}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort by
              </label>
              <select
                value={`${sortBy}-${sortOrder}`}
                onChange={(e) => {
                  const [field, order] = e.target.value.split('-');
                  setSortBy(field as 'name' | 'email' | 'submittedAt');
                  setSortOrder(order as 'asc' | 'desc');
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="submittedAt-desc">RSVP Date (Newest first)</option>
                <option value="submittedAt-asc">RSVP Date (Oldest first)</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="email-asc">Email (A-Z)</option>
                <option value="email-desc">Email (Z-A)</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* RSVP List */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden text-slate-800">
        {rsvps.length === 0 ? (
          <div className="p-8 text-center">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-xl font-semibold mb-2">No RSVPs Yet</h3>
            <p className="text-gray-600 mb-4">
              No one has RSVP'd to this event yet. Share the RSVP link to start getting responses!
            </p>
            <div className="flex items-center justify-center gap-2 bg-gray-100 rounded-lg p-3">
              <span className="text-sm text-gray-600">RSVP Link:</span>
              <code className="text-sm bg-white px-2 py-1 rounded">
                {window.location.origin}/rsvp/{event.id}
              </code>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`${window.location.origin}/rsvp/${event.id}`);
                }}
                className="text-sm bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded transition-colors"
                title="Copy link"
              >
                📋
              </button>
            </div>
          </div>
        ) : filteredAndSortedRsvps.length === 0 ? (
          <div className="p-8 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold mb-2">No matching RSVPs</h3>
            <p className="text-gray-600">
              No RSVPs match your current search and filter criteria.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('name')}
                  >
                    Name {getSortIcon('name')}
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('email')}
                  >
                    Email {getSortIcon('email')}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Connection Method
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('submittedAt')}
                  >
                    RSVP Date {getSortIcon('submittedAt')}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAndSortedRsvps.map((rsvp) => (
                  <tr key={rsvp.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{rsvp.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-600">{rsvp.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getConnectionMethodColor(rsvp.connectionMethod)}`}>
                        {rsvp.connectionMethod}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {formatDateTime(rsvp.submittedAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        rsvp.reminderSent
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {rsvp.reminderSent ? 'Reminded' : 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default RsvpList;