"use client";

import { useEffect, useState } from "react";

export function SplashScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"letters" | "expand" | "done">("letters");

  useEffect(() => {
    // Phase 1: Letters & tagline animate in (0 → 1.5s)
    // Phase 2: Smooth fade out overlay directly revealing page (1.5s → 1.9s)
    const t1 = setTimeout(() => setPhase("expand"), 1500);
    const t2 = setTimeout(() => {
      setPhase("done");
      onDone();
    }, 1900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink transition-all duration-400 ease-out ${
        phase === "expand" ? "opacity-0 pointer-events-none scale-[1.02]" : "opacity-100"
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
              animationDelay: `${i * 0.2}s`,
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
        style={{ animationDelay: "0.7s" }}
      />

      {/* Tagline fades in */}
      <p
        className="splash-tagline mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-fog/60 md:text-sm"
        style={{ animationDelay: "0.9s" }}
      >
        Engineers Without Borders
      </p>
    </div>
  );
}
