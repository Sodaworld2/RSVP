import React from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { UserProfile } from '../components/common/UserProfile';

const DashboardPage: React.FC = () => {
  const { user } = useAuthContext();

  return (
    <div className="min-h-screen bg-[#8A2BE2] text-white">
      <header className="bg-[#6B46C1] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold">Event Dashboard</h1>
            <UserProfile />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-slate-800">
          <h2 className="text-2xl font-bold mb-6">Welcome, {user?.displayName || user?.email}</h2>
          <p className="text-gray-600">
            This is your event management dashboard. Here you'll be able to create and manage events.
          </p>
          <div className="mt-8 p-4 bg-yellow-100 rounded-lg">
            <p className="text-yellow-800">
              Dashboard functionality will be implemented in upcoming tasks.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;