import React from 'react';

const Flyer: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/*
          Using a style tag within SVG defs is a robust way to ensure fonts are available 
          for the SVG rendering, especially for complex text styling.
        */}
        <defs>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Luckiest+Guy&display=swap');
                `}
            </style>
        </defs>

        <circle cx="100" cy="100" r="98" fill="white" stroke="black" strokeWidth="3" />
        <path d="M 2 100 A 98 98 0 0 1 198 100 L 2 100" fill="#FBBF24" />

        {/* Top Text */}
        <text x="100" y="45" textAnchor="middle" style={{ fontFamily: 'Fredoka One, cursive' }} fontSize="11" fill="black" fontWeight="500">
            <tspan x="100" dy="0">You are invited to play in</tspan>
            <tspan x="100" dy="1.3em">the soda labs. An all day music,</tspan>
            <tspan x="100" dy="1.3em">culture and tech experiment</tspan>
        </text>

        {/* Center RSVP button */}
        <g>
            <circle cx="100" cy="100" r="25" fill="white" stroke="black" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="23" fill="#FBBF24" stroke="black" strokeWidth="0.5" />
            <text x="100" y="105" textAnchor="middle" style={{ fontFamily: 'Fredoka One, cursive' }} fontSize="12" fill="black" fontWeight="bold">
                RSVP
            </text>
        </g>
        
        {/* Bottom Text */}
        <text 
            x="100" 
            y="165" 
            textAnchor="middle" 
            style={{ fontFamily: 'Luckiest Guy, cursive' }}
            fontSize="40" 
            fill="#FBBF24" 
            stroke="black" 
            strokeWidth="2.5" 
            strokeLinejoin="round"
            letterSpacing="1"
        >
          prototype sessions
        </text>
      </svg>
    </div>
  );
};

export default Flyer;