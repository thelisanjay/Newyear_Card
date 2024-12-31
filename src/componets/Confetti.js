import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export function Confetti({ isActive }) {
  const [isConfettiActive, setIsConfettiActive] = useState(isActive);

  useEffect(() => {
    setIsConfettiActive(isActive);
  }, [isActive]);

  useEffect(() => {
    if (isConfettiActive) {
      const duration = 15 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isConfettiActive]);

  return (
    <button
      className="fixed bottom-4 right-4 bg-white text-purple-500 px-4 py-2 rounded-full shadow-lg hover:bg-purple-100 transition-colors"
      onClick={() => setIsConfettiActive(prev => !prev)}
    >
      {isConfettiActive ? 'Stop Confetti' : 'Start Confetti'}
    </button>
  );
}

