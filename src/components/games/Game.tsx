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
interface GameProps {
  onPlayAgain: () => void;
}


const Game: React.FC<GameProps> = ({onPlayAgain}) => {
  const [playerY, setPlayerY] = useState(GAME_HEIGHT - PLAYER_HEIGHT);
  const [playerVelocity, setPlayerVelocity] = useState(0);
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameRunning, setIsGameRunning] = useState(false);

  const gameLoopRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const obstacleCounterRef = useRef<number>(0);
  const nextObstacleTimeRef = useRef<number>(0);

  const PlayerIcon = () => (
    <div style={{width: PLAYER_WIDTH, height: PLAYER_HEIGHT}} className="bg-gradient-to-b from-red-500 via-yellow-400 to-blue-500 rounded-md flex items-center justify-center">
      <div className="text-xl">🌈</div>
    </div>
  );
  
  const ObstacleIcon = () => (
    <div style={{width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT}} className="bg-green-600 border-2 border-green-800 rounded-t-md flex items-center justify-center text-white">🌵</div>
  );

  // Functions are reordered to respect dependency hierarchy. `gameLoop` is defined before `resetGame` which uses it.
  const gameLoop = useCallback((time: number) => {
    if (!lastTimeRef.current) {
      lastTimeRef.current = time;
      gameLoopRef.current = requestAnimationFrame(gameLoop);
      return;
    }

    const deltaTime = time - lastTimeRef.current;
    
    // Player physics
    setPlayerVelocity(v => {
        const newVelocity = v + GRAVITY;
        setPlayerY(y => Math.min(y + newVelocity, GAME_HEIGHT - PLAYER_HEIGHT));
        return newVelocity;
    });

    // Obstacle management
    let collisionDetected = false;
    setObstacles(prevObstacles => {
      const newObstacles = prevObstacles
        .map(o => ({ ...o, x: o.x - OBSTACLE_SPEED }))
        .filter(o => o.x > -OBSTACLE_WIDTH);
      
      const playerRect = { x: 50, y: playerY, width: PLAYER_WIDTH, height: PLAYER_HEIGHT };
      
      for (const obstacle of newObstacles) {
        const obstacleRect = { x: obstacle.x, y: GAME_HEIGHT - OBSTACLE_HEIGHT, width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT };
        if (
          playerRect.x < obstacleRect.x + obstacleRect.width &&
          playerRect.x + playerRect.width > obstacleRect.x &&
          playerRect.y < obstacleRect.y + obstacleRect.height &&
          playerRect.y + playerRect.height > obstacleRect.y
        ) {
          collisionDetected = true;
        }
      }
      return newObstacles;
    });

    if (collisionDetected) {
      setIsGameOver(true);
      setIsGameRunning(false);
      cancelAnimationFrame(gameLoopRef.current!);
      return;
    }

    // Spawn new obstacles
    nextObstacleTimeRef.current -= deltaTime;
    if (nextObstacleTimeRef.current <= 0) {
        setObstacles(prev => [...prev, { x: GAME_WIDTH, id: obstacleCounterRef.current++ }]);
        nextObstacleTimeRef.current = 1000 + Math.random() * 1500;
    }
    
    setScore(s => s + 1);
    lastTimeRef.current = time;
    gameLoopRef.current = requestAnimationFrame(gameLoop);

  }, [playerY]);

  const resetGame = useCallback(() => {
    setPlayerY(GAME_HEIGHT - PLAYER_HEIGHT);
    setPlayerVelocity(0);
    setObstacles([]);
    setScore(0);
    setIsGameOver(false);
    setIsGameRunning(true);
    obstacleCounterRef.current = 0;
    nextObstacleTimeRef.current = 1500 + Math.random() * 1000;
    lastTimeRef.current = undefined;
    // Fix: By wrapping the requestAnimationFrame in a function, we ensure it captures the latest `gameLoop` from this closure when `resetGame` is called.
    gameLoopRef.current = requestAnimationFrame((time) => gameLoop(time));
  }, [gameLoop]);

  const startGame = useCallback(() => {
    resetGame();
  }, [resetGame]);
  
  const jump = useCallback(() => {
    if (!isGameOver && playerY >= GAME_HEIGHT - PLAYER_HEIGHT) {
      setPlayerVelocity(JUMP_STRENGTH);
    }
  }, [isGameOver, playerY]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.key === 'ArrowUp') {
        e.preventDefault();
        if(!isGameRunning && !isGameOver) startGame();
        else jump();
      }
    };
    
    const handleTouch = (e: TouchEvent) => {
        e.preventDefault();
        if(!isGameRunning && !isGameOver) startGame();
        else jump();
    }

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('touchstart', handleTouch);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('touchstart', handleTouch);
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [isGameRunning, isGameOver, jump, startGame]);


  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold mb-2">Thanks for your RSVP!</h2>
      <p className="text-gray-600 mb-4">Have some fun while you wait!</p>
      
      <div 
        className="relative bg-gray-100 border-4 border-gray-300 rounded-lg overflow-hidden cursor-pointer" 
        style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
        onClick={() => {
            if(!isGameRunning && !isGameOver) startGame();
            else jump();
        }}
      >
        <div className="absolute left-[50px] transition-transform duration-100" style={{ transform: `translateY(${playerY}px)` }}>
          <PlayerIcon />
        </div>

        {obstacles.map(obstacle => (
          <div key={obstacle.id} className="absolute bottom-0" style={{ transform: `translateX(${obstacle.x}px)` }}>
            <ObstacleIcon />
          </div>
        ))}
        
        <div className="absolute top-2 right-2 text-lg font-bold text-gray-500">
          Score: {Math.floor(score / 10)}
        </div>

        {(!isGameRunning && !isGameOver) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white">
                <h3 className="text-3xl font-bold">Rainbow Hop!</h3>
                <p>Click or Press Space to Start</p>
            </div>
        )}

        {isGameOver && (
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

export default Game;