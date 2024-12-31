import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import gsap from 'gsap';
import { AnimatedText } from './componets/AnimatedText';  
import { Countdown } from './componets/Countdown';
import { Fireworks } from './componets/Fireworks';
import { Confetti } from './componets/Confetti';
import './App.css';

function App() {
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);
  const controls = useAnimation();
  const celebrateRef = useRef(null);

  useEffect(() => {
    controls.start({
      scale: [1, 1.1, 1],
      transition: { duration: 2, repeat: Infinity }
    });

    if (celebrateRef.current) {
      gsap.to(celebrateRef.current, {
        y: -20,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, [controls]);

  const handleCountdownComplete = () => {
    setIsCountdownComplete(true);
  };

  return (
    <div className="App">
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-4 overflow-hidden">
        <AnimatedText text={isCountdownComplete ? "Happy New Year 2025!" : "Countdown to 2025!"} />
        {!isCountdownComplete && <Countdown onComplete={handleCountdownComplete} />}
        <motion.div
          ref={celebrateRef}
          className="text-2xl md:text-4xl text-white text-center mb-8"
        >
          {isCountdownComplete ? "Let's celebrate the New Year!" : "Get ready for the New Year!"}
        </motion.div>
        <Fireworks />
        <Confetti isActive={!isCountdownComplete} />
      </main>
    </div>
  );
}

export default App;

