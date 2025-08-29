import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";
import GreetingCard from "@/components/GreetingCard";
import RosePetals from "@/components/RosePetals";
import SparkleBackground from "@/components/SparkleBackground";

type Scene = 'countdown' | 'greeting-card' | 'final-celebration';

export default function Home() {
  const [currentScene, setCurrentScene] = useState<Scene>('countdown');

  const transitionToScene = (scene: Scene) => {
    setCurrentScene(scene);
  };

  const sceneVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="magical-gradient min-h-screen relative overflow-x-hidden">
      <SparkleBackground />
      
      <AnimatePresence mode="wait">
        {currentScene === 'countdown' && (
          <motion.div
            key="countdown"
            variants={sceneVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col items-center justify-center p-8"
            data-testid="countdown-scene"
          >
            <CountdownTimer onComplete={() => transitionToScene('greeting-card')} />
          </motion.div>
        )}

        {currentScene === 'greeting-card' && (
          <motion.div
            key="greeting-card"
            variants={sceneVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col items-center justify-center p-8"
            data-testid="greeting-card-scene"
          >
            <GreetingCard onComplete={() => transitionToScene('final-celebration')} />
          </motion.div>
        )}

        {currentScene === 'final-celebration' && (
          <motion.div
            key="final-celebration"
            variants={sceneVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col items-center justify-center p-8 relative"
            data-testid="final-celebration-scene"
          >
            <RosePetals />
            <div className="text-center z-10 relative">
              <motion.h2 
                className="font-serif text-6xl md:text-8xl font-bold text-magical-purple mb-8"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                data-testid="title-final-celebration"
              >
                🎉 Happy Birthday! 🎉
              </motion.h2>
              
              <motion.p 
                className="font-script text-3xl text-magical-gold mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                data-testid="text-final-message"
              >
                ✨ May your special day be filled with magical moments ✨
              </motion.p>

              <motion.button
                onClick={() => transitionToScene('countdown')}
                className="bg-magical-pink hover:bg-magical-pink/80 text-primary-foreground px-8 py-4 rounded-full font-serif text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                data-testid="button-start-over"
              >
                Start Over 🌹
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
