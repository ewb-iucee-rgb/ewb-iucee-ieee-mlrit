"use client";

import { useEffect, useState } from "react";
import { events } from "@/data/content";

type EventItem = (typeof events)[number];

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8A3.6 3.6 0 007.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6A3.6 3.6 0 0016.4 4H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
    </svg>
  );
}

function EventDetailsModal({
  event,
  onClose,
}: {
  event: EventItem;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/55 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-detail-title"
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-fog p-6 shadow-2xl md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-stone transition hover:bg-mist hover:text-ink"
          aria-label="Close details"
        >
          ✕
        </button>

        <p className="pr-10 text-[11px] font-bold uppercase tracking-[0.12em] text-moss">
          {event.tag}
        </p>
        <h3
          id="event-detail-title"
          className="mt-3 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl"
        >
          {event.title}
        </h3>

        <dl className="mt-8 space-y-5 border-t border-ink/10 pt-6">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-stone">
              Dates
            </dt>
            <dd className="mt-1.5 text-[15px] font-medium text-ink">{event.date}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-stone">
              Venue
            </dt>
            <dd className="mt-1.5 text-[15px] font-medium text-ink">
              {event.location}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-stone">
              Event brief
            </dt>
            <dd className="mt-1.5 text-[15px] leading-relaxed text-stone">
              {event.subtitle}
            </dd>
          </div>
        </dl>

        <a
          href={event.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-semibold text-fog transition hover:bg-forest"
        >
          <InstagramIcon className="h-4 w-4" />
          View on Instagram
        </a>
      </div>
    </div>
  );
}

export function EventsCarousel() {
  const [selected, setSelected] = useState<EventItem | null>(null);

  // Duplicate events array for seamless infinite marquee scroll
  const duplicatedEvents = [...events, ...events];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mist via-fog to-mist py-16 md:py-24">
      {/* CSS Keyframes for infinite marquee */}
      <style jsx global>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-continuous {
          animation: marqueeScroll 45s linear infinite;
        }
        .animate-marquee-continuous:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Continuous Marquee Track */}
      <div className="group relative w-full overflow-hidden">
        <div className="flex w-max gap-5 animate-marquee-continuous px-4 py-4 md:gap-6">
          {duplicatedEvents.map((event, i) => {
            const coverPhoto =
              "photos" in event &&
              (event as unknown as { photos?: string[] }).photos?.[0];

            return (
              <article
                key={`${event.title}-${i}`}
                data-event-card
                className={`relative flex h-[440px] w-[min(80vw,320px)] shrink-0 flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br ${event.gradient} p-6 shadow-lg transition-transform duration-300 hover:scale-[1.02] sm:h-[460px] sm:w-[340px] md:h-[500px] md:w-[360px] md:p-7 lg:h-[520px] lg:w-[380px] ring-1 ring-ink/10`}
              >
                {/* Photo background with dark overlay */}
                {coverPhoto && (
                  <>
                    <div
                      className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url('${coverPhoto}')`,
                        opacity: 0.55,
                      }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />
                  </>
                )}
                {!coverPhoto && (
                  <div className="pointer-events-none absolute inset-0 topo-grid opacity-15" />
                )}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_55%)]" />

                <div className="relative">
                  <h3 className="font-display text-xl font-bold leading-snug tracking-tight text-fog sm:text-2xl">
                    {event.title}
                  </h3>
                  <p className="mt-2.5 text-sm font-semibold text-fog/80">
                    {event.date}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelected(event)}
                  className="relative inline-flex items-center gap-2 self-start rounded-full border border-fog/30 bg-black/40 px-4 py-2 text-sm font-semibold text-fog backdrop-blur-md transition hover:border-fog/60 hover:bg-black/60"
                >
                  View details
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {selected && (
        <EventDetailsModal event={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
