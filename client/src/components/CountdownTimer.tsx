import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  onComplete: () => void;
}

export default function CountdownTimer({ onComplete }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-09-18T00:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const timeDiff = targetDate.getTime() - now.getTime();

      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <motion.h1 
        className="font-serif text-6xl md:text-8xl font-bold text-magical-purple mb-4"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        data-testid="title-magical-birthday"
      >
        Magical Birthday
      </motion.h1>
      
      <motion.p 
        className="font-script text-3xl md:text-4xl text-magical-gold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        data-testid="text-celebration-date"
      >
        ✨ September 18th Celebration ✨
      </motion.p>
      
      <motion.div 
        className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
        data-testid="card-countdown-timer"
      >
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6" data-testid="text-countdown-title">
          Time Until the Magic Begins
        </h2>
        
        <div className="grid grid-cols-4 gap-4 md:gap-6">
          <div className="text-center">
            <div className="countdown-number font-serif text-4xl md:text-6xl font-bold" data-testid="text-countdown-days">
              {timeLeft.days.toString().padStart(2, '0')}
            </div>
            <div className="text-muted-foreground font-medium">Days</div>
          </div>
          <div className="text-center">
            <div className="countdown-number font-serif text-4xl md:text-6xl font-bold" data-testid="text-countdown-hours">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-muted-foreground font-medium">Hours</div>
          </div>
          <div className="text-center">
            <div className="countdown-number font-serif text-4xl md:text-6xl font-bold" data-testid="text-countdown-minutes">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-muted-foreground font-medium">Minutes</div>
          </div>
          <div className="text-center">
            <div className="countdown-number font-serif text-4xl md:text-6xl font-bold" data-testid="text-countdown-seconds">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-muted-foreground font-medium">Seconds</div>
          </div>
        </div>
      </motion.div>

      <motion.button
        onClick={onComplete}
        className="bg-magical-purple hover:bg-magical-purple/80 text-primary-foreground px-8 py-4 rounded-full font-serif text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        data-testid="button-begin-journey"
      >
        Begin Your Magical Journey ✨
      </motion.button>
    </div>
  );
}
