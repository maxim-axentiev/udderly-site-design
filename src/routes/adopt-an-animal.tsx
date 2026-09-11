import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroPhotoAsset from "@/assets/experiences-hero.png.asset.json";
import alpacaWalk from "@/assets/alpaca-walk.jpg";
import donkeyPicnic from "@/assets/donkey-picnic.jpg";
import goatCuddles from "@/assets/goat-cuddles.jpg";
import goatIcon1 from "@/assets/goat-icon-1.jpg";
import goatIcon2 from "@/assets/goat-icon-2.jpg";
import goatIcon3 from "@/assets/goat-icon-3.jpg";
import highlandHero from "@/assets/highland-hero.jpg";
import { AwardsStrip } from "@/components/experience/AwardsStrip";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";

const TITLE = "Adopt an Animal";
const INTRO =
  "Take a piece of the farm home with you — symbolically, of course. Our adoption program helps cover food, shelter, enrichment, and the occasional fancy hat for the animals who make every visit ridiculous.";

const animals = [
  { name: "Pekoe", image: goatIcon1, alt: "Pekoe the goat looking straight at the camera" },
  { name: "Biscuit", image: goatIcon2, alt: "Biscuit the goat standing on a straw bale" },
  { name: "Marshmallow", image: goatIcon3, alt: "Marshmallow the goat being held by a visitor" },
  { name: "Maple", image: highlandHero, alt: "Maple the mini Highland cow with a dramatic fringe" },
  { name: "Socks", image: alpacaWalk, alt: "Socks the alpaca walking along the farm path" },
  { name: "Pippin", image: donkeyPicnic, alt: "Pippin the miniature donkey beside a picnic" },
  { name: "Sprout", image: goatCuddles, alt: "Sprout the goat cuddling with a guest" },
];

const packages = [
  {
    name: "Digital Supporter",
    price: "$35/year",
    includes: [
      "Digital adoption certificate",
      "Photo of your adopted animal",
      "Quarterly farm updates by email",
    ],
  },
  {
    name: "Farm Friend",
    price: "$75/year",
    includes: [
      "Everything in Digital Supporter",
      "One free visit to the farm",
      "10% off experiences and store",
    ],
  },
  {
    name: "Barn Bestie",
    price: "$150/year",
    includes: [
      "Everything in Farm Friend",
      "Behind-the-scenes barn tour",
      "Priority booking for experiences",
      "Year-end animal holiday card",
    ],
  },
];

export const Route = createFileRoute("/adopt-an-animal")({
  head: () => ({
    meta: [
      { title: `${TITLE} | Udderly Ridiculous Farm Life` },
      { name: "description", content: INTRO },
      { property: "og:title", content: `${TITLE} at Udderly Ridiculous Farm Life` },
      { property: "og:description", content: INTRO },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdoptAnAnimalPage,
});

function AdoptAnAnimalPage() {
  return (
    <div className="min-h-screen bg-background text-body-copy">
      <SiteHeader />

      <main id="top">
        {/* 1. Hero */}
        <section className="relative isolate flex min-h-[68vh] items-center justify-center overflow-hidden">
          <img
            src={heroPhotoAsset.url}
            alt="Visitors enjoying time with animals at Udderly Ridiculous Farm Life"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-headline/65" aria-hidden="true" />
          <div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32">
            <h1 className="font-display text-[clamp(2.6rem,8vw,7rem)] font-black uppercase leading-[0.82] text-background">
              Adopt <span className="text-secondary-accent">an Animal</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg font-medium leading-relaxed text-background md:text-xl">
              {INTRO}
            </p>
          </div>
        </section>

        {/* 2. TripAdvisor recognition */}
        <AwardsStrip tagline="Top 10% of attractions worldwide by Tripadvisor." />

        {/* 3. Introduction */}
        <section className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_1fr]">
              <figure>
                <img
                  src={goatIcon2}
                  alt="Biscuit the goat standing on a straw bale in the barn"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full rotate-1 border-2 border-headline object-cover shadow-[12px_12px_0_var(--secondary-accent)]"
                />
              </figure>

              <div>
                <h2 className="font-display text-[clamp(2.6rem,6vw,5rem)] font-black uppercase leading-[0.82] text-headline">
                  Sponsor a<br /><span className="text-stroke">ridiculous life.</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed md:text-lg">
                  Placeholder description. Our adoption program is a symbolic way to support the animals who call Udderly Ridiculous Farm Life home. Your contribution goes directly toward feed, bedding, veterinary care, enrichment toys, and the occasional surprise snack.
                </p>
                <p className="mt-4 text-base leading-relaxed md:text-lg">
                  Placeholder description. Whether you adopt for yourself, as a gift, or in memory of someone who really loved goats, you become part of the extended herd. You will get updates, photos, and the quiet satisfaction of knowing one very specific animal thinks you are excellent.
                </p>
                <p className="mt-6 inline-block border-l-4 border-primary-accent pl-5 font-display text-lg font-black uppercase text-headline">
                  Scroll down for available animals to adopt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Available animals */}
        <section id="available-animals" className="scroll-mt-20 overflow-hidden bg-farm-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8">
            <h2 className="text-center font-display text-[clamp(2.8rem,7.5vw,6.6rem)] font-black uppercase leading-[0.78] text-headline">
              Meet the adoptables.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-relaxed">
              Seven personalities. Zero bad hair days. Pick the one that feels like yours.
            </p>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {animals.map((animal, index) => (
                <article
                  key={animal.name}
                  className={`flex flex-col border-2 border-headline bg-background p-3 shadow-[10px_10px_0_var(--headline)] transition-transform duration-300 hover:-translate-y-2 ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
                >
                  <img
                    src={animal.image}
                    alt={animal.alt}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-square w-full border-2 border-headline object-cover"
                  />
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-display text-4xl font-black uppercase leading-none text-headline">{animal.name}</h3>
                    <p className="mt-2 flex-1 font-accent text-lg italic leading-snug text-body-copy">
                      Placeholder personality. This animal has strong opinions and excellent taste in snacks.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Button asChild variant="outline" size="default">
                        <a href={`#${animal.name.toLowerCase()}`}>Learn More</a>
                      </Button>
                      <Button asChild size="default">
                        <a href="#adopt">Adopt {animal.name} <ArrowRight aria-hidden="true" size={16} /></a>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Adoption packages */}
        <section id="adopt" className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <h2 className="text-center font-display text-[clamp(2.6rem,6.5vw,5.4rem)] font-black uppercase leading-[0.8] text-headline">
              Choose your<br />adoption package.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-relaxed">
              Every package includes a direct contribution to your animal's care. The bigger the package, the more farm perks come with it.
            </p>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {packages.map((pkg, index) => (
                <div
                  key={pkg.name}
                  className={`border-2 border-headline bg-farm-beige p-7 shadow-[10px_10px_0_var(--headline)] md:p-9 ${index === 1 ? "rotate-1" : index === 2 ? "-rotate-1" : ""}`}
                >
                  <h3 className="font-display text-3xl font-black uppercase leading-none text-headline">{pkg.name}</h3>
                  <p className="mt-2 font-display text-2xl font-black text-primary-accent">{pkg.price}</p>
                  <ul className="mt-6 space-y-3">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base leading-relaxed">
                        <span aria-hidden="true" className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-headline bg-background font-display text-xs font-black text-headline">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild size="large">
                <a href="#available-animals">See all animals available for adoption <ArrowRight aria-hidden="true" /></a>
              </Button>
            </div>
          </div>
        </section>

        {/* 6. How adoption supports */}
        <section className="relative overflow-hidden bg-farm-blue py-20 md:py-28">
          <div className="farm-dots absolute -left-10 top-10 h-40 w-40 opacity-20" aria-hidden="true" />
          <div className="mx-auto grid max-w-[1300px] items-center gap-8 px-5 md:px-8 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="font-display text-[clamp(2.8rem,8vw,6rem)] font-black uppercase leading-[0.78] text-headline">
                Your adoption<br />does real good.
              </h2>
              <div className="mt-8 flex flex-col border-2 border-headline bg-background p-7 text-left shadow-[12px_12px_0_var(--headline)] md:p-9">
                <p className="text-base leading-relaxed md:text-lg">
                  Placeholder description. Adoption contributions help us provide high-quality feed, clean bedding, routine veterinary care, enrichment activities, and safe shelter year-round. They also help us rescue and rehabilitate new animals who need a soft place to land.
                </p>
                <p className="mt-4 text-base leading-relaxed md:text-lg">
                  Placeholder description. This is not a one-time gift — it is a year-long partnership that keeps the herd happy, healthy, and appropriately ridiculous.
                </p>
                <Button asChild size="large" className="mt-8 self-start">
                  <a href="#available-animals">See all animals available for adoption <ArrowRight aria-hidden="true" /></a>
                </Button>
              </div>
            </div>

            <figure>
              <img
                src={goatIcon3}
                alt="Marshmallow the goat being held by a visitor"
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-[4/5] w-full -rotate-1 border-2 border-headline object-cover shadow-[12px_12px_0_var(--background)]"
              />
            </figure>
          </div>
        </section>

        {/* 7. Newsletter */}
        <NewsletterSection />
      </main>

      <SiteFooter />
    </div>
  );
}
