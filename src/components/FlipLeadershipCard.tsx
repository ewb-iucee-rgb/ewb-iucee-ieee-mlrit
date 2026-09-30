"use client";

import Image from "next/image";
import { useState } from "react";

export type FlipMember = {
  name: string;
  role: string;
  short: string;
  photo?: string;
  email?: string;
  linkedin?: string;
};

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

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

export function FlipLeadershipCard({
  member,
  surface,
}: {
  member: FlipMember;
  surface: "fog" | "mist";
}) {
  const [flipped, setFlipped] = useState(false);
  const cardBg = surface === "fog" ? "bg-fog" : "bg-mist";
  const roleBg = surface === "fog" ? "bg-mist" : "bg-fog";
  const email = member.email ?? "";
  const linkedin = member.linkedin && member.linkedin !== "#" ? member.linkedin : "";

  return (
    <div
      className="group [perspective:1200px]"
      onClick={() => setFlipped((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((v) => !v);
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${member.name}, ${member.role}. Activate to flip for contact details.`}
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <article
          className={`flex h-full flex-col overflow-hidden rounded-2xl ${cardBg} shadow-[0_8px_30px_rgba(28,42,32,0.08)] [backface-visibility:hidden]`}
        >
          <div className="relative flex aspect-[3/4] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-forest-deep via-forest to-moss">
            {member.photo ? (
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            ) : (
              <span className="font-display text-4xl font-bold tracking-tight text-fog/90 md:text-5xl">
                {member.short}
              </span>
            )}
          </div>

          <div
            className={`flex flex-col items-center px-2.5 py-4 text-center ${cardBg}`}
          >
            <h3
              className="w-full font-display text-[13px] sm:text-sm md:text-base font-bold tracking-tight text-ink whitespace-nowrap truncate px-1"
              title={member.name}
            >
              {member.name}
            </h3>
            <span
              className={`mt-2 inline-block max-w-full truncate rounded-full ${roleBg} px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.1em] text-forest`}
            >
              {member.role}
            </span>
          </div>
        </article>

        {/* Back */}
        <article
          className={`absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-forest-deep px-4 py-8 text-center shadow-[0_8px_30px_rgba(28,42,32,0.12)] [backface-visibility:hidden] [transform:rotateY(180deg)]`}
        >
          <p
            className="w-full font-display text-sm sm:text-base md:text-lg font-bold tracking-tight text-fog whitespace-nowrap truncate px-1"
            title={member.name}
          >
            {member.name}
          </p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-leaf">
            {member.role}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            {email ? (
              <a
                href={`mailto:${email}`}
                onClick={(e) => e.stopPropagation()}
                className="flex max-w-full items-start gap-2 text-left text-xs sm:text-sm text-fog/85 transition hover:text-leaf"
                title={email}
              >
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="break-all">{email}</span>
              </a>
            ) : (
              <span className="flex items-center gap-2 text-xs sm:text-sm text-fog/45">
                <MailIcon className="h-4 w-4 shrink-0" />
                Email coming soon
              </span>
            )}

            {linkedin ? (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-fog/25 text-fog transition hover:border-leaf hover:bg-fog/10 hover:text-leaf"
                aria-label={`${member.name} on LinkedIn`}
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            ) : (
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-fog/15 text-fog/35"
                title="LinkedIn coming soon"
              >
                <LinkedInIcon className="h-5 w-5" />
              </span>
            )}
          </div>

          <p className="mt-8 text-[11px] uppercase tracking-[0.14em] text-fog/40">
            Tap again to flip back
          </p>
        </article>
      </div>
    </div>
  );
}
