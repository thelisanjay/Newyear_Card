import React from 'react';
import { motion } from 'framer-motion';

const PartyConeBomb = ({ position }) => {
  const colors = ['#FF69B4', '#FF6347', '#FFD700', '#00CED1', '#32CD32'];

  const confettiVariants = {
    initial: { y: 0, opacity: 0 },
    animate: { 
      y: [0, -100, -50],
      opacity: [0, 1, 0],
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  };

  return (
    <div className={`absolute ${position === 'left' ? 'left-0' : 'right-0'} bottom-0`}>
      <motion.div
        initial={{ rotate: position === 'left' ? -45 : 45 }}
        animate={{ rotate: position === 'left' ? [-45, -30, -45] : [45, 30, 45] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="w-0 h-0 border-l-[50px] border-r-[50px] border-b-[100px] border-l-transparent border-r-transparent border-b-yellow-400"
      >
        {colors.map((color, index) => (
          <motion.div
            key={index}
            variants={confettiVariants}
            initial="initial"
            animate="animate"
            style={{
              position: 'absolute',
              bottom: '80px',
              left: `${index * 10}px`,
              width: '10px',
              height: '10px',
              backgroundColor: color,
              borderRadius: '50%',
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default PartyConeBomb;

