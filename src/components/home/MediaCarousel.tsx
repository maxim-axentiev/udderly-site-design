import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useRef, useState } from "react";

import alpacaWalk from "@/assets/alpaca-walk.jpg";
import donkeyPicnic from "@/assets/donkey-picnic.jpg";
import goatCuddles from "@/assets/goat-cuddles.jpg";
import highlandCta from "@/assets/highland-cta.jpg";
import highlandHero from "@/assets/highland-hero.jpg";

type MediaVideo = {
  outlet: string;
  short: string;
  title: string;
  thumbnail: string;
  alt: string;
};

const videos: MediaVideo[] = [
  { outlet: "CTV News", short: "CTV", title: "Goat yoga takes over Ontario", thumbnail: highlandHero, alt: "Mini Highland cow being brushed" },
  { outlet: "Rogers TV", short: "RTV", title: "A farm with a ridiculous idea", thumbnail: goatCuddles, alt: "Goats cuddling with a visitor" },
  { outlet: "Breakfast Television", short: "BT", title: "Live from the alpaca pasture", thumbnail: alpacaWalk, alt: "Alpaca walk on the farm" },
  { outlet: "CBC", short: "CBC", title: "Third-generation farm, brand new plan", thumbnail: donkeyPicnic, alt: "Mini donkey at a picnic" },
  { outlet: "Global News", short: "GN", title: "Why 40,000 people came to a cow", thumbnail: highlandCta, alt: "Highland cow sticking out its tongue" },
  { outlet: "CityNews", short: "CITY", title: "Goat milk ice cream, explained", thumbnail: goatCuddles, alt: "Goats on the farm" },
  { outlet: "The Record", short: "REC", title: "Farm glamping under the stars", thumbnail: alpacaWalk, alt: "Alpaca in the pasture" },
  { outlet: "CHCH", short: "CHCH", title: "Team building with tiny donkeys", thumbnail: donkeyPicnic, alt: "Mini donkey standing on a blanket" },
];

export function MediaCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const touchStart = useRef<number | null>(null);

  const go = (next: number) => {
    setPlaying(false);
    setIndex((next + videos.length) % videos.length);
  };

  const current = videos[index]!;

  return (
    <div
      className="mt-14"
      onTouchStart={(event) => {
        touchStart.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const start = touchStart.current;
        const end = event.changedTouches[0]?.clientX ?? null;
        if (start === null || end === null) return;
        if (Math.abs(end - start) > 50) go(end < start ? index + 1 : index - 1);
        touchStart.current = null;
      }}
    >
      <div className="relative mx-auto max-w-4xl">
        <div className="relative border-2 border-headline bg-background p-3 shadow-[10px_10px_0_var(--headline)]">
          <div className="relative aspect-video w-full overflow-hidden bg-headline">
            {playing ? (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-headline px-6 text-center font-display text-2xl font-black uppercase text-background">
                Video player placeholder
                <span className="font-body text-sm font-medium normal-case tracking-normal text-background/70">
                  {current.outlet} — real video embeds go here
                </span>
              </div>
            ) : (
              <>
                <img src={current.thumbnail} alt={current.alt} loading="lazy" className="h-full w-full object-cover" />
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-headline/20 transition-colors hover:bg-headline/35 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
                  aria-label={`Play ${current.outlet} video: ${current.title}`}
                >
                  <span className="flex size-20 items-center justify-center rounded-full border-2 border-headline bg-secondary-accent text-headline shadow-[5px_5px_0_var(--headline)] transition-transform hover:scale-105">
                    <Play aria-hidden="true" size={34} className="ml-1 fill-headline" />
                  </span>
                </button>
              </>
            )}
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-2 px-1 pb-1 pt-4">
            <h3 className="font-display text-2xl font-black uppercase leading-none text-headline">{current.title}</h3>
            <span className="text-xs font-bold uppercase text-primary-accent">{current.outlet}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous video"
          className="absolute -left-3 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-headline bg-background text-headline shadow-[3px_3px_0_var(--headline)] transition-transform hover:-translate-y-[calc(50%+2px)] md:-left-7"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next video"
          className="absolute -right-3 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-headline bg-background text-headline shadow-[3px_3px_0_var(--headline)] transition-transform hover:-translate-y-[calc(50%+2px)] md:-right-7"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <ul className="mx-auto mt-9 grid max-w-4xl grid-cols-4 place-items-center gap-3 sm:flex sm:flex-wrap sm:justify-center">
        {videos.map((video, i) => (
          <li key={video.outlet + i}>
            <button
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${video.outlet} video`}
              aria-current={i === index}
              className={`flex items-center justify-center border-2 border-headline bg-background font-display font-black uppercase leading-none text-headline transition-all duration-200 ${
                i === index
                  ? "h-16 w-24 scale-105 bg-secondary-accent text-base shadow-[4px_4px_0_var(--headline)]"
                  : "h-12 w-20 text-sm opacity-70 hover:opacity-100"
              }`}
            >
              {video.short}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
