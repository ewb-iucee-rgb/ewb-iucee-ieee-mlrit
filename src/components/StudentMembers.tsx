"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { studentDepartments, studentMembers } from "@/data/content";

type DepartmentFilter = "All" | (typeof studentDepartments)[number];

const filters: DepartmentFilter[] = ["All", ...studentDepartments];

export function StudentMembers() {
  const [active, setActive] = useState<DepartmentFilter>("All");

  const visible =
    active === "All"
      ? studentMembers
      : studentMembers.filter((m) => m.department === active);

  return (
    <section className="border-b border-ink/8 bg-fog">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl">
            Student Members
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-stone">
            Our student members contribute across projects, events, photography, videography, content creation, graphic design and more.
          </p>
        </Reveal>

        <div
          className="mt-10 flex flex-wrap gap-2 border-y border-ink/8 py-5"
          role="group"
          aria-label="Filter by team"
        >
          {filters.map((dept) => {
            const isActive = active === dept;
            return (
              <button
                key={dept}
                type="button"
                onClick={() => setActive(dept)}
                className={`rounded-md px-3.5 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-forest text-fog"
                    : "border border-ink/12 bg-white text-stone hover:border-forest/40 hover:text-ink"
                }`}
              >
                {dept}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
          {visible.map((member, i) => (
            <Reveal key={member.name} delay={(i % 8) * 40}>
              <article className="group text-left">
                <div
                  className="relative flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-sm border border-ink/8 bg-gradient-to-br from-forest-deep via-forest to-moss"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%)",
                  }}
                >
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  ) : (
                    <span className="font-display text-3xl font-bold tracking-tight text-fog/85 md:text-4xl">
                      {member.short}
                    </span>
                  )}
                </div>

                <div className="mt-3.5 border-t border-ink/8 pt-3">
                  <h3
                    className="w-full font-display text-sm sm:text-base font-bold tracking-tight text-ink whitespace-nowrap truncate"
                    title={member.name}
                  >
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-moss">
                    {member.department}
                  </p>
                  <p className="mt-1 text-xs text-stone">
                    Year {member.year} · {member.branch}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-12 text-center text-sm text-stone">
            No members in this team yet.
          </p>
        )}
      </div>
    </section>
  );
}
