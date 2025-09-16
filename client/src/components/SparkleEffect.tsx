import React, { useState, useEffect } from "react";
import "./SparkleEffect.css";

interface SparkleEffectProps {
  isActive: boolean;
  onComplete: () => void;
}

const SparkleEffect: React.FC<SparkleEffectProps> = ({ isActive, onComplete }) => {
  const [showSparkles, setShowSparkles] = useState(false);

  useEffect(() => {
    if (isActive) {
      console.log("SparkleEffect: isActive is true, showing sparkles");
      setShowSparkles(true);
      const timer = setTimeout(() => {
        console.log("SparkleEffect: hiding sparkles");
        setShowSparkles(false);
        onComplete();
      }, 2500); // Duration of sparkle effect

      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  if (!showSparkles) return null;

  return (
    <div className="sparkle-container">
      {/* Test sparkle in center to verify visibility */}
      <div className="test-sparkle"></div>
      {/* Top Left Corner */}
      <div className="sparkle-corner top-left">
        <div className="sparkle sparkle-1"></div>
        <div className="sparkle sparkle-2"></div>
        <div className="sparkle sparkle-3"></div>
        <div className="sparkle sparkle-4"></div>
        <div className="sparkle sparkle-5"></div>
        <div className="sparkle sparkle-6"></div>
        <div className="sparkle sparkle-7"></div>
        <div className="sparkle sparkle-8"></div>
      </div>

      {/* Top Right Corner */}
      <div className="sparkle-corner top-right">
        <div className="sparkle sparkle-1"></div>
        <div className="sparkle sparkle-2"></div>
        <div className="sparkle sparkle-3"></div>
        <div className="sparkle sparkle-4"></div>
        <div className="sparkle sparkle-5"></div>
        <div className="sparkle sparkle-6"></div>
        <div className="sparkle sparkle-7"></div>
        <div className="sparkle sparkle-8"></div>
      </div>

      {/* Bottom Left Corner */}
      <div className="sparkle-corner bottom-left">
        <div className="sparkle sparkle-1"></div>
        <div className="sparkle sparkle-2"></div>
        <div className="sparkle sparkle-3"></div>
        <div className="sparkle sparkle-4"></div>
        <div className="sparkle sparkle-5"></div>
        <div className="sparkle sparkle-6"></div>
        <div className="sparkle sparkle-7"></div>
        <div className="sparkle sparkle-8"></div>
      </div>

      {/* Bottom Right Corner */}
      <div className="sparkle-corner bottom-right">
        <div className="sparkle sparkle-1"></div>
        <div className="sparkle sparkle-2"></div>
        <div className="sparkle sparkle-3"></div>
        <div className="sparkle sparkle-4"></div>
        <div className="sparkle sparkle-5"></div>
        <div className="sparkle sparkle-6"></div>
        <div className="sparkle sparkle-7"></div>
        <div className="sparkle sparkle-8"></div>
      </div>
    </div>
  );
};

export default SparkleEffect;
