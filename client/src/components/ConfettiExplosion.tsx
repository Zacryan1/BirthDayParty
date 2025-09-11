import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  size: number;
  opacity: number;
}

interface ConfettiExplosionProps {
  isActive: boolean;
  onComplete?: () => void;
}

export default function ConfettiExplosion({ isActive, onComplete }: ConfettiExplosionProps) {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!isActive) {
      setConfetti([]);
      return;
    }

    // Create lots of confetti pieces
    const pieces: ConfettiPiece[] = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 50,
      vx: (Math.random() - 0.5) * 10,
      vy: -(Math.random() * 15 + 10),
      color: `hsl(${Math.random() * 360}, 80%, 60%)`,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      size: Math.random() * 8 + 4,
      opacity: 1,
    }));

    setConfetti(pieces);

    // Animate confetti
    const animationInterval = setInterval(() => {
      setConfetti((prevConfetti) => {
        const updatedConfetti = prevConfetti.map((piece) => ({
          ...piece,
          x: piece.x + piece.vx,
          y: piece.y + piece.vy,
          vy: piece.vy + 0.3, // gravity
          rotation: piece.rotation + piece.rotationSpeed,
          opacity: piece.y > window.innerHeight ? Math.max(0, piece.opacity - 0.02) : piece.opacity,
        }));

        // Remove pieces that have fallen off screen and faded
        return updatedConfetti.filter((piece) => 
          piece.y < window.innerHeight + 100 && piece.opacity > 0
        );
      });
    }, 16);

    // Clean up after animation
    const timeout = setTimeout(() => {
      clearInterval(animationInterval);
      onComplete?.();
    }, 8000);

    return () => {
      clearInterval(animationInterval);
      clearTimeout(timeout);
    };
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}px`,
            top: `${piece.y}px`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            opacity: piece.opacity,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
          }}
        />
      ))}
    </div>
  );
}