import { motion } from "framer-motion";

interface Princess {
  name: string;
  title: string;
  image: string;
}

interface PrinceSceneProps {
  selectedPrincess: Princess | null;
  onAcceptRoses: () => void;
}

export default function PrinceScene({ selectedPrincess, onAcceptRoses }: PrinceSceneProps) {
  return (
    <div className="text-center">
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-magical-purple mb-4" data-testid="title-royal-surprise">
          A Royal Surprise
        </h2>
        <p className="font-script text-2xl text-magical-gold" data-testid="text-prince-subtitle">
          ✨ Prince Charming approaches with a special gift ✨
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        {/* Prince Character */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          data-testid="container-prince-character"
        >
          <motion.img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600" 
            alt="Prince Charming" 
            className="w-64 h-80 object-cover rounded-2xl shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            data-testid="img-prince-charming"
          />
        </motion.div>

        {/* Interaction Area */}
        <motion.div 
          className="text-center bg-card/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          data-testid="container-prince-interaction"
        >
          <motion.h3 
            className="font-serif text-3xl font-semibold text-magical-purple mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            data-testid="text-birthday-greeting"
          >
            "Happy Birthday, Princess {selectedPrincess?.name || 'Belle'}!"
          </motion.h3>
          
          <motion.img 
            src="https://pixabay.com/get/g28f005e101f5b74dc568ce6630286bfe2753ff13678e80bb9f194ff6e134745cc13083f996d8242be53d853fa79d42ad57377c2264709c1ce7699babd29c06e8_1280.jpg" 
            alt="White roses bouquet" 
            className="w-80 h-60 object-cover rounded-xl mx-auto mb-6 shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2 }}
            data-testid="img-white-roses"
          />
          
          <motion.p 
            className="font-script text-xl text-magical-gold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            data-testid="text-prince-message"
          >
            "These white roses are as pure and beautiful as your heart. 
            Will you join me for a journey to the castle?"
          </motion.p>

          <motion.button
            onClick={onAcceptRoses}
            className="bg-magical-pink hover:bg-magical-pink/80 text-primary-foreground px-8 py-4 rounded-full font-serif text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            data-testid="button-accept-roses"
          >
            Accept the Roses 🌹
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
