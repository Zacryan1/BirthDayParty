import { motion } from "framer-motion";

interface Princess {
  name: string;
  title: string;
  image: string;
}

interface PrincessSelectionProps {
  princesses: Princess[];
  onSelect: (princess: Princess) => void;
}

export default function PrincessSelection({ princesses, onSelect }: PrincessSelectionProps) {
  return (
    <div className="text-center">
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-magical-purple mb-4" data-testid="title-choose-princess">
          Choose Your Princess
        </h2>
        <p className="font-script text-2xl text-magical-gold" data-testid="text-princess-subtitle">
          ✨ Which magical princess will you be today? ✨
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {princesses.map((princess, index) => (
          <motion.div
            key={princess.name}
            className="princess-card bg-card/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl cursor-pointer group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(princess)}
            data-testid={`card-princess-${princess.name.toLowerCase()}`}
          >
            <img 
              src={princess.image} 
              alt={`Princess ${princess.name}`} 
              className="w-full h-48 object-cover rounded-xl mb-4 group-hover:brightness-110 transition-all duration-300"
              data-testid={`img-princess-${princess.name.toLowerCase()}`}
            />
            <h3 className="font-serif text-xl font-semibold text-magical-purple" data-testid={`text-princess-name-${princess.name.toLowerCase()}`}>
              {princess.name}
            </h3>
            <p className="text-muted-foreground text-sm" data-testid={`text-princess-title-${princess.name.toLowerCase()}`}>
              {princess.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
