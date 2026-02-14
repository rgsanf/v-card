"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  emoji: string;
  x: number;
  y: number;
  ex: string;
  ey: string;
  er: string;
  size: number;
  delay: number;
}

interface Confetti {
  id: number;
  x: number;
  cx: string;
  cr: string;
  color: string;
  size: number;
  delay: number;
}

const LOVE_EMOJIS = ["❤️", "💕", "💖", "💗", "💝", "💘", "💓", "💞", "🌹", "💋", "✨", "🥰", "😍", "💐", "🦋"];
const CONFETTI_COLORS = ["#dc143c", "#ff6b9d", "#ffd700", "#ff9ec6", "#ff4081", "#e8456b", "#ffffff", "#ff80ab"];

export default function LoveExplosion() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    // Generate explosion particles
    const newParticles: Particle[] = [];
    for (let i = 0; i < 40; i++) {
      const angle = (i / 40) * Math.PI * 2;
      const distance = 100 + Math.random() * 400;
      newParticles.push({
        id: i,
        emoji: LOVE_EMOJIS[Math.floor(Math.random() * LOVE_EMOJIS.length)],
        x: 50,
        y: 50,
        ex: `${Math.cos(angle) * distance}px`,
        ey: `${Math.sin(angle) * distance}px`,
        er: `${Math.random() * 720 - 360}deg`,
        size: 16 + Math.random() * 24,
        delay: Math.random() * 0.3,
      });
    }
    setParticles(newParticles);

    // Generate confetti
    const newConfetti: Confetti[] = [];
    for (let i = 0; i < 60; i++) {
      newConfetti.push({
        id: i,
        x: 10 + Math.random() * 80,
        cx: `${Math.random() * 200 - 100}px`,
        cr: `${Math.random() * 1080}deg`,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        size: 6 + Math.random() * 10,
        delay: Math.random() * 0.5,
      });
    }
    setConfetti(newConfetti);
  }, []);

  return (
    <>
      {/* Explosion particles */}
      {particles.map((p) => (
        <div
          key={`p-${p.id}`}
          className="explode-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            "--ex": p.ex,
            "--ey": p.ey,
            "--er": p.er,
          } as React.CSSProperties}
        >
          {p.emoji}
        </div>
      ))}

      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={`c-${c.id}`}
          className="confetti-piece"
          style={{
            left: `${c.x}%`,
            top: "-5%",
            width: `${c.size}px`,
            height: `${c.size * 1.5}px`,
            background: c.color,
            borderRadius: "2px",
            animationDelay: `${c.delay}s`,
            "--cx": c.cx,
            "--cr": c.cr,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
}
