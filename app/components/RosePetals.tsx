"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  rotation: number;
  color: string;
}

const PETAL_COLORS = [
  "#dc143c",
  "#c62828",
  "#e8456b",
  "#b71c1c",
  "#8b0035",
  "#ff6b9d",
  "#a50034",
  "#d4004a",
];

export default function RosePetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = [];
    for (let i = 0; i < 15; i++) {
      generated.push({
        id: i,
        left: Math.random() * 100,
        size: 12 + Math.random() * 18,
        duration: 10 + Math.random() * 15,
        delay: Math.random() * 20,
        opacity: 0.4 + Math.random() * 0.4,
        rotation: Math.random() * 360,
        color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      });
    }
    setPetals(generated);
  }, []);

  return (
    <>
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="rose-petal"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            style={{
              opacity: petal.opacity,
              transform: `rotate(${petal.rotation}deg)`,
            }}
          >
            <ellipse
              cx="12"
              cy="10"
              rx="8"
              ry="10"
              fill={petal.color}
              opacity="0.8"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="6"
              ry="8"
              fill={petal.color}
              opacity="0.5"
              transform="rotate(30 12 12)"
            />
          </svg>
        </div>
      ))}
    </>
  );
}
