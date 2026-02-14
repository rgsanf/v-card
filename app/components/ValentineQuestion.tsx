"use client";

import { useState, useRef, useCallback } from "react";
import LoveExplosion from "./LoveExplosion";

export default function ValentineQuestion({
  onYes,
}: {
  onYes?: () => void;
}) {
  const [answered, setAnswered] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noMoves, setNoMoves] = useState(0);
  const [noSize, setNoSize] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const NO_MESSAGES = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you crazy?!",
    "I'm not gonna stop asking...",
    "I REFUSE to accept that!",
    "You're breaking my heart 💔",
  ];

  const moveNoButton = useCallback(() => {
    if (!containerRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    const maxX = container.width - 150;
    const maxY = container.height - 60;
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    setNoPosition({ x: newX, y: newY });
    setNoMoves((prev) => prev + 1);
    setNoSize((prev) => Math.max(0.5, prev - 0.05));
  }, []);

  const handleYes = () => {
    setAnswered(true);
    onYes?.();
  };

  if (answered) {
    return (
      <div className="flex flex-col items-center gap-6 text-center relative">
        <LoveExplosion />
        <div className="fade-in-up text-4xl md:text-6xl font-bold shimmer-text">
          YAY!!!
        </div>
        <div className="fade-in-up text-2xl md:text-3xl text-[var(--love-pink)]" style={{ animationDelay: "0.3s" }}>
          I knew you&apos;d say yes!
        </div>
        <div className="fade-in-up text-xl text-[var(--love-blush)]" style={{ animationDelay: "0.6s" }}>
          Happy Valentine&apos;s Day, my love
        </div>
        <div className="fade-in-up text-6xl" style={{ animationDelay: "0.9s" }}>
          💕💖💕
        </div>
        <div className="fade-in-up text-lg text-[var(--love-gold)] italic mt-4" style={{ animationDelay: "1.2s" }}>
          &quot;Two hearts that beat as one, now and forever.&quot;
        </div>
        <div
          className="fade-in-up mt-8 flex flex-col items-center gap-2 animate-bounce"
          style={{ animationDelay: "2s", opacity: 0 }}
        >
          <span className="text-[var(--love-blush)] text-sm opacity-60">keep scrolling...</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--love-blush)"
            strokeWidth="2"
            opacity="0.6"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center gap-8 text-center relative"
      style={{ minHeight: "300px" }}
    >
      <h2 className="text-3xl md:text-5xl font-bold shimmer-text">
        Will You Be My Valentine?
      </h2>

      <div className="text-6xl animate-bounce">
        💘
      </div>

      <div className="flex gap-6 items-center relative" style={{ minHeight: "80px", minWidth: "320px" }}>
        <button
          className="love-button text-xl"
          onClick={handleYes}
          style={{
            fontSize: `${1.2 + noMoves * 0.05}rem`,
            padding: `${16 + noMoves * 2}px ${48 + noMoves * 4}px`,
          }}
        >
          Yes! 💝
        </button>

        <button
          className="no-button"
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          style={{
            transform: `translate(${noPosition.x}px, ${noPosition.y}px) scale(${noSize})`,
            position: "relative",
            zIndex: 10,
          }}
        >
          {NO_MESSAGES[Math.min(noMoves, NO_MESSAGES.length - 1)]}
        </button>
      </div>

      {noMoves > 3 && (
        <p className="text-[var(--love-blush)] text-sm italic fade-in">
          (the Yes button is getting bigger... just saying)
        </p>
      )}
    </div>
  );
}
