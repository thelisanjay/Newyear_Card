import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Firework() {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full"
      style={{ left: `${x}%`, top: `${y}%`, backgroundColor: color }}
      initial={{ scale: 0 }}
      animate={{
        scale: [0, 1, 1, 0],
        opacity: [1, 1, 0],
      }}
      transition={{
        duration: 1,
        times: [0, 0.2, 0.8, 1],
        ease: "easeOut",
      }}
    />
  );
}

export function Fireworks() {
  const [fireworks, setFireworks] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFireworks(prev => [
        ...prev,
        <Firework key={Date.now()} />
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {fireworks}
    </div>
  );
}

