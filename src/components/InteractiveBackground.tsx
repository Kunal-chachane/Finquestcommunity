import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  createdAt: number;
}

export function InteractiveBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const createBubble = useCallback((x: number, y: number) => {
    const newBubble: Bubble = {
      id: Date.now() + Math.random(),
      x: x + (Math.random() - 0.5) * 40, // Add slight randomness
      y: y + (Math.random() - 0.5) * 40,
      size: Math.random() * 14 + 6, // 6px to 20px
      opacity: Math.random() * 0.1 + 0.1, // 10% to 20%
      createdAt: Date.now(),
    };

    setBubbles(prev => [...prev, newBubble]);

    // Remove bubble after 1.5 seconds
    setTimeout(() => {
      setBubbles(prev => prev.filter(bubble => bubble.id !== newBubble.id));
    }, 1500);
  }, []);

  useEffect(() => {
    let lastBubbleTime = 0;
    const minInterval = 100; // Minimum time between bubbles (ms)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const now = Date.now();
      if (now - lastBubbleTime > minInterval) {
        createBubble(e.clientX, e.clientY);
        lastBubbleTime = now;
      }
    };

    const handleMouseLeave = () => {
      // Clear all bubbles when mouse leaves
      setBubbles([]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [createBubble]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Background overlay for better bubble visibility */}
      <div className="absolute inset-0 bg-black/5" />
      
      <AnimatePresence>
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full"
            style={{
              left: bubble.x - bubble.size / 2,
              top: bubble.y - bubble.size / 2,
              width: bubble.size,
              height: bubble.size,
              backgroundColor: `rgba(255, 255, 255, ${bubble.opacity})`,
              filter: 'blur(1px)',
            }}
            initial={{ 
              scale: 0,
              opacity: 0,
            }}
            animate={{ 
              scale: 1,
              opacity: bubble.opacity,
            }}
            exit={{ 
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94], // Apple-style easing
            }}
          />
        ))}
      </AnimatePresence>

      {/* Additional larger, slower bubbles for depth */}
      <AnimatePresence>
        {bubbles
          .filter((_, index) => index % 3 === 0) // Only every 3rd bubble
          .map((bubble) => (
            <motion.div
              key={`large-${bubble.id}`}
              className="absolute rounded-full"
              style={{
                left: bubble.x - (bubble.size * 1.5) / 2,
                top: bubble.y - (bubble.size * 1.5) / 2,
                width: bubble.size * 1.5,
                height: bubble.size * 1.5,
                backgroundColor: `rgba(255, 255, 255, ${bubble.opacity * 0.3})`,
                filter: 'blur(3px)',
              }}
              initial={{ 
                scale: 0,
                opacity: 0,
              }}
              animate={{ 
                scale: 1,
                opacity: bubble.opacity * 0.3,
              }}
              exit={{ 
                scale: 0,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            />
          ))}
      </AnimatePresence>
    </div>
  );
}