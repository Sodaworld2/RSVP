import React from 'react';

const SplashPage = ({ onEnter }: { onEnter: () => void }) => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 cursor-pointer"
      onClick={onEnter}
    >
      <div className="text-center">
        <svg
          width="400"
          height="600"
          viewBox="0 0 400 600"
          className="bg-white rounded-lg shadow-2xl"
        >
          <rect width="400" height="600" fill="white" />
          <text
            x="50%"
            y="40%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="3rem"
            fontWeight="bold"
            fill="black"
          >
            PROTOTYPE
          </text>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="3rem"
            fontWeight="bold"
            fill="black"
          >
            SESSIONS
          </text>
          <text
            x="50%"
            y="90%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="1rem"
            fill="gray"
          >
            Click anywhere to continue
          </text>
        </svg>
      </div>
    </div>
  );
};

export default SplashPage;
