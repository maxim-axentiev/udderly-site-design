import { ArrowRight } from "lucide-react";

import urbort1Asset from "@/assets/urbort-1.jpg.asset.json";
import urbort2Asset from "@/assets/urbort-2.png.asset.json";
import urbort3Asset from "@/assets/urbort-3.png.asset.json";
import { Button } from "@/components/ui/button";

const articles = [
  { title: "World's First Cow Wedding", image: urbort1Asset.url, alt: "Highland cow wearing a white wedding veil and flower crown beside a fence", rotate: "-rotate-2" },
  { title: "Biggest, Littlest Collab", image: urbort2Asset.url, alt: "Greg with farm animals in a split-frame collage", rotate: "rotate-1" },
  { title: "Viral Alpaca Sex", image: urbort3Asset.url, alt: "Two alpacas in a pasture with colourful leashes", rotate: "rotate-2" },
];

export function UrbortSection() {
  return (
    <section
      id="urbort"
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        backgroundColor: "#b98a4e",
        backgroundImage:
          "radial-gradient(rgba(90,55,20,0.35) 1px, transparent 1.6px), radial-gradient(rgba(255,240,210,0.25) 1px, transparent 1.6px)",
        backgroundSize: "9px 9px, 13px 13px",
        backgroundPosition: "0 0, 5px 7px",
      }}
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="mx-auto max-w-3xl -rotate-1 border-4 border-headline bg-background p-7 text-center shadow-[10px_10px_0_rgba(0,0,0,0.35)] md:p-10">
          <h2 className="font-display text-[clamp(3rem,9vw,7rem)] font-black uppercase leading-[0.8] text-headline">URBORT</h2>
          <p className="mt-5 text-base leading-relaxed md:text-lg">
            URBORT stands for Udderly Ridiculous Board of Ridiculous Things. It&apos;s a compilation of all the insane things we&apos;ve done. It&apos;s like going to Las Vegas and rather than being all hush hush about the trip, we instead document, record, analyze, and fully display it for the world to see.
          </p>
        </div>

        <ul className="mt-16 grid gap-10 md:grid-cols-3">
          {articles.map((article) => (
            <li key={article.title} className={`relative bg-background p-3 pb-6 shadow-[8px_10px_0_rgba(0,0,0,0.3)] ${article.rotate}`}>
              <span className="absolute -top-4 left-1/2 z-10 size-7 -translate-x-1/2 rounded-full border-2 border-headline bg-primary-accent shadow-[2px_2px_0_rgba(0,0,0,0.35)]" aria-hidden="true" />
              <img src={article.image} alt={article.alt} width={1024} height={1024} loading="lazy" className="aspect-square w-full border-2 border-headline object-cover" />
              <h3 className="mt-4 px-2 font-display text-2xl font-black uppercase leading-none text-headline">{article.title}</h3>
              <div className="mt-4 px-2">
                <Button asChild><a href="#urbort">Read the article</a></Button>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex justify-center">
          <Button asChild size="large">
            <a href="#urbort">See all the ridiculous things we&apos;ve done <ArrowRight aria-hidden="true" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}
