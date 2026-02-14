"use client";

import { useEffect, useState } from "react";
import LoveExplosion from "./LoveExplosion";
import { VALENTINES_DATE } from "../lib/constants";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isPast, setIsPast] = useState(false);
  const [justHit, setJustHit] = useState(false);

  useEffect(() => {
    const valentines = new Date(VALENTINES_DATE);

    function update() {
      const now = new Date();
      const diff = valentines.getTime() - now.getTime();

      if (diff <= 0) {
        if (!isPast) {
          setJustHit(true);
          setTimeout(() => setJustHit(false), 4000);
        }
        setIsPast(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [isPast]);

  if (isPast) {
    return (
      <div className="text-center relative">
        {justHit && <LoveExplosion />}
        <div className="fade-in-up">
          <p className="text-4xl md:text-6xl shimmer-text font-bold mb-4">
            It&apos;s Valentine&apos;s Day!
          </p>
          <p
            className="text-2xl md:text-3xl italic mb-6"
            style={{
              fontFamily: "var(--font-great-vibes), cursive",
              color: "var(--love-pink)",
            }}
          >
            The universe conspired to bring us together
          </p>
          <div className="flex justify-center gap-3 text-3xl mb-4">
            <span className="animate-bounce" style={{ animationDelay: "0s" }}>
              🌹
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.1s" }}>
              💕
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
              ✨
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.3s" }}>
              💖
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
              🌹
            </span>
          </div>
          <p className="text-[var(--love-blush)] opacity-60 italic text-lg">
            Every second of today is yours
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center fade-in-up">
      <p
        className="text-xl md:text-2xl mb-6 italic"
        style={{
          fontFamily: "var(--font-great-vibes), cursive",
          color: "var(--love-blush)",
          opacity: 0.8,
        }}
      >
        Every second brings me closer to you
      </p>
      <div className="flex gap-3 md:gap-5 justify-center flex-wrap">
        {[
          { value: timeLeft.days, label: "Days", emoji: "💕" },
          { value: timeLeft.hours, label: "Hours", emoji: "💗" },
          { value: timeLeft.minutes, label: "Minutes", emoji: "💓" },
          { value: timeLeft.seconds, label: "Seconds", emoji: "💘" },
        ].map((unit) => (
          <div
            key={unit.label}
            className="flex flex-col items-center group"
            style={{
              background:
                "linear-gradient(180deg, #3d001525, #5c002018, #3d001510)",
              borderRadius: "16px",
              border: "1px solid #dc143c20",
              padding: "16px 20px",
              minWidth: "80px",
              boxShadow: "0 0 20px #dc143c08, inset 0 1px 0 #ffffff08",
              transition: "all 0.3s ease",
            }}
          >
            <span className="text-sm mb-1">{unit.emoji}</span>
            <span
              className="text-3xl md:text-5xl font-bold tabular-nums"
              style={{
                background:
                  "linear-gradient(180deg, var(--love-blush), var(--love-pink), var(--love-red))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.1,
              }}
            >
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-[var(--love-blush)] text-xs opacity-40 mt-2 tracking-widest uppercase">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
      <p className="text-[var(--love-gold)] opacity-40 text-sm mt-6 italic">
        ...until Valentine&apos;s Day
      </p>
    </div>
  );
}
