import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, Instagram, Menu, Sparkles } from "lucide-react";

import alpacaWalk from "@/assets/alpaca-walk.jpg";
import donkeyPicnic from "@/assets/donkey-picnic.jpg";
import goatCuddles from "@/assets/goat-cuddles.jpg";
import highlandCta from "@/assets/highland-cta.jpg";
import highlandHero from "@/assets/highland-hero.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farm Animal Experiences | Udderly Ridiculous" },
      {
        name: "description",
        content: "Meet Highland cows, alpacas, goats and donkeys through joyful farm experiences in Ontario.",
      },
      { property: "og:title", content: "Udderly Ridiculous Farm Life" },
      {
        property: "og:description",
        content: "Come do something udderly ridiculous with Ontario's fluffiest farm personalities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = ["Experiences", "Meet the Herd", "Stay", "Adopt", "Corporate", "Our Farm"];

const experiences = [
  {
    title: "Mini Highland Cow Experience",
    fact: "90 MIN · YEAR ROUND",
    copy: "Brush, feed and become emotionally attached to a very small, very fluffy cow.",
    image: highlandHero,
    alt: "Fluffy ginger Mini Highland cow in a pasture",
    className: "lg:-rotate-2 lg:translate-y-6",
  },
  {
    title: "Goat Cuddles",
    fact: "60 MIN · SPRING–FALL",
    copy: "Sit down. Add goats. Discover that personal space was always overrated.",
    image: goatCuddles,
    alt: "Two goats cuddling beside a farm fence",
    className: "lg:rotate-1",
  },
  {
    title: "Alpaca Walk & Bond",
    fact: "75 MIN · YEAR ROUND",
    copy: "Take a stroll with a fluffy introvert who may or may not approve of you.",
    image: alpacaWalk,
    alt: "Visitors walking beside a white alpaca",
    className: "lg:-rotate-1 lg:translate-y-10",
  },
  {
    title: "Mini Donkey Picnic",
    fact: "90 MIN · MAY–OCT",
    copy: "A picnic with tiny donkeys. Your regular lunch plans never stood a chance.",
    image: donkeyPicnic,
    alt: "Miniature donkey standing on a picnic blanket",
    className: "lg:rotate-2 lg:translate-y-2",
  },
];

const herd = [
  { name: "Muriel", type: "Mini Highland Cow", line: "Chief snack inspector.", image: highlandHero, alt: "Muriel the Mini Highland cow" },
  { name: "Sassafras", type: "Alpaca", line: "Full-time diva. Zero regrets.", image: alpacaWalk, alt: "Sassafras the alpaca" },
  { name: "Greg", type: "Goat", line: "No relation to management. Probably.", image: goatCuddles, alt: "Greg the goat" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-body-copy">
      <header className="relative z-50 border-b-2 border-headline bg-background">
        <div className="mx-auto flex min-h-24 max-w-[1500px] items-center justify-between gap-6 px-5 md:px-8">
          <a href="#top" className="group flex max-w-52 -rotate-1 flex-col font-display font-black uppercase leading-[0.78] text-headline md:max-w-60" aria-label="Udderly Ridiculous Farm Life home">
            <span className="text-[1.7rem] md:text-[2rem]">Udderly Ridiculous</span>
            <span className="mt-1 flex items-center gap-2 text-sm tracking-[0.16em] text-primary-accent"><span className="h-1.5 w-7 bg-secondary-accent" /> Farm Life</span>
          </a>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="font-display text-base font-bold uppercase text-headline decoration-secondary-accent decoration-[3px] underline-offset-8 hover:underline">{item}</a>)}
          </nav>

          <Button asChild className="hidden lg:inline-flex"><a href="#experiences">Book an Experience <ArrowRight aria-hidden="true" size={18} /></a></Button>

          <details className="relative xl:hidden">
            <summary className="flex size-12 cursor-pointer list-none items-center justify-center rounded-full border-2 border-headline bg-farm-beige text-headline [&::-webkit-details-marker]:hidden" aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
            <div className="absolute right-0 top-14 w-72 border-2 border-headline bg-background p-5 shadow-[7px_7px_0_var(--secondary-accent)]">
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="border-b border-border py-3 font-display text-xl font-bold uppercase text-headline">{item}</a>)}
                <Button asChild className="mt-5"><a href="#experiences">Book an Experience</a></Button>
              </nav>
            </div>
          </details>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-farm-beige">
          <div className="farm-dots absolute -left-10 top-12 h-28 w-28 rotate-12 opacity-20" aria-hidden="true" />
          <div className="mx-auto grid min-h-[760px] max-w-[1500px] items-center gap-10 px-5 py-14 md:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:py-20">
            <div className="relative z-10 lg:pb-14">
              <div className="mb-7 inline-flex -rotate-2 items-center gap-2 rounded-full border-2 border-headline bg-secondary-accent px-4 py-2 font-display text-sm font-extrabold uppercase text-headline shadow-[3px_3px_0_var(--headline)]">
                <Sparkles size={16} aria-hidden="true" /> Real animals. Questionable plans.
              </div>
              <h1 className="max-w-3xl font-display text-[clamp(4.6rem,10vw,9.5rem)] font-black uppercase leading-[0.75] text-headline">
                Come do something <span className="relative inline-block text-primary-accent after:absolute after:-bottom-2 after:left-1 after:h-2 after:w-full after:-rotate-1 after:bg-secondary-accent">udderly</span> ridiculous.
              </h1>
              <p className="mt-10 max-w-xl text-lg font-medium leading-relaxed md:text-xl">Meet Highland cows, alpacas, goats, donkeys and a supporting cast of farm personalities through immersive Ontario farm experiences.</p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Button asChild size="large"><a href="#experiences">Book an Experience <ArrowRight aria-hidden="true" /></a></Button>
                <Button asChild variant="ghost"><a href="#experiences">See what the heck we do <ArrowDownRight aria-hidden="true" size={20} /></a></Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[690px] pb-12 lg:pb-0">
              <div className="absolute -right-10 top-10 h-[80%] w-[85%] rotate-3 rounded-[48%_52%_42%_58%/45%_40%_60%_55%] bg-secondary-accent" aria-hidden="true" />
              <div className="absolute -left-2 bottom-2 z-20 -rotate-6 bg-primary-accent px-5 py-3 font-accent text-lg italic text-primary-foreground shadow-[5px_5px_0_var(--headline)] md:text-2xl">Yes, the hair is real.</div>
              <img src={highlandHero} alt="Curious fluffy Mini Highland cow looking at the camera" width={1280} height={1536} fetchPriority="high" className="relative z-10 ml-auto aspect-[4/5] w-[88%] rotate-2 rounded-[45%_45%_10%_10%/25%_25%_8%_8%] border-[5px] border-background object-cover object-center shadow-[12px_14px_0_var(--headline)]" />
              <div className="gentle-float absolute -right-1 -top-5 z-20 flex size-28 items-center justify-center rounded-full border-2 border-headline bg-background p-3 text-center font-display text-lg font-black uppercase leading-none text-headline shadow-[4px_4px_0_var(--primary-accent)] md:size-36 md:text-2xl">Officially<br />un-boring</div>
            </div>
          </div>
        </section>

        <section id="experiences" className="overflow-hidden bg-farm-blue py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8">
            <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
              <h2 className="font-display text-[clamp(4rem,8vw,8rem)] font-black uppercase leading-[0.78] text-headline">Pick your<br /><span className="text-stroke">ridiculousness.</span></h2>
              <p className="max-w-sm border-l-4 border-primary-accent pl-5 text-lg font-semibold">Four ways to get muddy, fluffy, and suspiciously happy.</p>
            </div>

            <div className="mt-16 grid gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:pb-14">
              {experiences.map((experience, index) => (
                <article key={experience.title} className={`group relative border-2 border-headline bg-background p-3 shadow-[7px_7px_0_var(--headline)] transition-transform duration-200 hover:-translate-y-2 ${experience.className}`}>
                  <div className="relative overflow-hidden">
                    <img src={experience.image} alt={experience.alt} width={index === 0 ? 1280 : 1024} height={index === 0 ? 1536 : 1280} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className={`absolute right-2 top-2 rounded-full border-2 border-headline px-3 py-1 font-display text-xs font-black uppercase text-headline ${index % 2 === 0 ? "bg-secondary-accent" : "bg-primary-accent text-primary-foreground"}`}>{experience.fact}</span>
                  </div>
                  <div className="p-3 pb-4">
                    <h3 className="font-display text-3xl font-black uppercase leading-none text-headline">{experience.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed">{experience.copy}</p>
                    <a href="#big-cta" className="mt-5 inline-flex items-center gap-2 font-display text-base font-extrabold uppercase text-primary-accent hover:underline">Get the dirt <ArrowRight size={17} aria-hidden="true" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="meet-the-herd" className="relative overflow-hidden bg-farm-beige py-20 md:py-28">
          <div className="absolute right-0 top-0 h-28 w-28 bg-secondary-accent [clip-path:polygon(100%_0,100%_100%,0_0)]" aria-hidden="true" />
          <div className="mx-auto max-w-[1360px] px-5 md:px-8">
            <div className="relative max-w-5xl">
              <p className="font-accent text-xl italic text-primary-accent">Meet the management team</p>
              <h2 className="mt-3 font-display text-[clamp(3.8rem,8vw,7.8rem)] font-black uppercase leading-[0.8] text-headline">Meet the <span className="relative inline-block line-through decoration-primary-accent decoration-[8px]">people</span><span className="absolute -bottom-8 right-2 rotate-3 font-accent text-3xl italic normal-case text-primary-accent md:-right-16 md:bottom-3 md:text-5xl">*animals</span><br />who actually run this place.</h2>
            </div>

            <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-7">
              {herd.map((animal, index) => (
                <article key={animal.name} className={`${index === 1 ? "md:translate-y-12" : ""} ${index === 2 ? "md:-translate-y-5" : ""}`}>
                  <div className={`relative ${index === 1 ? "photo-frame-pink" : "photo-frame"}`}>
                    <img src={animal.image} alt={animal.alt} width={index === 0 ? 1280 : 1024} height={index === 0 ? 1536 : 1280} loading="lazy" className="aspect-[5/4] w-full border-2 border-headline object-cover" />
                    <span className={`absolute -bottom-4 -left-3 rotate-[-3deg] border-2 border-headline px-4 py-2 font-display text-lg font-black uppercase text-headline ${index === 1 ? "bg-secondary-accent" : "bg-background"}`}>Employee #{index + 1}</span>
                  </div>
                  <div className="mt-9 border-t-2 border-headline pt-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-5xl font-black uppercase leading-none text-headline">{animal.name}</h3>
                      <span className="text-right text-xs font-bold uppercase text-primary-accent">{animal.type}</span>
                    </div>
                    <p className="mt-3 font-accent text-xl italic text-headline">“{animal.line}”</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="big-cta" className="relative overflow-hidden bg-farm-blue py-20 md:py-28">
          <div className="mx-auto grid max-w-[1500px] items-center gap-14 px-5 md:px-8 lg:grid-cols-[1fr_0.85fr]">
            <div className="relative z-10">
              <span className="inline-block -rotate-2 bg-primary-accent px-4 py-2 font-display text-lg font-black uppercase text-primary-foreground">A sensible suggestion</span>
              <h2 className="mt-7 font-display text-[clamp(4.5rem,9vw,9rem)] font-black uppercase leading-[0.76] text-headline">You could have a normal weekend.<br /><span className="text-primary-accent">But why?</span></h2>
              <Button asChild size="large" className="mt-10"><a href="#experiences">Find an Experience <ArrowRight aria-hidden="true" /></a></Button>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-5 rotate-3 rounded-[50%_44%_46%_54%] bg-background" aria-hidden="true" />
              <img src={highlandCta} alt="Black Highland cow sticking out its tongue" width={1536} height={1024} loading="lazy" className="relative aspect-square w-full -rotate-2 rounded-[48%_52%_44%_56%] border-4 border-headline object-cover shadow-[13px_13px_0_var(--primary-accent)]" />
              <span className="absolute -bottom-4 right-1 rotate-3 bg-secondary-accent px-5 py-3 font-accent text-xl font-bold italic text-headline shadow-[4px_4px_0_var(--headline)]">Exactly.</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-headline bg-farm-beige">
        <div className="mx-auto max-w-[1500px] px-5 py-14 md:px-8">
          <div className="grid gap-12 md:grid-cols-[1.1fr_1.5fr_0.5fr]">
            <div>
              <p className="max-w-sm font-display text-5xl font-black uppercase leading-[0.8] text-headline">Udderly<br /><span className="text-primary-accent">Ridiculous</span><br />Farm Life</p>
              <p className="mt-5 max-w-xs font-accent text-lg italic text-headline">Made with questionable judgement and excellent animal care.</p>
            </div>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-4 self-start" aria-label="Footer navigation">
              {[...navItems, "Contact"].map((item) => <a key={item} href={item === "Meet the Herd" ? "#meet-the-herd" : "#experiences"} className="font-display text-xl font-bold uppercase text-headline hover:text-primary-accent hover:underline">{item}</a>)}
            </nav>
            <div className="flex items-start gap-3 md:justify-end">
              <a href="#top" aria-label="Instagram" className="flex size-12 items-center justify-center rounded-full border-2 border-headline bg-secondary-accent text-headline transition-transform hover:-rotate-6"><Instagram aria-hidden="true" /></a>
              <a href="#top" aria-label="TikTok" className="flex size-12 items-center justify-center rounded-full border-2 border-headline bg-background font-display text-lg font-black text-headline transition-transform hover:rotate-6">TT</a>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap justify-between gap-4 border-t-2 border-headline pt-5 text-sm font-semibold">
            <p>Ontario, Canada · Farm life, but make it ridiculous.</p><p>© 2026 Udderly Ridiculous Farm Life</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
