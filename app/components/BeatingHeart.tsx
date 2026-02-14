"use client";

import Sparkles from "./Sparkles";

export default function BeatingHeart() {
  return (
    <div className="relative flex items-center justify-center" style={{ padding: "60px", overflow: "visible" }}>
      <Sparkles count={16} radius={180} />
      <div className="beating-heart" style={{ overflow: "visible" }}>
        <svg
          width="220"
          height="220"
          viewBox="-40 -40 280 280"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible" }}
        >
          <defs>
            <radialGradient id="heartGlow" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#ff8cb0" />
              <stop offset="30%" stopColor="#ff4081" />
              <stop offset="60%" stopColor="#dc143c" />
              <stop offset="85%" stopColor="#8b0035" />
              <stop offset="100%" stopColor="#5c0020" />
            </radialGradient>
            <radialGradient id="heartShine" cx="35%" cy="30%" r="30%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="heartInner" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff6b9d" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#dc143c" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Outer ambient glow rings */}
          <ellipse cx="100" cy="85" rx="130" ry="120" fill="#dc143c" opacity="0.03" />
          <ellipse cx="100" cy="85" rx="110" ry="100" fill="#ff6b9d" opacity="0.05" />
          {/* Main heart */}
          <path
            d="M100 180
               C60 140, 0 110, 0 70
               C0 30, 30 0, 55 0
               C75 0, 90 15, 100 35
               C110 15, 125 0, 145 0
               C170 0, 200 30, 200 70
               C200 110, 140 140, 100 180Z"
            fill="url(#heartGlow)"
          />
          {/* Inner glow */}
          <path
            d="M100 160
               C70 130, 20 105, 20 72
               C20 42, 42 18, 60 18
               C75 18, 88 30, 100 48
               C112 30, 125 18, 140 18
               C158 18, 180 42, 180 72
               C180 105, 130 130, 100 160Z"
            fill="url(#heartInner)"
          />
          {/* Shine highlight */}
          <path
            d="M100 180
               C60 140, 0 110, 0 70
               C0 30, 30 0, 55 0
               C75 0, 90 15, 100 35
               C110 15, 125 0, 145 0
               C170 0, 200 30, 200 70
               C200 110, 140 140, 100 180Z"
            fill="url(#heartShine)"
          />
        </svg>
      </div>
    </div>
  );
}
