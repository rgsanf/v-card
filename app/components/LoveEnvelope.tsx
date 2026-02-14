"use client";

import { useState } from "react";
import Sparkles from "./Sparkles";

export default function LoveEnvelope() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <p
        className="text-[var(--love-blush)] text-lg italic fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        A letter, sealed with a kiss...
      </p>

      <div
        className="envelope relative kiss-cursor mx-auto"
        onClick={() => setIsOpen(true)}
        style={{
          width: "min(400px, 90vw)",
          height: isOpen ? "420px" : "280px",
          perspective: "1000px",
          transition: "height 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* Envelope body */}
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background: "linear-gradient(135deg, #8b0035, #5c0020)",
            border: "2px solid #dc143c40",
            overflow: "visible",
          }}
        >
          {/* Bottom flap pattern */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "60%",
              background: "linear-gradient(135deg, #6d002a, #4a0020)",
              clipPath: "polygon(0 40%, 50% 0%, 100% 40%, 100% 100%, 0% 100%)",
            }}
          />

          {/* Wax seal */}
          <div
            className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center"
            style={{
              bottom: "35%",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 35% 35%, #e74c3c, #8b0035, #4a0020)",
              boxShadow:
                "0 2px 8px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.2)",
              transition: "opacity 0.5s",
              opacity: isOpen ? 0 : 1,
            }}
          >
            <span
              className="text-xl"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
            >
              💋
            </span>
          </div>

          {/* Letter inside */}
          <div
            className="letter-slide absolute left-1/2 rounded-md p-6 flex flex-col items-center justify-center text-center"
            style={{
              width: "85%",
              height: isOpen ? "auto" : "85%",
              minHeight: isOpen ? "240px" : undefined,
              bottom: isOpen ? "auto" : "5%",
              top: isOpen ? "-140px" : "auto",
              background: "linear-gradient(180deg, #fff0f5, #ffe0eb, #ffd1e3)",
              transform: "translateX(-50%)",
              opacity: isOpen ? 1 : 0,
              zIndex: 5,
              boxShadow: isOpen ? "0 8px 32px rgba(0,0,0,0.3)" : "none",
              transition:
                "top 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s, opacity 0.8s ease 0.5s, box-shadow 0.8s ease 0.5s",
            }}
          >
            <div className="text-[#5c0020] space-y-3">
              <p className="text-sm tracking-widest uppercase opacity-60">
                My Dearest Valentine
              </p>
              <div className="love-divider !w-full !opacity-40" />
              <p
                className="text-base leading-relaxed italic"
                style={{ color: "#8b0035" }}
              >
                In a universe of infinite possibilities,
                <br />
                my heart chose you — not once,
                <br />
                but in every moment, in every breath,
                <br />
                in every beat that echoes your name.
              </p>
              <p className="text-lg font-bold" style={{ color: "#dc143c" }}>
                You are my forever.
              </p>
              <p className="text-xs tracking-wider opacity-50 mt-2">
                — With all the love in my heart
              </p>
            </div>
          </div>
        </div>

        {/* Top flap */}
        <div
          className={`envelope-flap absolute left-0 right-0 top-0 ${isOpen ? "open" : ""}`}
          style={{
            height: "55%",
            background: "linear-gradient(180deg, #7a002e, #5c0020)",
            clipPath: "polygon(0 0, 50% 100%, 100% 0)",
            zIndex: isOpen ? 0 : 20,
          }}
        />

        {/* Click prompt */}
        {!isOpen && (
          <div className="absolute bottom-4 left-0 right-0 text-center z-30">
            <span className="text-[var(--love-blush)] text-sm opacity-70 animate-pulse">
              tap to open...
            </span>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="relative">
          <Sparkles count={10} radius={80} />
          <p className="text-[var(--love-gold)] text-lg italic fade-in-up">
            Every word, written just for you.
          </p>
        </div>
      )}
    </div>
  );
}
