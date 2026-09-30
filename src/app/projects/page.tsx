"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/content";

type Project = (typeof projects)[number] & {
  sdg: string;
  problem: string;
  solution: string;
};

const SDG_METADATA: Record<
  string,
  { name: string; number: number; badgeColor: string; description: string }
> = {
  "SDG-2": {
    name: "Zero Hunger",
    number: 2,
    badgeColor: "border-[#DDA63A]/40 bg-[#DDA63A]/10 text-[#b45309]",
    description:
      "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture.",
  },
  "SDG-3": {
    name: "Good Health & Well-Being",
    number: 3,
    badgeColor: "border-[#4C9F38]/40 bg-[#4C9F38]/10 text-[#15803d]",
    description:
      "Ensure healthy lives and promote well-being for all at all ages.",
  },
  "SDG-4": {
    name: "Quality Education",
    number: 4,
    badgeColor: "border-[#C5192D]/40 bg-[#C5192D]/10 text-[#b91c1c]",
    description:
      "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
  },
  "SDG-6": {
    name: "Clean Water & Sanitation",
    number: 6,
    badgeColor: "border-[#26BDE2]/40 bg-[#26BDE2]/10 text-[#0369a1]",
    description:
      "Ensure availability and sustainable management of water and sanitation for all.",
  },
  "SDG-7": {
    name: "Affordable & Clean Energy",
    number: 7,
    badgeColor: "border-[#FCC30B]/50 bg-[#FCC30B]/15 text-[#b45309]",
    description:
      "Ensure access to affordable, reliable, sustainable, and modern energy for all.",
  },
  "SDG-8": {
    name: "Decent Work & Economic Growth",
    number: 8,
    badgeColor: "border-[#A21942]/40 bg-[#A21942]/10 text-[#9f1239]",
    description:
      "Promote sustained, inclusive and sustainable economic growth, full and productive employment, and decent work for all.",
  },
  "SDG-9": {
    name: "Industry, Innovation & Infrastructure",
    number: 9,
    badgeColor: "border-[#FD6925]/40 bg-[#FD6925]/10 text-[#c2410c]",
    description:
      "Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation.",
  },
  "SDG-11": {
    name: "Sustainable Cities & Communities",
    number: 11,
    badgeColor: "border-[#FD9D24]/40 bg-[#FD9D24]/10 text-[#c2410c]",
    description:
      "Make cities and human settlements inclusive, safe, resilient, and sustainable.",
  },
  "SDG-12": {
    name: "Responsible Consumption & Production",
    number: 12,
    badgeColor: "border-[#BF8B2E]/40 bg-[#BF8B2E]/10 text-[#92400e]",
    description:
      "Ensure sustainable consumption and production patterns across materials, manufacturing, and energy.",
  },
  "SDG-13": {
    name: "Climate Action",
    number: 13,
    badgeColor: "border-[#3F7E44]/40 bg-[#3F7E44]/10 text-[#166534]",
    description:
      "Take urgent action to combat climate change and its impacts through real-time environmental monitoring.",
  },
  "SDG-14": {
    name: "Life Below Water",
    number: 14,
    badgeColor: "border-[#0A97D9]/40 bg-[#0A97D9]/10 text-[#0369a1]",
    description:
      "Conserve and sustainably use the oceans, seas, and marine resources for sustainable development.",
  },
  "SDG-15": {
    name: "Life on Land",
    number: 15,
    badgeColor: "border-[#56C02B]/40 bg-[#56C02B]/10 text-[#15803d]",
    description:
      "Protect, restore, and promote sustainable use of terrestrial ecosystems and halt biodiversity loss.",
  },
};

/* ── Modal ── */
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const meta = SDG_METADATA[project.sdg] || {
    name: project.sdg,
    badgeColor: "border-leaf/40 bg-leaf/15 text-leaf",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-forest-deep px-7 py-6 text-fog">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-leaf/40 bg-leaf/15 px-3 py-0.5 text-xs font-bold text-leaf">
                  {project.sdg}: {meta.name}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    project.status === "Active"
                      ? "bg-amber/20 text-amber"
                      : "bg-fog/10 text-fog/60"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold leading-snug tracking-tight text-fog">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-fog/10 text-fog/70 transition hover:bg-fog/20 hover:text-fog"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-fog/10 px-2.5 py-0.5 text-xs text-fog/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="space-y-6 px-7 py-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber">
              Problem Statement
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-stone">
              {project.problem}
            </p>
          </div>
          <div className="border-t border-ink/8 pt-5">
            <p className="text-xs font-bold uppercase tracking-widest text-forest">
              Proposed Solution
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-stone">
              {project.solution}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Project Card ── */
function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const meta = SDG_METADATA[project.sdg] || {
    name: project.sdg,
    badgeColor: "border-forest/25 bg-mist text-forest",
  };

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-forest/30 hover:shadow-md">
      {/* Top: status + SDG */}
      <div>
        <div className="flex items-center justify-between gap-2">
          <span
            className={`flex items-center gap-1.5 text-xs font-semibold ${
              project.status === "Active" ? "text-amber" : "text-stone/70"
            }`}
          >
            <span
              className={`inline-block h-2 w-2 rounded-full ${
                project.status === "Active" ? "bg-amber" : "bg-stone/30"
              }`}
            />
            {project.status}
          </span>
          <span
            className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${meta.badgeColor}`}
          >
            {project.sdg}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-3.5 font-display text-xl font-bold leading-snug tracking-tight text-ink">
          {project.title}
        </h3>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-mist px-2.5 py-1 text-xs font-medium text-forest"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom: View details */}
      <button
        onClick={onOpen}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-ink/10 py-2.5 text-sm font-semibold text-ink transition hover:border-forest/40 hover:bg-mist hover:text-forest"
      >
        View details
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

/* ── Page ── */
export default function ProjectsPage() {
  const [activeSDG, setActiveSDG] = useState<string>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const allProjects = projects as unknown as Project[];

  // All distinct SDGs present in projects sorted by SDG number
  const allSDGs = useMemo(() => {
    const sdgSet = Array.from(new Set(allProjects.map((p) => p.sdg)));
    return sdgSet.sort((a, b) => {
      const numA = SDG_METADATA[a]?.number ?? 99;
      const numB = SDG_METADATA[b]?.number ?? 99;
      return numA - numB;
    });
  }, [allProjects]);

  const filteredProjects = useMemo(() => {
    if (activeSDG === "all") return allProjects;
    return allProjects.filter((p) => p.sdg === activeSDG);
  }, [activeSDG, allProjects]);

  const totalActive = allProjects.filter((p) => p.status === "Active").length;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-deep pt-28 text-fog md:pt-32">
        <div className="pointer-events-none absolute inset-0 topo-grid opacity-25" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-leaf">
            Projects
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl">
            Innovation Beyond the Classroom
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-fog/75 leading-relaxed">
            Explore student-led projects addressing real-world challenges, aligned with the UN Sustainable Development Goals (SDGs) and driven by Design Thinking and innovation.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-leaf/30 bg-leaf/10 px-4 py-1.5 text-sm font-medium text-leaf">
              {totalActive} Active Projects
            </span>
            <span className="rounded-full border border-fog/20 bg-fog/5 px-4 py-1.5 text-sm font-medium text-fog/70">
              {projects.length - totalActive} Completed
            </span>
            <span className="rounded-full border border-fog/20 bg-fog/5 px-4 py-1.5 text-sm font-medium text-fog/70">
              {allSDGs.length} SDGs Addressed
            </span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          {/* ── Filter bar ── */}
          <div className="mb-12 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-stone">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M3 6h18M7 12h10M11 18h2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Filter by SDG
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveSDG("all")}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeSDG === "all"
                    ? "bg-forest text-fog shadow-sm"
                    : "border border-ink/15 bg-white text-ink hover:border-forest/40 hover:bg-mist"
                }`}
              >
                All SDGs ({allProjects.length})
              </button>
              {allSDGs.map((sdgKey) => {
                const meta = SDG_METADATA[sdgKey];
                const count = allProjects.filter((p) => p.sdg === sdgKey).length;
                return (
                  <button
                    key={sdgKey}
                    onClick={() => setActiveSDG(sdgKey)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                      activeSDG === sdgKey
                        ? "bg-forest text-fog shadow-sm"
                        : "border border-ink/15 bg-white text-ink hover:border-forest/40 hover:bg-mist"
                    }`}
                  >
                    {sdgKey}: {meta?.name || sdgKey} <span className="opacity-70">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Card grid ── */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => setSelected(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
