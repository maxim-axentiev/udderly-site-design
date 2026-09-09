import { Star, X } from "lucide-react";
import { useState } from "react";

import alpacaWalk from "@/assets/alpaca-walk.jpg";
import donkeyPicnic from "@/assets/donkey-picnic.jpg";
import goatCuddles from "@/assets/goat-cuddles.jpg";
import highlandCta from "@/assets/highland-cta.jpg";
import highlandHero from "@/assets/highland-hero.jpg";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Marissa T.",
    when: "2 weeks ago",
    text: "We came for the cows and left with a favourite goat. The staff clearly adore these animals. Placeholder review copy.",
    photos: [highlandHero, goatCuddles],
  },
  {
    name: "Dev P.",
    when: "1 month ago",
    text: "Took the whole team here for a workshop. Nobody checked their phone once. Placeholder review copy.",
    photos: [alpacaWalk],
  },
  {
    name: "Joanne R.",
    when: "1 month ago",
    text: "The alpaca picnic was the highlight of our summer, and the ice cream is dangerously good. Placeholder review copy.",
    photos: [donkeyPicnic, highlandCta, alpacaWalk],
  },
];

export function ReviewsSection() {
  const [lightbox, setLightbox] = useState<{ src: string; name: string } | null>(null);

  return (
    <section id="reviews" className="relative overflow-hidden bg-farm-blue py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-4xl">
            <h2 className="font-display text-[clamp(3.4rem,7.5vw,7rem)] font-black uppercase leading-[0.8] text-headline">
              What happens on the farm never stays on the farm
            </h2>
            <p className="mt-6 max-w-xl text-lg font-medium">Placeholder sentence about what guests keep telling everyone they know.</p>
          </div>
          <div className="flex items-center gap-4 border-2 border-headline bg-background px-5 py-4 shadow-[6px_6px_0_var(--headline)]">
            <span className="font-display text-5xl font-black leading-none text-headline">4.9</span>
            <div>
              <span className="flex gap-0.5 text-primary-accent" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} className="fill-primary-accent" />)}
              </span>
              <p className="mt-1 text-sm font-bold uppercase text-headline">1,284 Google reviews</p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="flex flex-col border-2 border-headline bg-background p-5 shadow-[7px_7px_0_var(--headline)]">
              <span className="flex gap-0.5 text-primary-accent" aria-label="Five out of five stars">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} aria-hidden="true" className="fill-primary-accent" />)}
              </span>
              <p className="mt-4 flex-1 text-sm leading-relaxed">{review.text}</p>
              <div className="mt-5 flex gap-2">
                {review.photos.map((photo, i) => (
                  <button
                    key={photo + i}
                    type="button"
                    onClick={() => setLightbox({ src: photo, name: review.name })}
                    className="size-16 overflow-hidden border-2 border-headline transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
                    aria-label={`View photo from ${review.name}'s review`}
                  >
                    <img src={photo} alt="" loading="lazy" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
              <p className="mt-5 border-t-2 border-headline pt-3 font-display text-xl font-black uppercase text-headline">
                {review.name} <span className="text-xs font-bold text-body-copy">· {review.when}</span>
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <Button asChild size="large">
            <a href="#experiences">Experience the ridiculousness for yourself</a>
          </Button>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-headline/80 p-5"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo from ${lightbox.name}'s review`}
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox.src} alt={`Guest photo from ${lightbox.name}`} className="max-h-[85vh] w-auto max-w-full border-4 border-background object-contain" />
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close photo"
            className="absolute right-5 top-5 flex size-12 items-center justify-center rounded-full border-2 border-headline bg-background text-headline"
          >
            <X aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}
