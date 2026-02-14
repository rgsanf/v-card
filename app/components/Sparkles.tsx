"use client";

import { useEffect, useState } from "react";

interface SparkleData {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

const SPARKLE_COLORS = ["#ffd700", "#fff5b0", "#ffc107", "#ffeb3b", "#ffffff", "#ff9ec6"];

export default function Sparkles({
  count = 8,
  radius = 100,
}: {
  count?: number;
  radius?: number;
}) {
  const [sparkles, setSparkles] = useState<SparkleData[]>([]);

  useEffect(() => {
    const generated: SparkleData[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = radius * (0.6 + Math.random() * 0.4);
      generated.push({
        id: i,
        x: Math.cos(angle) * r,
        y: Math.sin(angle) * r,
        size: 4 + Math.random() * 8,
        delay: Math.random() * 3,
        duration: 1.5 + Math.random() * 2,
        color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
      });
    }
    setSparkles(generated);
  }, [count, radius]);

  return (
    <>
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="sparkle"
          style={{
            left: `calc(50% + ${s.x}px)`,
            top: `calc(50% + ${s.y}px)`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        >
          <svg
            width={s.size}
            height={s.size}
            viewBox="0 0 20 20"
          >
            <path
              d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z"
              fill={s.color}
            />
          </svg>
        </div>
      ))}
    </>
  );
}
