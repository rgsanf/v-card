"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

export default function StarryNight() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated: Star[] = [];
    for (let i = 0; i < 80; i++) {
      generated.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 3,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 4,
        opacity: 0.2 + Math.random() * 0.6,
      });
    }
    setStars(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background:
              star.id % 5 === 0
                ? "radial-gradient(circle, #ffd70090, #ffd70040, transparent)"
                : star.id % 3 === 0
                ? "radial-gradient(circle, #ff9ec660, #ff9ec630, transparent)"
                : "radial-gradient(circle, #ffffff90, #ffffff40, transparent)",
            opacity: star.opacity,
            animation: `sparkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}
      {/* Shooting star */}
      <div
        className="absolute"
        style={{
          top: "15%",
          left: "10%",
          width: "2px",
          height: "2px",
          background: "#fff",
          borderRadius: "50%",
          boxShadow: "0 0 6px 2px #fff, 0 0 12px 4px #ff9ec640",
          animation: "shooting-star 8s linear infinite",
          animationDelay: "3s",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "30%",
          left: "60%",
          width: "2px",
          height: "2px",
          background: "#ffd700",
          borderRadius: "50%",
          boxShadow: "0 0 6px 2px #ffd700, 0 0 12px 4px #ffd70040",
          animation: "shooting-star-2 12s linear infinite",
          animationDelay: "7s",
        }}
      />
    </div>
  );
}
