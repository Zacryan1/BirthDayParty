import { useEffect } from "react";
import { motion } from "framer-motion";
import ForestBackground from "@/components/ForestBackground";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  useEffect(() => {
    // Auto-scroll to second section after 5 seconds
    const timer = setTimeout(() => {
      const secondSection = document.getElementById('celebration-section');
      if (secondSection) {
        secondSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* First Section - Forest Night with Fireflies */}
      <section className="forest-night-bg min-h-screen relative flex items-center justify-center" data-testid="forest-section">
        <ForestBackground />
        
        <motion.div 
          className="text-center z-20 relative px-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          data-testid="birthday-invitation"
        >
          <div className="forest-timer-container">
            <CountdownTimer onComplete={() => {}} />
          </div>
        </motion.div>
      </section>

      {/* Second Section - Celebration */}
      <section 
        id="celebration-section"
        className="celebration-bg min-h-screen relative flex items-center justify-center" 
        data-testid="celebration-section"
      >
        <motion.div 
          className="text-center z-10 relative px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          data-testid="celebration-content"
        >
          <motion.h2 
            className="celebration-text font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-8"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 1, -1, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            data-testid="title-celebration"
          >
            🎉 Welcome to the Celebration 🎉
          </motion.h2>
          
          <motion.p 
            className="font-script text-3xl md:text-4xl text-magical-gold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            viewport={{ once: true }}
            data-testid="text-celebration-message"
          >
            Let the magical festivities begin!
          </motion.p>

          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-block bg-magical-gold/20 backdrop-blur-sm rounded-full px-12 py-6 border-2 border-magical-gold/50"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(255, 215, 0, 0.3)",
                  "0 0 40px rgba(255, 215, 0, 0.6)",
                  "0 0 20px rgba(255, 215, 0, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              data-testid="container-celebration-message"
            >
              <p className="font-serif text-2xl text-white" data-testid="text-party-time">
                🎂 Time to Party! 🎂
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Celebration particles */}
        <div className="celebration-particles absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="celebration-particle absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 40 - 20, 0],
                rotate: [0, 360],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
              data-testid={`celebration-particle-${i}`}
            >
              {['🎈', '🎊', '✨', '🌟', '🎁'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
