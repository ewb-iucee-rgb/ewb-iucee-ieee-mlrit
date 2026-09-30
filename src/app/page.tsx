import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  mission,
  processSteps,
  projects,
  stats,
  vision,
} from "@/data/content";

export default function HomePage() {
  const featured = projects.filter((p) => p.status === "Active").slice(0, 3);

  return (
    <>
      {/* Hero — brand-first, full-bleed with decorative EWB lettermark */}
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-fog">
        {/* Decorative huge EWB letters in background */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
          <span
            className="font-display font-black uppercase leading-none tracking-tighter text-white/[0.04]"
            style={{ fontSize: "clamp(160px, 30vw, 400px)", whiteSpace: "nowrap" }}
            aria-hidden="true"
          >
            EWB
          </span>
        </div>

        {/* Subtle radial glow behind text */}
        <div className="pointer-events-none absolute left-0 top-1/3 h-[600px] w-[600px] -translate-x-1/4 -translate-y-1/4 rounded-full bg-forest/25 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-ink to-transparent" />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-20 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-32">
          {/* Main heading — EWB-IUCEE-IEEE MLRIT big, STUDENT CHAPTER BODY small */}
          <h1 className="fade-up mt-5 font-display font-black uppercase leading-[0.95] tracking-tight text-fog">
            <span className="block text-[clamp(2.8rem,8vw,6.5rem)]">
              EWB-IUCEE-IEEE
            </span>
            <span className="block text-[clamp(2.8rem,8vw,6.5rem)] text-[#e31c23]">
              MLRIT
            </span>
            <span className="mt-3 block text-[clamp(0.85rem,2vw,1.5rem)] font-semibold tracking-[0.18em] text-fog/75">
              STUDENT CHAPTER BODY
            </span>
          </h1>

          <p className="fade-up-delay-1 mt-7 max-w-lg text-base leading-relaxed text-fog/65 md:text-lg">
            Driven by Innovation, Sustainability &amp; Leadership
          </p>

          <div className="fade-up-delay-2 mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md bg-amber px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-amber-soft"
            >
              See our projects
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border border-fog/25 bg-fog/5 px-6 py-3.5 text-sm font-semibold text-fog backdrop-blur-sm transition hover:border-fog/45 hover:bg-fog/10"
            >
              Learn about us
            </Link>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="border-b border-ink/6 bg-fog">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Our Mission
            </h2>
            <p className="mt-4 text-base font-normal leading-relaxed text-stone md:text-lg">
              {mission}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Our Vision
            </h2>
            <p className="mt-4 text-base font-normal leading-relaxed text-stone md:text-lg">
              {vision}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Purpose */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Purpose
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone">
              EWB connects classroom theory with practical community impact
              through hands-on technical innovation, leadership development, and
              international networking. By collaborating with global
              organizations like the IEEE (Institute of Electrical and
              Electronics Engineers) and IUCEE (Indo Universal Collaboration for
              Engineering Education), members gain access to multidisciplinary
              research, technical resources, industry mentorship, and student
              leadership summits.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-moss">
              Our process
            </p>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              From idea to impact, through Design Thinking
            </h2>
          </Reveal>

          <div className="mt-14 space-y-0">
            {processSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 80}>
                <div className="grid gap-4 border-t border-ink/10 py-8 md:grid-cols-[100px_1fr_1.2fr] md:items-baseline md:gap-8">
                  <span className="font-display text-3xl font-bold text-leaf/80">
                    {step.num}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-stone">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="relative overflow-hidden bg-forest-deep text-fog">
        <div className="pointer-events-none absolute inset-0 topo-grid opacity-20" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-leaf">
              Our collaborations
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight md:text-4xl">
              What does EWB–IUCEE–IEEE actually mean?
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <Reveal>
              <p className="text-[15px] leading-relaxed text-fog/80">
                <strong className="text-fog">EWB</strong> (Engineers Without
                Borders) focuses on engineering for social impact — applying our
                knowledge to address real-world community needs and create
                meaningful solutions.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-[15px] leading-relaxed text-fog/80">
                <strong className="text-fog">IUCEE</strong> (Indo-Universal
                Collaboration for Engineering Education) connects engineering
                education with practical learning, encouraging students to
                develop relevant skills and apply them beyond the classroom.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-[15px] leading-relaxed text-fog/80">
                <strong className="text-fog">IEEE</strong> brings technical
                expertise, professional standards, and a global engineering
                network that helps students connect their ideas with industry
                practices.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats marquee */}
      <section className="overflow-hidden border-y border-ink/8 bg-mist py-10">
        <div className="flex w-max marquee">
          {[...stats, ...stats].map((stat, i) => (
            <div
              key={`${stat.label}-${i}`}
              className="mx-8 flex min-w-[220px] flex-col border-r border-ink/10 pr-8 last:border-0"
            >
              <span className="font-display text-3xl font-bold tracking-tight text-forest">
                {stat.value}
              </span>
              <span className="mt-1 text-sm font-medium text-ink">
                {stat.label}
              </span>
              <span className="mt-0.5 text-xs text-stone">{stat.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Active projects */}
      <section className="bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-moss">
                Active projects
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                What we are working on
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <Link
                href="/projects"
                className="text-sm font-semibold text-forest transition hover:text-moss"
              >
                All Projects →
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {featured.map((project, i) => (
              <Reveal key={project.id} delay={i * 80}>
                <Link
                  href="/projects"
                  className="group grid gap-4 py-8 transition md:grid-cols-[72px_1fr_auto] md:items-center md:gap-8"
                >
                  <span className="font-display text-2xl font-bold text-leaf/70">
                    {project.id}
                  </span>
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium uppercase tracking-wider text-stone"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-2 font-display text-xl font-semibold text-ink transition group-hover:text-forest md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-stone">
                      {(project as unknown as { solution: string }).solution}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-forest opacity-0 transition group-hover:opacity-100 md:opacity-60">
                    View details →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink/8 bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:px-8 md:py-28">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Want to make an impact?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-stone">
              Start your journey with us—turn your ideas into action, build real-world skills, work on meaningful projects, and be part of a community creating change.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-fog transition hover:bg-ink-soft"
              >
                Learn about us
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/events"
                className="inline-flex rounded-full border border-ink/15 bg-fog px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/30"
              >
                See events & history
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
