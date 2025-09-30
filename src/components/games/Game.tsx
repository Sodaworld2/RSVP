import React, { useState, useEffect, useRef, useCallback } from 'react';

const GAME_WIDTH = 400;
const GAME_HEIGHT = 200;
const PLAYER_WIDTH = 30;
const PLAYER_HEIGHT = 30;
const GRAVITY = 0.5;
const JUMP_STRENGTH = -10;
const OBSTACLE_WIDTH = 20;
const OBSTACLE_HEIGHT = 40;
const OBSTACLE_SPEED = 4;

interface Obstacle {
  x: number;
  id: number;
}
import { GameType } from '../../types';

interface GameProps {
  onPlayAgain: () => void;
  gameType?: GameType;
}


// Simple Clicker Game Component
const SimpleClickerGame: React.FC<{ onPlayAgain: () => void }> = ({ onPlayAgain }) => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (isGameActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && isGameActive) {
      setIsGameActive(false);
      setIsGameOver(true);
    }
  }, [timeLeft, isGameActive]);

  const handleClick = () => {
    if (!isGameActive && !isGameOver) {
      setIsGameActive(true);
      setScore(0);
      setTimeLeft(30);
    } else if (isGameActive) {
      setScore(score + 1);
    }
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(30);
    setIsGameActive(false);
    setIsGameOver(false);
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold mb-2">Thanks for your RSVP!</h2>
      <p className="text-gray-600 mb-4">Click as fast as you can!</p>

      <div className="bg-gray-100 border-4 border-gray-300 rounded-lg p-8 w-96 h-64 flex flex-col items-center justify-center">
        <div className="text-2xl font-bold mb-4">Score: {score}</div>
        <div className="text-lg mb-4">Time: {timeLeft}s</div>

        <button
          onClick={handleClick}
          className="w-32 h-32 bg-yellow-400 hover:bg-yellow-500 rounded-full text-4xl font-bold transition-colors transform active:scale-95"
        >
          {!isGameActive && !isGameOver ? '▶️' : '👆'}
        </button>

        {!isGameActive && !isGameOver && (
          <p className="mt-4 text-gray-600">Click to start!</p>
        )}

        {isGameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Time's Up!</h3>
            <p className="mb-4">Final Score: {score}</p>
            <button
              onClick={resetGame}
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-bold py-2 px-6 rounded-lg"
            >
              Play Again
            </button>
          </div>
        )}
      </div>

      <button onClick={onPlayAgain} className="mt-6 text-sm text-gray-500 hover:text-purple-600 underline">
        Back to RSVP Form
      </button>
    </div>
  );
};

// Color Match Game Component
const ColorMatchGame: React.FC<{ onPlayAgain: () => void }> = ({ onPlayAgain }) => {
  const colors = ['🔴', '🟡', '🟢', '🔵', '🟣', '🟠'];
  const [sequence, setSequence] = useState<string[]>([]);
  const [playerSequence, setPlayerSequence] = useState<string[]>([]);
  const [isShowingSequence, setIsShowingSequence] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const startGame = () => {
    const newSequence = [colors[Math.floor(Math.random() * colors.length)]];
    setSequence(newSequence);
    setPlayerSequence([]);
    setScore(0);
    setIsGameOver(false);
    setIsGameStarted(true);
    showSequence(newSequence);
  };

  const showSequence = (seq: string[]) => {
    setIsShowingSequence(true);
    setCurrentIndex(0);

    const showNext = (index: number) => {
      if (index < seq.length) {
        setCurrentIndex(index);
        setTimeout(() => {
          setCurrentIndex(-1);
          setTimeout(() => showNext(index + 1), 300);
        }, 600);
      } else {
        setIsShowingSequence(false);
      }
    };

    setTimeout(() => showNext(0), 500);
  };

  const handleColorClick = (color: string) => {
    if (isShowingSequence || isGameOver) return;

    const newPlayerSequence = [...playerSequence, color];
    setPlayerSequence(newPlayerSequence);

    if (newPlayerSequence[newPlayerSequence.length - 1] !== sequence[newPlayerSequence.length - 1]) {
      setIsGameOver(true);
      return;
    }

    if (newPlayerSequence.length === sequence.length) {
      setScore(score + 1);
      const nextSequence = [...sequence, colors[Math.floor(Math.random() * colors.length)]];
      setSequence(nextSequence);
      setPlayerSequence([]);
      setTimeout(() => showSequence(nextSequence), 1000);
    }
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold mb-2">Thanks for your RSVP!</h2>
      <p className="text-gray-600 mb-4">Remember the sequence!</p>

      <div className="bg-gray-100 border-4 border-gray-300 rounded-lg p-8 w-96 h-64">
        <div className="text-xl font-bold mb-4">Level: {score + 1}</div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => handleColorClick(color)}
              className={`w-16 h-16 text-2xl rounded-lg border-2 transition-all ${
                currentIndex === sequence.indexOf(color) && isShowingSequence
                  ? 'border-white bg-white scale-110'
                  : 'border-gray-400 hover:scale-105'
              }`}
              disabled={isShowingSequence}
            >
              {color}
            </button>
          ))}
        </div>

        {!isGameStarted && !isGameOver && (
          <button
            onClick={startGame}
            className="bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-bold py-2 px-6 rounded-lg"
          >
            Start Game
          </button>
        )}

        {isGameOver && (
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Game Over!</h3>
            <p className="mb-4">You reached level {score + 1}</p>
            <button
              onClick={startGame}
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-bold py-2 px-6 rounded-lg"
            >
              Play Again
            </button>
          </div>
        )}
      </div>

      <button onClick={onPlayAgain} className="mt-6 text-sm text-gray-500 hover:text-purple-600 underline">
        Back to RSVP Form
      </button>
    </div>
  );
};

// Rainbow Hop Game State Interface
interface RainbowHopGameState {
  playerY: number;
  playerVelocity: number;
  obstacles: Obstacle[];
  score: number;
  isGameOver: boolean;
  isGameRunning: boolean;
  lastTime: number;
  nextObstacleTime: number;
  obstacleCounter: number;
}

// Rainbow Hop Game Component (rewritten with unified state)
const RainbowHopGame: React.FC<{ onPlayAgain: () => void }> = ({ onPlayAgain }) => {
  const [gameState, setGameState] = useState<RainbowHopGameState>({
    playerY: GAME_HEIGHT - PLAYER_HEIGHT,
    playerVelocity: 0,
    obstacles: [],
    score: 0,
    isGameOver: false,
    isGameRunning: false,
    lastTime: 0,
    nextObstacleTime: 0,
    obstacleCounter: 0,
  });

  const animationIdRef = useRef<number | null>(null);
  const gameStateRef = useRef<RainbowHopGameState>(gameState);

  // Keep gameStateRef in sync with state
  useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);

  const PlayerIcon = () => (
    <div style={{width: PLAYER_WIDTH, height: PLAYER_HEIGHT}} className="bg-gradient-to-b from-red-500 via-yellow-400 to-blue-500 rounded-md flex items-center justify-center">
      <div className="text-xl">🌈</div>
    </div>
  );

  const ObstacleIcon = () => (
    <div style={{width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}} className="bg-green-600 border-2 border-green-800 rounded-t-md flex items-center justify-center text-white">🌵</div>
  );

  // Simplified game loop with direct state calculation
  const gameLoop = (timestamp: number) => {
    const currentState = gameStateRef.current;

    if (!currentState.isGameRunning || currentState.isGameOver) {
      return;
    }

    // Initialize timing on first frame
    if (currentState.lastTime === 0) {
      setGameState(prev => ({ ...prev, lastTime: timestamp, nextObstacleTime: timestamp + 1500 }));
      animationIdRef.current = requestAnimationFrame(gameLoop);
      return;
    }

    const deltaTime = timestamp - currentState.lastTime;

    // Calculate new state directly
    const newVelocity = currentState.playerVelocity + GRAVITY;
    const newPlayerY = Math.min(currentState.playerY + newVelocity, GAME_HEIGHT - PLAYER_HEIGHT);

    // Update obstacles
    const updatedObstacles = currentState.obstacles
      .map(o => ({ ...o, x: o.x - OBSTACLE_SPEED }))
      .filter(o => o.x > -OBSTACLE_WIDTH);

    // Check collisions
    const playerRect = { x: 50, y: newPlayerY, width: PLAYER_WIDTH, height: PLAYER_HEIGHT };
    let hasCollision = false;

    for (const obstacle of updatedObstacles) {
      const obstacleRect = { x: obstacle.x, y: GAME_HEIGHT - OBSTACLE_HEIGHT, width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT };
      if (
        playerRect.x < obstacleRect.x + obstacleRect.width &&
        playerRect.x + playerRect.width > obstacleRect.x &&
        playerRect.y < obstacleRect.y + obstacleRect.height &&
        playerRect.y + playerRect.height > obstacleRect.y
      ) {
        hasCollision = true;
        break;
      }
    }

    // Handle collision
    if (hasCollision) {
      setGameState(prev => ({ ...prev, isGameOver: true, isGameRunning: false }));
      return;
    }

    // Spawn new obstacles
    let finalObstacles = updatedObstacles;
    let newObstacleTime = currentState.nextObstacleTime;
    let newObstacleCounter = currentState.obstacleCounter;

    if (timestamp >= currentState.nextObstacleTime) {
      finalObstacles = [...updatedObstacles, { x: GAME_WIDTH, id: newObstacleCounter++ }];
      newObstacleTime = timestamp + 1000 + Math.random() * 1500;
    }

    // Apply all updates at once
    setGameState({
      ...currentState,
      playerY: newPlayerY,
      playerVelocity: newVelocity,
      obstacles: finalObstacles,
      score: currentState.score + 1,
      lastTime: timestamp,
      nextObstacleTime: newObstacleTime,
      obstacleCounter: newObstacleCounter,
    });

    // Continue animation loop
    animationIdRef.current = requestAnimationFrame(gameLoop);
  };

  // Simplified game control functions
  const startGame = () => {
    // Clean up any existing animation
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }

    // Reset game state
    setGameState({
      playerY: GAME_HEIGHT - PLAYER_HEIGHT,
      playerVelocity: 0,
      obstacles: [],
      score: 0,
      isGameOver: false,
      isGameRunning: true,
      lastTime: 0,
      nextObstacleTime: 0,
      obstacleCounter: 0,
    });

    // Start animation loop
    animationIdRef.current = requestAnimationFrame(gameLoop);
  };

  const jump = () => {
    const currentState = gameStateRef.current;
    if (currentState.isGameRunning && !currentState.isGameOver) {
      // Only allow jump if player is on ground (near bottom or positive velocity)
      if (currentState.playerY >= GAME_HEIGHT - PLAYER_HEIGHT - 5 || currentState.playerVelocity >= -2) {
        setGameState(prev => ({
          ...prev,
          playerVelocity: JUMP_STRENGTH
        }));
      }
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.key === 'ArrowUp') {
        e.preventDefault();
        const currentState = gameStateRef.current;
        if (!currentState.isGameRunning && !currentState.isGameOver) {
          startGame();
        } else {
          jump();
        }
      }
    };

    const handleTouch = (e: TouchEvent) => {
      e.preventDefault();
      const currentState = gameStateRef.current;
      if (!currentState.isGameRunning && !currentState.isGameOver) {
        startGame();
      } else {
        jump();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('touchstart', handleTouch);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('touchstart', handleTouch);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);


  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold mb-2">Thanks for your RSVP!</h2>
      <p className="text-gray-600 mb-4">Have some fun while you wait!</p>

      <div
        className="relative bg-gray-100 border-4 border-gray-300 rounded-lg overflow-hidden cursor-pointer"
        style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
        onClick={(e) => {
          e.preventDefault();
          const currentState = gameStateRef.current;
          if (!currentState.isGameRunning && !currentState.isGameOver) {
            startGame();
          } else {
            jump();
          }
        }}
      >
        <div className="absolute left-[50px] transition-transform duration-100" style={{ transform: `translateY(${gameState.playerY}px)` }}>
          <PlayerIcon />
        </div>

        {gameState.obstacles.map(obstacle => (
          <div key={obstacle.id} className="absolute bottom-0" style={{ transform: `translateX(${obstacle.x}px)` }}>
            <ObstacleIcon />
          </div>
        ))}

        <div className="absolute top-2 right-2 text-lg font-bold text-gray-500">
          Score: {Math.floor(gameState.score / 10)}
        </div>

        {(!gameState.isGameRunning && !gameState.isGameOver) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white">
            <h3 className="text-3xl font-bold">Rainbow Hop!</h3>
            <p>Click or Press Space to Start</p>
          </div>
        )}

        {gameState.isGameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
            <h3 className="text-4xl font-bold mb-2">Game Over</h3>
            <button
              onClick={startGame}
              className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-bold py-2 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
      <button onClick={onPlayAgain} className="mt-6 text-sm text-gray-500 hover:text-purple-600 underline">
        Back to RSVP Form
      </button>
    </div>
  );
};

// Main Game Component that renders based on gameType
const Game: React.FC<GameProps> = ({ onPlayAgain, gameType = GameType.RAINBOW_HOP }) => {
  // Show no game message for NONE type
  if (gameType === GameType.NONE) {
    return (
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold mb-2">Thanks for your RSVP!</h2>
        <p className="text-gray-600 mb-4">We look forward to seeing you at the event!</p>
        <button onClick={onPlayAgain} className="mt-6 text-sm text-gray-500 hover:text-purple-600 underline">
          Back to RSVP Form
        </button>
      </div>
    );
  }

  // Render the appropriate game based on gameType
  switch (gameType) {
    case GameType.SIMPLE_CLICKER:
      return <SimpleClickerGame onPlayAgain={onPlayAgain} />;
    case GameType.COLOR_MATCH:
      return <ColorMatchGame onPlayAgain={onPlayAgain} />;
    case GameType.RAINBOW_HOP:
    default:
      return <RainbowHopGame onPlayAgain={onPlayAgain} />;
  }
};

export default Game;