'use client';
import { useState, useRef, useEffect, ReactNode } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

interface ScrollVisibilityProps {
  children: ReactNode;
}

const ScrollVisibility = ({ children }: ScrollVisibilityProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <Element name='fade-in-section' className="mbb-l">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 150 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        ref={elementRef}
      >
        {children}
      </motion.div>
    </Element>
  );
};

export default ScrollVisibility;