import { motion } from "framer-motion";

interface CastleSceneProps {
  onEnterCastle: () => void;
}

export default function CastleScene({ onEnterCastle }: CastleSceneProps) {
  const decorations = [
    {
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      title: "LED Balloons",
      description: "Magical lighting throughout"
    },
    {
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      title: "Fairy Lights",
      description: "Twinkling magical ambiance"
    },
    {
      image: "https://pixabay.com/get/ga81a639316ca5f4016c2e24ae3e744f1b0a27140a5db5b8d0ead9a2658ba30d484181728aef08788b7a8d884b3cf28deee39e70de6181ae38fae17e58db17990_1280.jpg",
      title: "Balloon Arch",
      description: "Grand entrance decoration"
    }
  ];

  return (
    <div className="text-center">
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-magical-purple mb-4" data-testid="title-castle-journey">
          Journey to the Castle
        </h2>
        <p className="font-script text-2xl text-magical-gold" data-testid="text-castle-subtitle">
          ✨ A magical castle awaits with LED balloon decorations ✨
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.img 
          src="https://pixabay.com/get/g7160343951b455e2548c4863fcca7e8e0b18a3eb92e6b08a7b44b9be559d21faf8e74f41f24785da6e2fd591c69bbfe5b66f9037f88405bcd35a6ae3aeac28b6_1280.jpg" 
          alt="Magical castle on mountain" 
          className="w-full h-96 object-cover rounded-3xl shadow-2xl mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          data-testid="img-magical-castle"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {decorations.map((decoration, index) => (
            <motion.div
              key={decoration.title}
              className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              data-testid={`card-decoration-${decoration.title.toLowerCase().replace(' ', '-')}`}
            >
              <img 
                src={decoration.image} 
                alt={decoration.title} 
                className="w-full h-32 object-cover rounded-xl mb-4"
                data-testid={`img-decoration-${decoration.title.toLowerCase().replace(' ', '-')}`}
              />
              <h3 className="font-serif text-xl font-semibold text-magical-purple" data-testid={`text-decoration-title-${decoration.title.toLowerCase().replace(' ', '-')}`}>
                {decoration.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`text-decoration-description-${decoration.title.toLowerCase().replace(' ', '-')}`}>
                {decoration.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            onClick={onEnterCastle}
            className="bg-magical-gold hover:bg-magical-gold/80 text-foreground px-8 py-4 rounded-full font-serif text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            data-testid="button-enter-castle"
          >
            Enter the Castle 🏰
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
