"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface EventAlertProps {
  splashDone?: boolean;
}

export function EventAlert({ splashDone = true }: EventAlertProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isExpired: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  // Target deadline: 29 October 2026 11:59:59 PM IST
  const deadline = new Date("2026-10-29T23:59:59+05:30").getTime();

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = deadline - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isExpired: false,
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  // Open modal once splash screen is done
  useEffect(() => {
    if (!splashDone) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 350);

    return () => clearTimeout(timer);
  }, [splashDone]);

  // Lock background body scroll when modal alert is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        setIsMinimized(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(true);
  };

  const handleReopen = () => {
    setIsOpen(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText("https://eloqvent.vercel.app/");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* ── CLEAN, MODERN & EYE-FRIENDLY MODAL ALERT ── */}
      {isOpen && (
        <div
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="event-alert-title"
          aria-describedby="event-alert-desc"
          className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-6"
        >
          {/* Backdrop with soft blur */}
          <div
            className="fixed inset-0 bg-ink/75 backdrop-blur-md transition-opacity duration-300"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="relative flex max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-3rem)] w-full max-w-[500px] flex-col overflow-hidden rounded-3xl border border-fog/15 bg-ink/95 text-fog shadow-[0_24px_80px_rgba(12,22,18,0.7)] backdrop-blur-2xl ring-1 ring-fog/10 transition-all duration-300 animate-in fade-in zoom-in-95">
            {/* Subtle Ambient Brand Glows */}
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-forest/25 blur-[100px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-leaf/15 blur-[100px]"
              aria-hidden="true"
            />

            {/* Close Button - Stays easily accessible at top-right */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close announcement"
              className="group absolute right-3.5 top-3.5 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-fog/15 bg-ink/80 text-fog/60 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-fog/30 hover:bg-fog/15 hover:text-fog focus:outline-none focus:ring-2 focus:ring-leaf/50"
            >
              <svg className="h-4 w-4 transition-transform group-hover:rotate-90 duration-200" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Scrollable Content Container */}
            <div className="custom-scrollbar relative z-10 flex-1 overflow-y-auto overscroll-contain p-5 sm:p-7">
              {/* Top Badges */}
              <div className="flex items-center gap-2 pr-10">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber/30 bg-amber/15 px-3 py-1 text-xs font-semibold text-amber-soft">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-soft opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-soft" />
                  </span>
                  Early Bird Offer Live
                </span>

                <span className="inline-flex items-center gap-1 rounded-full border border-leaf/30 bg-leaf/15 px-2.5 py-1 text-xs font-semibold text-leaf">
                  Save ₹60
                </span>
              </div>

            {/* Event Header */}
            <div className="mt-3.5">
              <p className="text-[11px] font-semibold tracking-wider text-fog/50 uppercase">
                EWB • IUCEE • IEEE MLRIT
              </p>
              <h2
                id="event-alert-title"
                className="mt-1 font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-fog"
              >
                ELOQVENT 2026
              </h2>
              <p className="mt-0.5 font-display text-sm font-semibold text-leaf">
                Where Bold Voices Meet Bold Ideas
              </p>
              <p className="mt-1.5 text-xs sm:text-[13px] text-fog/70 leading-relaxed">
                A two-day multidisciplinary platform uniting communication, innovation, and entrepreneurship to create human-centered solutions.
              </p>
            </div>

            {/* Clean Cohesive Card (Single layer, eye-friendly glass) */}
            <div
              id="event-alert-desc"
              className="mt-4 rounded-2xl border border-fog/12 bg-forest-deep/30 p-4 sm:p-5 backdrop-blur-md"
            >
              {/* Pricing & Validity */}
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-fog/50">
                    Registration Fee
                  </span>
                  <div className="mt-0.5 flex items-baseline gap-2.5">
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-fog tracking-tight">
                      ₹299
                    </span>
                    <span className="text-sm font-semibold text-fog/40 line-through decoration-fog/40">
                      ₹359
                    </span>
                    <span className="rounded-md bg-leaf/20 px-2 py-0.5 text-[11px] font-bold text-leaf border border-leaf/30">
                      Save 17%
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 rounded-md bg-fog/5 px-2.5 py-1 text-xs font-medium text-leaf border border-leaf/20">
                    ✓ Full Access Pass
                  </span>
                </div>
              </div>

              {/* Deadline Subtext */}
              <div className="mt-2.5 flex items-center gap-1.5 text-xs text-fog/75 border-t border-fog/8 pt-2.5">
                <span className="text-amber-soft">🕒</span>
                <span>
                  Valid until <strong className="text-fog font-semibold">29 October 2026</strong> at <strong className="text-amber-soft font-semibold">11:59 PM IST</strong>
                </span>
              </div>

              {/* Minimalist Event Highlights */}
              <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-fog/80">
                <span className="rounded-lg bg-ink/50 px-2.5 py-1 border border-fog/8">
                  🎙️ Keynotes &amp; Talks
                </span>
                <span className="rounded-lg bg-ink/50 px-2.5 py-1 border border-fog/8">
                  🏆 Competitions &amp; Prizes
                </span>
                <span className="rounded-lg bg-ink/50 px-2.5 py-1 border border-fog/8">
                  📜 Certificate Included
                </span>
              </div>

              {/* Countdown Section */}
              {!timeLeft.isExpired && (
                <div className="mt-3.5 border-t border-fog/8 pt-3">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold uppercase tracking-wider text-fog/50">
                      Early Bird Closes In
                    </span>
                    <span className="text-amber-soft/90 font-medium">
                      Limited passes at this rate
                    </span>
                  </div>

                  <div className="mt-2 grid grid-cols-4 gap-2 text-center">
                    <div className="rounded-xl border border-fog/10 bg-ink/60 py-2 sm:py-2.5 transition hover:border-fog/20">
                      <span className="block font-display text-xl sm:text-2xl font-bold text-fog tabular-nums">
                        {timeLeft.days}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-fog/45">
                        Days
                      </span>
                    </div>

                    <div className="rounded-xl border border-fog/10 bg-ink/60 py-2 sm:py-2.5 transition hover:border-fog/20">
                      <span className="block font-display text-xl sm:text-2xl font-bold text-fog tabular-nums">
                        {timeLeft.hours}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-fog/45">
                        Hours
                      </span>
                    </div>

                    <div className="rounded-xl border border-fog/10 bg-ink/60 py-2 sm:py-2.5 transition hover:border-fog/20">
                      <span className="block font-display text-xl sm:text-2xl font-bold text-fog tabular-nums">
                        {timeLeft.minutes}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-fog/45">
                        Mins
                      </span>
                    </div>

                    <div className="rounded-xl border border-fog/10 bg-ink/60 py-2 sm:py-2.5 transition hover:border-fog/20">
                      <span className="block font-display text-xl sm:text-2xl font-bold text-amber-soft tabular-nums">
                        {timeLeft.seconds}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-fog/45">
                        Secs
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <a
                href="https://eloqvent.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber px-5 py-3.5 text-center font-display text-sm font-bold text-ink shadow-[0_4px_20px_rgba(217,119,6,0.25)] transition-all duration-200 hover:bg-amber-soft hover:shadow-[0_6px_25px_rgba(245,158,11,0.4)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2 focus:ring-offset-ink"
              >
                <span>Register Now @ ₹299</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </a>

              <Link
                href="/events"
                onClick={handleClose}
                className="inline-flex items-center justify-center rounded-xl border border-fog/15 bg-fog/5 px-4 py-3.5 font-display text-sm font-semibold text-fog/85 transition-all duration-200 hover:border-fog/30 hover:bg-fog/10 hover:text-fog focus:outline-none"
              >
                View Details
              </Link>
            </div>

              {/* Footer Utilities */}
              <div className="mt-3.5 flex items-center justify-between text-xs text-fog/50">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 hover:text-leaf transition"
                >
                  <span>{copied ? "✓ Copied Link!" : "🔗 Copy Registration Link"}</span>
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="hover:text-fog/80 transition underline underline-offset-4"
                >
                  Dismiss &amp; continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── FLOATING ALERT CAPSULE (Minimized) ── */}
      {isMinimized && !isOpen && (
        <aside
          aria-label="Event alert notice"
          className="fixed bottom-5 right-4 z-40 max-w-[calc(100vw-2rem)] sm:right-6 animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="group relative flex items-center gap-3 rounded-full border border-fog/15 bg-ink/90 py-2 pl-2 pr-3.5 shadow-[0_12px_36px_rgba(12,22,18,0.4)] backdrop-blur-xl transition-all duration-300 hover:border-leaf/40 hover:shadow-[0_16px_44px_rgba(12,22,18,0.55)]">
            {/* Clickable Area to re-open modal */}
            <button
              type="button"
              onClick={handleReopen}
              className="relative flex items-center gap-2.5 text-left focus:outline-none"
            >
              {/* Icon Badge */}
              <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-fog shadow-sm">
                <span>⚡</span>
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-leaf border-[1.5px] border-ink" />
                </span>
              </div>

              {/* Text Info */}
              <div className="flex flex-col pr-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-fog">
                    Eloqvent 2026
                  </span>
                  <span className="rounded-full bg-leaf/20 px-1.5 py-0.2 text-[9px] font-bold text-leaf border border-leaf/30 uppercase">
                    Early Bird
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5 text-xs text-fog/80">
                  <span className="text-[11px] text-fog/50">Only</span>
                  <span className="text-[11px] font-semibold text-fog/40 line-through decoration-fog/40">
                    ₹359
                  </span>
                  <span className="font-display font-extrabold text-amber-soft">
                    ₹299
                  </span>
                  <span className="hidden sm:inline text-[11px] text-fog/50">
                    • Till 29 Oct, 11:59 PM IST
                  </span>
                </div>
              </div>
            </button>

            {/* Quick Register CTA Button */}
            <a
              href="https://eloqvent.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative shrink-0 rounded-full bg-amber px-3 py-1.5 font-display text-xs font-bold text-ink shadow-sm transition-all duration-200 hover:bg-amber-soft hover:scale-105 active:scale-95"
            >
              Register →
            </a>

            {/* Separator */}
            <span className="h-4 w-px bg-fog/10" aria-hidden="true" />

            {/* Dismiss Button */}
            <button
              type="button"
              onClick={() => setIsMinimized(false)}
              aria-label="Dismiss banner"
              className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-fog/40 transition hover:bg-fog/10 hover:text-fog focus:outline-none"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
