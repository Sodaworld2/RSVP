import React from 'react';

interface RsvpPageProps {
  eventId: string;
}

const RsvpPage: React.FC<RsvpPageProps> = ({ eventId }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-[#8A2BE2] text-slate-800">
      <main className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500">
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Event RSVP</h1>
            <p>Event ID: {eventId}</p>
            {/* RSVP form will be implemented in later tasks */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RsvpPage;