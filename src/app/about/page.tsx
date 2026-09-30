import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { chapterOperates, facultyAdvisor, keyAchievements } from "@/data/content";

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}

function TrophyIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0012 0V2z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-deep pt-28 text-fog md:pt-32">
        <div className="pointer-events-none absolute inset-0 topo-grid opacity-25" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-leaf">
            Who we are
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl">
            About EWB-IUCEE-IEEE MLRIT
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fog/75">
            Engineers Without Borders (EWB) is a global non-profit organization
            that empowers students and professionals to solve real-world
            challenges through sustainable engineering, innovation, and
            community service.
          </p>
        </div>
      </section>

      {/* How Our Chapter Operates */}
      <section className="bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              How Our Chapter Operates
            </h2>
          </Reveal>

          <div className="mt-14 space-y-0">
            {chapterOperates.map((step, i) => (
              <Reveal key={step.num} delay={i * 60}>
                <div className="grid gap-4 border-t border-ink/10 py-8 md:grid-cols-[72px_1fr] md:gap-10 lg:grid-cols-[72px_240px_1fr]">
                  <span className="font-display text-3xl font-bold text-leaf/70">
                    {step.num}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink md:pt-1">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-stone md:pt-1">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <p className="mt-12 max-w-2xl border-l-2 border-forest pl-5 font-display text-xl font-semibold leading-snug tracking-tight text-ink md:text-2xl">
              Ideas Without Boundaries. Impact Without Limits.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section 1: Faculty Advisor */}
      <section className="border-t border-ink/8 bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-moss">
              Mentorship & Leadership
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Faculty Advisor
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-6 max-w-3xl overflow-hidden rounded-2xl border border-ink/10 bg-fog p-5 shadow-sm md:p-6">
              <div className="grid gap-6 sm:grid-cols-[150px_1fr] sm:items-center md:grid-cols-[170px_1fr]">
                {/* Photo / Avatar */}
                <div className="relative aspect-[3/4] w-36 overflow-hidden rounded-xl border border-ink/10 bg-gradient-to-br from-forest-deep via-forest to-moss shadow-inner sm:w-full">
                  {facultyAdvisor.photo ? (
                    <Image
                      src={facultyAdvisor.photo}
                      alt={facultyAdvisor.name}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="font-display text-4xl font-bold text-fog/80">
                        {facultyAdvisor.short}
                      </span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div>
                  <span className="inline-block rounded-full bg-forest/10 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-forest">
                    {facultyAdvisor.role}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                    {facultyAdvisor.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold text-moss">
                    {facultyAdvisor.department}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-stone">
                    {facultyAdvisor.bio}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href={`mailto:${facultyAdvisor.email}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-forest px-3.5 py-2 text-xs font-semibold text-fog transition hover:bg-moss"
                    >
                      <MailIcon className="h-3.5 w-3.5" />
                      {facultyAdvisor.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 2: Key Achievements */}
      <section className="border-t border-ink/8 bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <Reveal>
            <div className="flex items-center gap-2.5 text-moss">
              <TrophyIcon className="h-5 w-5 text-amber" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em]">
                Excellence & Recognition
              </p>
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Key Achievements
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-stone">
              National honors and project accolades celebrating student leadership,
              humanitarian design, and technical innovation.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {keyAchievements.map((item, i) => (
              <Reveal key={item.id} delay={i * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 shadow-sm transition hover:border-forest/30 hover:shadow-md md:p-9">
                  {/* Photo container slot (shows image when provided, or gradient accent) */}
                  {item.photo ? (
                    <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-ink/8">
                      <Image
                        src={item.photo}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="relative mb-6 flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-2xl border border-forest/15 bg-gradient-to-br from-forest-deep via-forest to-moss p-6">
                      <div className="pointer-events-none absolute inset-0 topo-grid opacity-20" />
                      <TrophyIcon className="h-12 w-12 text-amber/80" />
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-mist px-3 py-1 text-xs font-bold text-forest whitespace-nowrap">
                      {item.category}
                    </span>
                    <span className="rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-xs font-bold text-amber whitespace-nowrap">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold leading-snug tracking-tight text-ink md:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-stone">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-16 flex flex-wrap gap-3">
              <Link
                href="/team"
                className="inline-flex rounded-md bg-forest px-5 py-3 text-sm font-semibold text-fog transition hover:bg-moss"
              >
                Meet the team
              </Link>
              <Link
                href="/projects"
                className="inline-flex rounded-md border border-ink/15 px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink/30"
              >
                View projects
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
