import { motion } from "framer-motion";
import ForestBackground from "@/components/ForestBackground";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  return (
    <div className="forest-night-bg min-h-screen relative flex items-center justify-center overflow-hidden" data-testid="forest-section">
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
    </div>
  );
}
