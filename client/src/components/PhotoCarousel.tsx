import React, { useState, useRef } from "react";
import { useLocation } from "wouter";

import "./PhotoCarousel.css";


// Import your images here or pass as props

import photo1 from "@/assets/Photo1.jpg";
import photo2 from "@/assets/Photo2.jpg";
import photo3 from "@/assets/Photo3.jpg";
import photo4 from "@/assets/Photo4.jpg";
import photo5 from "@/assets/Photo5.jpg";
import photo6 from "@/assets/Photo6.jpg";
import photo7 from "@/assets/Photo7.jpg";
import photo8 from "@/assets/Photo8.jpg";
import photo9 from "@/assets/Photo9.jpg";

const photos = 
// [photo1, photo2, photo3, photo4, photo5, photo6,photo7,photo8,photo9];
 [
  { src: photo1, path: "/detail/1" },
  { src: photo2, path: "/detail/2" },
  { src: photo3, path: "/detail/3" },
  { src: photo4, path: "/detail/4" },
  { src: photo5, path: "/detail/5" },
  { src: photo6, path: "/detail/6" },
  { src: photo7, path: "/detail/7" },
  { src: photo8, path: "/detail/8" },
  { src: photo9, path: "/detail/9" },
];

const PhotoCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

    const [, setLocation] = useLocation();


  const radius = 250;
  const photoCount = photos.length;
  const slice = 360 / photoCount;

  // Get coordinates from mouse or touch event
  const getEventPos = (e: any) => {
    if (e.type.startsWith("mouse")) {
      return { x: e.clientX, y: e.clientY };
    } else if (e.type.startsWith("touch")) {
      const touch = e.touches[0];
      return { x: touch.clientX, y: touch.clientY };
    }
    return { x: 0, y: 0 };
  };

  const handleStart = (e: any) => {
    isDragging.current = true;
    const pos = getEventPos(e);
    lastPos.current = pos;
    e.preventDefault();
  };

  const handleMove = (e: any) => {
    if (!isDragging.current) return;
    const pos = getEventPos(e);
    const deltaX = pos.x - lastPos.current.x;
    const deltaY = pos.y - lastPos.current.y;
    lastPos.current = pos;

    setRotation((prev) => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5,
    }));
    e.preventDefault();
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

    // Only navigate if not dragging
  const handleImageClick = (path: string) => {
    if (!isDragging.current) {
      setLocation(path);
    }
  };

  return (
    <div
      className="carousel-container"
      ref={containerRef}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
    >
      <div
        className="carousel"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {photos.map((photo, index) => {
          const rotationY = slice * index;
          return (
            <div
              key={index}
              className="carousel-item"
              style={{
                transform: `rotateY(${rotationY}deg) translateZ(${radius}px)`,
              }}
            >
              <img 
              src={photo.src}
               alt={`photo-${index}`} 
               onClick={() => handleImageClick(photo.path)}
                //style={{ width: "160px", height: "180px", objectFit: "cover", borderRadius: "16px" }}
             />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoCarousel;