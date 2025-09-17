import React, { useState } from "react";
import tangledVideo from "../assets/Tangled.mp4";  

//const PartyAnimation: React.FC = () => {
const PartyAnimation = ({ onVideoEnd }: { onVideoEnd: () => void }) => {
  const [showSkipButton, setShowSkipButton] = useState(false);

  const handleSkip = () => {
    onVideoEnd();
  };

  const handleVideoLoad = () => {
    // Show skip button after video starts playing
    setTimeout(() => {
      setShowSkipButton(true);
    }, 2000); // Show after 2 seconds
  };
  
return (
    <div className="relative w-screen h-screen">
      <video
        src={tangledVideo}
        autoPlay
        playsInline
        loop={false}
        muted={false}
        onEnded={onVideoEnd}
        onLoadedData={handleVideoLoad}
        className="fixed top-0 left-0 w-screen h-screen object-cover z-50"
      />
      
      {/* Skip Button */}
      {showSkipButton && (
        <button
          onClick={handleSkip}
          className="fixed top-4 right-4 z-60 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40"
          style={{ zIndex: 60 }}
        >
          Skip →
        </button>
      )}
    </div>
  );
};

export default PartyAnimation;
