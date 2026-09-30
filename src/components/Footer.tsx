import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-ink text-fog">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Engineers Without Borders MLRIT — EWB-IUCEE-IEEE"
              width={220}
              height={80}
              className="h-14 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog/65">
              EWB-IUCEE-IEEE MLRIT — a student engineering chapter building
              practical, sustainable solutions for real communities.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-fog/45">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fog/75 transition hover:text-fog"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-fog/45">
              Resources
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-fog/75">
              <li>
                <Link href="/about" className="transition hover:text-fog">
                  Join the Team
                </Link>
              </li>
              <li>
                <Link href="/projects" className="transition hover:text-fog">
                  Projects & History
                </Link>
              </li>
              <li>
                <Link href="/journey" className="transition hover:text-fog">
                  Our Journey
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-fog/45">
              For Further Queries
            </p>
            <p className="mt-4 text-sm leading-relaxed text-fog/65">
              Have questions about our student-led initiatives, workshops,
              research, or interested in collaborating? Please reach out to our
              team.
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <p className="text-fog/45">General Email</p>
                <a
                  href="mailto:ewb-iucee@mlrinstitutions.ac.in"
                  className="font-medium text-fog transition hover:text-leaf"
                >
                  ewb-iucee@mlrinstitutions.ac.in
                </a>
              </li>
              <li>
                <p className="text-fog/45">Faculty Advisor</p>
                <a
                  href="mailto:yuganand@mlrit.ac.in"
                  className="font-medium text-fog transition hover:text-leaf"
                >
                  yuganand@mlrit.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-fog/10 pt-6 text-xs text-fog/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} EWB-IUCEE-IEEE MLRIT Chapter. All
            rights reserved.
          </p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
