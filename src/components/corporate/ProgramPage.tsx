import { ArrowRight, Check, Clock3 } from "lucide-react";
import type { ReactNode } from "react";

import trainingPhotoAsset from "@/assets/homepage-training.png.asset.json";
import { AwardsStrip } from "@/components/experience/AwardsStrip";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";
import { CorporateHero, CorporateLowerSections } from "@/components/corporate/CorporateSections";

const learningOutcomes = [
  "Manage emotions and apply strategies for handling tension-filled situations.",
  "Maximize influence by balancing directness with inquiry.",
  "Identify key issues by actively listening for what matters most in any given situation.",
  "Provide feedback in a manner that avoids creating defensiveness.",
  "Apply these skills to real-life situations for immediate impact.",
];

export function buildProgramMeta(name: string, description: string) {
  return {
    meta: [
      { title: `${name} | Corporate Training | Udderly Ridiculous` },
      { name: "description", content: description },
      { property: "og:title", content: `${name} | Corporate Training` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

export function ProgramPage({ heroTitle }: { heroTitle: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-body-copy">
      <SiteHeader />
      <main id="top">
        <CorporateHero
          title={heroTitle}
          copy="Have the conversations that matter — the hard ones, the honest ones, the ones that change everything — with a little help from the farm."
        />
        <AwardsStrip tagline="Top 10% of attractions worldwide by Tripadvisor." />

        <section className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1300px] px-5 md:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <figure className="relative m-0">
                <div className="absolute -inset-3 rotate-2 bg-secondary-accent" aria-hidden="true" />
                <img src={trainingPhotoAsset.url} alt="A team learning together in the farm classroom" width={1280} height={960} loading="lazy" className="relative aspect-[4/3] w-full border-2 border-headline object-cover" />
              </figure>
              <div>
                <h2 className="font-display text-[clamp(2.2rem,5.2vw,4.4rem)] font-black uppercase leading-[0.85] text-headline">
                  Conversations that <span className="text-stroke">actually land</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed md:text-lg">
                  Placeholder description. Most workplace tension isn’t caused by bad people — it’s caused by avoided conversations. This program gives your team a practical, repeatable framework for handling high-stakes dialogue with clarity, empathy and confidence.
                </p>
                <p className="mt-4 text-base leading-relaxed md:text-lg">
                  Through facilitated exercises, real-play scenarios and a few unscripted animal moments, participants practice managing emotion, listening for what matters and giving feedback that lands instead of defends. Keep scrolling to learn about the program!
                </p>
                <Button asChild size="large" className="mt-8"><a href="#contact">Contact Us <ArrowRight aria-hidden="true" /></a></Button>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-farm-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8">
            <h2 className="max-w-3xl font-display text-[clamp(2.6rem,7vw,6rem)] font-black uppercase leading-[0.8] text-headline">What your team will take away</h2>
            <div className="mt-14 grid gap-10 lg:grid-cols-2">
              <article className="border-2 border-headline bg-background p-6 shadow-[10px_10px_0_var(--headline)] md:p-8">
                <h3 className="font-display text-2xl font-black uppercase leading-tight text-headline">Learning outcomes</h3>
                <ul className="mt-6 space-y-4">
                  {learningOutcomes.map((o) => (
                    <li key={o} className="flex gap-3 text-base leading-relaxed">
                      <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary-accent" /><span>{o}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <div className="space-y-10">
                <article className="border-2 border-headline bg-background p-6 shadow-[10px_10px_0_var(--headline)] md:p-8">
                  <span className="flex size-12 items-center justify-center rounded-full border-2 border-headline bg-farm-beige text-primary-accent shadow-[4px_4px_0_var(--headline)]"><Clock3 aria-hidden="true" /></span>
                  <h3 className="mt-5 font-display text-2xl font-black uppercase leading-tight text-headline">Duration</h3>
                  <p className="mt-3 text-base leading-relaxed">The program is flexible and can be offered as a half-day, full-day, or time-spaced session.</p>
                </article>
                <article className="border-2 border-headline bg-background p-6 shadow-[10px_10px_0_var(--headline)] md:p-8">
                  <h3 className="font-display text-2xl font-black uppercase leading-tight text-headline">Enhancements</h3>
                  <p className="mt-3 text-base leading-relaxed">For an enriched team-building experience, consider integrating our Alpaca EQ training which dives deeper into emotional intelligence.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <CorporateLowerSections reviewsTitle="Teams that learned to talk — and listen — on the farm" contactTitle="Let's talk training" />
      </main>
      <SiteFooter />
    </div>
  );
}
