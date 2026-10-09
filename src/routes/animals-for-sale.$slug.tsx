import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Ruler } from "lucide-react";
import { useState } from "react";

import highlandCta from "@/assets/highland-cta.jpg";
import highlandHero from "@/assets/highland-hero.jpg";
import { LocationSection } from "@/components/experience/LocationSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WaitlistSection } from "@/components/sale/WaitlistForm";
import { Button } from "@/components/ui/button";
import { allSaleAnimals, speciesLabel, type SaleAnimal } from "@/data/animals-for-sale";

export const Route = createFileRoute("/animals-for-sale/$slug")({
  loader: ({ params }) => {
    const animal = allSaleAnimals.find((a) => a.slug === params.slug);
    if (!animal) throw notFound();
    return { animal };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Animal not found" }, { name: "robots", content: "noindex" }] };
    const a = loaderData.animal;
    const title = `${a.name} — ${speciesLabel[a.species]} | Udderly Ridiculous Farm Life`;
    const desc = `Meet ${a.name}, ${a.species === "cow" ? "a mini Highland cow" : speciesLabel[a.species].toLowerCase()} raised on our Ontario farm${a.sold ? " (now sold)" : " and looking for a new home"}.`;
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { property: "og:title", content: title }, { property: "og:description", content: desc },
        { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background"><SiteHeader /><p className="p-20 text-center font-display text-3xl font-black uppercase text-headline">This animal wandered off.</p></div>
  ),
  component: SaleAnimalPage,
});

const policies: Record<"goat" | "alpaca", string[]> = {
  goat: [
    "Must be adopted in pairs unless you’re already housing goats.",
    "We do not sell single goats to homes without existing companions.",
    "Our goats are unregistered.",
    "Our goats are well-socialized from birth and are typically ready for new homes 12 weeks after birth, unless rehomed alongside their mother.",
    "Goats require secure fencing (they’re escape artists) and proper shelter from both rain and cold.",
  ],
  alpaca: [
    "You must have a minimum of 3 alpacas.",
    "Deeply social and need herd dynamics to thrive.",
    "Plan for yearly vaccinations, hoof trimming, and parasite/worm checks. These are essential. Ensure you have access to a vet familiar with livestock care. If planning to breed, be prepared with a birthing kit and know how to care for newborns, especially in cases where the mother does not nurse. Do not house alpacas with goats, sheep, or cattle. They can contract parasites through shared grazing areas. Males and females should live apart.",
  ],
};

const inputClass = "border-2 border-headline bg-farm-beige px-4 py-3 text-base outline-none focus-visible:ring-4 focus-visible:ring-ring";
const labelClass = "font-display text-sm font-black uppercase tracking-wide text-headline";

function ContactBuyForm({ name }: { name: string }) {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="scroll-mt-20 bg-farm-beige py-20 md:py-28">
      <div className="mx-auto max-w-[1000px] px-5 md:px-8">
        <h2 className="font-display text-[clamp(2.4rem,6.5vw,5.4rem)] font-black uppercase leading-[0.82] text-headline">Ask about {name}</h2>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-10 border-2 border-headline bg-background p-6 shadow-[12px_12px_0_var(--headline)] md:p-10">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2"><span className={labelClass}>Name *</span><input required name="name" maxLength={100} autoComplete="name" className={inputClass} /></label>
            <label className="flex flex-col gap-2"><span className={labelClass}>Email *</span><input required type="email" name="email" maxLength={255} autoComplete="email" className={inputClass} /></label>
            <label className="flex flex-col gap-2 md:col-span-2"><span className={labelClass}>Message *</span><textarea required name="message" rows={6} maxLength={2000} className={inputClass} /></label>
          </div>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button type="submit" size="large">Send Message <ArrowRight aria-hidden="true" /></Button>
            <p aria-live="polite" className="font-accent text-lg italic text-primary-accent">{sent ? "Thanks! This is a demo form — nothing was sent yet." : ""}</p>
          </div>
        </form>
      </div>
    </section>
  );
}

function PriceTag({ sold }: { sold: boolean }) {
  return (
    <div className="inline-flex -rotate-3 flex-col items-center border-4 border-headline bg-secondary-accent px-6 py-3 shadow-[6px_6px_0_var(--headline)]">
      <span className="font-display text-xs font-black uppercase tracking-widest text-headline">{sold ? "Status" : "Price"}</span>
      <span className="font-display text-4xl font-black uppercase leading-none text-headline">{sold ? "Sold" : "$X,XXX"}</span>
    </div>
  );
}

function SaleAnimalPage() {
  const { animal } = Route.useLoaderData() as { animal: SaleAnimal };
  const isCow = animal.species === "cow";
  const label = speciesLabel[animal.species];

  const facts = [
    ["Birthdate", "Placeholder"], ["Height at birth", "Placeholder"], ["Weight at birth", "Placeholder"],
    ["Chondro Status", "Placeholder"], ["Mix", "Placeholder"], ["Sex", "Placeholder"],
  ];

  return (
    <div className="min-h-screen bg-background text-body-copy">
      <SiteHeader />
      <main id="top">
        {/* Text-only hero */}
        <section className="farm-dots relative overflow-hidden border-b-2 border-headline bg-farm-beige py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
            <p className="inline-block rotate-2 border-2 border-headline bg-background px-4 py-1 font-display text-sm font-black uppercase tracking-widest text-primary-accent shadow-[4px_4px_0_var(--headline)]">
              Hi, my name is
            </p>
            <h1 className="mt-6 font-display text-[clamp(3rem,10vw,8.5rem)] font-black uppercase leading-[0.8] text-headline">{animal.name}</h1>
            <p className="mt-7 inline-block -rotate-2 bg-primary-accent px-5 py-2 font-accent text-2xl italic text-primary-foreground md:text-3xl">
              {isCow ? "…and I'm a Mini Highland Cow" : animal.species === "goat" ? "…and we're Miniature Goats" : "…and we're Alpacas"}
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-[1300px] items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-[clamp(2.2rem,5.2vw,4.4rem)] font-black uppercase leading-[0.85] text-headline">
                {animal.sold ? "Happily rehomed" : <>Looking for <span className="text-stroke">a forever home</span></>}
              </h2>
              <p className="mt-6 text-base leading-relaxed md:text-lg">
                Placeholder description. {animal.name} {isCow ? "is" : "are"} gentle, curious and well socialized from day one. Raised on our farm with plenty of attention, snacks and herd time, {isCow ? "this calf is" : "they're"} ready to bring a little ridiculousness to the right home.
              </p>
              <Button asChild size="large" className="mt-8"><a href="#contact">Contact Us to Buy <ArrowRight aria-hidden="true" /></a></Button>
            </div>
            <figure className="relative order-1 m-0 lg:order-2">
              <div className="absolute -inset-3 -rotate-2 bg-secondary-accent" aria-hidden="true" />
              <img src={animal.image} alt={`${animal.name}, ${label}`} width={1280} height={960} loading="lazy" className="relative aspect-[4/3] w-full border-2 border-headline object-cover" />
            </figure>
          </div>
        </section>

        {/* Info card */}
        <section className="bg-farm-blue py-20 md:py-28">
          <div className="mx-auto max-w-[1300px] px-5 md:px-8">
            <article className="relative grid gap-8 border-2 border-headline bg-background p-5 shadow-[14px_14px_0_var(--headline)] md:p-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">
              <img src={animal.image} alt={animal.name} width={1024} height={1024} loading="lazy" className="aspect-square w-full border-2 border-headline object-cover" />
              <div>
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-black uppercase leading-[0.85] text-headline">
                    {isCow ? `All about ${animal.name}` : `Meet the ${animal.species === "goat" ? "goats" : "alpacas"}`}
                  </h2>
                  <PriceTag sold={animal.sold} />
                </div>
                {isCow ? (
                  <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                    {facts.map(([k, v]) => (
                      <div key={k} className="border-2 border-headline bg-farm-beige p-4">
                        <dt className="font-display text-xs font-black uppercase tracking-widest text-primary-accent">{k}</dt>
                        <dd className="mt-1 font-display text-xl font-black uppercase text-headline">{v}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="mt-6 text-base leading-relaxed md:text-lg">
                    Placeholder description. Write about all of {animal.name} here — personalities, ages, sexes, quirks and who sticks closest to whom. They're sold together so they always have a friend.
                  </p>
                )}
              </div>
            </article>
          </div>
        </section>

        {/* Dam & Sire (cows only) */}
        {isCow && (
          <section className="bg-background py-20 md:py-28">
            <div className="mx-auto max-w-[1300px] px-5 md:px-8">
              <h2 className="text-center font-display text-[clamp(2.4rem,6.5vw,5.4rem)] font-black uppercase leading-[0.82] text-headline">Meet the parents</h2>
              <div className="mt-14 grid gap-10 md:grid-cols-2">
                {[["Dam", highlandHero], ["Sire", highlandCta]].map(([role, src], i) => (
                  <figure key={role} className={`m-0 border-2 border-headline bg-background p-3 shadow-[10px_10px_0_var(--headline)] ${i ? "rotate-1" : "-rotate-1"}`}>
                    <img src={src} alt={`${animal.name}'s ${role.toLowerCase()}`} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                    <figcaption className="p-4">
                      <p className="font-display text-4xl font-black uppercase text-primary-accent">{role}</p>
                      <p className="mt-2 font-display text-xl font-black uppercase text-headline">Name: Placeholder</p>
                      <p className="text-base">Height: Placeholder</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Important info / policies */}
        <section className="bg-farm-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1300px] px-5 md:px-8">
            <h2 className="font-display text-[clamp(2.4rem,6.5vw,5.4rem)] font-black uppercase leading-[0.82] text-headline">
              {isCow ? "Important information" : "Our policy"}
            </h2>
            {isCow ? (
              <div className="mt-12 grid gap-10 lg:grid-cols-2">
                <article className="border-2 border-headline bg-background p-6 shadow-[10px_10px_0_var(--headline)] md:p-8">
                  <h3 className="font-display text-2xl font-black uppercase text-headline">Placement policy</h3>
                  <p className="mt-4 text-base leading-relaxed">
                    We’re passionate about where our animals go. That’s why we do not sell our calves to petting farms or travelling zoos. These environments often over-handle animals and compromise their well-being. Instead, we seek homes where animals are cared for with respect and companionship. Mini highland cows are herd animals and should never be kept alone. Please plan for at least one other cow companion.
                  </p>
                </article>
                <article className="border-2 border-headline bg-background p-6 shadow-[10px_10px_0_var(--headline)] md:p-8">
                  <h3 className="flex items-center gap-2 font-display text-2xl font-black uppercase text-headline"><Ruler aria-hidden="true" className="text-primary-accent" /> Size chart</h3>
                  <div className="mt-4 flex aspect-[4/3] items-center justify-center border-2 border-dashed border-headline bg-farm-beige p-6 text-center font-semibold">
                    Size chart image goes here
                  </div>
                </article>
              </div>
            ) : (
              <ul className="mt-12 space-y-4 border-2 border-headline bg-background p-6 shadow-[10px_10px_0_var(--headline)] md:p-8">
                {policies[animal.species as "goat" | "alpaca"].map((p) => (
                  <li key={p} className="flex gap-3 text-base leading-relaxed md:text-lg">
                    <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary-accent" /><span>{p}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <ContactBuyForm name={animal.name} />
        <WaitlistSection title="Don't see what you're looking for? Join the waitlist!" copy="Tell us which animals you're interested in and we'll let you know as soon as new ones are ready for homes." />
        <LocationSection />
      </main>
      <SiteFooter />
    </div>
  );
}
