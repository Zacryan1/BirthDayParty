import { motion } from "framer-motion";

export default function SparkleBackground() {
  const sparkles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    left: [10, 80, 60, 30, 90, 20][i],
    top: [20, 30, 60, 80, 70, 50][i],
    delay: i * 0.5
  }));

  return (
    <div className="sparkles fixed inset-0 pointer-events-none overflow-hidden" data-testid="container-sparkle-background">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="sparkle absolute w-1 h-1 bg-gradient-to-r from-magical-gold to-white rounded-full"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut"
          }}
          data-testid={`sparkle-${sparkle.id}`}
        />
      ))}
    </div>
  );
}
