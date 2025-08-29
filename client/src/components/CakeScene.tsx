import { useState } from "react";
import { motion } from "framer-motion";

interface Princess {
  name: string;
  title: string;
  image: string;
}

interface CakeSceneProps {
  selectedPrincess: Princess | null;
  onRestart: () => void;
}

export default function CakeScene({ selectedPrincess, onRestart }: CakeSceneProps) {
  const [cakeCut, setCakeCut] = useState(false);

  const cutTheCake = () => {
    setCakeCut(true);
  };

  const celebrations = [
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
    "https://pixabay.com/get/g2308316c185e8efd21debd131e89b2a03a677828e2d1e0ce186b69980d8eb0a0999f2398c988a860c04c664f9460afdb6a2b5b0af018b52409246f0f2bc88c68_1280.jpg",
    "https://pixabay.com/get/g8dcfbfc262f052bf40cb512c2e12c9c1933f7bb3b42eee8d6c5f1ad0851fe57b33813af6090e984e1b919592b0968bf15f3647a72754e57c66d32f9d4efa6015_1280.jpg"
  ];

  return (
    <div className="text-center">
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-magical-purple mb-4" data-testid="title-birthday-celebration">
          🎂 Birthday Celebration 🎂
        </h2>
        <p className="font-script text-2xl text-magical-gold" data-testid="text-cake-subtitle">
          ✨ Time to make a wish and cut the magical birthday cake! ✨
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.img 
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
          alt="Birthday celebration cake" 
          className="w-96 h-64 object-cover rounded-3xl shadow-2xl mx-auto mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          data-testid="img-birthday-cake"
        />

        <motion.div 
          className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          data-testid="container-cake-interaction"
        >
          <h3 className="font-serif text-3xl font-semibold text-magical-purple mb-6" data-testid="text-birthday-wish">
            🎉 Happy Birthday, Princess {selectedPrincess?.name || 'Belle'}! 🎉
          </h3>
          
          <p className="font-script text-xl text-magical-gold mb-8" data-testid="text-birthday-message">
            "Make a wish as magical as you are, and may all your dreams come true 
            on this special day and always!"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {celebrations.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Birthday celebration ${index + 1}`}
                className="w-full h-32 object-cover rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 * index }}
                data-testid={`img-celebration-${index + 1}`}
              />
            ))}
          </div>

          {!cakeCut ? (
            <motion.button
              onClick={cutTheCake}
              className="bg-magical-purple hover:bg-magical-purple/80 text-primary-foreground px-8 py-4 rounded-full font-serif text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              data-testid="button-cut-cake"
            >
              Cut the Cake! 🍰
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="p-6 bg-magical-gold/20 rounded-2xl"
              data-testid="container-celebration-message"
            >
              <h4 className="font-serif text-2xl font-bold text-magical-purple mb-4" data-testid="text-celebration-title">
                🎊 Celebration Time! 🎊
              </h4>
              <p className="font-script text-lg text-foreground" data-testid="text-celebration-message">
                The cake has been cut and the celebration begins! 
                Wishing you the most magical birthday filled with love, 
                laughter, and all your heart desires. 
                Happy Birthday, beautiful princess! ✨🎂✨
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div 
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <button 
            onClick={onRestart}
            className="bg-muted hover:bg-muted/80 text-muted-foreground px-6 py-3 rounded-full font-serif text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            data-testid="button-restart-journey"
          >
            Start Over ↻
          </button>
        </motion.div>
      </div>
    </div>
  );
}
