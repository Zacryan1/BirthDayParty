import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Firefly {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function FirefliesBackground() {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);

  useEffect(() => {
    const createFireflies = () => {
      const newFireflies: Firefly[] = [];
      for (let i = 0; i < 25; i++) {
        newFireflies.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 10 + 8,
          delay: Math.random() * 5,
          opacity: Math.random() * 0.8 + 0.2
        });
      }
      setFireflies(newFireflies);
    };

    createFireflies();
  }, []);

  return (
    <div className="fireflies-container fixed inset-0 pointer-events-none overflow-hidden" data-testid="fireflies-background">
      {fireflies.map((firefly) => (
        <motion.div
          key={firefly.id}
          className="firefly absolute rounded-full"
          style={{
            width: `${firefly.size}px`,
            height: `${firefly.size}px`,
            left: `${firefly.x}%`,
            top: `${firefly.y}%`,
            background: `radial-gradient(circle, rgba(255, 255, 100, ${firefly.opacity}) 0%, rgba(255, 255, 150, 0.6) 30%, transparent 70%)`,
            boxShadow: `0 0 ${firefly.size * 3}px rgba(255, 255, 100, 0.8), 0 0 ${firefly.size * 6}px rgba(255, 255, 150, 0.4)`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, Math.random() * 150 - 75, 0],
            y: [0, Math.random() * 200 - 100, Math.random() * 150 - 75, 0],
            opacity: [firefly.opacity, firefly.opacity * 1.5, firefly.opacity * 0.3, firefly.opacity],
            scale: [1, 1.5, 0.8, 1]
          }}
          transition={{
            duration: firefly.duration,
            repeat: Infinity,
            delay: firefly.delay,
            ease: "easeInOut"
          }}
          data-testid={`firefly-${firefly.id}`}
        />
      ))}
      
      {/* Additional glowing particles */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="particle absolute w-1 h-1 rounded-full bg-magical-gold"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 6px rgba(255, 215, 0, 0.8)'
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
          data-testid={`particle-${i}`}
        />
      ))}
    </div>
  );
}