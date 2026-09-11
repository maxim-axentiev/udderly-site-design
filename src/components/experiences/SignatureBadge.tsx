import { Info } from "lucide-react";
import { useState } from "react";

const tooltip =
  "Recognized as a Signature Experience by Ontario’s Southwest for offering an exceptional and distinctive way to experience the region.";

export function SignatureBadge() {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-flex items-center gap-1.5 rounded-full border-2 border-headline bg-secondary-accent px-3 py-1 font-display text-xs font-black uppercase text-headline">
      Signature Experience
      <button
        type="button"
        aria-label="What is a Signature Experience?"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onBlur={() => setOpen(false)}
        className="flex size-5 items-center justify-center rounded-full border border-headline bg-background text-headline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
      >
        <Info size={12} aria-hidden="true" />
      </button>
      {open && (
        <span
          role="tooltip"
          className="absolute bottom-[calc(100%+0.6rem)] left-0 z-30 w-64 border-2 border-headline bg-background p-3 text-left font-body text-xs font-medium normal-case leading-relaxed text-body-copy shadow-[5px_5px_0_var(--headline)]"
        >
          {tooltip}
        </span>
      )}
    </span>
  );
}
