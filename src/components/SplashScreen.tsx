"use client";

import { useEffect, useState } from "react";

export function SplashScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"letters" | "expand" | "done">("letters");

  useEffect(() => {
    // Phase 1: Letters animate in (0 → 1.8s)
    // Phase 2: Expand/fade out (1.8s → 2.8s)
    const t1 = setTimeout(() => setPhase("expand"), 1800);
    const t2 = setTimeout(() => {
      setPhase("done");
      onDone();
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink transition-opacity duration-700 ${
        phase === "expand" ? "opacity-0 scale-105" : "opacity-100"
      }`}
      style={{ transformOrigin: "center center" }}
    >
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-forest/20 blur-[100px]" />

      {/* Animated E - W - B letters */}
      <div className="relative flex items-center gap-3 md:gap-5">
        {["E", "W", "B"].map((letter, i) => (
          <span
            key={letter}
            className="splash-letter font-display font-black text-fog"
            style={{
              fontSize: "clamp(5rem, 18vw, 14rem)",
              animationDelay: `${i * 0.25}s`,
              lineHeight: 1,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Subtle underline that draws in */}
      <div
        className="splash-line mt-4 h-[3px] rounded-full bg-[#e31c23]"
        style={{ animationDelay: "0.9s" }}
      />

      {/* Tagline fades in */}
      <p
        className="splash-tagline mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-fog/60 md:text-sm"
        style={{ animationDelay: "1.1s" }}
      >
        Engineers Without Borders
      </p>
    </div>
  );
}
