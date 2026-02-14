"use client";

import { useState, useEffect } from "react";

export default function LoveCalculator() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [displayPercent, setDisplayPercent] = useState(0);

  const calculate = () => {
    if (!name1.trim() || !name2.trim()) return;
    setCalculating(true);
    setResult(null);
    setDisplayPercent(0);

    // Dramatic pause...
    setTimeout(() => {
      // It's always somewhere absurdly high because love
      const base = 95 + Math.floor(Math.random() * 6); // 95-100
      setResult(base);
      setCalculating(false);
    }, 2000);
  };

  useEffect(() => {
    if (result === null) return;
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= result) {
        setDisplayPercent(result);
        clearInterval(interval);
      } else {
        setDisplayPercent(current);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [result]);

  return (
    <div className="max-w-md mx-auto text-center">
      <div
        className="rounded-2xl p-8"
        style={{
          background: "linear-gradient(135deg, #2a001220, #3d001515)",
          border: "1px solid #dc143c15",
        }}
      >
        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Your name..."
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            className="w-full text-center text-lg py-3 px-4 rounded-xl outline-none"
            style={{
              background: "#1a000880",
              border: "1px solid #dc143c20",
              color: "var(--love-blush)",
              fontFamily: "inherit",
            }}
          />
          <div className="text-2xl">💕</div>
          <input
            type="text"
            placeholder="Their name..."
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            className="w-full text-center text-lg py-3 px-4 rounded-xl outline-none"
            style={{
              background: "#1a000880",
              border: "1px solid #dc143c20",
              color: "var(--love-blush)",
              fontFamily: "inherit",
            }}
          />
        </div>

        <button
          onClick={calculate}
          className="love-button w-full"
          disabled={calculating}
        >
          {calculating ? "Consulting the heart..." : "Calculate Love 💘"}
        </button>

        {calculating && (
          <div className="mt-6 space-y-2">
            <div className="flex justify-center gap-1">
              {["❤️", "💕", "💗", "💖", "💘"].map((e, i) => (
                <span
                  key={i}
                  className="text-xl animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {e}
                </span>
              ))}
            </div>
            <p className="text-[var(--love-blush)] text-sm italic opacity-50">
              Analyzing cosmic compatibility...
            </p>
          </div>
        )}

        {result !== null && !calculating && (
          <div className="mt-6 fade-in-up space-y-3">
            {/* Progress bar */}
            <div
              className="w-full rounded-full overflow-hidden"
              style={{
                height: "12px",
                background: "#2a001240",
                border: "1px solid #dc143c15",
              }}
            >
              <div
                className="h-full rounded-full transition-all duration-[2s] ease-out"
                style={{
                  width: `${displayPercent}%`,
                  background: "linear-gradient(90deg, var(--love-red), var(--love-pink), var(--love-gold))",
                  boxShadow: "0 0 10px #dc143c60",
                }}
              />
            </div>

            <p className="text-4xl font-bold shimmer-text">
              {displayPercent}%
            </p>

            <p
              className="text-xl italic"
              style={{
                fontFamily: "var(--font-great-vibes), cursive",
                color: "var(--love-pink)",
              }}
            >
              {result === 100
                ? "Soulmates. Destiny. Written in the stars."
                : result >= 98
                ? "A love story for the ages!"
                : "The universe ships you two SO hard."}
            </p>

            <p className="text-[var(--love-blush)] text-xs opacity-40 italic">
              (results are scientifically accurate because love is always the answer)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
