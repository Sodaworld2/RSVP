import React, { useState } from 'react';
import { ConnectionMethod, RsvpData } from '../../types';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';


interface RsvpFormProps {
  onSubmit: () => void;
}

const RsvpForm: React.FC<RsvpFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<RsvpData>({
    name: '',
    email: '',
    connectionMethod: null,
  });
  const [error, setError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleMethodChange = (method: ConnectionMethod) => {
      setFormData(prev => ({...prev, connectionMethod: method}));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
        setError('Please enter a valid email.');
        return;
    }
    if (!formData.connectionMethod) {
        setError('Please select how you will connect.');
        return;
    }
    
    setError('');
    setIsSubmitting(true);

    try {
      const docRef = await addDoc(collection(db, "rsvps"), {
        ...formData,
        submittedAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      onSubmit();
    } catch (e) {
      console.error("Error adding document: ", e);
      setError('Failed to submit RSVP. Please try again later.');
    } finally {
      setIsSubmitting(false);
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
          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition duration-300 text-lg"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition duration-300 text-lg"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">How will you connect?</label>
        <div className="grid grid-cols-3 gap-3">
          {(Object.keys(ConnectionMethod) as Array<keyof typeof ConnectionMethod>).map(method => (
              <div key={method}>
                  <input type="radio" id={method} name="connectionMethod" value={method} className="sr-only peer" checked={formData.connectionMethod === method} onChange={() => handleMethodChange(ConnectionMethod[method])} />
                  <label htmlFor={method} className="flex items-center justify-center w-full p-4 border-2 border-slate-300 rounded-xl cursor-pointer transition-all duration-300 peer-checked:bg-purple-500 peer-checked:text-white peer-checked:border-purple-500 hover:border-purple-400">
                      {ConnectionMethod[method]}
                  </label>
              </div>
          ))}
        </div>
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-bold text-2xl py-4 px-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
      </button>
    </form>
  );
};

export default RsvpForm;