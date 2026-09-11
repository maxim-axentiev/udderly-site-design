import type { LucideIcon } from "lucide-react";

export type ExperienceDetail = {
  icon: LucideIcon;
  label: string;
  lines: string[];
};

/** Reusable, scannable fact grid used on every individual experience page. */
export function ExperienceDetails({ details }: { details: ExperienceDetail[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {details.map(({ icon: Icon, label, lines }, index) => (
        <li
          key={label}
          className={`border-2 border-headline bg-background p-4 shadow-[6px_6px_0_var(--headline)] transition-all duration-200 hover:scale-105 hover:shadow-[10px_10px_0_var(--headline)] active:scale-95 ${index % 2 === 0 ? "-rotate-1 hover:-rotate-2" : "rotate-1 hover:rotate-2"}`}
        >
          <span className="flex items-center gap-2 font-display text-sm font-black uppercase tracking-wide text-primary-accent">
            <Icon size={18} aria-hidden="true" /> {label}
          </span>
          {lines.map((line) => (
            <span key={line} className="mt-1 block font-display text-xl font-black uppercase leading-tight text-headline">
              {line}
            </span>
          ))}
        </li>
      ))}
    </ul>
  );
}
