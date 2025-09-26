import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-[#8A2BE2] text-white">
      <main className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 text-slate-800">
          <h1 className="text-3xl font-bold text-center mb-6">Sign In</h1>
          <p className="text-center text-gray-600 mb-8">
            Sign in with your sodaworld.tv Google account to access the dashboard.
          </p>
          
          <div className="text-center">
            <p className="text-gray-500">Authentication will be implemented in later tasks.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;