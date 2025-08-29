import { motion } from "framer-motion";

export default function ForestBackground() {
  return (
    <div className="forest-container absolute inset-0 overflow-hidden" data-testid="forest-background">
      {/* Tree Silhouettes */}
      <div className="trees-layer absolute bottom-0 w-full h-full">
        <svg viewBox="0 0 1200 600" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
          {/* Left Tree */}
          <path
            d="M50 600 Q60 550 80 500 Q100 450 120 400 Q140 350 160 300 Q180 250 200 200 Q220 150 240 100 Q250 80 260 60 Q270 40 280 20 Q290 10 300 0 Q310 10 320 20 Q330 40 340 60 Q350 80 360 100 Q380 150 400 200 Q420 250 440 300 Q460 350 480 400 Q500 450 520 500 Q540 550 550 600 Z"
            fill="rgba(0, 0, 0, 0.9)"
            className="tree-silhouette"
          />
          
          {/* Center Tree */}
          <path
            d="M400 600 Q420 570 450 530 Q480 480 510 430 Q540 380 570 330 Q600 280 630 230 Q660 180 690 130 Q720 80 750 30 Q760 20 770 10 Q780 5 790 0 Q800 5 810 10 Q820 20 830 30 Q860 80 890 130 Q920 180 950 230 Q980 280 1010 330 Q1040 380 1070 430 Q1100 480 1130 530 Q1160 570 1180 600 Z"
            fill="rgba(0, 0, 0, 0.8)"
            className="tree-silhouette"
          />
          
          {/* Right Tree */}
          <path
            d="M950 600 Q960 580 980 550 Q1000 520 1020 480 Q1040 440 1060 400 Q1080 360 1100 320 Q1120 280 1140 240 Q1160 200 1180 160 Q1190 140 1195 120 Q1198 110 1200 100 Q1198 110 1195 120 Q1190 140 1180 160 Q1160 200 1140 240 Q1120 280 1100 320 Q1080 360 1060 400 Q1040 440 1020 480 Q1000 520 980 550 Q960 580 950 600 Z"
            fill="rgba(0, 0, 0, 0.7)"
            className="tree-silhouette"
          />
        </svg>
      </div>

      {/* Hanging Jars */}
      <div className="jars-container absolute inset-0">
        {[1, 2, 3, 4, 5].map((jar, index) => (
          <motion.div
            key={jar}
            className="hanging-jar absolute"
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + (index % 2) * 10}%`,
            }}
            animate={{
              rotate: [-2, 2, -2],
              y: [0, -5, 0]
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            data-testid={`hanging-jar-${jar}`}
          >
            {/* Jar String */}
            <div 
              className="jar-string w-px bg-amber-700/60 absolute left-1/2 transform -translate-x-1/2"
              style={{ height: '60px', top: '-60px' }}
            />
            
            {/* Jar Container */}
            <div className="jar-body w-16 h-20 bg-amber-900/30 border-2 border-amber-700/50 rounded-lg relative backdrop-blur-sm">
              {/* Jar Lid */}
              <div className="jar-lid w-full h-3 bg-amber-800/70 rounded-t-lg absolute -top-1"></div>
              
              {/* Fireflies inside jar */}
              {[1, 2, 3].map((firefly) => (
                <motion.div
                  key={firefly}
                  className="jar-firefly absolute w-2 h-2 rounded-full bg-yellow-300"
                  style={{
                    left: `${20 + firefly * 15}%`,
                    top: `${30 + firefly * 10}%`,
                    boxShadow: '0 0 8px rgba(255, 255, 0, 0.8), 0 0 15px rgba(255, 255, 0, 0.4)'
                  }}
                  animate={{
                    x: [0, 10, -5, 0],
                    y: [0, -8, 5, 0],
                    opacity: [0.6, 1, 0.8, 0.6],
                    scale: [1, 1.3, 0.9, 1]
                  }}
                  transition={{
                    duration: 2 + firefly * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  data-testid={`jar-firefly-${jar}-${firefly}`}
                />
              ))}
              
              {/* Jar glow effect */}
              <div className="jar-glow absolute inset-0 bg-yellow-300/20 rounded-lg animate-pulse"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Free floating fireflies */}
      <div className="floating-fireflies absolute inset-0">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="floating-firefly absolute w-3 h-3 rounded-full bg-yellow-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 80}%`,
              boxShadow: '0 0 10px rgba(255, 255, 0, 0.8), 0 0 20px rgba(255, 255, 0, 0.4)'
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, Math.random() * 150 - 75, 0],
              y: [0, Math.random() * 200 - 100, Math.random() * 150 - 75, 0],
              opacity: [0.5, 1, 0.7, 0.5],
              scale: [1, 1.4, 0.8, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3
            }}
            data-testid={`floating-firefly-${i}`}
          />
        ))}
      </div>
    </div>
  );
}