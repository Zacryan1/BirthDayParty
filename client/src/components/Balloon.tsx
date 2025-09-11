interface BalloonProps {
  color: "blue" | "pink" | "lavender";
  initialDelay: number;
  position: "left" | "center-left" | "center-right" | "right";
}

export default function Balloon({ color, initialDelay, position }: BalloonProps) {
  const colorClasses = {
    blue: "bg-gradient-to-b from-blue-300 to-blue-500 border-blue-600",
    pink: "bg-gradient-to-b from-pink-300 to-pink-500 border-pink-600", 
    lavender: "bg-gradient-to-b from-purple-300 to-purple-500 border-purple-600",
  };

  const positionClasses = {
    left: "left-12",
    "center-left": "left-1/3",
    "center-right": "right-1/3", 
    right: "right-12",
  };

  const glowClasses = {
    blue: "shadow-[0_0_30px_rgba(59,130,246,0.5)]",
    pink: "shadow-[0_0_30px_rgba(236,72,153,0.5)]",
    lavender: "shadow-[0_0_30px_rgba(147,51,234,0.5)]",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} animate-drift pointer-events-none`}
      style={{ 
        animationDelay: `${initialDelay}s`,
        animationDuration: `${8 + Math.random() * 4}s`
      }}
      data-testid={`balloon-${color}`}
    >
      {/* Balloon body */}
      <div 
        className={`
          w-16 h-20 ${colorClasses[color]} ${glowClasses[color]}
          rounded-full border-2 relative overflow-hidden animate-float
          opacity-80 backdrop-blur-sm
        `}
        style={{ animationDelay: `${initialDelay * 0.5}s` }}
      >
        {/* Shine effect */}
        <div className="absolute top-3 left-3 w-4 h-6 bg-white/40 rounded-full blur-sm" />
        <div className="absolute top-4 left-4 w-2 h-3 bg-white/60 rounded-full" />
      </div>
      
      {/* Balloon string */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gray-600" />
      
      {/* LED glow effect */}
      <div 
        className={`
          absolute inset-0 w-16 h-20 ${colorClasses[color]}
          rounded-full blur-lg opacity-30 animate-pulse
        `}
      />
    </div>
  );
}