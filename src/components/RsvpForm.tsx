import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

type ConnectionType = 'in-person' | 'online' | 'vr';

const RsvpForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [connection, setConnection] = useState<ConnectionType>('in-person');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setError('Please fill out all fields.');
      return;
    }
    setError(null);
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'rsvps'), {
        name,
        email,
        connection,
        timestamp: new Date(),
      });
      onSuccess();
    } catch (err) {
      setError('Failed to submit RSVP. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">RSVP for Prototype Sessions</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-6">
          <span className="block text-gray-700 font-bold mb-2">How will you connect?</span>
          <div className="flex justify-around">
            <label className="flex items-center">
              <input type="radio" name="connection" value="in-person" checked={connection === 'in-person'} onChange={() => setConnection('in-person')} className="mr-2" />
              In-person
            </label>
            <label className="flex items-center">
              <input type="radio" name="connection" value="online" checked={connection === 'online'} onChange={() => setConnection('online')} className="mr-2" />
              Online
            </label>
            <label className="flex items-center">
              <input type="radio" name="connection" value="vr" checked={connection === 'vr'} onChange={() => setConnection('vr')} className="mr-2" />
              VR
            </label>
          </div>
        </div>

        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RsvpForm;
