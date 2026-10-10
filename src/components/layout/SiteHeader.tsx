import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logoAsset from "@/assets/farm-logo.png.asset.json";

type NavLink = { label: string; href: string };
type NavGroup = { label: string; href?: string; children?: NavLink[] };

export const mainNav: NavGroup[] = [
  {
    label: "Experiences",
    href: "/experiences",
    children: [
      { label: "All Experiences", href: "/experiences" },
      { label: "Tower of Goats Discovery Trail", href: "/tower-of-goats-discovery-trail" },
      { label: "Farm Glamping", href: "/experiences/farm-glamping" },
    ],
  },
  { label: "Gift Cards", href: "/gift-card" },
  { label: "Animals for Sale", href: "/animals-for-sale" },
  { label: "Adopt an Animal", href: "/adopt-an-animal" },
  {
    label: "Corporate Training",
    href: "/corporate-training",
    children: [
      { label: "All Corporate Training Programs", href: "/corporate-training" },
      { label: "Team Building Experiences", href: "/corporate-training/team-building-experiences" },
      { label: "Experiential Tourism Development", href: "/corporate-training/experiential-tourism-development" },
    ],
  },
  {
    label: "Explore",
    children: [
      { label: "Farm Market Store", href: "/farm-market-store" },
      { label: "Goat Milk Ice Cream", href: "/ice-cream" },
      { label: "URBORT Blog", href: "/urbort-blog" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "Our Story", href: "/our-story" },
      { label: "Vision & Values", href: "/vision-values" },
      { label: "Meet the Team", href: "/team" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

/** Flat list of every nav destination (used by the footer). */
export const navItems: NavLink[] = Array.from(
  new Map(
    mainNav.flatMap((g) => (g.children ?? (g.href ? [{ label: g.label, href: g.href }] : [])).map((l) => [l.href, l] as const)),
  ).values(),
);

const topLink =
  "font-display text-[0.95rem] font-bold uppercase text-headline decoration-secondary-accent decoration-[3px] underline-offset-8 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-accent rounded-sm";

function DesktopDropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = `nav-${group.label.toLowerCase().replace(/\s+/g, "-")}`;

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
    >
      <div className="flex items-center gap-1">
        {group.href ? (
          <a href={group.href} className={topLink}>{group.label}</a>
        ) : (
          <button type="button" className={topLink} onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls={id}>
            {group.label}
          </button>
        )}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          aria-label={`${open ? "Close" : "Open"} ${group.label} menu`}
          className="rounded-sm p-0.5 text-headline focus-visible:outline-2 focus-visible:outline-primary-accent"
        >
          <ChevronDown aria-hidden="true" size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      {/* pt creates a hover bridge so the menu doesn't close between trigger and panel */}
      <div id={id} className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 ${open ? "block" : "hidden"}`}>
        <ul className="w-72 border-2 border-headline bg-background p-2 shadow-[7px_7px_0_var(--secondary-accent)]">
          {group.children?.map((c) => (
            <li key={c.href + c.label}>
              <a
                href={c.href}
                onClick={() => setOpen(false)}
                className="block rounded-sm px-4 py-3 font-display text-base font-bold uppercase text-headline hover:bg-farm-beige focus-visible:bg-farm-beige focus-visible:outline-2 focus-visible:outline-primary-accent"
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileGroup({ group, onNavigate }: { group: NavGroup; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const id = `m-nav-${group.label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <li className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between py-4 text-left font-display text-xl font-bold uppercase text-headline"
      >
        {group.label}
        <ChevronDown aria-hidden="true" className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <ul id={id} className={`${open ? "block" : "hidden"} pb-3 pl-4`}>
        {group.children?.map((c) => (
          <li key={c.href + c.label}>
            <a href={c.href} onClick={onNavigate} className="block py-2.5 font-display text-lg font-semibold uppercase text-headline hover:text-primary-accent">
              {c.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="relative z-50 border-b-2 border-headline bg-background">
      <div className="mx-auto flex min-h-24 max-w-[1500px] items-center justify-between gap-6 px-5 md:px-8">
        <Link to="/" className="block w-44 shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-accent md:w-48" aria-label="Udderly Ridiculous Farm Life home">
          <img src={logoAsset.url} alt="Udderly Ridiculous Farm Life" width={1580} height={620} className="h-auto w-full" />
        </Link>

        <nav className="hidden items-center gap-4 xl:flex 2xl:gap-6" aria-label="Main navigation">
          {mainNav.map((g) =>
            g.children ? <DesktopDropdown key={g.label} group={g} /> : <a key={g.label} href={g.href} className={topLink}>{g.label}</a>,
          )}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          className="flex size-12 items-center justify-center rounded-full border-2 border-headline bg-farm-beige text-headline xl:hidden"
        >
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-nav" className="absolute inset-x-0 top-full max-h-[calc(100dvh-6rem)] overflow-y-auto border-b-2 border-headline bg-background px-5 pb-8 shadow-[0_7px_0_var(--secondary-accent)] xl:hidden">
          <nav aria-label="Mobile navigation">
            <ul>
              {mainNav.map((g) =>
                g.children ? (
                  <MobileGroup key={g.label} group={g} onNavigate={() => setMobileOpen(false)} />
                ) : (
                  <li key={g.label} className="border-b border-border">
                    <a href={g.href} onClick={() => setMobileOpen(false)} className="block py-4 font-display text-xl font-bold uppercase text-headline">{g.label}</a>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
