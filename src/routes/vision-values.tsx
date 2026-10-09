import { createFileRoute } from "@tanstack/react-router";

import highlandHero from "@/assets/highland-hero.jpg";
import ownersFamily from "@/assets/owners-family.jpg";
import goatCuddles from "@/assets/goat-cuddles.jpg";
import alpacaWalk from "@/assets/alpaca-walk.jpg";
import donkeyPicnic from "@/assets/donkey-picnic.jpg";
import { BookExperienceCta } from "@/components/shared/BookExperienceCta";
import { PageHero } from "@/components/shared/PageHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

const DESCRIPTION =
  "The vision and core values behind Udderly Ridiculous Farm Life — a third-generation Ontario farm where joy, animal welfare and community come first.";

const galleryWall = [
  { src: goatCuddles, alt: "Guest cuddling a baby goat in the barn", rotate: "-rotate-2" },
  { src: alpacaWalk, alt: "Guests walking an alpaca along the farm lane", rotate: "rotate-2" },
  { src: donkeyPicnic, alt: "A miniature donkey at a picnic on the farm", rotate: "-rotate-1" },
  { src: highlandHero, alt: "A fluffy mini Highland cow in the pasture", rotate: "rotate-1" },
];

const coreValues = [
  { title: "Value one", line: "Placeholder copy. A short line about what this value means on our farm." },
  { title: "Value two", line: "Placeholder copy. A short line about what this value means on our farm." },
  { title: "Value three", line: "Placeholder copy. A short line about what this value means on our farm." },
  { title: "Value four", line: "Placeholder copy. A short line about what this value means on our farm." },
  { title: "Value five", line: "Placeholder copy. A short line about what this value means on our farm." },
];

export const Route = createFileRoute("/vision-values")({
  head: () => ({
    meta: [
      { title: "Vision & Values | Udderly Ridiculous Farm Life" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Vision & Values | Udderly Ridiculous Farm Life" },
      { property: "og:description", content: "The vision and core values behind our ridiculous little farm." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VisionValuesPage,
});

function VisionValuesPage() {
  return (
    <div className="min-h-screen bg-background text-body-copy">
      <SiteHeader />

      <main id="top">
        <PageHero
          title={
            <>
              Vision &amp; <span className="text-secondary-accent">Values</span>
            </>
          }
        />

        {/* Vision — text left, image right */}
        <section className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-[1300px] items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-black uppercase leading-[0.85] text-headline">
                Our vision
              </h2>
              <p className="mt-6 text-base leading-relaxed md:text-lg">
                Placeholder copy. Replace this with our vision statement — one or two sentences about where
                Udderly Ridiculous Farm Life is headed and why it matters.
              </p>
            </div>
            <div className="relative rotate-2">
              <div className="overflow-hidden border-2 border-headline shadow-[12px_12px_0_var(--headline)]">
                <img src={highlandHero} alt="A mini Highland cow grazing in the pasture" width={1000} height={750} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
              <span aria-hidden="true" className="farm-dots absolute -bottom-5 -right-4 h-16 w-28 opacity-60" />
            </div>
          </div>
        </section>

        {/* Small gallery wall */}
        <section aria-label="Photos from the farm" className="border-y-2 border-headline bg-farm-beige py-16 md:py-20">
          <div className="mx-auto flex max-w-[1300px] flex-wrap items-center justify-center gap-8 px-5 md:gap-10 md:px-8">
            {galleryWall.map((photo) => (
              <div key={photo.src} className={`w-56 overflow-hidden border-2 border-headline shadow-[8px_8px_0_var(--headline)] transition-transform duration-300 hover:-translate-y-1 md:w-64 ${photo.rotate}`}>
                <img src={photo.src} alt={photo.alt} width={640} height={480} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* Core values — image left, values right */}
        <section className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-[1300px] items-center gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.05fr]">
            <div className="relative -rotate-2">
              <div className="overflow-hidden border-2 border-headline shadow-[12px_12px_0_var(--secondary-accent)]">
                <img src={ownersFamily} alt="Cheryl and Greg with their farm greeter dog Aspen in the pasture" width={1000} height={750} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
              <span aria-hidden="true" className="farm-dots absolute -bottom-5 -left-4 h-16 w-28 opacity-60" />
            </div>
            <div>
              <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-black uppercase leading-[0.85] text-headline">
                Our core values
              </h2>
              <ul className="mt-8 space-y-6">
                {coreValues.map((value) => (
                  <li key={value.title} className="flex items-start gap-4">
                    <span className="mt-1.5 size-3 shrink-0 rotate-45 bg-secondary-accent" aria-hidden="true" />
                    <div>
                      <p className="font-display text-2xl font-black uppercase leading-tight text-headline">{value.title}</p>
                      <p className="mt-1 leading-relaxed">{value.line}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <BookExperienceCta
          title="Come see it all in person."
          copy="Photos are nice. Licks from a mini Highland cow are better."
        />
      </main>

      <SiteFooter />
    </div>
  );
}
