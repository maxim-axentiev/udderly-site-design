import { Star } from "lucide-react";
import { useState } from "react";

import { CarouselTrack } from "@/components/experience/CarouselTrack";
import { Button } from "@/components/ui/button";

export type CuratedReview = { text: string; name: string };

const LIMIT = 190;

function Stars({ size = 16 }: { size?: number }) {
  return (
    <span className="flex gap-0.5 text-primary-accent" aria-label="Five out of five stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} aria-hidden="true" className="fill-primary-accent" />
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: CuratedReview }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > LIMIT;
  const shown = !isLong || expanded ? review.text : `${review.text.slice(0, LIMIT).trimEnd()}…`;

  return (
    <article className="flex h-full flex-col border-2 border-headline bg-background p-6 shadow-[7px_7px_0_var(--headline)]">
      <Stars />
      <p className="mt-4 flex-1 text-base leading-relaxed">{shown}</p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-3 self-start font-display text-sm font-black uppercase text-primary-accent underline decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
        >
          {expanded ? "Show less" : "Read full review"}
        </button>
      )}
      <p className="mt-6 border-t-2 border-headline pt-3 font-display text-xl font-black uppercase text-headline">
        {review.name}
      </p>
    </article>
  );
}

export function CuratedReviews({
  title,
  reviews,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  reviews: CuratedReview[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section id="reviews" className="overflow-hidden bg-farm-blue py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <h2 className="max-w-3xl font-display text-[clamp(2.6rem,7vw,6rem)] font-black uppercase leading-[0.8] text-headline">
          {title}
        </h2>

        <div className="mt-14">
          <CarouselTrack label="Guest reviews" itemClassName="w-[85%] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
            {reviews.map((review) => (
              <ReviewCard key={review.name + review.text.slice(0, 12)} review={review} />
            ))}
          </CarouselTrack>
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="large">
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
