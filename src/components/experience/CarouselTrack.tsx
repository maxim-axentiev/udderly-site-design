import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, type ReactNode } from "react";

/**
 * Scroll-snap carousel with prev/next controls.
 * Native horizontal scrolling gives swipe support on touch devices.
 * Item widths are supplied by the caller so each section can set its own
 * desktop / tablet / mobile counts.
 */
export function CarouselTrack({
  label,
  itemClassName,
  children,
}: {
  label: string;
  itemClassName: string;
  children: ReactNode[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.firstElementChild as HTMLElement | null;
    const step = first ? first.offsetWidth + 24 : track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        role="group"
        aria-roledescription="carousel"
        aria-label={label}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, index) => (
          <div key={index} className={`shrink-0 snap-start ${itemClassName}`}>
            {child}
          </div>
        ))}
      </div>

      <div className="mt-2 flex justify-center gap-3 md:justify-end">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label={`Previous — ${label}`}
          className="flex size-12 items-center justify-center rounded-full border-2 border-headline bg-background text-headline shadow-[3px_3px_0_var(--headline)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label={`Next — ${label}`}
          className="flex size-12 items-center justify-center rounded-full border-2 border-headline bg-background text-headline shadow-[3px_3px_0_var(--headline)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
