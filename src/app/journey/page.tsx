import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { journeyPhases, stats } from "@/data/content";

export default function JourneyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-deep pt-28 text-fog md:pt-32">
        <div className="pointer-events-none absolute inset-0 topo-grid opacity-25" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-leaf">
            Our Journey
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl">
            Small Steps. Creative Ideas. Lasting Impact.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fog/75">
            Through every initiative, collaboration and experience, we continue
            to learn, grow and turn ideas into meaningful impact.
          </p>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:grid-cols-2 lg:grid-cols-5 md:px-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 50}>
              <div className="text-center lg:text-left">
                <p className="font-display text-3xl font-bold text-forest">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-ink">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="relative">
            <div className="absolute bottom-0 left-[19px] top-0 w-px bg-ink/10 md:left-1/2 md:-translate-x-px" />

            <div className="space-y-12">
              {journeyPhases.map((phase, i) => {
                const left = i % 2 === 0;
                return (
                  <Reveal key={phase.title} delay={i * 80}>
                    <div
                      className={`relative grid gap-6 md:grid-cols-2 md:gap-16 ${
                        left ? "" : "md:[&>*:first-child]:order-2"
                      }`}
                    >
                      <div
                        className={`${
                          left ? "md:text-right" : "md:text-left"
                        } pl-12 md:pl-0`}
                      >
                        <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-moss">
                          {phase.year}
                        </p>
                        <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
                          {phase.title}
                        </h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-stone">
                          {phase.body}
                        </p>
                      </div>
                      <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-forest font-display text-xs font-bold text-fog md:left-1/2 md:-translate-x-1/2">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="hidden md:block" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={100}>
            <div className="mt-20 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex rounded-md bg-forest px-5 py-3 text-sm font-semibold text-fog transition hover:bg-moss"
              >
                See current projects
              </Link>
              <Link
                href="/about"
                className="inline-flex rounded-md border border-ink/15 px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink/30"
              >
                About the chapter
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
