import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export function AnimatedText({ text }) {
  const lettersRef = useRef([]);

  useEffect(() => {
    const letters = lettersRef.current;
    
    gsap.set(letters, { y: 100, opacity: 0 });
    
    gsap.to(letters, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.7)",
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.to(letters, {
      y: -20,
      stagger: {
        each: 0.1,
        from: "random"
      },
      duration: 0.5,
      ease: "power2.out"
    })
    .to(letters, {
      y: 0,
      stagger: {
        each: 0.1,
        from: "random"
      },
      duration: 0.5,
      ease: "bounce.out"
    });

  }, [text]);

  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-center overflow-hidden">
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          ref={el => lettersRef.current[index] = el}
          className="inline-block"
          whileHover={{
            scale: 1.2,
            rotate: Math.random() * 30 - 15,
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </h1>
  );
}

