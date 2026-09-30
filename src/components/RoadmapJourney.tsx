"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { journeyPhases } from "@/data/content";

const milestoneMeta = [
  {
    step: "01",
    year: "2016",
    tag: "FOUNDING",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-700",
    lightBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  {
    step: "02",
    year: "2020",
    tag: "EVOLUTION",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "from-teal-600 to-forest",
    lightBg: "bg-teal-50 text-teal-800 border-teal-200",
  },
  {
    step: "03",
    year: "2024",
    tag: "COLLABORATION",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "from-forest to-moss",
    lightBg: "bg-emerald-50 text-forest border-forest/20",
  },
  {
    step: "04",
    year: "2026",
    tag: "NATIONWIDE IMPACT",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H9m4 0V7m0 0h4m-4 0H9" />
      </svg>
    ),
    color: "from-moss to-leaf",
    lightBg: "bg-moss/10 text-moss border-moss/30",
  },
  {
    step: "05",
    year: "2026",
    tag: "BEST CHAPTER AWARD",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    color: "from-amber-500 via-amber-600 to-yellow-500",
    lightBg: "bg-amber-50 text-amber-900 border-amber-300",
  },
];

export function RoadmapJourney() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <div className="relative mx-auto max-w-5xl px-4 py-6">
      {/* Visual Roadmap Route Track - Desktop Curved Snake SVG */}
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
        <svg className="h-full w-full" viewBox="0 0 900 1250" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="35%" stopColor="#1f5c45" />
              <stop offset="70%" stopColor="#3d9b6e" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <filter id="roadGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Underlay glow track */}
          <path
            d="M 230 110 C 650 180, 670 300, 670 380 C 670 480, 230 520, 230 630 C 230 730, 670 780, 670 880 C 670 980, 450 1050, 450 1140"
            stroke="url(#routeGradient)"
            strokeWidth="12"
            strokeOpacity="0.2"
            strokeLinecap="round"
            filter="url(#roadGlow)"
          />

          {/* Solid road base line */}
          <path
            d="M 230 110 C 650 180, 670 300, 670 380 C 670 480, 230 520, 230 630 C 230 730, 670 780, 670 880 C 670 980, 450 1050, 450 1140"
            stroke="url(#routeGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Dashed center lane line */}
          <path
            d="M 230 110 C 650 180, 670 300, 670 380 C 670 480, 230 520, 230 630 C 230 730, 670 780, 670 880 C 670 980, 450 1050, 450 1140"
            stroke="#ffffff"
            strokeWidth="2"
            strokeDasharray="8 8"
            strokeOpacity="0.8"
          />
        </svg>
      </div>

      {/* Mobile Road Line */}
      <div className="pointer-events-none absolute bottom-12 left-9 top-12 w-1.5 rounded-full bg-gradient-to-b from-emerald-500 via-forest to-amber md:hidden" />

      {/* Roadmap Stations list */}
      <div className="relative space-y-16 md:space-y-20">
        {journeyPhases.map((phase, index) => {
          const meta = milestoneMeta[index] || milestoneMeta[0];
          const isEven = index % 2 === 0;
          const isLast = index === journeyPhases.length - 1;
          const isHovered = activeTab === index;

          return (
            <Reveal key={phase.title} delay={index * 80}>
              <div
                onMouseEnter={() => setActiveTab(index)}
                onMouseLeave={() => setActiveTab(null)}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isLast
                    ? "md:justify-center"
                    : isEven
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Milestone Node Pin Marker */}
                <div
                  className={`z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-lg transition-all duration-300 ${
                    isHovered ? "scale-125 ring-8 ring-emerald-500/20" : "scale-100"
                  } bg-gradient-to-br ${meta.color} text-white shadow-forest/20 ml-2 md:ml-0`}
                >
                  {meta.icon}
                </div>

                {/* Waypoint Card Container */}
                <div
                  className={`mt-4 w-full pl-12 md:mt-0 md:w-5/12 ${
                    isLast
                      ? "md:pl-6 md:pr-6 md:text-center md:w-8/12"
                      : isEven
                      ? "md:pl-10 md:pr-0"
                      : "md:pr-10 md:pl-0"
                  }`}
                >
                  <div
                    className={`group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                      isLast
                        ? "border-amber-300/80 bg-gradient-to-br from-amber-50/40 via-white to-amber-50/20"
                        : "border-ink/10 hover:border-forest/40"
                    }`}
                  >
                    {/* Header Ribbon / Badge */}
                    <div
                      className={`flex flex-wrap items-center gap-2.5 ${
                        isLast
                          ? "justify-center"
                          : isEven
                          ? "justify-start"
                          : "justify-start md:justify-end"
                      }`}
                    >
                      <span className="rounded-md bg-ink px-2.5 py-1 font-display text-xs font-bold text-fog">
                        {meta.year}
                      </span>
                      <span
                        className={`rounded-md border px-2.5 py-0.5 text-[11px] font-bold tracking-wider uppercase ${meta.lightBg}`}
                      >
                        {meta.tag}
                      </span>
                    </div>

                    {/* Milestone Title */}
                    <h3
                      className={`mt-3.5 font-display text-xl font-bold tracking-tight text-ink md:text-2xl transition-colors group-hover:text-forest ${
                        isLast ? "text-amber-900" : ""
                      }`}
                    >
                      {phase.title}
                    </h3>

                    {/* Milestone Description */}
                    <p className="mt-2.5 text-[15px] leading-relaxed text-stone">
                      {phase.body}
                    </p>

                    {/* Highlight Badge for final Award item */}
                    {isLast && (
                      <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-amber-500/15 border border-amber-300 py-2 px-4 text-xs font-bold text-amber-900 shadow-inner">
                        <span>🏆</span> Best IUCEE Chapter Recognition (ICTIEE 2026)
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
