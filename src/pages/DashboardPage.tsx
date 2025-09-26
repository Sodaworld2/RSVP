import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#8A2BE2] p-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white">Event Dashboard</h1>
          <p className="text-white text-opacity-70">Manage your events</p>
        </header>
        
        <main>
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Your Events</h2>
            <p className="text-gray-600">Dashboard functionality will be implemented in later tasks.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;