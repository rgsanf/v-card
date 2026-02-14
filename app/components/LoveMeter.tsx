"use client";

import { useEffect, useRef, useState } from "react";

export default function LoveMeter() {
  const [level, setLevel] = useState(0);
  const [overflowing, setOverflowing] = useState(false);
  const overflowEmojis = useRef(
    ["❤️", "💕", "💗", "💖", "🔥", "✨", "💘", "🩷"].map((e, i) => ({
      emoji: e,
      size: 10 + Math.floor(Math.random() * 8),
    })),
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setLevel((prev) => {
          if (prev >= 120) {
            clearInterval(interval);
            setOverflowing(true);
            return 120;
          }
          return prev + 1;
        });
      }, 30);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Label on top */}
      <div className="text-center">
        <p
          className="text-2xl md:text-3xl mb-1"
          style={{
            fontFamily: "var(--font-great-vibes), cursive",
            color: overflowing ? "var(--love-gold)" : "var(--love-pink)",
            transition: "color 0.5s",
          }}
        >
          {overflowing ? "OVERFLOWING!" : `${Math.min(level, 100)}%`}
        </p>
        <p className="text-[var(--love-blush)] opacity-50 text-sm italic">
          {overflowing
            ? "Love cannot be contained"
            : level > 75
              ? "Almost too much to hold..."
              : level > 50
                ? "Love levels rising..."
                : "Measuring love..."}
        </p>
      </div>

      {/* Thermometer */}
      <div className="relative" style={{ width: "80px", height: "260px" }}>
        {/* Overflow hearts - on top */}
        {overflowing && (
          <>
            {overflowEmojis.current.map((item, i) => (
              <div
                key={i}
                className="absolute text-sm"
                style={{
                  left: `${30 + Math.sin(i * 1.2) * 25}px`,
                  top: `${-10 - i * 12}px`,
                  animation: `float-up ${2 + i * 0.3}s ease-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                  opacity: 0.8,
                  fontSize: `${item.size}px`,
                }}
              >
                {item.emoji}
              </div>
            ))}
          </>
        )}

        {/* Thermometer tube */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 rounded-full overflow-hidden"
          style={{
            width: "24px",
            height: "200px",
            background: "#2a001240",
            border: "2px solid #dc143c20",
          }}
        >
          {/* Fill - grows from bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 rounded-full transition-all duration-100"
            style={{
              height: `${Math.min(level, 100)}%`,
              background: `linear-gradient(180deg,
                ${level > 100 ? "#ff4081" : "#ff6b9d"},
                #dc143c,
                #8b0035
              )`,
              boxShadow: "0 0 10px #dc143c60",
            }}
          />
        </div>

        {/* Thermometer bulb at bottom */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full"
          style={{
            width: "48px",
            height: "48px",
            background:
              level > 100
                ? "radial-gradient(circle at 40% 40%, #ff4081, #dc143c, #8b0035)"
                : "radial-gradient(circle at 40% 40%, #ff6b9d, #dc143c, #8b0035)",
            boxShadow: overflowing
              ? "0 0 30px #dc143c80, 0 0 60px #dc143c40"
              : "0 0 15px #dc143c40",
            transition: "box-shadow 0.5s",
          }}
        />

        {/* Tick marks */}
        {[0, 25, 50, 75, 100].map((tick) => (
          <div
            key={tick}
            className="absolute flex items-center gap-2"
            style={{
              right: "-40px",
              top: `${200 - tick * 2}px`,
            }}
          >
            <div
              style={{
                width: "8px",
                height: "1px",
                background: "var(--love-blush)",
                opacity: 0.3,
              }}
            />
            <span className="text-[10px] text-[var(--love-blush)] opacity-30">
              {tick}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
