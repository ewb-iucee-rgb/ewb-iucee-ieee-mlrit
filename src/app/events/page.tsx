import { EventsCarousel } from "@/components/EventsCarousel";
import { Reveal } from "@/components/Reveal";
import { upcomingEvents } from "@/data/content";

export default function EventsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-deep pt-28 text-fog md:pt-32">
        <div className="relative mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-leaf">
            Events
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl">
            Where Ideas Become Action
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-fog/75">
            From workshops, educational visits and projects to events and
            initiatives that bring ideas to life.
          </p>
        </div>
      </section>

      <section className="border-b border-ink/8 bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-moss">
              Looking ahead
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Upcoming Events
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-stone">
              Mark your calendar — here&apos;s what&apos;s next for the chapter.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {upcomingEvents.map((event, i) => (
              <Reveal key={event.title} delay={i * 80}>
                <article className="flex h-full flex-col border-t-2 border-forest bg-mist/70 p-6 md:p-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-moss">
                    {event.tagline}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-forest">
                    {event.date}
                  </p>
                  <p className="mt-1 text-sm text-stone">{event.location}</p>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-stone">
                    {event.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EventsCarousel />

      <section className="bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Want to know what&apos;s coming up next?
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-stone">
                Stay updated with our upcoming events, initiatives, workshops,
                and chapter activities. Follow us on Instagram for the latest
                announcements, event updates, and everything happening at
                EWB–IUCEE–IEEE MLRIT Student Chapter.
              </p>
              <a
                href="https://www.instagram.com/ewb_iucee_ieee_mlrit/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/20 bg-transparent px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-forest/40 hover:bg-mist"
              >
                Follow Us on Instagram
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
