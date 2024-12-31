import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import gsap from 'gsap';
import { AnimatedText } from './componets/AnimatedText';
import { Countdown } from './componets/Countdown';
import { Fireworks } from './componets/Fireworks';
import { Confetti } from './componets/Confetti';
import PartyConeBomb from './componets/PartyConeBomb';
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
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-4 overflow-hidden relative">
      <AnimatedText
  text={isCountdownComplete
    ? "కొత్త సంవత్సరంలో\nకొత్త ఆశలు, \nకొత్త సంకల్పాలు,\nవిజయాల పంట \nపండనీ!"
    : "Countdown to 2025!"
  }
  className="text-lg md:text-2xl lg:text-3xl text-center leading-tight px-4"
  style={{ whiteSpace: 'pre-line' }}
/>        {!isCountdownComplete && <Countdown onComplete={handleCountdownComplete} />}
        <motion.div
          ref={celebrateRef}
          className="text-2xl md:text-4xl text-white text-center mb-8"
        >
          {isCountdownComplete ? "Let's celebrate the New Year!" : "Get ready for the New Year!"}
        </motion.div>
        <Fireworks />
        <Confetti isActive={!isCountdownComplete} />
        <PartyConeBomb position="left" />
        <PartyConeBomb position="right" />
      </main>
    </div>
  );
}

export default App;

