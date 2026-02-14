"use client";

import { useState } from "react";

const DREAMS = [
  { emoji: "🌅", text: "Watch the sunrise from a mountaintop, hand in hand" },
  { emoji: "🏖️", text: "Build sandcastles on a secret beach only we know about" },
  { emoji: "🌌", text: "Fall asleep under a sky full of stars in the middle of nowhere" },
  { emoji: "🎪", text: "Get lost in a foreign city with no map and no plan, just us" },
  { emoji: "🏡", text: "Build a home filled with laughter, warmth, and Sunday pancakes" },
  { emoji: "🌸", text: "Plant a garden together and watch it bloom year after year" },
  { emoji: "💃", text: "Dance in the kitchen at midnight to our favorite song" },
  { emoji: "📖", text: "Read books side by side on a rainy afternoon, legs intertwined" },
  { emoji: "🎆", text: "Ring in every New Year with a kiss at midnight" },
  { emoji: "🧓", text: "Grow old together, still holding hands, still in love, still laughing" },
  { emoji: "🌍", text: "See every corner of the world, collecting memories instead of things" },
  { emoji: "☕", text: "Share a thousand more cups of morning coffee in comfortable silence" },
];

export default function DreamsTogether() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const toggleDream = (index: number) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const revealAll = () => {
    setRevealed(new Set(DREAMS.map((_, i) => i)));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {DREAMS.map((dream, i) => {
          const isRevealed = revealed.has(i);
          return (
            <div
              key={i}
              className="kiss-cursor"
              onClick={() => toggleDream(i)}
            >
              <div
                className="rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2 transition-all duration-500"
                style={{
                  minHeight: "120px",
                  background: isRevealed
                    ? "linear-gradient(135deg, #3d001525, #5c002018)"
                    : "linear-gradient(135deg, #2a001215, #1a000810)",
                  border: isRevealed
                    ? "1px solid #dc143c25"
                    : "1px solid #dc143c10",
                  boxShadow: isRevealed
                    ? "0 0 20px #dc143c10"
                    : "none",
                  transform: isRevealed ? "scale(1.02)" : "scale(1)",
                }}
              >
                <span
                  className="text-2xl transition-transform duration-500"
                  style={{
                    transform: isRevealed ? "scale(1.2)" : "scale(1)",
                  }}
                >
                  {isRevealed ? dream.emoji : "🎁"}
                </span>
                {isRevealed ? (
                  <p className="text-[var(--love-blush)] text-xs md:text-sm leading-relaxed opacity-80">
                    {dream.text}
                  </p>
                ) : (
                  <p className="text-[var(--love-blush)] text-xs opacity-30">
                    tap to unwrap
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {revealed.size < DREAMS.length && (
        <div className="text-center mt-6">
          <button
            onClick={revealAll}
            className="text-[var(--love-gold)] opacity-40 text-sm hover:opacity-70 transition-opacity"
            style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
          >
            reveal all dreams...
          </button>
        </div>
      )}

      {revealed.size === DREAMS.length && (
        <p className="text-center text-[var(--love-gold)] opacity-50 italic text-sm mt-6 fade-in">
          Every dream is sweeter because you&apos;re in it.
        </p>
      )}
    </div>
  );
}
