"use client";

import { useState } from "react";

const FACTS = [
  {
    emoji: "💓",
    fact: "When you look at someone you love, your pupils dilate up to 45%. Your eyes literally open wider to let more of them in.",
  },
  {
    emoji: "🧠",
    fact: "Falling in love produces the same neurological effects as cocaine. You are, quite literally, my favorite addiction.",
  },
  {
    emoji: "🫀",
    fact: "When two people in love stare into each other\u2019s eyes, their heartbeats synchronize within 3 minutes.",
  },
  {
    emoji: "🤗",
    fact: "Cuddling releases oxytocin - the 'love hormone' - which helps heal physical wounds faster. Your hugs literally heal me.",
  },
  {
    emoji: "💌",
    fact: "The oldest known love poem is over 4,000 years old, written on a clay tablet in ancient Sumeria. Love has always been the most important thing.",
  },
  {
    emoji: "🦢",
    fact: "Swans, wolves, penguins, and albatrosses all mate for life. We\u2019re in good company.",
  },
  {
    emoji: "🌡️",
    fact: "Being in love literally warms you. Studies show lovers have elevated skin temperatures when thinking about their partner.",
  },
  {
    emoji: "💎",
    fact: "It takes only 4 minutes to decide if you like someone. I knew in 2.",
  },
  {
    emoji: "🎵",
    fact: "Listening to music and being in love activate the same pleasure centers in the brain. You\u2019re my favorite song on repeat.",
  },
  {
    emoji: "✈️",
    fact: "People who are in love have lower levels of serotonin - the same as people with OCD. That's why I can't stop thinking about you.",
  },
];

export default function LoveFacts() {
  const [currentFact, setCurrentFact] = useState(0);

  const nextFact = () => {
    setCurrentFact((prev) => (prev + 1) % FACTS.length);
  };

  const fact = FACTS[currentFact];

  return (
    <div className="max-w-lg mx-auto text-center">
      <div
        className="rounded-2xl p-8 relative"
        style={{
          background: "linear-gradient(135deg, #2a001218, #3d001512)",
          border: "1px solid #dc143c15",
        }}
      >
        <div className="poem-enter" key={currentFact}>
          <span className="text-4xl block mb-4">{fact.emoji}</span>
          <p className="text-[var(--love-blush)] leading-relaxed text-base md:text-lg">
            {fact.fact}
          </p>
        </div>
      </div>

      <button
        onClick={nextFact}
        className="mt-6 text-sm kiss-cursor"
        style={{
          background: "linear-gradient(135deg, #dc143c30, #e8456b20)",
          border: "1px solid #dc143c25",
          borderRadius: "50px",
          padding: "10px 28px",
          color: "var(--love-blush)",
          cursor: "pointer",
          fontFamily: "inherit",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.boxShadow = "0 0 20px #dc143c20";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.boxShadow = "none";
        }}
      >
        Tell me more about love ({currentFact + 1}/{FACTS.length})
      </button>
    </div>
  );
}
