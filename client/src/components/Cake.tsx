import { useRoute } from "wouter";
import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import gsap from "gsap";
import "@/components/CakeCutting.css";

import { Button } from "@/components/ui/button";
import Cakes from "@/components/Cakes";
import Balloon from "@/components/Balloon" ;
import AnimatedText from "@/components/AnimatedText"; 
import InteractiveCandle from "@/components/InteractiveCandle";
import ConfettiExplosion from "@/components/ConfettiExplosion" ;
import { useMicrophoneBlowDetection } from "@/hooks/useMicrophoneBlowDetection";

type Stage = "dark" | "candles-ready" | "frosting" | "sprinkles" | "celebration" | "straining" | "finale";

export default function Cake() {

    const [match, params] = useRoute("/detail/:id");
  const [showCake, setShowCake] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [stage, setStage] = useState<Stage>("dark");
  const [candlesLit, setCandlesLit] = useState([false, false, false]);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [backgroundLightness, setBackgroundLightness] = useState(5);
  const [showConfetti, setShowConfetti] = useState(false);
  const [micEnabled, setMicEnabled] = useState(false);

  const { startListening, stopListening, isListening } = useMicrophoneBlowDetection({
    threshold: 80,
    onBlow: handleMicrophoneBlow
  });

  function handleMicrophoneBlow() {
    if (stage === "celebration") {
      handleBlowCandles();
    }
  }

  const handleCandleClick = (candleIndex: number) => {
    if (stage !== "candles-ready" || candlesLit[candleIndex]) return;

    const newCandlesLit = [...candlesLit];
    newCandlesLit[candleIndex] = true;
    setCandlesLit(newCandlesLit);
    
    // Brighten background slightly with each candle
    setBackgroundLightness(prev => prev + 7);

    // Check if all candles are lit
    if (newCandlesLit.every(lit => lit)) {
      setTimeout(() => {
        setStage("frosting");
      }, 1000);

      // Continue the sequence
      setTimeout(() => {
        setStage("sprinkles");
      }, 2500);

      setTimeout(() => {
        setStage("celebration");
        setBackgroundLightness(35);
      }, 3500);
    }
  };

  const startExperience = () => {
    setStage("candles-ready");
    setBackgroundLightness(10);
  };

  const handleBlowCandles = () => {
    setStage("straining");
    stopListening();
    
    // Create enhanced particle effect
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 300 + 250,
      y: Math.random() * 150 + 200,
    }));
    setParticles(newParticles);

    // Blow out candles and dim background
    setTimeout(() => {
      setCandlesLit([false, false, false]);
      setBackgroundLightness(8);
    }, 500);

    // Show finale with confetti
    setTimeout(() => {
      setStage("finale");
      setParticles([]);
      setShowConfetti(true);
    }, 2500);
  };

  const enableMicrophone = async () => {
    await startListening();
    setMicEnabled(true);
  };

  const resetExperience = () => {
    setStage("dark");
    setCandlesLit([false, false, false]);
    setParticles([]);
    setBackgroundLightness(5);
    setShowConfetti(false);
    setMicEnabled(false);
    stopListening();
  };

  return (
    <div 
      className="relative min-h-screen overflow-hidden transition-colors duration-1000"
      style={{
        background: `hsl(220, 30%, ${backgroundLightness}%)`
      }}
    >
      {/* Confetti explosion */}
      <ConfettiExplosion 
        isActive={showConfetti} 
        onComplete={() => setShowConfetti(false)} 
      />

      {/* Enhanced flame glow effect */}
      {candlesLit.some(lit => lit) && (
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 w-96 h-96 rounded-full opacity-30 blur-3xl animate-glow-pulse"
          style={{
            background: 'radial-gradient(circle, hsl(45, 100%, 65%) 0%, transparent 60%)'
          }}
        />
      )}

      {/* Balloons - show during celebration and finale */}
      {(stage === "celebration" || stage === "finale" || stage === "straining") && (
        <>
          <Balloon color="blue" initialDelay={0} position="left" />
          <Balloon color="pink" initialDelay={1} position="center-left" />
          <Balloon color="lavender" initialDelay={2} position="center-right" />
          <Balloon color="blue" initialDelay={3} position="right" />
        </>
      )}

      {/* Enhanced particles for blowing effect */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-3 h-3 rounded-full animate-particle pointer-events-none"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            background: `hsl(${Math.random() * 60 + 30}, 100%, 65%)`,
            animationDelay: `${Math.random() * 0.5}s`
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        {/* Dark Stage */}
        {stage === "dark" && (
          <div className="text-center" data-testid="dark-stage">
            <div className="mb-8">
            <div className="text-white text-center">
  
              <AnimatedText 
                text="Hey it's dark, can you light the candles" 
                isCelebrating={true}
             
              />
            </div>
                        </div>

            <Button
              size="lg"
              className="text-xl px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full hover-elevate shadow-lg"
              onClick={startExperience}
              data-testid="button-start-experience"
            >
              Show Candles
            </Button>
          </div>
        )}

        {/* Interactive Candles Stage */}
        {stage === "candles-ready" && (
          <div className="text-center space-y-8" data-testid="candles-stage">
            <div className="mb-8">
              <AnimatedText 
                text="Click each candle to light it!" 
                isCelebrating={true}
              />
            </div>
            
            {/* Interactive candles */}
            <div className="flex space-x-8 justify-center">
              {candlesLit.map((isLit, index) => (
                <InteractiveCandle
                  key={index}
                  isLit={isLit}
                  onClick={() => handleCandleClick(index)}
                  delay={index * 100}
                  disabled={stage !== "candles-ready"}
                />
              ))}
            </div>
          </div>
        )}

        {/* Cake Building and Celebration Stages */}
        {(stage === "frosting" || 
          stage === "sprinkles" ||
          stage === "celebration" || 
          stage === "straining") && (
          <div className="text-center space-y-8" data-testid="cake-celebration-stage">
            <Cakes 
              candlesLit={candlesLit.some(lit => lit)}
              showFrosting={["frosting", "sprinkles", "celebration", "straining"].includes(stage)}
              showSprinkles={["sprinkles", "celebration", "straining"].includes(stage)}
              isStraining={stage === "straining"}
            />
            
            {stage === "celebration" && (
              <div className="space-y-6 animate-celebration">
                <p className="text-xl text-white/90 font-medium">Make a wish!</p>
                
                {/* Microphone permission */}
                {!micEnabled && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-6 py-3 bg-blue-500/20 border-blue-400/50 text-blue-300 backdrop-blur-sm hover-elevate shadow-lg mb-4"
                    onClick={enableMicrophone}
                    data-testid="button-enable-microphone"
                  >
                    🎤 Blow the Candles
                  </Button>
                )}
                
                {/* Microphone status and manual button */}
                {micEnabled && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-2 text-green-400">
                      <div className={`w-3 h-3 rounded-full ${isListening ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
                      <span className="text-sm">
                        {isListening ? 'Listening... Blow into your microphone!' : 'Microphone ready'}
                      </span>
                    </div>
                    
                    <p className="text-white/70 text-sm">Blow into your microphone or use the button below</p>
                    
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-6 py-3 bg-white/10 border-white/30 text-white backdrop-blur-sm hover-elevate shadow-lg"
                      onClick={handleBlowCandles}
                      data-testid="button-blow-candles"
                    >
                      🌬️ Blow out the candles
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Finale Stage */}
        {stage === "finale" && (
          <div className="text-center animate-celebration space-y-8" data-testid="finale-stage">
            <div className="space-y-4">
              {/* <div className="text-6xl font-bold tracking-wide"> */}
                    <div className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto text-center break-words text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide text-white">
  <AnimatedText
    text={`Happy \nBirthday \nIshuu❤️️!`}
    isRainbow={true}
  />
</div>
              {/* <div className="text-2xl text-white/90"> */}
    <div className="text-lg sm:text-xl text-white/90">

                <AnimatedText 
                  text="Hope all your wishes come true!"
                  isCelebrating={true}
                />
              </div>
            </div>
            
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-bold rounded-full hover-elevate shadow-xl"
              onClick={resetExperience}
              data-testid="button-restart"
            >
              Celebrate Again ✨
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}