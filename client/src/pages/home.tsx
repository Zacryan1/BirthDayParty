import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";
import PrincessSelection from "@/components/PrincessSelection";
import PrinceScene from "@/components/PrinceScene";
import CastleScene from "@/components/CastleScene";
import CakeScene from "@/components/CakeScene";
import SparkleBackground from "@/components/SparkleBackground";
import rapunzelImage from "@/assets/rapunzel.jpg";

type Scene = 'countdown' | 'princess-selection' | 'prince' | 'castle' | 'cake';

interface Princess {
  name: string;
  title: string;
  image: string;
}

export default function Home() {
  const [currentScene, setCurrentScene] = useState<Scene>('countdown');
  const [selectedPrincess, setSelectedPrincess] = useState<Princess | null>(null);

  const princesses: Princess[] = [
    { name: 'Belle', title: 'Beauty and the Beast', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400' },
    { name: 'Cinderella', title: 'A Dream is a Wish', image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400' },
    { name: 'Ariel', title: 'The Little Mermaid', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400' },
    { name: 'Rapunzel', title: 'Tangled', image: rapunzelImage },
    { name: 'Snow White', title: 'Fairest of All', image: 'https://pixabay.com/get/ga27b8e0a556a325f72742c93db694053e823f4d7813b2ffd70f9fb38c461579b60dcf123a062d651ac1baae082dfc5b40ed721ae89b34ff9cd462533c616f036_1280.jpg' },
    { name: 'Aurora', title: 'Sleeping Beauty', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400' },
    { name: 'Jasmine', title: 'A Whole New World', image: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400' },
    { name: 'Tiana', title: 'Princess and the Frog', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400' }
  ];

  const transitionToScene = (scene: Scene) => {
    setCurrentScene(scene);
  };

  const handlePrincessSelect = (princess: Princess) => {
    setSelectedPrincess(princess);
    setTimeout(() => {
      transitionToScene('prince');
    }, 800);
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
            <CountdownTimer onComplete={() => transitionToScene('princess-selection')} />
          </motion.div>
        )}

        {currentScene === 'princess-selection' && (
          <motion.div
            key="princess-selection"
            variants={sceneVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col items-center justify-center p-8"
            data-testid="princess-selection-scene"
          >
            <PrincessSelection princesses={princesses} onSelect={handlePrincessSelect} />
          </motion.div>
        )}

        {currentScene === 'prince' && (
          <motion.div
            key="prince"
            variants={sceneVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col items-center justify-center p-8"
            data-testid="prince-scene"
          >
            <PrinceScene 
              selectedPrincess={selectedPrincess} 
              onAcceptRoses={() => transitionToScene('castle')} 
            />
          </motion.div>
        )}

        {currentScene === 'castle' && (
          <motion.div
            key="castle"
            variants={sceneVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col items-center justify-center p-8"
            data-testid="castle-scene"
          >
            <CastleScene onEnterCastle={() => transitionToScene('cake')} />
          </motion.div>
        )}

        {currentScene === 'cake' && (
          <motion.div
            key="cake"
            variants={sceneVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col items-center justify-center p-8"
            data-testid="cake-scene"
          >
            <CakeScene 
              selectedPrincess={selectedPrincess} 
              onRestart={() => {
                setSelectedPrincess(null);
                transitionToScene('countdown');
              }} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
