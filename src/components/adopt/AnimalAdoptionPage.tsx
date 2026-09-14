import { ArrowRight, Check } from "lucide-react";

import heroPhotoAsset from "@/assets/experiences-hero.png.asset.json";
import goatIcon1 from "@/assets/goat-icon-1.jpg";
import goatIcon2 from "@/assets/goat-icon-2.jpg";
import goatIcon3 from "@/assets/goat-icon-3.jpg";
import { ExperienceGallery } from "@/components/experience/ExperienceGallery";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";

export type AnimalAdoptionPageProps = {
  name: string;
  tagline: string;
  /** Set to false to hide the Gold package (silver only). */
  showGold?: boolean;
};

export function buildAdoptionMeta(name: string, tagline: string) {
  const title = `Adopt ${name}`;
  const description = `Symbolically adopt ${name}, ${tagline.toLowerCase()}, and support ${name}'s care at Udderly Ridiculous Farm Life.`;
  return {
    meta: [
      { title: `${title} | Udderly Ridiculous Farm Life` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — ${tagline}` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

export function AnimalAdoptionPage({ name, tagline, showGold = true }: AnimalAdoptionPageProps) {
  const gallery = [
    { src: goatIcon2, alt: `${name} standing on a straw bale like they own the barn` },
    { src: goatIcon1, alt: `${name} giving the camera their full attention` },
    { src: goatIcon3, alt: `${name} being held by a visitor during cuddle time` },
  ];

  const silverItems = [
    "Digital certificate of adoption",
    `A digital info package about ${name} (photo, traits, and species details)`,
    `Two updates per year on ${name}`,
  ];

  const goldItems = [...silverItems, `A 15m Zoom call with ${name}`];

  const importantInfo = [
    "Adoptions are symbolic and do not transfer ownership of the animal.",
    `All adoption contributions are non-refundable and go directly toward ${name}'s care.`,
    "Digital packages and updates are sent to the email provided at checkout.",
    "Zoom calls are scheduled during regular farm hours and may include a few surprise guests.",
    "Gift adoptions can include a personalized message sent to the recipient.",
  ];

  const anchor = `adopt-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

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
              Adopt <span className="text-secondary-accent">{name}</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg font-medium leading-relaxed text-background md:text-xl">
              {tagline}
            </p>
          </div>
        </section>

        {/* 2. Introduction */}
        <section className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_1fr]">
              <ExperienceGallery images={gallery} />

              <div>
                <h2 className="font-display text-[clamp(2.6rem,6vw,5rem)] font-black uppercase leading-[0.82] text-headline">
                  Meet<br /><span className="text-stroke">{name}.</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed md:text-lg">
                  Placeholder description. {name} is a full personality in animal form — opinions, eyebrows, and a
                  personal vendetta against any gate that dares stay closed. {name} investigates every pocket like it
                  might contain a snack and has never met a human worth ignoring.
                </p>
                <p className="mt-4 text-base leading-relaxed md:text-lg">
                  Placeholder description. By adopting {name}, you are not just sponsoring an animal — you are joining
                  the extended herd. You will get updates on the latest schemes, photos of the best side (it is all of
                  them), and the quiet pride of being noticed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Adoption packages */}
        <section id={anchor} className="overflow-hidden bg-farm-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <h2 className="text-center font-display text-[clamp(2.8rem,7.5vw,6.6rem)] font-black uppercase leading-[0.78] text-headline">
              Pick your<br /><span className="text-primary-accent">package.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-relaxed">
              {showGold
                ? `Two ways to support ${name}. Both come with bragging rights.`
                : `One simple way to support ${name}. Bragging rights included.`}
            </p>

            <div className={`mt-14 grid gap-8 ${showGold ? "lg:grid-cols-2" : "mx-auto max-w-xl"}`}>
              {/* Silver pail package */}
              <article className="relative flex flex-col border-2 border-headline bg-farm-silver p-1 shadow-[12px_12px_0_var(--headline)] transition-transform duration-300 hover:-translate-y-2">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full border-2 border-headline bg-background px-4 py-1 font-display text-sm font-black uppercase text-headline shadow-[3px_3px_0_var(--headline)]">
                  Silver Pail
                </div>
                <div className="flex flex-1 flex-col p-6 pt-8 md:p-8 md:pt-10">
                  <div className="text-center">
                    <h3 className="font-display text-5xl font-black uppercase text-headline md:text-6xl">Silver</h3>
                    <p className="mt-2 font-accent text-lg italic text-body-copy">The classic farm supporter.</p>
                    <p className="mt-4 font-display text-6xl font-black text-headline md:text-7xl">$35</p>
                  </div>

                  <ul className="mt-8 flex-1 space-y-4">
                    {silverItems.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base leading-relaxed">
                        <span aria-hidden="true" className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-headline bg-background text-headline">
                          <Check size={14} strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button asChild size="large" className="mt-8 w-full">
                    <a href={`#${anchor}`}>Adopt {name} — Silver <ArrowRight aria-hidden="true" /></a>
                  </Button>
                </div>
              </article>

              {/* Gold hay bale package */}
              {showGold ? (
                <article className="relative flex flex-col border-2 border-headline bg-farm-gold p-1 shadow-[12px_12px_0_var(--headline)] transition-transform duration-300 hover:-translate-y-2">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full border-2 border-headline bg-background px-4 py-1 font-display text-sm font-black uppercase text-headline shadow-[3px_3px_0_var(--headline)]">
                    Gold Hay Bale
                  </div>
                  <div className="flex flex-1 flex-col p-6 pt-8 md:p-8 md:pt-10">
                    <div className="text-center">
                      <h3 className="font-display text-5xl font-black uppercase text-headline md:text-6xl">Gold</h3>
                      <p className="mt-2 font-accent text-lg italic text-body-copy">The royal treatment.</p>
                      <p className="mt-4 font-display text-6xl font-black text-headline md:text-7xl">$75</p>
                    </div>

                    <ul className="mt-8 flex-1 space-y-4">
                      {goldItems.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-base leading-relaxed">
                          <span aria-hidden="true" className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-headline bg-background text-headline">
                            <Check size={14} strokeWidth={3} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Button asChild size="large" className="mt-8 w-full">
                      <a href={`#${anchor}`}>Adopt {name} — Gold <ArrowRight aria-hidden="true" /></a>
                    </Button>
                  </div>
                </article>
              ) : null}
            </div>
          </div>
        </section>

        {/* 4. Important information */}
        <section className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center font-display text-[clamp(2.4rem,6.5vw,5.4rem)] font-black uppercase leading-[0.8] text-headline">
                The fine<br />print.
              </h2>

              <div className="mt-12 -rotate-1 border-2 border-headline bg-background p-7 shadow-[12px_12px_0_var(--secondary-accent)] md:p-10">
                <ul className="space-y-5">
                  {importantInfo.map((item) => (
                    <li key={item} className="flex items-start gap-4 text-base leading-relaxed md:text-lg">
                      <span aria-hidden="true" className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-headline bg-farm-beige font-display text-sm font-black text-headline">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. How adoption helps */}
        <section className="relative overflow-hidden bg-farm-blue py-20 md:py-28">
          <div className="farm-dots absolute -left-10 top-10 h-40 w-40 opacity-20" aria-hidden="true" />
          <div className="mx-auto grid max-w-[1300px] items-center gap-8 px-5 md:px-8 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="font-display text-[clamp(2.8rem,8vw,6rem)] font-black uppercase leading-[0.78] text-headline">
                Your adoption<br />keeps {name} thriving.
              </h2>
              <div className="mt-8 flex flex-col border-2 border-headline bg-background p-7 text-left shadow-[12px_12px_0_var(--headline)] md:p-9">
                <p className="text-base leading-relaxed md:text-lg">
                  Placeholder description. Every adoption directly funds high-quality feed, clean bedding, routine
                  veterinary care, enrichment toys, and the occasional celebratory snack. It also helps us rescue and
                  rehabilitate new animals who need a safe place to land.
                </p>
                <p className="mt-4 text-base leading-relaxed md:text-lg">
                  Placeholder description. This is not a one-time gift — it is a year-long partnership that keeps {name}{" "}
                  happy, healthy, and appropriately ridiculous.
                </p>
              </div>
            </div>

            <figure>
              <img
                src={goatIcon3}
                alt={`${name} being held by a visitor during cuddle time`}
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-[4/5] w-full -rotate-1 border-2 border-headline object-cover shadow-[12px_12px_0_var(--background)]"
              />
            </figure>
          </div>
        </section>

        {/* 6. Newsletter */}
        <NewsletterSection />
      </main>

      <SiteFooter />
    </div>
  );
}
