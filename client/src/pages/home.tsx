import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ForestBackground from "@/components/ForestBackground";
import CountdownTimer from "@/components/CountdownTimer";
import PartyAnimation from "@/components/PartyAnimation";
import PhotoCarousel from "@/components/PhotoCarousel";
import backgroundVideo from "@/assets/background.mp4";

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setShowAnimation(false);
    setShowCarousel(true);
  };

  // Slow down video playback when carousel is shown
  useEffect(() => {
    if (showCarousel && videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slow down to 70% speed
    }
  }, [showCarousel]);

  return (
    <div className="forest-night-bg min-h-screen relative flex items-center justify-center overflow-hidden" data-testid="forest-section">
      {!showCarousel && <ForestBackground />}

      {/* Carousel video background */}
      {showCarousel && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={backgroundVideo}
          autoPlay
          loop
          muted // Remove muted to allow sound
          playsInline
        />
      )}

      <motion.div
        className="text-center z-20 relative px-8 w-full h-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {!showAnimation && !showCarousel && (
          <div className="forest-timer-container">
            <CountdownTimer onComplete={() => setShowAnimation(true)} />
          </div>
        )}

        {showAnimation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <PartyAnimation onVideoEnd={handleVideoEnd} />
          </motion.div>
        )}

        {showCarousel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <PhotoCarousel />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
