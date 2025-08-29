import { motion } from "framer-motion";

export default function RosePetals() {
  const petals = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    delay: Math.random() * 3,
    duration: Math.random() * 4 + 3,
    startX: Math.random() * 100,
    endX: Math.random() * 100,
    rotation: Math.random() * 360
  }));

  return (
    <div className="rose-petals-container fixed inset-0 pointer-events-none z-20" data-testid="container-rose-petals">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="rose-petal absolute"
          style={{
            left: `${petal.startX}%`,
            top: '-10vh'
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, petal.endX - petal.startX],
            rotate: [0, petal.rotation, petal.rotation * 2],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "easeOut"
          }}
          data-testid={`rose-petal-${petal.id}`}
        >
          🌹
        </motion.div>
      ))}
    </div>
  );
}