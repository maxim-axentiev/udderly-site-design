import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { useSwipe } from "@/components/experience/useSwipe";

export type GalleryImage = { src: string; alt: string };

export function ExperienceGallery({ images, caption }: { images: GalleryImage[]; caption?: string }) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const go = (next: number) => setIndex((next + total) % total);
  const swipe = useSwipe(() => go(index - 1), () => go(index + 1));
  const current = images[index];

  if (!current) return null;

  return (
    <div className="relative">
      <div className="absolute -inset-3 -rotate-2 bg-secondary-accent" aria-hidden="true" />
      <div
        className="relative overflow-hidden border-2 border-headline bg-background"
        {...swipe}
        role="group"
        aria-roledescription="carousel"
        aria-label="Experience photo gallery"
      >
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          width={1280}
          height={960}
          className="aspect-[4/3] w-full object-cover"
        />

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-headline bg-background text-headline shadow-[3px_3px_0_var(--headline)] transition-transform hover:-translate-y-[55%] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-headline bg-background text-headline shadow-[3px_3px_0_var(--headline)] transition-transform hover:-translate-y-[55%] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
        >
          <ChevronRight aria-hidden="true" />
        </button>

        {caption && (
          <p className="absolute bottom-3 left-3 -rotate-1 border-2 border-headline bg-primary-accent px-3 py-1 font-display text-sm font-black uppercase text-primary-foreground">
            {caption}
          </p>
        )}
      </div>

      <div className="relative mt-5 flex flex-wrap items-center gap-3">
        {images.map((image, i) => (
          <button
            key={image.src + i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1}`}
            aria-current={i === index}
            className={`size-16 overflow-hidden border-2 border-headline transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring ${i === index ? "shadow-[4px_4px_0_var(--primary-accent)]" : "opacity-70"}`}
          >
            <img src={image.src} alt="" loading="lazy" className="h-full w-full object-cover" />
          </button>
        ))}
        <span className="ml-auto font-display text-lg font-black uppercase text-headline">
          {index + 1} / {total}
        </span>
      </div>
    </div>
  );
}
