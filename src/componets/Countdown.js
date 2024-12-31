import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { formatTime } from '../utils/formatTime';

export function Countdown({ onComplete }) {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date('January 1, 2025 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      setTimeLeft(distance);

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft(0);
        onComplete();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [onComplete]);

  const timeString = formatTime(timeLeft);

  return (
    <div className="text-4xl md:text-6xl font-bold text-white mb-8 p-6 bg-black bg-opacity-30 rounded-lg">
      {timeString.split(' ').map((part, index) => (
        <motion.span
          key={index}
          className="inline-block mx-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1, type: 'spring', stiffness: 120 }}
        >
          {part}
        </motion.span>
      ))}
    </div>
  );
}

