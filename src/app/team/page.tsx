import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { FlipLeadershipCard } from "@/components/FlipLeadershipCard";
import { StudentMembers } from "@/components/StudentMembers";
import { coordinators, team } from "@/data/content";

function SectionIntro({
  title,
  description,
  badge,
}: {
  title: string;
  description?: string;
  badge?: string;
}) {
  return (
    <Reveal>
      {badge ? (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-moss">
          {badge}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl font-bold tracking-tight text-ink md:text-4xl ${
          badge ? "mt-3" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-stone">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export default function TeamPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-deep pt-28 text-fog md:pt-32">
        <div className="relative mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-leaf">
            A Community Built on Collaboration
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Meet the <span className="text-leaf">Team</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fog/75">
            From office bearers who lead to coordinators who organize and
            members who bring ideas to life, every role contributes to the
            growth of our chapter.
          </p>
        </div>
      </section>

      {/* Office Bearers */}
      <section className="border-b border-ink/8 bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <SectionIntro
            badge="Batch 2026–2027"
            title="Office Bearers"
            description="Student leaders guiding the chapter across projects, events, and outreach — owning outcomes from idea through implementation. Hover or tap a card for contact details."
          />

          <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 6) * 50}>
                <FlipLeadershipCard member={member} surface="mist" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coordinators */}
      <section className="border-b border-ink/8 bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <SectionIntro
            title="Coordinators"
          />

          <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {coordinators.map((member, i) => (
              <Reveal key={member.name} delay={(i % 6) * 50}>
                <FlipLeadershipCard member={member} surface="fog" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StudentMembers />

      <section className="border-t border-ink/8 bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-moss">
              Get involved
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Want to make an impact?
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-stone">
              Start your journey with us—turn your ideas into action, build real-world skills, work on meaningful projects, and be part of a community creating change
            </p>
            <Link
              href="/events"
              className="mt-8 inline-flex rounded-md bg-forest px-5 py-3 text-sm font-semibold text-fog transition hover:bg-moss"
            >
              See events
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
