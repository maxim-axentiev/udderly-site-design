import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
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
    const query = new URLSearchParams({ rel: "0" });
    if (start > 0) query.set("start", String(start));
    return `https://www.youtube-nocookie.com/embed/${id}?${query.toString()}`;
  } catch {
    return "";
  }
}

const rawVideos = [
  { outlet: "CTV News", logo: ctvLogoAsset.url, url: "https://www.youtube.com/watch?v=BhDlGWU_5IM" },
  { outlet: "Global News", logo: globalNewsLogoAsset.url, url: "https://www.youtube.com/watch?v=UPM1RK03uSA" },
  { outlet: "Breakfast Television", logo: btLogoAsset.url, url: "https://www.youtube.com/watch?v=nk_fYKVjHMg" },
  { outlet: "CityNews", logo: cityNewsLogoAsset.url, url: "https://www.youtube.com/watch?v=IvosBu-gVKg" },
  { outlet: "CHCH", logo: chchLogoAsset.url, url: "https://www.youtube.com/watch?v=broq29VZD_0" },
  { outlet: "Fibe TV1", logo: fibeLogoAsset.url, url: "https://www.youtube.com/watch?v=E2OS1hQK2RE" },
  { outlet: "Rogers TV", logo: rogersLogoAsset.url, url: "https://www.youtube.com/watch?v=WxCLaslbzp0" },
  { outlet: "Yes TV", logo: yesTvLogoAsset.url, url: "https://www.youtube.com/watch?v=tY7SLm8JoTI&t=277s" },
];

const videos: MediaVideo[] = rawVideos.map((video) => ({ ...video, embedUrl: getYoutubeEmbedUrl(video.url) }));

export function MediaCarousel() {
  const [index, setIndex] = useState(0);
  const touchStart = useRef<number | null>(null);

  const go = (next: number) => {
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
            <iframe
              key={current.embedUrl}
              src={current.embedUrl}
              title={`${current.outlet} video`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
          <div className="px-1 pb-1 pt-4 text-center">
            <h3 className="font-display text-2xl font-black uppercase leading-none text-headline">{current.outlet}</h3>
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
