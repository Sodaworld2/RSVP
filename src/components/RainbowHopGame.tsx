import React, { useState, useEffect, useCallback } from 'react';
import './RainbowHopGame.css';

const GAME_WIDTH = 800;
const GAME_HEIGHT = 400;
const PLAYER_SIZE = 40;
const GRAVITY = 0.6;
const JUMP_FORCE = -15;
const OBSTACLE_WIDTH = 50;
const OBSTACLE_SPEED = 5;
const OBSTACLE_GAP = 200; // Gap between obstacles
const OBSTACLE_INTERVAL = 1500; // ms

interface Obstacle {
  x: number;
  height: number;
}

const RainbowHopGame = () => {
  const [playerY, setPlayerY] = useState(GAME_HEIGHT - PLAYER_SIZE);
  const [playerVelY, setPlayerVelY] = useState(0);
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isRunning, setIsRunning] = useState(true);

  // Player jump
  const handleJump = useCallback((e: KeyboardEvent) => {
    if (e.code === 'Space' && !gameOver && isRunning) {
      if(playerY === GAME_HEIGHT - PLAYER_SIZE) { // can only jump from the ground
        setPlayerVelY(JUMP_FORCE);
      }
    }
    if(e.code === 'Space' && gameOver) {
        // Reset game
        setPlayerY(GAME_HEIGHT - PLAYER_SIZE);
        setPlayerVelY(0);
        setObstacles([]);
        setScore(0);
        setGameOver(false);
        setIsRunning(true);
    }
  }, [gameOver, isRunning, playerY]);

  useEffect(() => {
    document.addEventListener('keydown', handleJump);
    return () => document.removeEventListener('keydown', handleJump);
  }, [handleJump]);

  // Game loop
  useEffect(() => {
    if (!isRunning) return;

    const gameInterval = setInterval(() => {
      // Gravity
      setPlayerVelY(v => v + GRAVITY);
      setPlayerY(y => Math.min(y + playerVelY, GAME_HEIGHT - PLAYER_SIZE));

      // Move obstacles
      setObstacles(obs => obs.map(o => ({ ...o, x: o.x - OBSTACLE_SPEED })).filter(o => o.x > -OBSTACLE_WIDTH));

      // Collision detection
      const playerRect = { x: 50, y: playerY, width: PLAYER_SIZE, height: PLAYER_SIZE };
      obstacles.forEach(obstacle => {
        const obstacleRect = { x: obstacle.x, y: GAME_HEIGHT - obstacle.height, width: OBSTACLE_WIDTH, height: obstacle.height };
        if (
          playerRect.x < obstacleRect.x + obstacleRect.width &&
          playerRect.x + playerRect.width > obstacleRect.x &&
          playerRect.y < obstacleRect.y + obstacleRect.height &&
          playerRect.y + playerRect.height > obstacleRect.y
        ) {
          setIsRunning(false);
          setGameOver(true);
        }
      });

      // Update score
      const passedObstacle = obstacles.find(o => o.x + OBSTACLE_WIDTH < playerRect.x && o.x + OBSTACLE_WIDTH > playerRect.x - OBSTACLE_SPEED);
      if (passedObstacle) {
        setScore(s => s + 1);
      }

    }, 1000 / 60);

    return () => clearInterval(gameInterval);
  }, [isRunning, playerVelY, obstacles]);

  // Obstacle generation
  useEffect(() => {
    if (!isRunning) return;

    const obstacleInterval = setInterval(() => {
        const newHeight = Math.floor(Math.random() * (GAME_HEIGHT - OBSTACLE_GAP));
        setObstacles(obs => [...obs, { x: GAME_WIDTH, height: newHeight + 50 }]);
    }, OBSTACLE_INTERVAL);

    return () => clearInterval(obstacleInterval);
  }, [isRunning]);


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-200">
        <h1 className="text-3xl font-bold mb-4">Rainbow Hop</h1>
        <div
            className="game-area"
            style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
        >
            <div
                className="player"
                style={{
                    width: PLAYER_SIZE,
                    height: PLAYER_SIZE,
                    transform: `translateY(${playerY}px)`,
                    left: '50px'
                }}
            >
                🌈
            </div>
            {obstacles.map((obstacle, i) => (
                <div key={i} className="obstacle" style={{
                    width: OBSTACLE_WIDTH,
                    height: obstacle.height,
                    left: obstacle.x,
                }} />
            ))}
        </div>
        <div className="text-2xl font-bold mt-4">Score: {score}</div>
        {gameOver && (
            <div className="absolute flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-8 rounded-lg">
                <h2 className="text-4xl font-bold">Game Over</h2>
                <p className="mt-4">Press Spacebar to play again</p>
            </div>
        )}
    </div>
  );
};

export default RainbowHopGame;
