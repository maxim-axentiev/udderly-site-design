import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BookExperienceCta } from "@/components/shared/BookExperienceCta";
import { PageHero } from "@/components/shared/PageHero";

const TITLE = "FAQ — Udderly Ridiculous Farm Life";
const DESC = "Answers to common questions about our farm, booking system and farm life experiences.";

const make = (topic: string, count: number) =>
  Array.from({ length: count }, (_, i) => ({
    q: `Placeholder ${topic} question ${i + 1}?`,
    a: "Placeholder copy. This answer will be replaced with the real response once it's ready.",
  }));

const categories = [
  { title: "Questions About Our Farm", items: make("farm", 13), bg: "bg-background" },
  { title: "Questions About The Booking System", items: make("booking", 9), bg: "bg-farm-beige" },
  { title: "Questions About Farm Life Experiences", items: make("experience", 5), bg: "bg-background" },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero title={<>You have questions. <span className="text-secondary-accent">We might have answers.</span></>} />
        {categories.map((cat) => (
          <section key={cat.title} className={`${cat.bg} py-16 md:py-24`}>
            <div className="mx-auto max-w-3xl px-5 md:px-8">
              <h2 className="font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-black uppercase leading-[0.85] text-headline">{cat.title}</h2>
              <div className="mt-10 border-t-2 border-headline">
                {cat.items.map((faq) => (
                  <details key={faq.q} className="group border-b-2 border-headline py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-display text-xl font-bold uppercase leading-tight text-headline [&::-webkit-details-marker]:hidden">
                      {faq.q}
                      <span className="mt-1 shrink-0 text-primary-accent transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                    </summary>
                    <p className="mt-4 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ))}
        <BookExperienceCta title="Still curious? Come see for yourself" />
      </main>
      <SiteFooter />
    </>
  );
}
