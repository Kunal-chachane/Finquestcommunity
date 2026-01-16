import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Main cursor bubble */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
        animate={{
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-10 h-10 bg-white rounded-full blur-sm" />
      </motion.div>

      {/* Secondary trailing bubble */}
      <motion.div
        className="fixed pointer-events-none z-40 mix-blend-difference"
        style={{
          left: mousePosition.x - 15,
          top: mousePosition.y - 15,
        }}
        animate={{
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 0.3 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8,
          delay: 0.05,
        }}
      >
        <div className="w-8 h-8 bg-white rounded-full blur-md" />
      </motion.div>

      {/* Subtle glow effect */}
      <motion.div
        className="fixed pointer-events-none z-30"
        style={{
          left: mousePosition.x - 25,
          top: mousePosition.y - 25,
        }}
        animate={{
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 0.1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 35,
          mass: 1,
          delay: 0.1,
        }}
      >
        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg" />
      </motion.div>
    </>
  );
}