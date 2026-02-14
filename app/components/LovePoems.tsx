"use client";

import { useCallback, useEffect, useState } from "react";

const POEMS = [
  {
    text: `"I carry your heart with me\n(I carry it in my heart)\nI am never without it\n(anywhere I go you go, my dear)"`,
    author: "E.E. Cummings",
  },
  {
    text: `"Whatever our souls are made of,\nhis and mine are the same."`,
    author: "Emily Brontë",
  },
  {
    text: `"I have waited for this opportunity,\nTo tell you that you mean the world to me.\nIn every heartbeat, in every sigh,\nYou are the stars across my sky."`,
    author: "A Heart in Love",
  },
  {
    text: `"You don't love someone for their looks,\nor their clothes, or for their fancy car,\nbut because they sing a song\nonly you can hear."`,
    author: "Oscar Wilde",
  },
  {
    text: `"I love you without knowing how,\nor when, or from where.\nI love you simply, without problems or pride."`,
    author: "Pablo Neruda",
  },
  {
    text: `"If I had a flower for every time\nI thought of you...\nI could walk through my garden forever."`,
    author: "Alfred Tennyson",
  },
  {
    text: `"In all the world,\nthere is no heart for me like yours.\nIn all the world,\nthere is no love for you like mine."`,
    author: "Maya Angelou",
  },
  {
    text: `"Grow old along with me!\nThe best is yet to be,\nThe last of life, for which the first was made."`,
    author: "Robert Browning",
  },
];

export default function LovePoems() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextPoem = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % POEMS.length);
      setIsTransitioning(false);
    }, 600);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextPoem, 8000);
    return () => clearInterval(interval);
  }, [nextPoem]);

  const poem = POEMS[currentIndex];

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto">
      <div className="text-[var(--love-gold)] text-sm tracking-[0.3em] uppercase opacity-60">
        Words of Love
      </div>

      <div
        className="relative min-h-[200px] flex items-center justify-center w-full"
        style={{
          background: "linear-gradient(135deg, #2a001210, #3d001510)",
          borderRadius: "12px",
          border: "1px solid #dc143c15",
          padding: "2rem",
        }}
      >
        <div
          className={isTransitioning ? "poem-exit" : "poem-enter"}
          key={currentIndex}
        >
          <blockquote className="text-center">
            <p
              className="text-lg leading-relaxed italic"
              style={{
                color: "var(--love-blush)",
                whiteSpace: "pre-line",
              }}
            >
              {poem.text}
            </p>
            <footer
              className="mt-4 text-sm"
              style={{ color: "var(--love-gold)" }}
            >
              — {poem.author}
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Poem navigation dots */}
      <div className="flex gap-2">
        {POEMS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (i !== currentIndex) {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(i);
                  setIsTransitioning(false);
                }, 600);
              }
            }}
            className="transition-all duration-300"
            style={{
              width: i === currentIndex ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background:
                i === currentIndex
                  ? "linear-gradient(90deg, var(--love-red), var(--love-pink))"
                  : "var(--love-burgundy)",
              border: "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}
