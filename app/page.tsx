"use client";

import { useState, useEffect } from "react";
import FloatingHearts from "./components/FloatingHearts";
import RosePetals from "./components/RosePetals";
import BeatingHeart from "./components/BeatingHeart";
import LoveEnvelope from "./components/LoveEnvelope";
import ValentineQuestion from "./components/ValentineQuestion";
import LoveBanner from "./components/LoveBanner";
import Countdown from "./components/Countdown";
import MouseTrailHearts from "./components/MouseTrailHearts";
import StarryNight from "./components/StarryNight";
import OpenWhenCards from "./components/OpenWhenCards";
import LoveMeter from "./components/LoveMeter";
import LoveFacts from "./components/LoveFacts";
import InfinityLove from "./components/InfinityLove";
import { VALENTINES_DATE } from "./lib/constants";

function SectionTitle({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-12">
      <h2
        className="text-3xl md:text-5xl mb-3"
        style={{
          fontFamily: "var(--font-great-vibes), cursive",
          color: "var(--love-pink)",
          textShadow: "0 0 30px #dc143c40",
        }}
      >
        {children}
      </h2>
      {subtitle && (
        <p className="text-[var(--love-blush)] opacity-40 italic text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [isValentines, setIsValentines] = useState(false);

  useEffect(() => {
    setMounted(true);
    const now = new Date();
    const valentines = new Date(VALENTINES_DATE);
    setIsValentines(now >= valentines);
  }, []);

  if (!mounted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#1a0008" }}
      >
        <div className="text-4xl animate-pulse">❤️</div>
      </div>
    );
  }

  // Before Valentine's Day - locked teaser
  if (!isValentines) {
    return (
      <div className="romantic-bg relative min-h-screen">
        <StarryNight />
        <FloatingHearts />
        <MouseTrailHearts />

        <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20 gap-8">
          <div className="fade-in-up text-center">
            <p
              className="text-lg md:text-xl tracking-[0.4em] uppercase mb-4"
              style={{ color: "var(--love-blush)", opacity: 0.5 }}
            >
              Something special is coming
            </p>
            <h1
              className="text-4xl md:text-7xl lg:text-8xl mb-2"
              style={{
                fontFamily: "var(--font-great-vibes), cursive",
                color: "var(--love-pink)",
                textShadow:
                  "0 0 40px #dc143c60, 0 0 80px #dc143c30, 0 0 120px #dc143c15",
              }}
            >
              Not Yet...
            </h1>
            <p
              className="text-xl md:text-2xl italic mt-6"
              style={{ color: "var(--love-blush)", opacity: 0.6 }}
            >
              something made with love is waiting for you
            </p>
          </div>

          <div className="my-4">
            <BeatingHeart />
          </div>

          <Countdown />

          <p
            className="text-sm italic mt-8 text-center max-w-md"
            style={{ color: "var(--love-blush)", opacity: 0.3 }}
          >
            Come back on Valentine&apos;s Day. I promise it&apos;ll be worth the wait.
          </p>
        </main>
      </div>
    );
  }

  return (
    <div className="romantic-bg relative min-h-screen">
      {/* Ambient layers */}
      <StarryNight />
      <FloatingHearts />
      <RosePetals />
      <MouseTrailHearts />

      {/* Main content */}
      <main className="relative z-10">
        {/* ===== HERO SECTION ===== */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 gap-6">
          <div className="fade-in-up text-center">
            <p
              className="text-lg md:text-xl tracking-[0.4em] uppercase mb-4"
              style={{ color: "var(--love-blush)", opacity: 0.5 }}
            >
              February 14th
            </p>
            <h1
              className="text-5xl md:text-8xl lg:text-9xl mb-2"
              style={{
                fontFamily: "var(--font-great-vibes), cursive",
                color: "var(--love-pink)",
                textShadow:
                  "0 0 40px #dc143c60, 0 0 80px #dc143c30, 0 0 120px #dc143c15",
              }}
            >
              Happy Valentine&apos;s Day
            </h1>
            <p
              className="text-xl md:text-2xl italic mt-4"
              style={{ color: "var(--love-blush)", opacity: 0.7 }}
            >
              a love letter, written in code
            </p>
          </div>

          <div className="my-4">
            <BeatingHeart />
          </div>

          <Countdown />

          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
            style={{ opacity: 0.4 }}
          >
            <span className="text-[var(--love-blush)] text-sm">scroll for more love</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--love-blush)"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </section>

        <LoveBanner />

        {/* ===== THE BIG QUESTION ===== */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <ValentineQuestion onYes={() => setUnlocked(true)} />
        </section>

        {/* ===== UNLOCKED CONTENT ===== */}
        {unlocked && (
          <div className="fade-in" style={{ animationDuration: "2s" }}>
            <div className="love-divider" />

            {/* ===== LOVE METER ===== */}
            <section className="py-24 px-6">
              <SectionTitle subtitle="warning: levels may exceed maximum capacity">
                How Much Do I Love You?
              </SectionTitle>
              <LoveMeter />
            </section>

            <div className="love-divider" />

            {/* ===== LOVE LETTER ===== */}
            <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 gap-12">
              <SectionTitle subtitle="sealed with love and a little bit of CSS">
                A Letter For You
              </SectionTitle>
              <LoveEnvelope />
            </section>

            <LoveBanner />

            {/* ===== LOVE FACTS ===== */}
            <section className="py-24 px-6">
              <SectionTitle subtitle="because love is literally science">
                Did You Know?
              </SectionTitle>
              <LoveFacts />
            </section>

            <div className="love-divider" />

            {/* ===== OPEN WHEN CARDS ===== */}
            <section className="py-24 px-6">
              <SectionTitle subtitle="little love letters for whenever you need them">
                Open When...
              </SectionTitle>
              <OpenWhenCards />
            </section>

            <LoveBanner />

            {/* ===== FOOTER OF LOVE ===== */}
            <footer className="py-20 px-6 text-center">
              <div className="max-w-lg mx-auto space-y-8">
                <InfinityLove />

                <p
                  className="text-3xl md:text-5xl"
                  style={{
                    fontFamily: "var(--font-great-vibes), cursive",
                    color: "var(--love-pink)",
                    textShadow: "0 0 30px #dc143c30",
                  }}
                >
                  Forever &amp; Always
                </p>

                <div className="love-divider !w-32 !mx-auto" />

                <div className="space-y-4">
                  <p className="text-[var(--love-blush)] italic opacity-60 text-sm leading-relaxed">
                    This valentine was crafted with love, late nights, and a heart full of code.
                  </p>
                  <p className="text-[var(--love-blush)] italic opacity-50 text-sm leading-relaxed">
                    Every animation is a heartbeat. Every pixel, a declaration.
                  </p>
                  <p className="text-[var(--love-blush)] italic opacity-40 text-sm leading-relaxed">
                    Every line of code whispers: I love you.
                  </p>
                </div>

                <div className="flex justify-center gap-3 text-2xl">
                  {["💕", "💖", "💗", "💝", "💘", "💖", "💕"].map((h, i) => (
                    <span
                      key={i}
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <p className="text-[var(--love-blush)] opacity-20 text-xs mt-8">
                  made with ❤️ and approximately one million lines of love
                </p>
              </div>
            </footer>
          </div>
        )}
      </main>
    </div>
  );
}
