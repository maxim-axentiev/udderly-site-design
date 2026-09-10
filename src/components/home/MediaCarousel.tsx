import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useRef, useState } from "react";

import alpacaWalk from "@/assets/alpaca-walk.jpg";
import donkeyPicnic from "@/assets/donkey-picnic.jpg";
import goatCuddles from "@/assets/goat-cuddles.jpg";
import highlandCta from "@/assets/highland-cta.jpg";
import highlandHero from "@/assets/highland-hero.jpg";
import btLogoAsset from "@/assets/bt-logo.png.asset.json";
import chchLogoAsset from "@/assets/chch-logo.png.asset.json";
import cityNewsLogoAsset from "@/assets/city-news-logo.png.asset.json";
import ctvLogoAsset from "@/assets/ctv-logo.png.asset.json";
import fibeLogoAsset from "@/assets/fibe-logo.png.asset.json";
import globalNewsLogoAsset from "@/assets/global-news-logo.png.asset.json";
import rogersLogoAsset from "@/assets/rogers-logo.png.asset.json";
import yesTvLogoAsset from "@/assets/yestv-logo.png.asset.json";

type MediaVideo = {
  outlet: string;
  logo: string;
  title: string;
  thumbnail: string;
  alt: string;
  url: string;
  embedUrl: string;
};

function getYoutubeEmbedUrl(videoUrl: string): string {
  try {
    const parsed = new URL(videoUrl);
    let id = "";
    let start = 0;

    if (parsed.hostname === "youtu.be") {
      id = parsed.pathname.slice(1);
    } else {
      id = parsed.searchParams.get("v") || "";
    }

    const timeParam = parsed.searchParams.get("t");
    if (timeParam) {
      const numeric = parseInt(timeParam.replace("s", ""), 10);
      if (!Number.isNaN(numeric)) start = numeric;
    }

    if (!id) return "";
    return start > 0 ? `https://www.youtube.com/embed/${id}?start=${start}` : `https://www.youtube.com/embed/${id}`;
  } catch {
    return "";
  }
}

const rawVideos = [
  { outlet: "CTV News", logo: ctvLogoAsset.url, title: "Goat yoga takes over Ontario", thumbnail: highlandHero, alt: "Mini Highland cow being brushed", url: "https://www.youtube.com/watch?v=BhDlGWU_5IM" },
  { outlet: "Global News", logo: globalNewsLogoAsset.url, title: "Why 40,000 people came to a cow", thumbnail: highlandCta, alt: "Highland cow sticking out its tongue", url: "https://www.youtube.com/watch?v=UPM1RK03uSA" },
  { outlet: "Breakfast Television", logo: btLogoAsset.url, title: "Live from the alpaca pasture", thumbnail: alpacaWalk, alt: "Alpaca walk on the farm", url: "https://www.youtube.com/watch?v=nk_fYKVjHMg" },
  { outlet: "CityNews", logo: cityNewsLogoAsset.url, title: "Goat milk ice cream, explained", thumbnail: goatCuddles, alt: "Goats on the farm", url: "https://www.youtube.com/watch?v=IvosBu-gVKg" },
  { outlet: "CHCH", logo: chchLogoAsset.url, title: "Team building with tiny donkeys", thumbnail: donkeyPicnic, alt: "Mini donkey standing on a blanket", url: "https://www.youtube.com/watch?v=broq29VZD_0" },
  { outlet: "Fibe TV1", logo: fibeLogoAsset.url, title: "Farm glamping under the stars", thumbnail: alpacaWalk, alt: "Alpaca in the pasture", url: "https://www.youtube.com/watch?v=E2OS1hQK2RE" },
  { outlet: "Rogers TV", logo: rogersLogoAsset.url, title: "A farm with a ridiculous idea", thumbnail: goatCuddles, alt: "Goats cuddling with a visitor", url: "https://www.youtube.com/watch?v=WxCLaslbzp0" },
  { outlet: "Yes TV", logo: yesTvLogoAsset.url, title: "Third-generation farm, brand new plan", thumbnail: donkeyPicnic, alt: "Mini donkey at a picnic", url: "https://www.youtube.com/watch?v=tY7SLm8JoTI&t=277s" },
];

const videos: MediaVideo[] = rawVideos.map((video) => ({ ...video, embedUrl: getYoutubeEmbedUrl(video.url) }));

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
            {playing && current.embedUrl ? (
              <iframe
                src={current.embedUrl}
                title={`${current.outlet} video: ${current.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-0"
              />
            ) : playing ? (
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

      <ul className="mx-auto mt-9 grid max-w-4xl grid-cols-4 place-items-center gap-3 lg:grid-cols-8">
        {videos.map((video, i) => (
          <li key={video.outlet + i} className="flex w-full justify-center">
            <button
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${video.outlet} video`}
              aria-current={i === index}
              className={`flex w-full items-center justify-center overflow-hidden border-2 border-headline bg-background p-1.5 transition-all duration-200 ${
                i === index
                  ? "h-16 max-w-28 scale-105 bg-secondary-accent shadow-[4px_4px_0_var(--headline)] sm:h-20 sm:max-w-32"
                  : "h-14 max-w-24 opacity-70 hover:opacity-100 sm:h-16 sm:max-w-28"
              }`}
            >
              <img src={video.logo} alt="" aria-hidden="true" loading="lazy" className="max-h-full max-w-full object-contain" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
