import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Shuffle } from "lucide-react";

import alpacaWalk from "@/assets/alpaca-walk.jpg";
import goatCuddles from "@/assets/goat-cuddles.jpg";
import highlandHero from "@/assets/highland-hero.jpg";
import donkeyPicnic from "@/assets/donkey-picnic.jpg";
import experiencesPhotoAsset from "@/assets/homepage-experiences.png.asset.json";
import { AwardsStrip } from "@/components/experience/AwardsStrip";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";
import { CorporateHero, CorporateLowerSections } from "@/components/corporate/CorporateSections";
import { buildProgramMeta } from "@/components/corporate/ProgramPage";

export const Route = createFileRoute("/corporate-training/team-building-experiences")({
  head: () => buildProgramMeta("Team Building Experiences", "Team building experiences with goats, alpacas, mini Highland cows and donkeys on a working Ontario farm. Mix and match to build your perfect team day."),
  component: TeamBuildingPage,
});

const experiences = [
  { title: "Goat Yoga", image: goatCuddles, copy: "Placeholder description. Stretch, laugh and lose all dignity together while goats climb, nap and supervise." },
  { title: "Alpaca Walks", image: alpacaWalk, copy: "Placeholder description. Lead an alpaca down the farm lane and discover who on your team is the natural leader." },
  { title: "Mini Highland Cow Experience", image: highlandHero, copy: "Placeholder description. Brush, cuddle and get to know our fluffy mini Highland cows as a group." },
  { title: "Goat Cuddles", image: experiencesPhotoAsset.url, copy: "Placeholder description. A barn full of goats, a team full of stress, and a guaranteed improvement in mood." },
  { title: "Miniature Donkey Visits", image: donkeyPicnic, copy: "Placeholder description. Gentle, curious and endlessly patient, our donkeys bring the calm your team needs." },
];

function TeamBuildingPage() {
  return (
    <div className="min-h-screen bg-background text-body-copy">
      <SiteHeader />
      <main id="top">
        <CorporateHero title={<>Team Building <span className="text-secondary-accent">Experiences</span></>} copy="No flip charts, no trust falls — just your team, our animals, and a whole lot of shared ridiculousness." />
        <AwardsStrip tagline="Top 10% of attractions worldwide by Tripadvisor." />

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8">
            <h2 className="max-w-3xl font-display text-[clamp(2.4rem,6.5vw,5.4rem)] font-black uppercase leading-[0.82] text-headline">
              Pick your <span className="text-stroke">herd</span>
            </h2>
            <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {experiences.map((x) => (
                <article key={x.title} className="group flex flex-col border-2 border-headline bg-background p-3 shadow-[7px_7px_0_var(--headline)] transition-transform duration-200 hover:-translate-y-2">
                  <div className="overflow-hidden">
                    <img src={x.image} alt={`Team enjoying ${x.title} on the farm`} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-3 pb-4">
                    <h3 className="font-display text-2xl font-black uppercase leading-none text-headline">{x.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed">{x.copy}</p>
                    <Button asChild className="mt-5 w-full"><a href="#contact">Contact Us</a></Button>
                  </div>
                </article>
              ))}
              <aside className="flex -rotate-1 flex-col justify-center border-4 border-dashed border-primary-accent bg-farm-beige p-8 text-center">
                <Shuffle aria-hidden="true" className="mx-auto size-12 text-primary-accent" />
                <h3 className="mt-5 font-display text-3xl font-black uppercase leading-none text-headline">Mix &amp; match</h3>
                <p className="mt-4 text-base leading-relaxed">
                  Can&apos;t pick just one? You can combine team building experiences into one ridiculous day. Contact us and we&apos;ll help you build the perfect mix for your team.
                </p>
                <Button asChild size="large" className="mx-auto mt-6"><a href="#contact">Contact Us <ArrowRight aria-hidden="true" /></a></Button>
              </aside>
            </div>
          </div>
        </section>

        <CorporateLowerSections reviewsTitle="Teams that bonded on the farm" contactTitle="Let's plan your team day" />
      </main>
      <SiteFooter />
    </div>
  );
}
