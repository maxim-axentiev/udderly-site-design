import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Award, Briefcase, Building2, Check, Eye, Globe2, Heart, Hotel, Landmark, Megaphone,
  Palette, Sparkles, Star, ThumbsUp, Tractor, Users, UtensilsCrossed, Wine, type LucideIcon,
} from "lucide-react";

import ownersFamily from "@/assets/owners-family.jpg";
import highlandCta from "@/assets/highland-cta.jpg";
import { CorporateContactForm, CorporateHero } from "@/components/corporate/CorporateSections";
import { buildProgramMeta } from "@/components/corporate/ProgramPage";
import { LocationSection } from "@/components/experience/LocationSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/corporate-training/experiential-tourism-development")({
  head: () => buildProgramMeta("Experiential Tourism Coaching & Development", "Experiential tourism coaching and development from Cheryl of Udderly Ridiculous Farm Life — helping farms, accommodations, restaurants, artisans and more build bookable experiences."),
  component: TourismPage,
});

const pathBoxes = [
  { title: "From boardroom", copy: "Placeholder copy. 20+ years designing and facilitating corporate training for organizations across Canada." },
  { title: "To barnyard", copy: "Placeholder copy. Built Udderly Ridiculous from a goat milk ice cream idea into an award-winning farm destination." },
  { title: "Proven at home", copy: "Placeholder copy. Hosts thousands of guests every year and earned TripAdvisor Travellers' Choice recognition." },
  { title: "Now for you", copy: "Placeholder copy. Shares the frameworks, tools and lessons learned so your business can grow its own experiences." },
];

const callouts: { icon: LucideIcon; text: string }[] = [
  { icon: Award, text: "14-time award winning" },
  { icon: Star, text: "TripAdvisor Travelers' Choice" },
  { icon: Users, text: "Host 5,000+ people per year" },
  { icon: ThumbsUp, text: "1500+ 5-star reviews" },
  { icon: Sparkles, text: "4.9/5 review rating" },
  { icon: Heart, text: "35,000+ social media followers" },
  { icon: Eye, text: "10+ million global views" },
  { icon: Megaphone, text: "International media coverage" },
  { icon: Briefcase, text: "Woman in business" },
  { icon: Landmark, text: "20+ years corporate training experience" },
];

const services = [
  {
    name: "As-Needed Coaching", price: "$125/hour",
    items: [
      ["Flexible On-Demand Coaching", "Access Cheryl's guidance tailored to your specific needs, whenever you need it."],
      ["Expert Support", "Get advice on refining offerings, understanding experiential tourism trends, or overcoming challenges."],
      ["No Long-Term Commitment", "Benefit from expert coaching without the need for a structured program or ongoing commitment."],
    ],
  },
  {
    name: "Experiential Tourism Elevation", price: "$2500 + HST & travel costs", featured: true,
    items: [
      ["Initial Meeting", "Cheryl will discuss your vision, values, and expectations."],
      ["Competitive Analysis", "Includes competitive comparisons against market positioning, pricing, social credibility, and more."],
      ["Firsthand Experience", "Cheryl will participate in your experience to gather insights and ensure alignment with your goals."],
      ["Detailed Report", "Receive a report with actionable recommendations and a customer journey map."],
      ["Coaching Sessions", "Includes 1-2 coaching sessions to support the implementation of improvements."],
    ],
  },
  {
    name: "Experiential Tourism Development", price: "$3000 + HST & travel costs",
    items: [
      ["Guided Development", "Cheryl will lead you through the Unlocked & Inspired framework, using tools, methods, and templates to transform your concept into reality."],
      ["Target Market & Storytelling", "Define your target market and craft compelling narratives to enhance the experience."],
      ["Infrastructure Development", "Develop the necessary infrastructure for your experience."],
      ["Collaborations", "Establish strategic collaborations to strengthen your offering."],
      ["Pricing Strategy", "Set effective pricing for your experience."],
      ["Resources Included", "Receive a workbook and costing template to refine and develop future experiences."],
    ],
  },
];

const businesses: { icon: LucideIcon; label: string }[] = [
  { icon: Tractor, label: "Farms" },
  { icon: Hotel, label: "Accommodations" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Palette, label: "Artisans" },
  { icon: Building2, label: "Museum" },
  { icon: Wine, label: "Brewery/Winery" },
  { icon: Globe2, label: "An individual with a specialization" },
];

const consultCta = (
  <Button asChild size="large"><a href="#contact">Book a Free Consultation <ArrowRight aria-hidden="true" /></a></Button>
);

function TourismPage() {
  return (
    <div className="min-h-screen bg-background text-body-copy">
      <SiteHeader />
      <main id="top">
        <CorporateHero title={<>Experiential Tourism <span className="text-secondary-accent">Coaching &amp; Development</span></>} copy="Turn what makes your business special into experiences guests will book, photograph and rave about." />

        <section className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-[1300px] items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
            <figure className="relative m-0">
              <div className="absolute -inset-3 rotate-2 bg-secondary-accent" aria-hidden="true" />
              <img src={highlandCta} alt="The farm at sunset, a working example of experiential tourism" width={1280} height={960} loading="lazy" className="relative aspect-[4/3] w-full border-2 border-headline object-cover" />
            </figure>
            <div>
              <h2 className="font-display text-[clamp(2.2rem,5.2vw,4.4rem)] font-black uppercase leading-[0.85] text-headline">
                Your business, <span className="text-stroke">unforgettable</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed md:text-lg">
                Placeholder description. Experiential tourism coaching helps tourism businesses design, refine and price hands-on experiences that people travel for. Whether you have a spark of an idea or an offering that needs a refresh, Cheryl brings the frameworks and real-world lessons from building Udderly Ridiculous Farm Life.
              </p>
              <Button asChild size="large" className="mt-8"><a href="#contact">Contact Me <ArrowRight aria-hidden="true" /></a></Button>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-farm-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <h2 className="max-w-4xl font-display text-[clamp(2.4rem,6.5vw,5.4rem)] font-black uppercase leading-[0.82] text-headline">Meet Cheryl &amp; her path</h2>
            <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_1.3fr]">
              <figure className="relative m-0">
                <div className="absolute -inset-3 -rotate-2 bg-primary-accent" aria-hidden="true" />
                <img src={ownersFamily} alt="Cheryl, experiential tourism coach" width={1080} height={1200} loading="lazy" className="relative aspect-[4/5] w-full border-2 border-headline object-cover" />
              </figure>
              <div>
                <div className="grid gap-6 sm:grid-cols-2">
                  {pathBoxes.map((b, i) => (
                    <article key={b.title} className="border-2 border-headline bg-background p-6 shadow-[8px_8px_0_var(--headline)] transition-transform hover:-translate-y-1 hover:rotate-1">
                      <span className="font-display text-4xl font-black text-primary-accent">0{i + 1}</span>
                      <h3 className="mt-2 font-display text-xl font-black uppercase leading-tight text-headline">{b.title}</h3>
                      <p className="mt-3 text-base leading-relaxed">{b.copy}</p>
                    </article>
                  ))}
                </div>
                <div className="mt-10">{consultCta}</div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Credentials" className="bg-background py-16 md:py-20">
          <ul className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-6 gap-y-10 px-5 sm:grid-cols-3 md:px-8 lg:grid-cols-5">
            {callouts.map(({ icon: Icon, text }, i) => (
              <li key={text} className="text-center">
                <button type="button" aria-label={text} className={`group mx-auto flex size-20 items-center justify-center rounded-full border-2 border-headline bg-farm-beige text-primary-accent shadow-[4px_4px_0_var(--headline)] outline-none transition-transform duration-300 focus-visible:ring-4 focus-visible:ring-ring motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 motion-safe:hover:rotate-12 motion-safe:active:scale-90 ${i % 2 ? "rotate-3" : "-rotate-3"} hover:bg-secondary-accent`}>
                  <Icon aria-hidden="true" className="size-9 transition-transform group-active:rotate-[-25deg]" />
                </button>
                <p className="mt-4 font-display text-base font-black uppercase leading-tight text-headline">{text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-farm-blue py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <h2 className="font-display text-[clamp(2.4rem,6.5vw,5.4rem)] font-black uppercase leading-[0.82] text-headline">Services</h2>
            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`flex flex-col border-2 border-headline p-7 ${s.featured ? "bg-primary-accent text-primary-foreground shadow-[12px_12px_0_var(--secondary-accent)] lg:-translate-y-4" : "bg-background shadow-[10px_10px_0_var(--headline)]"}`}>
                  <h3 className={`font-display text-3xl font-black uppercase leading-none ${s.featured ? "" : "text-headline"}`}>{s.name}</h3>
                  <p className="mt-4 inline-block self-start -rotate-2 border-2 border-headline bg-secondary-accent px-3 py-1 font-display text-lg font-black text-headline">{s.price}</p>
                  <ul className="mt-6 space-y-4">
                    {s.items.map(([t, c]) => (
                      <li key={t} className="flex gap-3 text-sm leading-relaxed">
                        <Check aria-hidden="true" className={`mt-0.5 size-5 shrink-0 ${s.featured ? "" : "text-primary-accent"}`} />
                        <span><strong>{t}:</strong> {c}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="mt-14 text-center">{consultCta}</div>
          </div>
        </section>

        <section className="bg-farm-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1300px] px-5 text-center md:px-8">
            <h2 className="font-display text-[clamp(2.2rem,5.5vw,4.6rem)] font-black uppercase leading-[0.85] text-headline">Who I help</h2>
            <ul className="mt-12 flex flex-wrap justify-center gap-4">
              {businesses.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 border-2 border-headline bg-background px-5 py-3 font-display text-lg font-black uppercase text-headline shadow-[4px_4px_0_var(--headline)]">
                  <Icon aria-hidden="true" className="text-primary-accent" />{label}
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-10 max-w-2xl text-lg font-semibold">
              Is your business not on this list? I could still help! Fill out the form below for a free consultation.
            </p>
            <div className="mt-8">{consultCta}</div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-farm-blue py-20 md:py-28">
          <div className="mx-auto max-w-[1000px] px-5 md:px-8">
            <h2 className="font-display text-[clamp(2.4rem,6.5vw,5.4rem)] font-black uppercase leading-[0.82] text-headline">Book your free consultation</h2>
            <CorporateContactForm showPhone={false} />
          </div>
        </section>

        <LocationSection />
      </main>
      <SiteFooter />
    </div>
  );
}
