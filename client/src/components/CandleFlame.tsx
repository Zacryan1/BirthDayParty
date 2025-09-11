interface CandleFlameProps {
  isLit: boolean;
  delay?: number;
  isEmerging?: boolean;
}

export default function CandleFlame({ isLit, delay = 0, isEmerging = false }: CandleFlameProps) {
  return (
    <div className="relative">
      {/* Candle body with emerging animation */}
      <div 
        className={`w-3 h-12 bg-gradient-to-t from-amber-100 via-yellow-100 to-yellow-200 rounded-t-sm border border-yellow-300 shadow-sm ${
          isEmerging ? 'animate-candle-emerge' : ''
        }`}
        style={{ animationDelay: `${delay}ms` }}
      >
        {/* Candle wax drip details */}
        <div className="absolute top-1 left-0 w-0.5 h-2 bg-yellow-300 rounded-full opacity-60" />
        <div className="absolute top-3 right-0 w-0.5 h-1 bg-yellow-300 rounded-full opacity-40" />
      </div>
      
      {/* Flame with enhanced glow */}
      {isLit && (
        <div 
          className="absolute -top-6 left-1/2 transform -translate-x-1/2"
          style={{ animationDelay: `${delay + 200}ms` }}
        >
          {/* Outer glow */}
          <div className="absolute -inset-3 rounded-full animate-glow-pulse blur-lg opacity-40" 
               style={{ background: 'radial-gradient(circle, hsl(45, 100%, 65%) 0%, transparent 70%)' }} />
          
          {/* Main flame */}
          <div className="relative w-4 h-8 animate-flicker">
            {/* Outer flame */}
            <div 
              className="absolute inset-0 rounded-full opacity-90"
              style={{
                background: 'radial-gradient(ellipse 70% 100% at 50% 90%, hsl(15, 100%, 50%) 0%, hsl(25, 100%, 55%) 30%, hsl(45, 100%, 60%) 70%, transparent 100%)'
              }}
            />
            
            {/* Inner flame */}
            <div 
              className="absolute inset-1 rounded-full opacity-80"
              style={{
                background: 'radial-gradient(ellipse 60% 90% at 50% 85%, hsl(35, 100%, 60%) 0%, hsl(45, 100%, 70%) 50%, hsl(55, 100%, 80%) 100%)'
              }}
            />
            
            {/* Core flame */}
            <div 
              className="absolute inset-2 rounded-full opacity-70"
              style={{
                background: 'radial-gradient(ellipse 50% 80% at 50% 80%, hsl(55, 100%, 80%) 0%, hsl(60, 100%, 90%) 100%)'
              }}
            />
          </div>
        </div>
      )}
      
      {/* Wick when not lit */}
      {!isLit && (
        <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-gray-800 rounded-full">
          {/* Burnt tip */}
          <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-600 rounded-full" />
        </div>
      )}
    </div>
  );
}