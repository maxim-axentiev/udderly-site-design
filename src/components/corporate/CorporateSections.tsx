import { ArrowRight, Car, Coffee, MonitorPlay, Trees, Users, type LucideIcon } from "lucide-react";
import { useState, type ReactNode } from "react";

import goatCuddles from "@/assets/goat-cuddles.jpg";
import highlandCta from "@/assets/highland-cta.jpg";
import ownersFamily from "@/assets/owners-family.jpg";
import farmStore from "@/assets/farm-store.jpg";
import iceCream from "@/assets/ice-cream.jpg";
import heroPhotoAsset from "@/assets/experiences-hero.png.asset.json";
import trainingPhotoAsset from "@/assets/homepage-training.png.asset.json";
import { CuratedReviews, type CuratedReview } from "@/components/experience/CuratedReviews";
import { ExperienceGallery, type GalleryImage } from "@/components/experience/ExperienceGallery";
import { LocationSection } from "@/components/experience/LocationSection";
import { Button } from "@/components/ui/button";

export function CorporateHero({ title, copy }: { title: ReactNode; copy: string }) {
  return (
    <section className="relative isolate flex min-h-[68vh] items-center justify-center overflow-hidden">
      <img src={heroPhotoAsset.url} alt="A team taking part in a farm-based corporate session" width={1920} height={1080} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-headline/65" aria-hidden="true" />
      <div className="mx-auto max-w-5xl px-5 py-24 text-center md:px-8 md:py-32">
        <h1 className="font-display text-[clamp(2.6rem,7vw,6rem)] font-black uppercase leading-[0.85] text-background">{title}</h1>
        <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-relaxed text-background md:text-xl">{copy}</p>
      </div>
    </section>
  );
}

export const corporateReviews: CuratedReview[] = [
  { name: "Priya S.", text: "Placeholder review copy. We booked a half day expecting a novelty offsite and got a genuinely excellent session. Cheryl read our team instantly and adapted on the fly. Three months later people still reference the farm exercise in meetings." },
  { name: "Marc D.", text: "Placeholder review copy. The best facilitation our leadership group has had, and the farm setting did something no hotel ballroom ever has." },
  { name: "Alison W.", text: "Placeholder review copy. Practical, warm, and very funny. Our quietest team members spoke up more in one afternoon here than in a year of workshops. We are already planning the next session." },
  { name: "Ken T.", text: "Placeholder review copy. Tailored to our actual goals, not a template. And yes, a goat joined us for the debrief." },
];

type Facility = { icon: LucideIcon; title: string; copy: string };

const facilities: Facility[] = [
  { icon: Users, title: "Capacity & Setup", copy: "Our farm market store transforms into a comfortable classroom that can accommodate up to 30 participants. We offer various seating arrangements, including pods of 4-6 people, boardroom style, u-shaped, and classroom style." },
  { icon: MonitorPlay, title: "Audio/Visual & Connectivity", copy: "We provide AV equipment, including a projector and screen, to support presentations and training sessions. WIFI connectivity is available, although limited due to the rural setting." },
  { icon: Coffee, title: "Catering Options", copy: "Enhance your session with coffee breaks and a locally-sourced lunch, featuring farm-fresh ingredients. These can be added to your training package upon request." },
  { icon: Car, title: "Parking & Restrooms", copy: "Free parking is available for all participants, ensuring easy access to the facility. There are three washrooms onsite to accommodate your team." },
  { icon: Trees, title: "Breaks & Outdoor Access", copy: "We encourage participants to take advantage of the farm’s natural beauty during breaks. A walk around the property provides a refreshing mental reset, perfect for maintaining focus during intensive sessions. For an added mental health benefit, participants can interact with our friendly goats in the barn attached to the training room, offering a unique way to destress and recharge." },
];

const facilityGallery: GalleryImage[] = [
  { src: farmStore, alt: "The farm market store set up as a training classroom" },
  { src: trainingPhotoAsset.url, alt: "Participants seated in pods during a farm training session" },
  { src: iceCream, alt: "Locally sourced treats served during a farm coffee break" },
  { src: goatCuddles, alt: "Goats in the barn attached to the training room" },
];

const inputClass = "border-2 border-headline bg-farm-beige px-4 py-3 text-base outline-none focus-visible:ring-4 focus-visible:ring-ring";
const labelClass = "font-display text-sm font-black uppercase tracking-wide text-headline";

export function CorporateContactForm({ showPhone = true }: { showPhone?: boolean }) {
  const [sent, setSent] = useState(false);
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-10 border-2 border-headline bg-background p-6 shadow-[12px_12px_0_var(--headline)] md:p-10">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="flex flex-col gap-2"><span className={labelClass}>Name *</span><input required type="text" name="name" maxLength={100} autoComplete="name" className={inputClass} /></label>
        <label className="flex flex-col gap-2"><span className={labelClass}>Email *</span><input required type="email" name="email" maxLength={255} autoComplete="email" className={inputClass} /></label>
        {showPhone && (
          <label className="flex flex-col gap-2"><span className={labelClass}>Phone Number *</span><input required type="tel" name="phone" maxLength={30} autoComplete="tel" className={inputClass} /></label>
        )}
        <label className="flex flex-col gap-2 md:col-span-2"><span className={labelClass}>Message *</span><textarea required name="message" rows={6} maxLength={2000} className={inputClass} /></label>
      </div>
      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="large">Send Message <ArrowRight aria-hidden="true" /></Button>
        <p aria-live="polite" className="font-accent text-lg italic text-primary-accent">{sent ? "Thanks! This is a demo form — nothing was sent yet." : ""}</p>
      </div>
    </form>
  );
}

export function TrainerSection() {
  return (
    <section className="overflow-hidden bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1300px] px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <figure className="relative m-0">
            <div className="absolute -inset-3 -rotate-2 bg-secondary-accent" aria-hidden="true" />
            <img src={ownersFamily} alt="Cheryl, the farm's corporate training facilitator" width={1080} height={1200} loading="lazy" className="relative aspect-[4/5] w-full border-2 border-headline object-cover" />
          </figure>
          <div>
            <p className="font-accent text-xl italic text-primary-accent">Meet your facilitator</p>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,6vw,5rem)] font-black uppercase leading-[0.82] text-headline">Cheryl, in boots</h2>
            <p className="mt-6 text-base leading-relaxed md:text-lg">
              Placeholder description. Cheryl has spent more than twenty years facilitating corporate training across boardrooms, conference centres and hotel ballrooms — and then decided the best learning happens with straw underfoot. She builds every session around your team's goals and culture, keeps the energy high, the reflection honest, and lets the animals handle the rest.
            </p>
            <Button asChild size="large" className="mt-8"><a href="#contact">Contact Us <ArrowRight aria-hidden="true" /></a></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Reviews → trainer → fixed farm hero → facilities → contact form → map. */
export function CorporateLowerSections({ reviewsTitle, contactTitle, contactCopy }: { reviewsTitle: string; contactTitle: string; contactCopy?: string }) {
  return (
    <>
      <CuratedReviews title={reviewsTitle} reviews={corporateReviews} />
      <TrainerSection />

      <section aria-label="The farm learning environment" className="relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(${highlandCta})` }} aria-hidden="true" />
        <img src={highlandCta} alt="The farm at sunset, with the pasture glowing gold" width={1920} height={1080} loading="lazy" className="sr-only" />
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
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-headline bg-background text-primary-accent shadow-[4px_4px_0_var(--headline)]"><Icon aria-hidden="true" /></span>
                    <div>
                      <h3 className="font-display text-xl font-black uppercase leading-tight text-headline">{title}</h3>
                      <p className="mt-2 text-base leading-relaxed">{copy}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-last"><ExperienceGallery images={facilityGallery} /></div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 overflow-hidden bg-farm-blue py-20 md:py-28">
        <div className="mx-auto max-w-[1000px] px-5 md:px-8">
          <h2 className="font-display text-[clamp(2.4rem,6.5vw,5.4rem)] font-black uppercase leading-[0.82] text-headline">{contactTitle}</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed md:text-lg">
            {contactCopy ?? "Tell us a little about your team and what you want them to walk away with. We will get back to you with ideas (and probably a goat photo)."}
          </p>
          <CorporateContactForm />
        </div>
      </section>

      <LocationSection />
    </>
  );
}
