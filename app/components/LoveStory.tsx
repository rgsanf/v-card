"use client";

const MILESTONES = [
  {
    icon: "👀",
    title: "First Glance",
    text: "The moment our eyes met, the whole world stopped spinning — and started revolving around you.",
    side: "left" as const,
  },
  {
    icon: "💬",
    title: "First Conversation",
    text: "Your words wrapped around my heart like a warm blanket on a cold night. I never wanted the conversation to end.",
    side: "right" as const,
  },
  {
    icon: "🦋",
    title: "The Butterflies",
    text: "That feeling in my stomach wasn't nerves - it was my heart learning how to fly.",
    side: "left" as const,
  },
  {
    icon: "💑",
    title: "First Date",
    text: "Time stood still and raced all at once. I knew right then - this was the beginning of something extraordinary.",
    side: "right" as const,
  },
  {
    icon: "💕",
    title: "Falling in Love",
    text: "I didn\u2019t fall in love with you. I walked into love with you, with my eyes wide open, choosing you with every step.",
    side: "left" as const,
  },
  {
    icon: "🏠",
    title: "Building a Life",
    text: "Home isn\u2019t a place anymore. Home is wherever you are. Home is in your arms.",
    side: "right" as const,
  },
  {
    icon: "💍",
    title: "Forever & Always",
    text: "Every day I choose you. Every morning, every night, in every heartbeat in between. You are my always.",
    side: "left" as const,
  },
  {
    icon: "🌅",
    title: "The Future",
    text: "I don\u2019t know what tomorrow holds, but I know I want to face every sunrise and sunset with you by my side.",
    side: "right" as const,
  },
];

export default function LoveStory() {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Timeline center line */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
        style={{
          background:
            "linear-gradient(180deg, transparent, var(--love-red), var(--love-pink), var(--love-red), transparent)",
        }}
      />
      {/* Mobile center line */}
      <div
        className="absolute left-6 top-0 bottom-0 w-px md:hidden"
        style={{
          background:
            "linear-gradient(180deg, transparent, var(--love-red), var(--love-pink), var(--love-red), transparent)",
        }}
      />

      <div className="space-y-12 md:space-y-16">
        {MILESTONES.map((milestone, i) => (
          <div
            key={i}
            className="fade-in-up relative"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {/* Dot on timeline */}
            <div
              className="absolute z-10 hidden md:flex items-center justify-center"
              style={{
                left: "50%",
                top: "20px",
                transform: "translateX(-50%)",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, var(--love-red), var(--love-rose))",
                boxShadow: "0 0 15px #dc143c40",
                fontSize: "18px",
              }}
            >
              {milestone.icon}
            </div>
            {/* Mobile dot */}
            <div
              className="absolute z-10 md:hidden flex items-center justify-center"
              style={{
                left: "6px",
                top: "4px",
                transform: "translateX(-50%)",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, var(--love-red), var(--love-rose))",
                boxShadow: "0 0 12px #dc143c40",
                fontSize: "14px",
              }}
            >
              {milestone.icon}
            </div>

            {/* Card */}
            <div
              className={`ml-12 md:ml-0 md:w-[calc(50%-40px)] ${
                milestone.side === "left"
                  ? "md:mr-auto md:pr-8"
                  : "md:ml-auto md:pl-8"
              }`}
            >
              <div
                className="p-5 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, #2a001218, #3d001515, #2a001210)",
                  border: "1px solid #dc143c15",
                  boxShadow: "0 4px 20px #00000020",
                }}
              >
                <h4
                  className="text-xl md:text-2xl mb-2"
                  style={{
                    fontFamily: "var(--font-great-vibes), cursive",
                    color: "var(--love-pink)",
                  }}
                >
                  {milestone.title}
                </h4>
                <p className="text-[var(--love-blush)] opacity-70 leading-relaxed text-sm md:text-base">
                  {milestone.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
