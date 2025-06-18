import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    // Add event listeners for all clickable elements
    const clickables = document.querySelectorAll(
      'a, button, input[type="submit"], input[type="button"], .clickable'
    );

    const enterClickable = () => setCursorVariant('clickable');
    const leaveClickable = () => setCursorVariant('default');

    clickables.forEach((element) => {
      element.addEventListener('mouseenter', enterClickable);
      element.addEventListener('mouseleave', leaveClickable);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      clickables.forEach((element) => {
        element.removeEventListener('mouseenter', enterClickable);
        element.removeEventListener('mouseleave', leaveClickable);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(12, 74, 110, 0.1)',
      border: '1px solid rgba(14, 165, 233, 0.4)',
      transition: {
        type: 'spring',
        mass: 0.3,
      },
    },
    clickable: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(14, 165, 233, 0.2)',
      border: '1px solid rgba(14, 165, 233, 0.8)',
      transition: {
        type: 'spring',
        mass: 0.3,
      },
    },
  };

  // Only show custom cursor on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
        variants={variants}
        animate={cursorVariant}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: 'spring',
          mass: 0.1,
        }}
        style={{
          height: 8,
          width: 8,
          backgroundColor: '#0ea5e9',
        }}
      />
    </>
  );
};

export default Cursor;