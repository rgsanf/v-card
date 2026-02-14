"use client";

import { useState } from "react";

interface Card {
  label: string;
  emoji: string;
  message: string;
  color: string;
}

const CARDS: Card[] = [
  {
    label: "Open when you miss me",
    emoji: "🥺",
    message: "Close your eyes. Feel my arms around you. I'm never further than a heartbeat away. I miss you too - always.",
    color: "#dc143c",
  },
  {
    label: "Open when you need a smile",
    emoji: "😊",
    message: "Remember that time we couldn\u2019t stop laughing about absolutely nothing? That\u2019s what pure joy feels like. You are pure joy.",
    color: "#e8456b",
  },
  {
    label: "Open when you can\u2019t sleep",
    emoji: "🌙",
    message: "Count my love for you instead of sheep. Actually, don't - you'd be counting forever. Just know you're safe, you're loved, and I'm dreaming of you.",
    color: "#4a0028",
  },
  {
    label: "Open when you feel alone",
    emoji: "🤗",
    message: "You are never alone. I carry you in my heart everywhere I go. Right now, in this very moment, someone loves you more than all the stars in the sky.",
    color: "#8b0035",
  },
  {
    label: "Open when you doubt yourself",
    emoji: "💪",
    message: "You are braver than you believe, stronger than you seem, and loved more than you could ever imagine. I believe in you with every fiber of my being.",
    color: "#b71c1c",
  },
  {
    label: "Open when you need a kiss",
    emoji: "💋",
    message: "💋💋💋 - one for your forehead, one for your nose, and one for your lips. Consider yourself thoroughly kissed. (More where that came from.)",
    color: "#d4004a",
  },
];

export default function OpenWhenCards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
      {CARDS.map((card, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="kiss-cursor"
            onClick={() => setOpenIndex(isOpen ? null : i)}
            style={{ perspective: "1000px" }}
          >
            <div
              className="relative transition-transform duration-700"
              style={{
                transformStyle: "preserve-3d",
                transform: isOpen ? "rotateY(180deg)" : "rotateY(0deg)",
                minHeight: "200px",
              }}
            >
              {/* Front - sealed */}
              <div
                className="absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 text-center"
                style={{
                  backfaceVisibility: "hidden",
                  background: `linear-gradient(135deg, ${card.color}30, ${card.color}15)`,
                  border: `1px solid ${card.color}30`,
                  boxShadow: `0 4px 20px ${card.color}10`,
                }}
              >
                <span className="text-3xl">{card.emoji}</span>
                <p
                  className="text-lg"
                  style={{
                    fontFamily: "var(--font-great-vibes), cursive",
                    color: "var(--love-blush)",
                  }}
                >
                  {card.label}
                </p>
                <p className="text-xs text-[var(--love-blush)] opacity-30 mt-2">
                  tap to open
                </p>
              </div>

              {/* Back - message */}
              <div
                className="absolute inset-0 rounded-2xl p-5 flex flex-col items-center justify-center text-center"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  background: `linear-gradient(135deg, ${card.color}20, #1a000890)`,
                  border: `1px solid ${card.color}25`,
                }}
              >
                <p className="text-[var(--love-blush)] text-sm leading-relaxed italic opacity-80">
                  {card.message}
                </p>
                <p className="text-xs text-[var(--love-gold)] opacity-40 mt-3">
                  - with all my love
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
