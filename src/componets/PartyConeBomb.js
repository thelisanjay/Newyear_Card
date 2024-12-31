import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import partySound from '../assets/party-sound.mp3'; // Import a party sound

const PartyConeBomb = ({ position }) => {
  const bombRef = useRef(null);
  const audio = new Audio(partySound);

  useEffect(() => {
    if (bombRef.current) {
      gsap.fromTo(
        bombRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1.5, opacity: 1, duration: 1, repeat: 0, ease: 'bounce.out' }
      );
    }
  }, []);

  const triggerEffect = () => {
    audio.play(); // Play sound
    gsap.to(bombRef.current, {
      scale: 2,
      opacity: 0,
      duration: 1,
      ease: 'power1.out',
      onComplete: () => gsap.set(bombRef.current, { scale: 1, opacity: 1 }), // Reset
    });
  };

  return (
    <div
      ref={bombRef}
      onClick={triggerEffect}
      className={`party-bomb ${position === 'left' ? 'left-bomb' : 'right-bomb'}`}
    >
      🎉
    </div>
  );
};

export default PartyConeBomb;
