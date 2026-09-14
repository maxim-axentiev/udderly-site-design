import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Car,
  Check,
  Clock3,
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
import ownersFamily from "@/assets/owners-family.jpg";
import farmStore from "@/assets/farm-store.jpg";
import iceCream from "@/assets/ice-cream.jpg";
import trainingPhotoAsset from "@/assets/homepage-training.png.asset.json";
import heroPhotoAsset from "@/assets/experiences-hero.png.asset.json";
import { AwardsStrip } from "@/components/experience/AwardsStrip";
import { CuratedReviews, type CuratedReview } from "@/components/experience/CuratedReviews";
import { ExperienceGallery, type GalleryImage } from "@/components/experience/ExperienceGallery";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";

const DESCRIPTION =
  "The Power of Conversation — a corporate training program on a working Ontario farm that teaches teams to manage tension, give feedback, and have the conversations that matter.";

export const Route = createFileRoute("/corporate-training/the-power-of-conversation")({
  head: () => ({
    meta: [
      { title: "The Power of Conversation | Corporate Training | Udderly Ridiculous" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "The Power of Conversation | Corporate Training" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PowerOfConversationPage,
});

const introGallery: GalleryImage[] = [
  { src: goatCuddles, alt: "Two colleagues talking while a goat looks on" },
  { src: trainingPhotoAsset.url, alt: "A team gathered together for a training session on the farm" },
  { src: alpacaWalk, alt: "Participants walking alpacas along the farm lane" },
  { src: iceCream, alt: "Team members debriefing over locally sourced treats" },
];

const learningOutcomes = [
  "Manage emotions and apply strategies for handling tension-filled situations.",
  "Maximize influence by balancing directness with inquiry.",
  "Identify key issues by actively listening for what matters most in any given situation.",
  "Provide feedback in a manner that avoids creating defensiveness.",
  "Apply these skills to real-life situations for immediate impact.",
];

const reviews: CuratedReview[] = [
  {
    name: "Priya S.",
    text: "Placeholder review copy. We booked a half day expecting a novelty offsite and got a genuinely excellent training session. Cheryl read our team instantly and adapted on the fly. Three months later people still reference the farm exercise in meetings.",
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

function PowerOfConversationPage() {
  return (
    <div className="min-h-screen bg-background text-body-copy">
      <SiteHeader />

      <main id="top">
        {/* Hero */}
        <section className="relative isolate flex min-h-[68vh] items-center justify-center overflow-hidden">
          <img src={heroPhotoAsset.url} alt="A team taking part in a farm-based corporate training session" width={1920} height={1080} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-headline/65" aria-hidden="true" />
          <div className="mx-auto max-w-5xl px-5 py-24 text-center md:px-8 md:py-32">
            <h1 className="font-display text-[clamp(2.6rem,7vw,6rem)] font-black uppercase leading-[0.85] text-background">
              The Power of <span className="text-secondary-accent">Conversation</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-relaxed text-background md:text-xl">
              Have the conversations that matter — the hard ones, the honest ones, the ones that change everything — with a little help from the farm.
            </p>
          </div>
        </section>

        <AwardsStrip tagline="Top 10% of attractions worldwide by Tripadvisor." />

        {/* Intro */}
        <section className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1300px] px-5 md:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <figure className="relative m-0">
                <div className="absolute -inset-3 rotate-2 bg-secondary-accent" aria-hidden="true" />
                <img src={trainingPhotoAsset.url} alt="A team learning conversation skills in the farm classroom" width={1280} height={960} loading="lazy" className="relative aspect-[4/3] w-full border-2 border-headline object-cover" />
              </figure>

              <div>
                <h2 className="font-display text-[clamp(2.2rem,5.2vw,4.4rem)] font-black uppercase leading-[0.85] text-headline">
                  Conversations that <span className="text-stroke">actually land</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed md:text-lg">
                  Placeholder description. Most workplace tension isn’t caused by bad people — it’s caused by avoided conversations. The Power of Conversation gives your team a practical, repeatable framework for handling high-stakes dialogue with clarity, empathy and confidence.
                </p>
                <p className="mt-4 text-base leading-relaxed md:text-lg">
                  Through facilitated exercises, real-play scenarios and a few unscripted animal moments, participants practice managing emotion, listening for what matters and giving feedback that lands instead of defends. Keep scrolling to learn about the program!
                </p>
                <Button asChild size="large" className="mt-8">
                  <a href="#contact">Contact Us <ArrowRight aria-hidden="true" /></a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Learning outcomes + details */}
        <section className="overflow-hidden bg-farm-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8">
            <h2 className="max-w-3xl font-display text-[clamp(2.6rem,7vw,6rem)] font-black uppercase leading-[0.8] text-headline">
              What your team will take away
            </h2>
            <div className="mt-14 grid gap-10 lg:grid-cols-2">
              <article className="border-2 border-headline bg-background p-6 shadow-[10px_10px_0_var(--headline)] md:p-8">
                <h3 className="font-display text-2xl font-black uppercase leading-tight text-headline">
                  Learning outcomes
                </h3>
                <ul className="mt-6 space-y-4">
                  {learningOutcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3 text-base leading-relaxed">
                      <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary-accent" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <div className="space-y-10">
                <article className="border-2 border-headline bg-background p-6 shadow-[10px_10px_0_var(--headline)] md:p-8">
                  <span className="flex size-12 items-center justify-center rounded-full border-2 border-headline bg-farm-beige text-primary-accent shadow-[4px_4px_0_var(--headline)]">
                    <Clock3 aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-black uppercase leading-tight text-headline">Duration</h3>
                  <p className="mt-3 text-base leading-relaxed">
                    The program is flexible and can be offered as a half-day, full-day, or time-spaced session.
                  </p>
                </article>

                <article className="border-2 border-headline bg-background p-6 shadow-[10px_10px_0_var(--headline)] md:p-8">
                  <h3 className="font-display text-2xl font-black uppercase leading-tight text-headline">Enhancements</h3>
                  <p className="mt-3 text-base leading-relaxed">
                    For an enriched team-building experience, consider integrating our Alpaca EQ training which dives deeper into emotional intelligence.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <CuratedReviews
          title="Teams that learned to talk — and listen — on the farm"
          reviews={reviews}
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
                  <a href="#contact">Contact Us <ArrowRight aria-hidden="true" /></a>
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
              Let&apos;s talk conversation
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed md:text-lg">
              Tell us a little about your team and what you want them to walk away with. We will get back to you with ideas (and probably a goat photo).
            </p>
            <ContactForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
