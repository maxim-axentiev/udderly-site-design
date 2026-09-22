import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarClock, CircleDollarSign, Clock, Users } from "lucide-react";

import experiencesPhotoAsset from "@/assets/homepage-experiences.png.asset.json";
import heroPhotoAsset from "@/assets/experiences-hero.png.asset.json";
import goatCuddles from "@/assets/goat-cuddles.jpg";
import goatIcon1 from "@/assets/goat-icon-1.jpg";
import goatIcon3 from "@/assets/goat-icon-3.jpg";
import { AwardsStrip } from "@/components/experience/AwardsStrip";
import { CarouselTrack } from "@/components/experience/CarouselTrack";
import { CuratedReviews, type CuratedReview } from "@/components/experience/CuratedReviews";
import { ExperienceDetails, type ExperienceDetail } from "@/components/experience/ExperienceDetails";
import { ExperienceGallery, type GalleryImage } from "@/components/experience/ExperienceGallery";
import { LocationSection } from "@/components/experience/LocationSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";

const TITLE = "General Admission";
const SUBTITLE = "Tower of Goats Discovery Trail";
const INTRO =
  "Placeholder copy. Wander the Discovery Trail, meet the animals on their terms, and stand at the base of Canada's only Goat Tower.";
const BOOK_HREF = "#book";
const BOOK_CTA = "Book General Admission";

const gallery: GalleryImage[] = [
  { src: goatCuddles, alt: "Guest cuddling a mini goat inside the cozy barn" },
  { src: experiencesPhotoAsset.url, alt: "Goats crowding around a laughing visitor in the pasture" },
  { src: goatIcon1, alt: "Curious brown and white goat looking straight at the camera" },
  { src: goatIcon3, alt: "Fluffy goat kid being held in a visitor's arms at golden hour" },
];

const details: ExperienceDetail[] = [
  { icon: CircleDollarSign, label: "Price", lines: ["Placeholder pricing"] },
  { icon: CalendarClock, label: "Season", lines: ["Placeholder season"] },
  { icon: Clock, label: "Duration", lines: ["Explore at your own pace"] },
  { icon: Users, label: "Age", lines: ["All ages"] },
];

const thingsToKnow = [
  "Placeholder tip. Wear clothes and footwear you don't mind getting a little farmy.",
  "Placeholder tip. The animals choose how much they interact — that's the whole point.",
  "Placeholder tip. Children must be supervised by an adult at all times.",
  "Placeholder tip. Strollers may have trouble on some trail sections.",
];

const cancellation = [
  { when: "Weather", text: "Placeholder. If we cancel due to weather or other unforeseen circumstances beyond our control, you will receive a full credit (minus the booking system processing fee)." },
  { when: "5+ days", text: "Placeholder. Cancellations made 5 days or more before your visit are eligible for a full refund, credit, or reschedule (minus the processing fee)." },
  { when: "2–4 days", text: "Placeholder. Cancellations made 2–4 days before your visit will receive a 50% refund or 50% credit/reschedule (minus the processing fee)." },
  { when: "Within 48 hours", text: "Placeholder. Cancellations within 48 hours of the visit are non-refundable and cannot be credited or rescheduled." },
  { when: "No-shows", text: "Placeholder. No-shows will not receive a refund, credit, or reschedule." },
];

const reviews: CuratedReview[] = [
  {
    name: "Placeholder Guest",
    text: "Placeholder review copy. The tower alone is worth the drive — goats climbing an Art Deco tower is not something you forget. We spent way longer on the trail than we planned and the kids are still talking about the hidden bees.",
  },
  { name: "Placeholder Guest", text: "Placeholder review copy. Relaxed, unhurried, and the animals clearly run the place. Exactly how it should be." },
  {
    name: "Placeholder Guest",
    text: "Placeholder review copy. My daughter counted seventeen of the twenty bees and has demanded we come back to find the rest. The artwork on the tower is gorgeous up close.",
  },
  { name: "Placeholder Guest", text: "Placeholder review copy. Ten out of ten. A goat ignored me completely and somehow that felt like an honour." },
];

const towerStories = [
  {
    title: "This Playground Was Built for the Kids. The Four-Legged Ones.",
    paragraphs: [
      "We’re not a petting zoo, and we never wanted to be one.",
      "Instead of building another playground for human kids, we built one for ours. The result is Canada’s only Goat Tower and the world’s only Art Deco Goat Tower, part play structure, part larger-than-life art piece, and very much a place for goats to be goats.",
      "Our approach to animal interaction is a little different. Rather than placing animals in small spaces where they’re constantly fed, touched and approached, we give them choice. They decide whether they want to come say hello, hang out nearby or completely ignore you.",
      "It might feel different from what you expect at a farm attraction. That’s kind of the point.",
    ],
  },
  {
    title: "More Than a Goat Tower",
    paragraphs: [
      "The Tower was created to become one of the defining structures of the farm, connecting where this land has been, what it is today and what we hope it can become.",
      "And because a giant Art Deco tower covered in goats apparently wasn’t enough, we turned the entire structure into a canvas.",
      "Ontario artist Sacha Taylor created the Tower’s artwork to tell the story of this farm through the people, animals, crops and land that have shaped it.",
      "Look closely and you’ll find some familiar Udderly faces, including Hugo, Twitch, Rhett, Snickers and Lickey Split, alongside depictions of the crops grown here and throughout our region.",
      "It’s farming, storytelling, history and art wrapped around one very unusual goat playground.",
    ],
  },
  {
    title: "A Story Rooted in the Land",
    paragraphs: [
      "We wanted the Tower to recognize a story that began long before our farm did.",
      "At its base, you’ll find a turtle representing our farm’s place on Turtle Island, incorporated into the artwork as a lasting acknowledgement of the Indigenous peoples who were the original stewards of this land.",
      "Nearby, we planted a Three Sisters Garden, creating an opportunity to explore Indigenous agricultural practices and talk about the relationship between farming methods of the past and those used today.",
      "Rather than keeping that acknowledgement tucked away on a webpage, we wanted it to become part of the farm itself, something visitors can see, discover and continue learning from for years to come.",
    ],
  },
  {
    title: "The People Who Made This Place Home",
    paragraphs: [
      "Among the Tower’s artwork, you’ll also find Alvin, Marg and their dog Peanut.",
      "Their portrait is there to honour the years of work, care and love they poured into this farm before it became the place you’re visiting today.",
      "The Tower may look toward the future, but it was important to us that it never forgot the people who helped build its foundation.",
    ],
  },
  {
    title: "Think You Can Find Them All?",
    paragraphs: [
      "The Tower has a few secrets.",
      "Hidden throughout the artwork are 20 bees, waiting to be discovered. You’ll also find them incorporated into the Discovery Trail map, turning your visit into a bit of a scavenger hunt as you explore the farm.",
      "Some are easy.",
      "Some are sneaky.",
      "And some may have you staring at a goat tower considerably longer than you expected.",
      "Keep your eyes open as you follow the trail, meet the animals and uncover the stories hidden throughout the farm.",
    ],
  },
];

export const Route = createFileRoute("/tower-of-goats-discovery-trail")({
  head: () => ({
    meta: [
      { title: `${TITLE}: ${SUBTITLE} | Udderly Ridiculous Farm Life` },
      { name: "description", content: INTRO },
      { property: "og:title", content: `${TITLE}: ${SUBTITLE} at Udderly Ridiculous Farm Life` },
      { property: "og:description", content: INTRO },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TowerOfGoatsPage,
});

function TowerOfGoatsPage() {
  return (
    <div className="min-h-screen bg-background text-body-copy">
      <SiteHeader />

      <main id="top">
        {/* 1. Hero */}
        <section className="relative isolate flex min-h-[68vh] items-center justify-center overflow-hidden">
          <img src={heroPhotoAsset.url} alt="Visitors exploring the Tower of Goats Discovery Trail" width={1920} height={1080} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-headline/65" aria-hidden="true" />
          <div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32">
            <h1 className="font-display text-[clamp(2.6rem,8vw,7rem)] font-black uppercase leading-[0.82] text-background">
              General <span className="text-secondary-accent">Admission</span>
            </h1>
            <p className="mt-5 font-display text-[clamp(1.3rem,3.5vw,2.4rem)] font-black uppercase leading-tight text-background">{SUBTITLE}</p>
            <p className="mx-auto mt-7 max-w-2xl text-lg font-medium leading-relaxed text-background md:text-xl">{INTRO}</p>
          </div>
        </section>

        {/* 2. TripAdvisor recognition */}
        <AwardsStrip tagline="Top 10% of attractions worldwide by Tripadvisor." />

        {/* 3. Intro + details */}
        <section id="book" className="scroll-mt-20 overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_1fr]">
              <ExperienceGallery images={gallery} />

              <div>
                <h2 className="font-display text-[clamp(2.6rem,6vw,5rem)] font-black uppercase leading-[0.82] text-headline">
                  The whole farm,<br /><span className="text-stroke">at goat pace.</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed md:text-lg">
                  Placeholder description. General admission gets you the full Discovery Trail — wander the farm, meet the animals who feel like saying hello, and take your time at the base of the world’s only Art Deco Goat Tower.
                </p>
                <p className="mt-4 text-base leading-relaxed md:text-lg">
                  Placeholder description. No schedule, no rush, no pressure. Just the trail, the tower, and whatever the goats decide the day looks like.
                </p>

                <Button asChild size="large" className="mt-8">
                  <a href={BOOK_HREF}>{BOOK_CTA} <ArrowRight aria-hidden="true" /></a>
                </Button>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="font-display text-2xl font-black uppercase text-headline">Admission Details</h3>
              <div className="mt-5">
                <ExperienceDetails details={details} />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Important information */}
        <section id="important-information" className="overflow-hidden bg-farm-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <h2 className="max-w-3xl font-display text-[clamp(2.4rem,6.5vw,5.4rem)] font-black uppercase leading-[0.8] text-headline">
              Before you<br />hit the trail.
            </h2>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="-rotate-1 border-2 border-headline bg-background p-7 shadow-[12px_12px_0_var(--secondary-accent)] md:p-9">
                <span className="inline-block -rotate-2 bg-secondary-accent px-3 py-1 font-display text-sm font-black uppercase text-headline">Things to know</span>
                <ul className="mt-6 space-y-4">
                  {thingsToKnow.map((tip) => (
                    <li key={tip} className="flex items-start gap-3 text-base leading-relaxed">
                      <span aria-hidden="true" className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-headline bg-farm-beige font-display text-sm font-black text-headline">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rotate-1 border-2 border-headline bg-background p-7 shadow-[12px_12px_0_var(--primary-accent)] md:p-9">
                <span className="inline-block rotate-1 bg-primary-accent px-3 py-1 font-display text-sm font-black uppercase text-primary-foreground">Cancellation policy</span>
                <p className="mt-6 text-base leading-relaxed">
                  To create the best experience for both our guests and our animals, we limit the number of visitors on the farm. Last-minute cancellations are very difficult to rebook, so we have a fair cancellation policy that we strictly follow:
                </p>
                <ul className="mt-6 space-y-5">
                  {cancellation.map((item) => (
                    <li key={item.when} className="border-l-4 border-secondary-accent pl-4">
                      <span className="block font-display text-lg font-black uppercase leading-none text-headline">{item.when}</span>
                      <span className="mt-2 block text-base leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild size="large">
                <a href={BOOK_HREF}>{BOOK_CTA} <ArrowRight aria-hidden="true" /></a>
              </Button>
            </div>
          </div>
        </section>

        {/* 5. Curated reviews */}
        <CuratedReviews
          title="People came for the tower. They stayed for the goats."
          reviews={reviews}
          ctaLabel={BOOK_CTA}
          ctaHref={BOOK_HREF}
        />

        {/* 6. The Tower story slideshow */}
        <section id="the-tower" className="overflow-hidden bg-farm-blue py-20 md:py-28">
          <div className="farm-dots absolute -right-10 top-10 h-40 w-40 opacity-20" aria-hidden="true" />
          <div className="mx-auto max-w-[1100px] px-5 md:px-8">
            <h2 className="text-center font-display text-[clamp(2.8rem,7.5vw,6rem)] font-black uppercase leading-[0.78] text-headline">
              One tower.<br /><span className="text-primary-accent">A hundred stories.</span>
            </h2>

            <div className="mt-14">
              <CarouselTrack label="The story of the Goat Tower" itemClassName="w-full">
                {towerStories.map((story, index) => (
                  <article
                    key={story.title}
                    className={`flex h-full flex-col border-2 border-headline bg-background p-7 shadow-[12px_12px_0_var(--headline)] md:p-12 ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
                  >
                    <span className="inline-block self-start -rotate-2 bg-secondary-accent px-3 py-1 font-display text-sm font-black uppercase text-headline">
                      {index + 1} of {towerStories.length}
                    </span>
                    <h3 className="mt-5 font-display text-[clamp(1.7rem,4vw,2.8rem)] font-black uppercase leading-[0.9] text-headline">
                      {story.title}
                    </h3>
                    <div className="mt-5 space-y-4">
                      {story.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-base leading-relaxed md:text-lg">{paragraph}</p>
                      ))}
                    </div>
                  </article>
                ))}
              </CarouselTrack>
            </div>

            <div className="mt-10 flex justify-center">
              <Button asChild size="large"><a href={BOOK_HREF}>{BOOK_CTA} <ArrowRight aria-hidden="true" /></a></Button>
            </div>
          </div>
        </section>

        {/* 7. Newsletter (reused) */}
        <NewsletterSection />

        {/* 8. Location (reused) */}
        <LocationSection />
      </main>

      <SiteFooter />
    </div>
  );
}
