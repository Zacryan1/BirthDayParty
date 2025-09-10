import React from "react";
import tangledVideo from "../assets/Tangled.mp4";  

//const PartyAnimation: React.FC = () => {
const PartyAnimation = ({ onVideoEnd }: { onVideoEnd: () => void }) => {
  
return (
    <video
      src={tangledVideo}
      autoPlay
      playsInline
      loop={false}
      muted={false}
            onEnded={onVideoEnd}

      className="fixed top-0 left-0 w-screen h-screen object-cover z-50"
    />
  );
};

export default PartyAnimation;
