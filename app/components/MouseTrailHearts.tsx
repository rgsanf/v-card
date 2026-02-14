"use client";

import { useEffect, useState, useCallback } from "react";

interface TrailHeart {
  id: number;
  x: number;
  y: number;
  emoji: string;
  size: number;
  created: number;
}

interface ClickBurst {
  id: number;
  x: number;
  y: number;
  created: number;
  particles: {
    emoji: string;
    angle: number;
    distance: number;
    size: number;
    rotation: number;
  }[];
}

const TRAIL_EMOJIS = ["❤️", "💕", "💗", "💖", "✨", "💓", "🩷", "💘"];
const BURST_EMOJIS = ["❤️", "💕", "💗", "💖", "✨", "💓", "💘", "🌹", "💋", "🥰", "💝", "💞", "🔥", "🦋", "💫"];

export default function MouseTrailHearts() {
  const [hearts, setHearts] = useState<TrailHeart[]>([]);
  const [bursts, setBursts] = useState<ClickBurst[]>([]);
  const [idCounter, setIdCounter] = useState(0);
  const [burstCounter, setBurstCounter] = useState(0);

  const addHeart = useCallback(
    (x: number, y: number) => {
      const newHeart: TrailHeart = {
        id: idCounter,
        x,
        y,
        emoji: TRAIL_EMOJIS[Math.floor(Math.random() * TRAIL_EMOJIS.length)],
        size: 12 + Math.random() * 16,
        created: Date.now(),
      };
      setIdCounter((prev) => prev + 1);
      setHearts((prev) => [...prev.slice(-20), newHeart]);
    },
    [idCounter]
  );

  const addBurst = useCallback(
    (x: number, y: number) => {
      const particleCount = 15 + Math.floor(Math.random() * 10);
      const particles = Array.from({ length: particleCount }, () => ({
        emoji: BURST_EMOJIS[Math.floor(Math.random() * BURST_EMOJIS.length)],
        angle: Math.random() * Math.PI * 2,
        distance: 60 + Math.random() * 180,
        size: 14 + Math.random() * 20,
        rotation: Math.random() * 720 - 360,
      }));
      const burst: ClickBurst = {
        id: burstCounter,
        x,
        y,
        created: Date.now(),
        particles,
      };
      setBurstCounter((prev) => prev + 1);
      setBursts((prev) => [...prev.slice(-5), burst]);
    },
    [burstCounter]
  );

  useEffect(() => {
    let lastTime = 0;
    const handleMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 80) return;
      lastTime = now;
      addHeart(e.clientX, e.clientY);
    };

    const handleTouch = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastTime < 80) return;
      lastTime = now;
      const touch = e.touches[0];
      if (touch) addHeart(touch.clientX, touch.clientY);
    };

    const handleClick = (e: MouseEvent) => {
      addBurst(e.clientX, e.clientY);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      if (touch) addBurst(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleTouch);
    window.addEventListener("click", handleClick);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [addHeart, addBurst]);

  // Cleanup old hearts and bursts
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setHearts((prev) => prev.filter((h) => now - h.created < 1500));
      setBursts((prev) => prev.filter((b) => now - b.created < 1200));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Trail hearts */}
      {hearts.map((heart) => {
        const age = Date.now() - heart.created;
        const progress = Math.min(age / 1500, 1);
        return (
          <div
            key={`t-${heart.id}`}
            className="fixed pointer-events-none z-50"
            style={{
              left: heart.x,
              top: heart.y,
              fontSize: `${heart.size}px`,
              opacity: 1 - progress,
              transform: `translate(-50%, -50%) translateY(${-progress * 60}px) scale(${1 - progress * 0.5}) rotate(${progress * 30 - 15}deg)`,
              transition: "opacity 0.3s, transform 0.3s",
            }}
          >
            {heart.emoji}
          </div>
        );
      })}

      {/* Click bursts */}
      {bursts.map((burst) => {
        const age = Date.now() - burst.created;
        const progress = Math.min(age / 1200, 1);
        return burst.particles.map((p, i) => {
          const px = Math.cos(p.angle) * p.distance * progress;
          const py = Math.sin(p.angle) * p.distance * progress - progress * 30;
          return (
            <div
              key={`b-${burst.id}-${i}`}
              className="fixed pointer-events-none z-50"
              style={{
                left: burst.x,
                top: burst.y,
                fontSize: `${p.size * (1 - progress * 0.4)}px`,
                opacity: 1 - progress,
                transform: `translate(calc(-50% + ${px}px), calc(-50% + ${py}px)) rotate(${p.rotation * progress}deg)`,
                transition: "none",
              }}
            >
              {p.emoji}
            </div>
          );
        });
      })}
    </>
  );
}
