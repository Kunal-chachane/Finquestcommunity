import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Droplet {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export function CursorDroplets() {
  const [droplets, setDroplets] = useState<Droplet[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let dropletId = 0;
    let lastDropletTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      
      // Create a new droplet every 100ms to avoid too many droplets
      if (now - lastDropletTime > 100) {
        const newDroplet: Droplet = {
          id: dropletId++,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 8 + 4, // Random size between 4-12px
          delay: Math.random() * 0.2, // Random delay up to 200ms
        };

        setDroplets(prev => [...prev, newDroplet]);
        lastDropletTime = now;

        // Remove droplet after 1.5 seconds
        setTimeout(() => {
          setDroplets(prev => prev.filter(droplet => droplet.id !== newDroplet.id));
        }, 1500);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      <AnimatePresence>
        {droplets.map((droplet) => (
          <motion.div
            key={droplet.id}
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: droplet.x - droplet.size / 2,
              y: droplet.y - droplet.size / 2
            }}
            animate={{ 
              opacity: [0, 0.8, 0.6, 0],
              scale: [0, 1, 1.2, 0.8],
              x: droplet.x - droplet.size / 2 + (Math.random() - 0.5) * 20,
              y: droplet.y - droplet.size / 2 + Math.random() * 30 + 10,
            }}
            exit={{ 
              opacity: 0, 
              scale: 0,
              transition: { duration: 0.2 }
            }}
            transition={{
              duration: 1.5,
              delay: droplet.delay,
              ease: "easeOut"
            }}
            className="absolute"
            style={{
              width: droplet.size,
              height: droplet.size,
            }}
          >
            <div
              className="w-full h-full rounded-full bg-gradient-to-br from-blue-400/60 via-cyan-300/50 to-blue-500/40 shadow-lg backdrop-blur-sm border border-white/20"
              style={{
                background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6), rgba(59, 130, 246, 0.4), rgba(29, 78, 216, 0.2))`,
                boxShadow: `
                  0 0 ${droplet.size * 0.5}px rgba(59, 130, 246, 0.3),
                  inset 0 0 ${droplet.size * 0.3}px rgba(255, 255, 255, 0.2)
                `
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}