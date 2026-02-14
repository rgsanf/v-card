"use client";

export default function InfinityLove() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative" style={{ width: "200px", height: "100px" }}>
        <svg
          viewBox="0 0 200 100"
          width="200"
          height="100"
          style={{ overflow: "visible" }}
        >
          <defs>
            <linearGradient id="infinityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff6b9d">
                <animate attributeName="stop-color" values="#ff6b9d;#ffd700;#dc143c;#ff6b9d" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#dc143c">
                <animate attributeName="stop-color" values="#dc143c;#ff6b9d;#ffd700;#dc143c" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#ffd700">
                <animate attributeName="stop-color" values="#ffd700;#dc143c;#ff6b9d;#ffd700" dur="4s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
            <filter id="infinityGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Glow layer */}
          <path
            d="M100 50 C100 20, 140 0, 160 20 C180 40, 160 70, 100 50 C40 30, 20 60, 40 80 C60 100, 100 80, 100 50"
            fill="none"
            stroke="url(#infinityGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.3"
            filter="url(#infinityGlow)"
          />
          {/* Main stroke with dash animation */}
          <path
            d="M100 50 C100 20, 140 0, 160 20 C180 40, 160 70, 100 50 C40 30, 20 60, 40 80 C60 100, 100 80, 100 50"
            fill="none"
            stroke="url(#infinityGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="12 6"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="-36" dur="2s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
      <p
        className="text-xl md:text-2xl italic"
        style={{
          fontFamily: "var(--font-great-vibes), cursive",
          color: "var(--love-pink)",
        }}
      >
        My love for you is infinite
      </p>
    </div>
  );
}
