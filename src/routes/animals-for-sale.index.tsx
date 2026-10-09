import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import alpacaWalk from "@/assets/alpaca-walk.jpg";
import goatIcon2 from "@/assets/goat-icon-2.jpg";
import highlandHero from "@/assets/highland-hero.jpg";
import heroPhotoAsset from "@/assets/experiences-hero.png.asset.json";
import saleAsset from "@/assets/homepage-animals-for-sale.png.asset.json";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WaitlistSection } from "@/components/sale/WaitlistForm";
import { Button } from "@/components/ui/button";
import { forSale, sold, type SaleAnimal } from "@/data/animals-for-sale";

const DESC = "Mini Highland cows, miniature goats and alpacas raised with care on our Ontario farm — see who's available, who's found a home, and join the waitlist.";

export const Route = createFileRoute("/animals-for-sale/")({
  head: () => ({
    meta: [
      { title: "Animals for Sale | Udderly Ridiculous Farm Life" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Animals for Sale | Udderly Ridiculous Farm Life" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroPhotoAsset.url },
      { name: "twitter:image", content: heroPhotoAsset.url },
    ],
  }),
  component: AnimalsForSalePage,
});

function AnimalCard({ animal, index }: { animal: SaleAnimal; index: number }) {
  return (
    <article className={`group relative flex flex-col border-2 border-headline bg-background p-3 shadow-[10px_10px_0_var(--headline)] transition-transform duration-300 hover:-translate-y-2 ${index % 2 ? "rotate-1" : "-rotate-1"}`}>
      <div className="relative overflow-hidden border-2 border-headline">
        <img src={animal.image} alt={animal.name} width={1024} height={1024} loading="lazy" className={`aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105 ${animal.sold ? "grayscale-[60%]" : ""}`} />
        {animal.sold && (
          <div className="pointer-events-none absolute inset-x-0 bottom-[12%] flex items-center justify-center" aria-hidden="true">
            <span className="-rotate-12 border-4 border-headline bg-secondary-accent px-8 py-2 font-display text-4xl font-black uppercase tracking-wider text-headline shadow-[6px_6px_0_var(--headline)]">Sold</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 items-center justify-between gap-4 p-4">
        <h3 className="font-display text-3xl font-black uppercase leading-none text-headline">
          {animal.name}{animal.sold && <span className="sr-only"> (sold)</span>}
        </h3>
        <Button asChild className="shrink-0 bg-primary-accent text-primary-foreground">
          <Link to="/animals-for-sale/$slug" params={{ slug: animal.slug }}>Learn More</Link>
        </Button>
      </div>
    </article>
  );
}

const prep = [
  { title: "Mini Highland Cows", image: highlandHero, copy: "Placeholder copy. Plan for a companion cow, sturdy fencing, good pasture or hay, and a three-sided shelter. They're fluffy, not fragile — but they do need friends." },
  { title: "Miniature Goats", image: goatIcon2, copy: "Placeholder copy. Goats come in pairs, escape like professionals, and need secure fencing plus a dry, draft-free shelter. Bring snacks. Lots of snacks." },
  { title: "Alpacas", image: alpacaWalk, copy: "Placeholder copy. Alpacas need a herd of three or more, regular vet care, hoof trimming and their own grazing space away from other livestock." },
];

function AnimalsForSalePage() {
  return (
    <div className="min-h-screen bg-background text-body-copy">
      <SiteHeader />
      <main id="top">
        <section className="relative isolate flex min-h-[68vh] items-center justify-center overflow-hidden">
          <img src={heroPhotoAsset.url} alt="Animals in the pasture at Udderly Ridiculous Farm Life" width={1920} height={1080} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-headline/65" aria-hidden="true" />
          <div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32">
            <h1 className="font-display text-[clamp(2.6rem,8vw,7rem)] font-black uppercase leading-[0.82] text-background">
              Animals <span className="text-secondary-accent">for Sale</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg font-medium leading-relaxed text-background md:text-xl">
              Raised with love, socialized from day one, and ready to become someone&apos;s favourite.
            </p>
          </div>
        </section>

        <section className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-[1300px] items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
            <figure className="relative m-0">
              <div className="absolute -inset-3 rotate-2 bg-secondary-accent" aria-hidden="true" />
              <img src={saleAsset.url} alt="A young animal raised on the farm" width={1280} height={960} loading="lazy" className="relative aspect-[4/3] w-full border-2 border-headline object-cover" />
            </figure>
            <div>
              <h2 className="font-display text-[clamp(2.2rem,5.2vw,4.4rem)] font-black uppercase leading-[0.85] text-headline">
                Happy homes, <span className="text-stroke">not just sales</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed md:text-lg">
                Placeholder description. Every animal we raise is handled gently, socialized daily and cared for like family. We're picky about where they go because they deserve homes with companions, space, and people who'll love them as much as we do. No petting farms, no travelling zoos — just good, forever homes.
              </p>
              <Button asChild size="large" className="mt-8"><a href="#waitlist">Join the Waitlist <ArrowRight aria-hidden="true" /></a></Button>
            </div>
          </div>
        </section>

        <section id="available" className="scroll-mt-20 bg-farm-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8">
            <h2 className="text-center font-display text-[clamp(2.8rem,7.5vw,6.6rem)] font-black uppercase leading-[0.78] text-headline">Available now.</h2>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {forSale.map((a, i) => <AnimalCard key={a.slug} animal={a} index={i} />)}
            </div>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8">
            <h2 className="text-center font-display text-[clamp(2.8rem,7.5vw,6.6rem)] font-black uppercase leading-[0.78] text-headline">
              Animals <span className="text-stroke">sold</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-lg">Already living their best lives in new homes.</p>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {sold.map((a, i) => <AnimalCard key={a.slug} animal={a} index={i} />)}
            </div>
          </div>
        </section>

        <section className="bg-farm-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <h2 className="max-w-4xl font-display text-[clamp(2.4rem,6.5vw,5.4rem)] font-black uppercase leading-[0.82] text-headline">Preparing for your new herd member</h2>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {prep.map((p) => (
                <article key={p.title} className="border-2 border-headline bg-background p-3 shadow-[8px_8px_0_var(--headline)]">
                  <img src={p.image} alt={p.title} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <div className="p-3 pb-4">
                    <h3 className="font-display text-2xl font-black uppercase leading-none text-headline">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed">{p.copy}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="large"><a href="#waitlist">Join the Waitlist <ArrowRight aria-hidden="true" /></a></Button>
            </div>
          </div>
        </section>

        <WaitlistSection title="Join the waitlist" copy="Be the first to know when new calves, kids or crias are ready for homes. Pick the animals you're interested in and we'll let you know." />
      </main>
      <SiteFooter />
    </div>
  );
}
