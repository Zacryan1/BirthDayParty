import { motion } from "framer-motion";
import FirefliesBackground from "@/components/FirefliesBackground";

export default function Home() {
  return (
    <div className="magical-birthday-bg min-h-screen relative overflow-hidden flex items-center justify-center">
      <FirefliesBackground />
      
      <motion.div 
        className="text-center z-10 relative px-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        data-testid="birthday-invitation"
      >
        <motion.h1 
          className="glowing-text font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
          animate={{ 
            textShadow: [
              "0 0 20px rgba(255, 255, 100, 0.8), 0 0 40px rgba(255, 255, 150, 0.6), 0 0 60px rgba(255, 215, 0, 0.4)",
              "0 0 30px rgba(255, 255, 100, 1), 0 0 60px rgba(255, 255, 150, 0.8), 0 0 90px rgba(255, 215, 0, 0.6)",
              "0 0 20px rgba(255, 255, 100, 0.8), 0 0 40px rgba(255, 255, 150, 0.6), 0 0 60px rgba(255, 215, 0, 0.4)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          data-testid="title-happy-birthday"
        >
          ✨ Happiest 24th Birthday! ✨
        </motion.h1>
        
        <motion.p 
          className="glowing-subtitle font-script text-2xl md:text-4xl lg:text-5xl text-magical-gold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          data-testid="subtitle-magical-celebration"
        >
          You're invited to a magical celebration
        </motion.p>

        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.p 
            className="font-serif text-xl md:text-2xl text-white/90 mb-4"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            data-testid="text-date-celebration"
          >
            September 18th, 2025
          </motion.p>
          
          <motion.div 
            className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 border border-white/20"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            transition={{ duration: 0.3 }}
            data-testid="container-rsvp"
          >
            <p className="font-script text-lg text-white/80" data-testid="text-rsvp">
              ✨ A day filled with wonder awaits ✨
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
