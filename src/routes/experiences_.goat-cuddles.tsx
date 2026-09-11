import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarClock, CircleDollarSign, Sparkles, Users } from "lucide-react";

import goatIcon1 from "@/assets/goat-icon-1.jpg";
import goatIcon2 from "@/assets/goat-icon-2.jpg";
import goatIcon3 from "@/assets/goat-icon-3.jpg";
import goatCuddles from "@/assets/goat-cuddles.jpg";
import highlandCta from "@/assets/highland-cta.jpg";
import experiencesPhotoAsset from "@/assets/homepage-experiences.png.asset.json";
import heroPhotoAsset from "@/assets/experiences-hero.png.asset.json";
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

export const Route = createFileRoute("/experiences_/goat-cuddles")({
  head: () => ({
    meta: [
      { title: "Goat Cuddles | Udderly Ridiculous Farm Life" },
      {
        name: "description",
        content:
          "Snuggle up with our mini goats in Blandford-Blenheim, Ontario. 45–60 minutes of goat cuddles for all ages, with small groups and very happy goats.",
      },
      { property: "og:title", content: "Goat Cuddles at Udderly Ridiculous Farm Life" },
      {
        property: "og:description",
        content: "Come meet our 4-legged toddlers, teenagers and adults. Slow down, snuggle up, and cuddle a goat.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GoatCuddlesPage,
});

const BOOK_CTA = "Book Goat Cuddles";
const BOOK_HREF = "#book";

const gallery: GalleryImage[] = [
  { src: goatCuddles, alt: "Guest cuddling a mini goat inside the cozy barn" },
  { src: experiencesPhotoAsset.url, alt: "Goats crowding around a laughing visitor in the pasture" },
  { src: goatIcon1, alt: "Curious brown and white goat looking straight at the camera" },
  { src: goatIcon3, alt: "Fluffy goat kid being held in a visitor's arms at golden hour" },
];

const details: ExperienceDetail[] = [
  { icon: CircleDollarSign, label: "Price", lines: ["$18 ages 2–5", "$29.50 ages 6+"] },
  { icon: CalendarClock, label: "Duration", lines: ["45–60 minutes"] },
  { icon: Users, label: "Capacity", lines: ["12 people"] },
  { icon: Sparkles, label: "Age", lines: ["All ages"] },
];

const thingsToKnow = [
  "Wear warm clothes you don’t mind a goat jumping up on or nibbling at.",
  "Young goats may want to nibble at long hair, so putting your hair in a hat or in a scrunchie is a good idea.",
  "Some of our goats know how to untie shoelaces, so be prepared if you are wearing footwear with laces.",
  "Children under 16 must be accompanied by an adult participating in the experience.",
  "We do not allow strollers in with the goats.",
];

const cancellation = [
  { when: "Weather", text: "If we cancel due to weather or other unforeseen circumstances beyond our control, you will receive a full credit (minus the booking system processing fee)." },
  { when: "5+ days", text: "Cancellations made 5 days or more before your experience are eligible for a full refund, credit, or reschedule (minus the processing fee)." },
  { when: "2–4 days", text: "Cancellations made 2–4 days before your experience will receive a 50% refund or 50% credit/reschedule (minus the processing fee)." },
  { when: "Within 48 hours", text: "Cancellations within 48 hours of the experience are non-refundable and cannot be credited or rescheduled." },
  { when: "No-shows", text: "No-shows will not receive a refund, credit, or reschedule." },
];

const reviews: CuratedReview[] = [
  {
    name: "Marissa T.",
    text: "Placeholder review copy. We booked goat cuddles on a whim and it turned into the best hour of our whole trip. The staff know every single goat by name and personality, and they never rush you. One of the little ones fell asleep on my lap and I have genuinely not stopped thinking about it since. Worth the drive from Toronto, and then some.",
  },
  { name: "Dev P.", text: "Placeholder review copy. Small group, unhurried, and the goats clearly love it here. Not a petting zoo at all." },
  {
    name: "Joanne R.",
    text: "Placeholder review copy. My daughter is nervous around animals and the team let her go completely at her own pace. By the end she was sitting in the straw with three goats in her lap. Truly lovely people who put the animals first.",
  },
  { name: "Kyle B.", text: "Placeholder review copy. Ten out of ten. One goat untied my shoelaces twice. I would let her do it again." },
];

const goats = [
  { name: "Pekoe", image: goatIcon1, lines: ["Professional shoelace inspector.", "Zero respect for personal space."] },
  { name: "Biscuit", image: goatIcon2, lines: ["Placeholder personality copy.", "Screams at empty snack bowls. Yours now."] },
  { name: "Marshmallow", image: goatIcon3, lines: ["Placeholder personality copy.", "Falls asleep on laps within 90 seconds."] },
];

function GoatCuddlesPage() {
  return (
    <div className="min-h-screen bg-background text-body-copy">
      <SiteHeader />

      <main id="top">
        {/* 1. Hero */}
        <section className="relative isolate flex min-h-[68vh] items-center justify-center overflow-hidden">
          <img src={heroPhotoAsset.url} alt="Visitors cuddling goats on the farm" width={1920} height={1080} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-headline/65" aria-hidden="true" />
          <div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32">
            <h1 className="font-display text-[clamp(3.4rem,10vw,9rem)] font-black uppercase leading-[0.8] text-background">
              Goat <span className="text-secondary-accent">Cuddles</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg font-medium leading-relaxed text-background md:text-xl">
              Come meet our 4-legged toddlers, teenagers and adults. Slow down, snuggle up, and experience the pure joy of goat cuddles.
            </p>
          </div>
        </section>

        {/* 2. TripAdvisor recognition */}
        <AwardsStrip tagline="Top 10% of attractions worldwide by Tripadvisor." />

        {/* 3. Experience introduction */}
        <section id="book" className="scroll-mt-20 overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-[1400px] items-start gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr]">
            <ExperienceGallery images={gallery} caption="Yes, they do that" />

            <div>
              <p className="font-accent text-xl italic text-primary-accent">45 minutes of hooves on your lap</p>
              <h2 className="mt-3 font-display text-[clamp(2.6rem,6vw,5rem)] font-black uppercase leading-[0.82] text-headline">
                An armful<br /><span className="text-stroke">of goat.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed md:text-lg">
                Placeholder description. You will sit down in the straw with a small group and let the goats decide how the next hour goes. Some will climb straight into your lap, some will investigate your pockets, and at least one will attempt to eat your coat zipper. Our team stays with you the whole time to introduce every goat by name, share their (extremely dramatic) backstories, and make sure both humans and hooves are having a great day.
              </p>
              <p className="mt-4 text-base leading-relaxed md:text-lg">
                Placeholder description. No experience needed, no schedule to race through, and absolutely no pressure. Just goats, straw, and the specific kind of laughing you cannot fake.
              </p>

              <Button asChild size="large" className="mt-8">
                <a href={BOOK_HREF}>{BOOK_CTA} <ArrowRight aria-hidden="true" /></a>
              </Button>

              <div className="mt-10">
                <h3 className="font-display text-2xl font-black uppercase text-headline">Experience Details</h3>
                <div className="mt-5">
                  <ExperienceDetails details={details} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Important information */}
        <section id="important-information" className="overflow-hidden bg-farm-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <h2 className="max-w-3xl font-display text-[clamp(2.4rem,6.5vw,5.4rem)] font-black uppercase leading-[0.8] text-headline">
              Before you<br />sit in the straw.
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
                  To create the best experience for both our guests and our animals, we limit the number of participants in each experience. Last-minute cancellations are very difficult to rebook, so we have a fair cancellation policy that we strictly follow:
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
          </div>
        </section>

        {/* 5. Curated reviews */}
        <CuratedReviews
          title="People came for goats. They left different."
          credibility="Hand-picked from 1,200+ guest reviews"
          reviews={reviews}
        />

        {/* 6. Meet some of the icons */}
        <section id="meet-the-icons" className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="font-display text-[clamp(2.8rem,7.5vw,6.6rem)] font-black uppercase leading-[0.78] text-headline">
                Meet some of<br /><span className="text-primary-accent">the icons.</span>
              </h2>
              <p className="max-w-md border-l-4 border-primary-accent pl-5 text-lg font-semibold">
                There are a lot more goats than this. These are just a few of the personalities who might climb on you.
              </p>
            </div>

            <div className="mt-14">
              <CarouselTrack label="Meet the goats" itemClassName="w-[85%] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                {goats.map((goat, index) => (
                  <article
                    key={goat.name}
                    className={`h-full border-2 border-headline bg-background p-3 shadow-[10px_10px_0_var(--headline)] ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
                  >
                    <img src={goat.image} alt={`${goat.name} the goat`} width={1024} height={1024} loading="lazy" className="aspect-square w-full border-2 border-headline object-cover" />
                    <div className="p-4">
                      <h3 className="font-display text-4xl font-black uppercase leading-none text-headline">{goat.name}</h3>
                      {goat.lines.map((line) => (
                        <p key={line} className="mt-2 font-accent text-lg italic leading-snug text-body-copy">{line}</p>
                      ))}
                    </div>
                  </article>
                ))}
              </CarouselTrack>
            </div>

            <div className="mt-10 flex justify-center">
              <Button asChild size="large"><a href={BOOK_HREF}>Meet Them Yourself <ArrowRight aria-hidden="true" /></a></Button>
            </div>
          </div>
        </section>

        {/* 7. Happy, healthy goats */}
        <section id="welfare" className="relative overflow-hidden bg-farm-blue py-20 md:py-28">
          <div className="farm-dots absolute -left-10 top-10 h-40 w-40 opacity-20" aria-hidden="true" />
          <div className="mx-auto max-w-[1300px] px-5 text-center md:px-8">
            <p className="font-accent text-xl italic text-primary-accent">This is not a petting zoo</p>
            <h2 className="mx-auto mt-3 max-w-4xl font-display text-[clamp(2.8rem,8vw,7rem)] font-black uppercase leading-[0.78] text-headline">
              Happy goats.<br />Happy humans.
            </h2>

            <div className="relative mt-12 grid gap-6 md:grid-cols-3">
              <figure className="relative m-0 md:mt-10">
                <img src={goatIcon2} alt="Goat standing on a straw bale in the barn" width={1024} height={1024} loading="lazy" className="aspect-[4/5] w-full -rotate-2 border-2 border-headline object-cover shadow-[10px_10px_0_var(--background)]" />
              </figure>
              <div className="order-first flex flex-col justify-center border-2 border-headline bg-background p-7 text-left shadow-[12px_12px_0_var(--headline)] md:order-none md:p-9">
                <p className="text-base leading-relaxed md:text-lg">
                  Placeholder copy. Group sizes stay small on purpose, and every goat works a short shift with real rest periods, shade, enrichment and a quiet space no human is allowed into. They live in stable social groups, see the vet regularly, and are handled the way our team teaches every guest at the start of the experience.
                </p>
                <p className="mt-4 text-base leading-relaxed md:text-lg">
                  Placeholder copy. Most importantly, the goats choose. If one wants to climb into your lap, wonderful. If one wants to nap in the corner instead, that is allowed too — and honestly, fair.
                </p>
                <Button asChild size="large" className="mt-8 self-start"><a href={BOOK_HREF}>{BOOK_CTA} <ArrowRight aria-hidden="true" /></a></Button>
              </div>
              <figure className="relative m-0">
                <img src={highlandCta} alt="Golden hour over the farm pasture where the animals graze" width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full rotate-2 border-2 border-headline object-cover shadow-[10px_10px_0_var(--background)]" />
              </figure>
            </div>
          </div>
        </section>

        {/* 8. Newsletter (reused) */}
        <NewsletterSection />

        {/* 9. Location (reused) */}
        <LocationSection />
      </main>

      <SiteFooter />
    </div>
  );
}
