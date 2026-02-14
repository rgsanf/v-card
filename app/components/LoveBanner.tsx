"use client";

export default function LoveBanner() {
  const message =
    " I love you \u00b7 Te amo \u00b7 Je t\u2019aime \u00b7 Ich liebe dich \u00b7 Ti amo \u00b7 \u6211\u7231\u4f60 \u00b7 \u611b\u3057\u3066\u308b \u00b7 \u49ac\u7231\u4f60 \u00b7 \u0421\u0430\u0440\u0430\u043d\u0445\u0430\u0439 \u00b7 Mahal kita \u00b7 \u0e09\u0e31\u0e19\u0e23\u0e31\u0e01\u0e04\u0e38\u0e13 \u00b7 Eu te amo \u00b7 \u0623\u0646\u0627 \u0623\u062d\u0628\u0643 \u00b7 \uc0ac\ub791\ud574\uc694 \u00b7 Aloha au ia \u02bboe \u00b7 \u2764\ufe0f ";

  return (
    <div
      className="w-full overflow-hidden py-3"
      style={{
        background: "linear-gradient(90deg, #3d001520, #5c002030, #3d001520)",
        borderTop: "1px solid #dc143c15",
        borderBottom: "1px solid #dc143c15",
      }}
    >
      <div className="love-banner whitespace-nowrap flex">
        <span className="text-[var(--love-blush)] text-sm tracking-wider opacity-60">
          {message}
        </span>
        <span className="text-[var(--love-blush)] text-sm tracking-wider opacity-60">
          {message}
        </span>
      </div>
    </div>
  );
}
