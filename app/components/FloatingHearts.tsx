"use client";

import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}

const HEART_COLORS = [
  "#dc143c",
  "#ff6b9d",
  "#ff9ec6",
  "#e8456b",
  "#ff4081",
  "#f50057",
  "#ff1744",
  "#d50000",
  "#c62828",
  "#ff8a80",
  "#ff80ab",
  "#ffd700",
];

const HEART_SHAPES = ["❤️", "💕", "💗", "💖", "💝", "♥", "❤", "💘", "💓", "💞"];

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = [];
    for (let i = 0; i < 30; i++) {
      generated.push({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 24,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 15,
        opacity: 0.3 + Math.random() * 0.5,
        color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
      });
    }
    setHearts(generated);
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart-particle"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
            color: heart.color,
          }}
        >
          {HEART_SHAPES[heart.id % HEART_SHAPES.length]}
        </div>
      ))}
    </>
  );
}
