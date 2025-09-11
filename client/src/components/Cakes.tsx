
import CandleFlame from "@/components/CandleFlame";
interface CakeProps {
  candlesLit: boolean;
  isStraining?: boolean;
  showSprinkles?: boolean;
  showFrosting?: boolean;
  candlesEmerging?: boolean;
}

export default function Cakes({ 
  candlesLit, 
  isStraining = false, 
  showSprinkles = false, 
  showFrosting = false,
  candlesEmerging = false 
}: CakeProps) {
  const candles = Array.from({ length: 3 }, (_, i) => i);

  const sprinkles = [
    { color: 'hsl(200, 100%, 60%)', top: '20%', left: '15%', rotation: 45 },
    { color: 'hsl(280, 100%, 60%)', top: '25%', left: '75%', rotation: -30 },
    { color: 'hsl(120, 100%, 50%)', top: '40%', left: '25%', rotation: 90 },
    { color: 'hsl(60, 100%, 50%)', top: '45%', left: '80%', rotation: 15 },
    { color: 'hsl(300, 100%, 60%)', top: '60%', left: '20%', rotation: -45 },
    { color: 'hsl(180, 100%, 50%)', top: '70%', left: '70%', rotation: 60 },
    { color: 'hsl(40, 100%, 50%)', top: '35%', left: '50%', rotation: -15 },
    { color: 'hsl(320, 100%, 60%)', top: '55%', left: '45%', rotation: 75 },
  ];

  return (
    <div className="relative flex flex-col items-center" data-testid="birthday-cake">
      {/* Candles with staggered emergence */}
      <div className="flex space-x-6 mb-2 z-20">
        {candles.map((i) => (
          <CandleFlame 
            key={i} 
            isLit={candlesLit} 
            delay={i * 300}
            isEmerging={candlesEmerging}
          />
        ))}
      </div>

      {/* Cake body */}
      <div className="relative z-10">
        {/* Main cake layer */}
        <div className="relative w-64 h-32 bg-gradient-to-b from-yellow-100 via-yellow-200 to-amber-300 rounded-xl border-2 border-amber-400 shadow-lg overflow-hidden">
          
          {/* Frosting layer with animation */}
          {showFrosting && (
            <div 
              className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-pink-300 to-pink-400 animate-frosting-grow"
              style={{
                background: 'hsl(var(--cake-frosting-hue, 340), 75%, 70%)',
                transformOrigin: '50% 100%'
              }}
            >
              {/* Frosting texture */}
              <div className="absolute top-0 left-2 w-6 h-4 bg-pink-200 rounded-full opacity-80" />
              <div className="absolute top-0 right-4 w-8 h-4 bg-pink-200 rounded-full opacity-80" />
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-4 bg-pink-200 rounded-full opacity-80" />
            </div>
          )}

          {/* Animated sprinkles */}
          {showSprinkles && sprinkles.map((sprinkle, i) => (
            <div
              key={i}
              className="absolute w-3 h-1 rounded-full animate-sprinkle-pop"
              style={{
                backgroundColor: sprinkle.color,
                top: sprinkle.top,
                left: sprinkle.left,
                transform: `rotate(${sprinkle.rotation}deg)`,
                animationDelay: `${i * 100}ms`
              }}
            />
          ))}

          {/* Cake face - happy */}
          {!isStraining && (
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2" data-testid="cake-face-happy">
              {/* Eyes */}
              <div className="flex space-x-6 mb-3">
                <div className="relative">
                  <div className="w-6 h-6 bg-gray-800 rounded-full" />
                  <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="relative">
                  <div className="w-6 h-6 bg-gray-800 rounded-full" />
                  <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
              
              {/* Happy mouth */}
              <div className="flex justify-center">
                <div className="w-8 h-4 border-4 border-gray-800 border-t-0 rounded-b-full" />
              </div>
            </div>
          )}

          {/* Cake face - straining */}
          {isStraining && (
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2" data-testid="cake-face-straining">
              {/* Squinting eyes */}
              <div className="flex space-x-6 mb-3">
                <div className="w-8 h-2 bg-gray-800 rounded-full" />
                <div className="w-8 h-2 bg-gray-800 rounded-full" />
              </div>
              
              {/* Concentrated mouth */}
              <div className="flex justify-center">
                <div className="w-6 h-2 bg-gray-800 rounded-full" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Cake plate with shadow */}
      <div className="relative -mt-2">
        <div className="w-72 h-8 bg-gradient-to-b from-slate-200 to-slate-300 rounded-full border-2 border-slate-400 shadow-lg" />
        {/* Plate shadow */}
        <div className="absolute top-6 left-4 right-4 h-2 bg-black/20 rounded-full blur-sm" />
      </div>
    </div>
  );
}