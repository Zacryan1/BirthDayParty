import { useState } from "react";
import { motion } from "framer-motion";

interface GreetingCardProps {
  onComplete: () => void;
}

export default function GreetingCard({ onComplete }: GreetingCardProps) {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <div className="text-center relative overflow-hidden">
      {/* Confetti Animation */}
      <div className="confetti-container fixed inset-0 pointer-events-none z-10">
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="confetti absolute w-2 h-2"
            style={{
              left: `${Math.random() * 100}%`,
              backgroundColor: ['#FFD700', '#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD'][Math.floor(Math.random() * 5)]
            }}
            animate={{
              y: ['-10vh', '110vh'],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
            data-testid={`confetti-${i}`}
          />
        ))}
      </div>

      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-magical-purple mb-4" data-testid="title-birthday-greeting">
          🎉 Happy Birthday! 🎉
        </h2>
        <p className="font-script text-2xl text-magical-gold" data-testid="text-greeting-subtitle">
          ✨ A special message just for you ✨
        </p>
      </motion.div>

      {/* Greeting Card */}
      <motion.div 
        className="max-w-4xl mx-auto bg-card/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-magical-gold"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        data-testid="container-greeting-card"
      >
        <motion.h3 
          className="font-serif text-3xl font-semibold text-magical-purple mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          data-testid="text-card-title"
        >
          💖 Your Special Birthday Message 💖
        </motion.h3>

        {/* Video Container */}
        <motion.div 
          className="bg-black/10 rounded-2xl p-4 mb-6 min-h-[300px] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          data-testid="container-video-player"
        >
          <div className="text-center">
            <p className="font-script text-xl text-magical-purple mb-4" data-testid="text-video-placeholder">
              🎬 Your Custom Video Will Play Here 🎬
            </p>
            <p className="text-muted-foreground" data-testid="text-video-instructions">
              Please provide your video file to embed here
            </p>
          </div>
        </motion.div>

        <motion.p 
          className="font-script text-xl text-magical-gold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          data-testid="text-birthday-message"
        >
          "Wishing you the most magical birthday filled with love, laughter, 
          and all your heart desires. May this special day be as wonderful as you are!"
        </motion.p>

        <motion.button
          onClick={onComplete}
          className="bg-magical-purple hover:bg-magical-purple/80 text-primary-foreground px-8 py-4 rounded-full font-serif text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          data-testid="button-continue-celebration"
        >
          Continue the Celebration 🌹
        </motion.button>
      </motion.div>
    </div>
  );
}