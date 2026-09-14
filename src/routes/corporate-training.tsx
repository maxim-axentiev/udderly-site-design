import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Car,
  Coffee,
  MonitorPlay,
  Trees,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

import alpacaWalk from "@/assets/alpaca-walk.jpg";
import goatCuddles from "@/assets/goat-cuddles.jpg";
import highlandCta from "@/assets/highland-cta.jpg";
import highlandHero from "@/assets/highland-hero.jpg";
import ownersFamily from "@/assets/owners-family.jpg";
import donkeyPicnic from "@/assets/donkey-picnic.jpg";
import farmStore from "@/assets/farm-store.jpg";
import iceCream from "@/assets/ice-cream.jpg";
import heroPhotoAsset from "@/assets/experiences-hero.png.asset.json";
import trainingPhotoAsset from "@/assets/homepage-training.png.asset.json";
import experiencesPhotoAsset from "@/assets/homepage-experiences.png.asset.json";
import { AwardsStrip } from "@/components/experience/AwardsStrip";
import { CuratedReviews, type CuratedReview } from "@/components/experience/CuratedReviews";
import { ExperienceGallery, type GalleryImage } from "@/components/experience/ExperienceGallery";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";

const TITLE = "Corporate Training & Team Building with Real Animals on a Real Farm";
const DESCRIPTION =
  "Corporate training and team building on a working Ontario farm, led by a facilitator with 20+ years of experience, with alpacas, goats, mini Highland cows and donkeys.";

export const Route = createFileRoute("/corporate-training")({
  head: () => ({
    meta: [
      { title: "Corporate Training & Team Building on a Farm | Udderly Ridiculous" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Corporate Training & Team Building on a Farm" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CorporateTrainingPage,
});

const introGallery: GalleryImage[] = [
  { src: trainingPhotoAsset.url, alt: "A team gathered together for a training session on the farm" },
  { src: alpacaWalk, alt: "Participants walking alpacas along the farm lane" },
  { src: experiencesPhotoAsset.url, alt: "Colleagues laughing with goats in the pasture" },
  { src: highlandHero, alt: "Team meeting a mini Highland cow during a break" },
];

type Program = {
  title: string;
  copy: string;
  image: string;
  alt: string;
};

const programs: Program[] = [
  {
    title: "DiSC Assessment",
    copy: "Placeholder description. Understand how your team communicates, decides and collides, then put it into practice with a few very opinionated animals watching.",
    image: trainingPhotoAsset.url,
    alt: "Facilitator leading a DiSC session in the farm classroom",
  },
  {
    title: "The Power of Conversation",
    copy: "Placeholder description. Real conversations, the hard ones included, practised in a space where nobody can hide behind a screen.",
    image: goatCuddles,
    alt: "Two colleagues talking while a goat looks on",
  },
  {
    title: "Alpaca Emotional Intelligence",
    copy: "Placeholder description. Alpacas read the room faster than any of us. Learn self-awareness and empathy from the professionals.",
    image: alpacaWalk,
    alt: "Alpaca standing calmly beside a workshop participant",
  },
  {
    title: "Beyond Engagement",
    copy: "Placeholder description. Move past survey scores to the culture habits that actually keep good people around.",
    image: highlandHero,
    alt: "Team working through an exercise outdoors on the farm",
  },
  {
    title: "Innovation on the Farm",
    copy: "Placeholder description. Creative problem solving with real constraints, real mud and absolutely no whiteboard clichés.",
    image: donkeyPicnic,
    alt: "Group solving a challenge beside the miniature donkeys",
  },
];

const reviews: CuratedReview[] = [
  {
    name: "Priya S.",
    text: "Placeholder review copy. We booked a half day expecting a novelty offsite and got a genuinely excellent training session. Cheryl read our team instantly and adapted on the fly. Three months later people still reference the alpaca exercise in meetings.",
  },
  {
    name: "Marc D.",
    text: "Placeholder review copy. The best facilitation our leadership group has had, and the farm setting did something no hotel ballroom ever has.",
  },
  {
    name: "Alison W.",
    text: "Placeholder review copy. Practical, warm, and very funny. Our quietest team members spoke up more in one afternoon here than in a year of workshops. We are already planning the next session.",
  },
  {
    name: "Ken T.",
    text: "Placeholder review copy. Tailored to our actual goals, not a template. And yes, a goat joined us for the debrief.",
  },
];

type Facility = { icon: LucideIcon; title: string; copy: string };

const facilities: Facility[] = [
  {
    icon: Users,
    title: "Capacity & Setup",
    copy: "Our farm market store transforms into a comfortable classroom that can accommodate up to 30 participants. We offer various seating arrangements, including pods of 4-6 people, boardroom style, u-shaped, and classroom style.",
  },
  {
    icon: MonitorPlay,
    title: "Audio/Visual & Connectivity",
    copy: "We provide AV equipment, including a projector and screen, to support presentations and training sessions. WIFI connectivity is available, although limited due to the rural setting.",
  },
  {
    icon: Coffee,
    title: "Catering Options",
    copy: "Enhance your session with coffee breaks and a locally-sourced lunch, featuring farm-fresh ingredients. These can be added to your training package upon request.",
  },
  {
    icon: Car,
    title: "Parking & Restrooms",
    copy: "Free parking is available for all participants, ensuring easy access to the facility. There are three washrooms onsite to accommodate your team.",
  },
  {
    icon: Trees,
    title: "Breaks & Outdoor Access",
    copy: "We encourage participants to take advantage of the farm’s natural beauty during breaks. A walk around the property provides a refreshing mental reset, perfect for maintaining focus during intensive sessions. For an added mental health benefit, participants can interact with our friendly goats in the barn attached to the training room, offering a unique way to destress and recharge.",
  },
];

const facilityGallery: GalleryImage[] = [
  { src: farmStore, alt: "The farm market store set up as a training classroom" },
  { src: trainingPhotoAsset.url, alt: "Participants seated in pods during a farm training session" },
  { src: iceCream, alt: "Locally sourced treats served during a farm coffee break" },
  { src: goatCuddles, alt: "Goats in the barn attached to the training room" },
];

function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="group relative flex flex-col border-2 border-headline bg-background p-3 shadow-[7px_7px_0_var(--headline)] transition-transform duration-200 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img src={program.image} alt={program.alt} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-3 pb-4">
        <h3 className="font-display text-2xl font-black uppercase leading-none text-headline">{program.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed">{program.copy}</p>
        <Button asChild variant="outline" className="mt-5 w-full">
          <a href="#contact">Learn More</a>
        </Button>
      </div>
    </article>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      className="mt-10 border-2 border-headline bg-background p-6 shadow-[12px_12px_0_var(--headline)] md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="font-display text-sm font-black uppercase tracking-wide text-headline">Name *</span>
          <input required type="text" name="name" maxLength={100} autoComplete="name" className="border-2 border-headline bg-farm-beige px-4 py-3 text-base outline-none focus-visible:ring-4 focus-visible:ring-ring" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-display text-sm font-black uppercase tracking-wide text-headline">Email *</span>
          <input required type="email" name="email" maxLength={255} autoComplete="email" className="border-2 border-headline bg-farm-beige px-4 py-3 text-base outline-none focus-visible:ring-4 focus-visible:ring-ring" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-display text-sm font-black uppercase tracking-wide text-headline">Phone Number *</span>
          <input required type="tel" name="phone" maxLength={30} autoComplete="tel" className="border-2 border-headline bg-farm-beige px-4 py-3 text-base outline-none focus-visible:ring-4 focus-visible:ring-ring" />
        </label>
        <label className="flex flex-col gap-2 md:col-span-2">
          <span className="font-display text-sm font-black uppercase tracking-wide text-headline">Message *</span>
          <textarea required name="message" rows={6} maxLength={2000} className="border-2 border-headline bg-farm-beige px-4 py-3 text-base outline-none focus-visible:ring-4 focus-visible:ring-ring" />
        </label>
      </div>

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="large">Send Message <ArrowRight aria-hidden="true" /></Button>
        <p aria-live="polite" className="font-accent text-lg italic text-primary-accent">
          {sent ? "Thanks! This is a demo form — nothing was sent yet." : ""}
        </p>
      </div>
    </form>
  );
}

function CorporateTrainingPage() {
  return (
    <div className="min-h-screen bg-background text-body-copy">
      <SiteHeader />

      <main id="top">
        {/* Hero */}
        <section className="relative isolate flex min-h-[68vh] items-center justify-center overflow-hidden">
          <img src={heroPhotoAsset.url} alt="A team taking part in a farm-based corporate training session" width={1920} height={1080} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-headline/65" aria-hidden="true" />
          <div className="mx-auto max-w-5xl px-5 py-24 text-center md:px-8 md:py-32">
            <h1 className="font-display text-[clamp(2.4rem,6.5vw,5.6rem)] font-black uppercase leading-[0.85] text-background">
              Corporate Training &amp; Team Building with Real Animals on a{" "}
              <span className="text-secondary-accent">Real Farm</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-relaxed text-background md:text-xl">
              Backed by 20+ years of corporate facilitation, designed to ignite learning, connection, and growth in boots... not boardrooms.
            </p>
          </div>
        </section>

        <AwardsStrip tagline="Top 10% of attractions worldwide by Tripadvisor." />

        {/* Intro */}
        <section className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_1fr]">
              <ExperienceGallery images={introGallery} />

              <div>
                <h2 className="font-display text-[clamp(2.2rem,5.2vw,4.4rem)] font-black uppercase leading-[0.85] text-headline">
                  Step into an environment that <span className="text-stroke">engages and inspires</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed md:text-lg">
                  Forget stale boardrooms and awkward icebreakers. At Udderly Ridiculous Farm Life, we deliver Corporate Training &amp; Team Building experiences that actually stick.
                </p>
                <p className="mt-4 text-base leading-relaxed md:text-lg">
                  Led by a seasoned facilitator with over 20 years of corporate training experience, our programs are immersive, interactive, and completely unforgettable—because they happen on a working farm, with real animals as part of the learning environment. Alpacas. Goats. Mini Highland cows. Miniature donkeys. Even chickens. Each session taps into the grounding energy and emotional intelligence these animals naturally bring, creating space for real connection, deeper reflection, and team growth.
                </p>
                <p className="mt-4 text-base leading-relaxed md:text-lg">
                  We don’t believe in cookie-cutter workshops or the latest “flavour of the month.” Whether you’re building on existing training or starting fresh, every session is tailored to your team’s goals, culture, and context. The result? More meaningful engagement, more memorable takeaways, and a team that leaves energized, aligned, and maybe a little muddy.
                </p>
                <p className="mt-8 inline-block -rotate-1 border-2 border-headline bg-secondary-accent px-4 py-2 font-display text-lg font-black uppercase text-headline shadow-[5px_5px_0_var(--headline)]">
                  See all of our training programs below
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section id="training-programs" className="scroll-mt-20 overflow-hidden bg-farm-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8">
            <h2 className="max-w-3xl font-display text-[clamp(2.6rem,7vw,6rem)] font-black uppercase leading-[0.8] text-headline">
              Our training programs
            </h2>

            {/* Featured: Team Building Experiences */}
            <article className="relative mt-14 grid items-center gap-8 border-4 border-headline bg-primary-accent p-4 shadow-[16px_16px_0_var(--headline)] lg:grid-cols-2 lg:gap-12 lg:p-6">
              <img src={experiencesPhotoAsset.url} alt="A team laughing together during a farm team building session" width={1280} height={860} loading="lazy" className="aspect-[16/10] w-full border-2 border-headline object-cover" />
              <div className="text-primary-foreground lg:pr-6">
                <span className="inline-block -rotate-2 border-2 border-headline bg-secondary-accent px-3 py-1 font-display text-sm font-black uppercase text-headline">
                  Not training — pure team building
                </span>
                <h3 className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] font-black uppercase leading-[0.85]">
                  Team Building Experiences
                </h3>
                <p className="mt-4 text-base leading-relaxed md:text-lg">
                  Placeholder description. No modules, no assessments, no flip charts. Just your team, the animals, and a few hours of shared ridiculousness that does more for trust than any trust fall ever has.
                </p>
                <Button asChild size="large" variant="outline" className="mt-7">
                  <a href="#contact">Learn More <ArrowRight aria-hidden="true" /></a>
                </Button>
              </div>
            </article>

            <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {programs.map((program) => (
                <ProgramCard key={program.title} program={program} />
              ))}
            </div>

            {/* Tourism-specific card */}
            <article className="relative mt-14 grid items-center gap-8 border-4 border-dashed border-primary-accent bg-background p-4 shadow-[14px_14px_0_var(--secondary-accent)] lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:p-6">
              <img src={highlandCta} alt="Farm owners walking a tourism operator through the property" width={1280} height={860} loading="lazy" className="aspect-[16/10] w-full border-2 border-headline object-cover" />
              <div>
                <span className="inline-block rotate-1 border-2 border-headline bg-primary-accent px-3 py-1 font-display text-sm font-black uppercase text-primary-foreground">
                  For tourism businesses only
                </span>
                <h3 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-black uppercase leading-[0.85] text-headline">
                  Experiential Tourism Development
                </h3>
                <p className="mt-4 text-base leading-relaxed md:text-lg">
                  Placeholder description. Built specifically for tourism operators, this session helps you turn what you already have into experiences guests will book, photograph and talk about for years.
                </p>
                <Button asChild size="large" className="mt-7">
                  <a href="#contact">Learn More <ArrowRight aria-hidden="true" /></a>
                </Button>
              </div>
            </article>
          </div>
        </section>

        {/* Reviews */}
        <CuratedReviews
          title="Teams that came for a novelty offsite and left with a plan"
          reviews={reviews}
          ctaLabel="See Training Programs"
          ctaHref="#training-programs"
        />

        {/* Trainer */}
        <section className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1300px] px-5 md:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
              <figure className="relative m-0">
                <div className="absolute -inset-3 -rotate-2 bg-secondary-accent" aria-hidden="true" />
                <img src={ownersFamily} alt="Cheryl, the farm's corporate training facilitator" width={1080} height={1200} loading="lazy" className="relative aspect-[4/5] w-full border-2 border-headline object-cover" />
              </figure>

              <div>
                <p className="font-accent text-xl italic text-primary-accent">Meet your facilitator</p>
                <h2 className="mt-3 font-display text-[clamp(2.4rem,6vw,5rem)] font-black uppercase leading-[0.82] text-headline">
                  Cheryl, in boots
                </h2>
                <p className="mt-6 text-base leading-relaxed md:text-lg">
                  Placeholder description. Cheryl has spent more than twenty years facilitating corporate training across boardrooms, conference centres and hotel ballrooms — and then decided the best learning happens with straw underfoot. She builds every session around your team's goals and culture, keeps the energy high, the reflection honest, and lets the animals handle the rest.
                </p>
                <Button asChild size="large" className="mt-8">
                  <a href="#training-programs">See Training Programs <ArrowRight aria-hidden="true" /></a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Fixed-background farm hero */}
        <section aria-label="The farm learning environment" className="relative min-h-[80vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-fixed bg-center"
            style={{ backgroundImage: `url(${highlandCta})` }}
            aria-hidden="true"
          />
          <img
            src={highlandCta}
            alt="The farm at sunset, with the pasture glowing gold"
            width={1920}
            height={1080}
            loading="lazy"
            className="sr-only"
          />
          <div className="absolute inset-0 bg-headline/50" aria-hidden="true" />
          <div className="relative mx-auto flex min-h-[80vh] max-w-4xl items-center px-5 py-24 text-center md:px-8">
            <div>
              <h2 className="font-display text-[clamp(2.6rem,7.5vw,6.5rem)] font-black uppercase leading-[0.82] text-background">
                A learning space with <span className="text-secondary-accent">hooves outside</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-background md:text-xl">
                Placeholder description. The farm itself is part of the curriculum: open sky, quiet lanes, and a barn full of goats waiting at the break bell.
              </p>
            </div>
          </div>
        </section>

        {/* Facility */}
        <section className="overflow-hidden bg-farm-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.05fr]">
              <div>
                <h2 className="font-display text-[clamp(2.2rem,5.2vw,4.4rem)] font-black uppercase leading-[0.85] text-headline">
                  What&apos;s in the <span className="text-stroke">facility</span>
                </h2>
                <ul className="mt-10 space-y-7">
                  {facilities.map(({ icon: Icon, title, copy }) => (
                    <li key={title} className="flex gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-headline bg-background text-primary-accent shadow-[4px_4px_0_var(--headline)]">
                        <Icon aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-black uppercase leading-tight text-headline">{title}</h3>
                        <p className="mt-2 text-base leading-relaxed">{copy}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:order-last">
                <ExperienceGallery images={facilityGallery} />
              </div>
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section id="contact" className="scroll-mt-20 overflow-hidden bg-farm-blue py-20 md:py-28">
          <div className="mx-auto max-w-[1000px] px-5 md:px-8">
            <h2 className="font-display text-[clamp(2.4rem,6.5vw,5.4rem)] font-black uppercase leading-[0.82] text-headline">
              Let&apos;s talk about your team
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed md:text-lg">
              Tell us a little about your group and what you want them to walk away with. We will get back to you with ideas (and probably a goat photo).
            </p>
            <ContactForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
