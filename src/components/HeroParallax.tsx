import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroParallaxProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

const HeroParallax: React.FC<HeroParallaxProps> = ({ 
  children, 
  strength = 200, 
  className = '' 
}) => {
  const [elementTop, setElementTop] = useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Create parallax effect
  const y = useTransform(
    scrollY, 
    [elementTop, elementTop + strength],
    [0, strength]
  );

  // Update element position
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const updatePosition = () => {
      const { top } = element.getBoundingClientRect();
      setElementTop(top + window.scrollY);
    };
    
    updatePosition();
    window.addEventListener('resize', updatePosition);
    
    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0">
        {children}
      </motion.div>
    </div>
  );
};

export default HeroParallax;