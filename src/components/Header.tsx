"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <div
        className={`pointer-events-auto mx-auto flex max-w-5xl flex-col transition-all duration-300 ${
          scrolled ? "scale-[0.99]" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-4 rounded-full border border-fog/10 bg-ink/75 px-4 py-2.5 shadow-[0_8px_32px_rgba(12,22,18,0.28)] backdrop-blur-xl md:px-5 md:py-3">
          <Link href="/" className="flex shrink-0 items-center pl-1">
            <Image
              src="/logo.png"
              alt="Engineers Without Borders MLRIT — EWB-IUCEE-IEEE"
              width={200}
              height={72}
              className="h-8 w-auto md:h-9"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition ${
                    active
                      ? "text-fog"
                      : "text-fog/55 hover:text-fog/90"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-leaf"
                      aria-hidden
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full text-fog lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-4 flex-col gap-1">
              <span
                className={`h-0.5 w-full origin-center rounded-full bg-fog transition ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-fog transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full origin-center rounded-full bg-fog transition ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-3xl border border-fog/10 bg-ink/90 px-3 py-3 shadow-[0_12px_40px_rgba(12,22,18,0.35)] backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col gap-0.5">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative rounded-2xl px-4 py-3 text-base font-medium ${
                      active
                        ? "bg-fog/10 text-fog"
                        : "text-fog/65 hover:bg-fog/5 hover:text-fog"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span
                        className="absolute right-4 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-leaf"
                        aria-hidden
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
