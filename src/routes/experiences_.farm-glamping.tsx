import { ArrowRight, BedDouble, CalendarClock, CookingPot, Flame, ShowerHead, Sofa, Sparkles, Tv, Users, UtensilsCrossed, Wind } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import cheeseTrailLogoAsset from "@/assets/cheese-trail-logo.webp.asset.json";
import glampingPhotoAsset from "@/assets/homepage-glamping.png.asset.json";
import heroPhotoAsset from "@/assets/experiences-hero.png.asset.json";
import experiencesPhotoAsset from "@/assets/homepage-experiences.png.asset.json";
import urbort2 from "@/assets/urbort-2.jpg";
import urbort3 from "@/assets/urbort-3.jpg";
import { AwardsStrip } from "@/components/experience/AwardsStrip";
import { CuratedReviews, type CuratedReview } from "@/components/experience/CuratedReviews";
import { ExperienceDetails, type ExperienceDetail } from "@/components/experience/ExperienceDetails";
import { ExperienceGallery, type GalleryImage } from "@/components/experience/ExperienceGallery";
import { LocationSection } from "@/components/experience/LocationSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";

const TITLE = "Farm Glamping";
const BOOK_HREF = "#book";

export const Route = createFileRoute("/experiences_/farm-glamping")({
  head: () => ({
    meta: [
      { title: "Farm Glamping — Udderly Ridiculous Farm Life" },
      { name: "description", content: "Sleep over on our Ontario family farm in a luxury RV with a king bed, full kitchen, campfire and very curious neighbours with hooves." },
      { property: "og:title", content: "Farm Glamping — Udderly Ridiculous Farm Life" },
      { property: "og:description", content: "Sleep over on our Ontario family farm in a luxury RV with a king bed, full kitchen, campfire and very curious neighbours with hooves." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FarmGlampingPage,
});

const details: ExperienceDetail[] = [
  { icon: CalendarClock, label: "Season", lines: ["May to October"] },
  { icon: Users, label: "Age", lines: ["All ages"] },
  { icon: BedDouble, label: "Sleeps", lines: ["Up to 4 guests"] },
  { icon: Sparkles, label: "Stays", lines: ["1 night minimum"] },
];

const introGallery: GalleryImage[] = [
  { src: glampingPhotoAsset.url, alt: "Luxury RV lit up at night beside a campfire on the farm" },
];

const amenitiesGallery: GalleryImage[] = [
  { src: glampingPhotoAsset.url, alt: "Luxury RV glowing at sunset beside a crackling campfire" },
  { src: urbort2, alt: "Cozy interior detail of the farm glamping RV" },
  { src: experiencesPhotoAsset.url, alt: "Goats grazing near the glamping site in the pasture" },
  { src: urbort3, alt: "Morning coffee outside the RV on the farm" },
];

const amenities = [
  { icon: BedDouble, text: "Private bedroom with a king-sized bed" },
  { icon: ShowerHead, text: "Private ensuite bathroom" },
  { icon: Sofa, text: "Living room with a pull-out queen sofa bed" },
  { icon: CookingPot, text: "Full kitchen with appliances" },
  { icon: UtensilsCrossed, text: "Dining area" },
  { icon: ShowerHead, text: "2-piece bathroom" },
  { icon: Tv, text: "TVs with DVDs" },
  { icon: Flame, text: "Fireplace" },
  { icon: Wind, text: "Outdoor awning area" },
  { icon: Flame, text: "Campfire" },
  { icon: Wind, text: "Air conditioning" },
];

const addOns = [
  {
    name: "Campfire Kit",
    price: "CA$10.60",
    items: ["Bag of Firewood & Firestarter"],
  },
  {
    name: "Continental Ontario Breakfast Kit for 2",
    price: "CA$42.40",
    note: "RV already includes supply of coffee and tea.",
    items: ["Milk", "Yogurt", "Fresh made baked goods", "1/2 dozen farm fresh eggs", "Seasonal Fruit"],
  },
  {
    name: "Ontario made Charcuterie Kit for 2",
    price: "CA$63.60",
    note: "Charcuterie board not included. All items are packaged for guests to enjoy a build your own charcuterie.",
    items: ["Fresh baked baguette", "3 Ontario Cheeses", "Water buffalo summer sausage", "Red pepper Jelly", "Nuts", "Kettle Chips", "Sparkling non alcoholic Apple Cider"],
  },
];

const importantInfo = [
  "No pets of any kind are allowed on the property as it creates stress for our animals and we have an off leash farm dog.",
  "No smoking, vaping or cannabis within the RV.",
  "We ask that you respect the serenity of the property, our neighbors and the well being of our animals - although we do not ban alcohol use, we ask that it is kept at your RV site and no glass or drinks are taken near animal pastures and cannot be consumed in any animal experiences. Drunken disorderly conduct that puts our animals or staff at risk will not be tolerated and will require your immediate removal without a refund.",
  "Absolutely no entrance into our animal enclosures without one of our staff and please respect biosecure areas and do not trespass on neighboring farms.",
  "Some experiences we offer have an age limit due to the nature of the experience and the animals we are working with. Please carefully review this before booking an experience.",
  "Although we work hard to minimize pests, this is a working farm, which means you may encounter flies, mosquitos and bees/wasps at certain times of the year.",
  "Experiences and store are closed Mondays and Tuesdays – if something is required from the store arrangements can be made, we do not however run any experiences on those days to provide staff and animals a rest.",
];

const cancellation = [
  { when: "7+ days", text: "Cancellations made 7 days or more before your stay receive a full refund." },
  { when: "3–6 days", text: "Cancellations made 3–6 days before your stay receive a 50% refund or credit." },
  { when: "Within 3 days", text: "Cancellations within 3 days of your stay receive no refund or credit." },
];

const reviews: CuratedReview[] = [
  {
    name: "Marissa T.",
    text: "Placeholder review copy. Falling asleep to fire crackling and waking up to goats outside the window is a ridiculous sentence to say out loud, but here we are. The RV is spotless, the bed is huge, and the farm at golden hour is something else entirely.",
  },
  { name: "Dev P.", text: "Placeholder review copy. Glamping without a single compromise. Coffee on the awning while alpacas wandered past. Ten out of ten." },
  {
    name: "Joanne R.",
    text: "Placeholder review copy. We booked the charcuterie kit and built our board by the campfire while the sun went down over the pasture. The most peaceful night we have had in years.",
  },
  { name: "Kyle B.", text: "Placeholder review copy. King bed, fireplace, goats. I have told everyone I know. I will not stop telling everyone I know." },
];

function FarmGlampingPage() {
  return (
    <div className="min-h-screen bg-background text-body-copy">
      <SiteHeader />

      <main id="top">
        {/* 1. Hero */}
        <section className="relative isolate flex min-h-[68vh] items-center justify-center overflow-hidden">
          <img src={heroPhotoAsset.url} alt="Visitors enjoying Farm Glamping on the farm" width={1920} height={1080} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-headline/65" aria-hidden="true" />
          <div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32">
            <h1 className="font-display text-[clamp(2.6rem,8vw,7rem)] font-black uppercase leading-[0.82] text-background">
              Farm <span className="text-secondary-accent">Glamping</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg font-medium leading-relaxed text-background md:text-xl">
              Placeholder intro. Sleep over where the sunsets are unreasonable, the neighbours have hooves, and the only morning alarm is a goat with opinions.
            </p>
          </div>
        </section>

        {/* 2. TripAdvisor recognition */}
        <AwardsStrip tagline="Top 10% of attractions worldwide by Tripadvisor." />

        {/* 3. Introduction */}
        <section id="book" className="scroll-mt-20 overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
              <div className="relative">
                <div className="absolute -inset-3 -rotate-2 bg-secondary-accent" aria-hidden="true" />
                <img
                  src={introGallery[0]!.src}
                  alt={introGallery[0]!.alt}
                  width={1280}
                  height={960}
                  className="relative aspect-[4/3] w-full border-2 border-headline object-cover"
                />
              </div>

              <div>
                <h2 className="font-display text-[clamp(2.6rem,6vw,5rem)] font-black uppercase leading-[0.82] text-headline">
                  Sleep where<br /><span className="text-stroke">the goats are.</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed md:text-lg">
                  Placeholder description. One luxury RV, parked exactly where the farm gets quiet and the sky gets loud. King bed, full kitchen, campfire out front, and a front-row seat to the most unbothered sunsets in Oxford County.
                </p>
                <p className="mt-4 text-base leading-relaxed md:text-lg">
                  Placeholder description. Book the farm experiences you want during the day, then keep the farm to yourself all evening.
                </p>
                <div className="mt-6 -rotate-1 border-2 border-headline bg-secondary-accent p-5 shadow-[8px_8px_0_var(--headline)]">
                  <p className="font-display text-lg font-black uppercase leading-tight text-headline">Good mail incoming</p>
                  <p className="mt-2 text-base leading-relaxed text-headline">
                    After booking your trip, we will send you an email with a 10% off coupon to book experiences for your stay.
                  </p>
                </div>

                <Button asChild size="large" className="mt-8">
                  <a href={BOOK_HREF}>Book Farm Glamping <ArrowRight aria-hidden="true" /></a>
                </Button>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="font-display text-2xl font-black uppercase text-headline">Stay Details</h3>
              <div className="mt-5">
                <ExperienceDetails details={details} />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Amenities */}
        <section id="amenities" className="overflow-hidden bg-farm-blue py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <h2 className="max-w-3xl font-display text-[clamp(2.4rem,6.5vw,5.4rem)] font-black uppercase leading-[0.8] text-headline">
              Everything's<br /><span className="text-stroke">included.</span>
            </h2>

            <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
              <ExperienceGallery images={amenitiesGallery} />

              <div className="rotate-1 border-2 border-headline bg-background p-7 shadow-[12px_12px_0_var(--headline)] md:p-9">
                <span className="inline-block -rotate-2 bg-primary-accent px-3 py-1 font-display text-sm font-black uppercase text-primary-foreground">Amenities</span>
                <ul className="mt-6 space-y-4">
                  {amenities.map((amenity) => (
                    <li key={amenity.text} className="flex items-start gap-3 text-base leading-relaxed">
                      <span aria-hidden="true" className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-headline bg-farm-beige text-headline">
                        <amenity.icon className="size-4" />
                      </span>
                      {amenity.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Add-ons */}
        <section id="add-ons" className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-3xl font-display text-[clamp(2.4rem,6.5vw,5.4rem)] font-black uppercase leading-[0.8] text-headline">
                Make it<br /><span className="text-primary-accent">even better.</span>
              </h2>
              <p className="max-w-md border-l-4 border-primary-accent pl-5 text-lg font-semibold">
                Add any of these during checkout and they will be waiting for you at the RV.
              </p>
            </div>

            <div className="mt-12 grid gap-7 md:grid-cols-3">
              {addOns.map((addOn, index) => (
                <article
                  key={addOn.name}
                  className={`flex h-full flex-col border-2 border-headline bg-background p-7 shadow-[10px_10px_0_var(--secondary-accent)] transition-transform hover:-translate-y-1 ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-black uppercase leading-none text-headline">{addOn.name}</h3>
                    <span className="shrink-0 -rotate-2 bg-primary-accent px-3 py-1 font-display text-sm font-black uppercase text-primary-foreground">{addOn.price}</span>
                  </div>
                  {addOn.note && <p className="mt-4 font-accent text-base italic leading-snug text-body-copy">{addOn.note}</p>}
                  <ul className="mt-5 space-y-3">
                    {addOn.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base leading-relaxed">
                        <span aria-hidden="true" className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-headline bg-farm-beige font-display text-sm font-black text-headline">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Important information + cancellation */}
        <section id="important-information" className="overflow-hidden bg-farm-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <h2 className="max-w-3xl font-display text-[clamp(2.4rem,6.5vw,5.4rem)] font-black uppercase leading-[0.8] text-headline">
              Before you<br />park yourself here.
            </h2>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="-rotate-1 border-2 border-headline bg-background p-7 shadow-[12px_12px_0_var(--secondary-accent)] md:p-9">
                <span className="inline-block -rotate-2 bg-secondary-accent px-3 py-1 font-display text-sm font-black uppercase text-headline">Important info</span>
                <ul className="mt-6 space-y-4">
                  {importantInfo.map((tip) => (
                    <li key={tip.slice(0, 40)} className="flex items-start gap-3 text-base leading-relaxed">
                      <span aria-hidden="true" className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-headline bg-farm-beige font-display text-sm font-black text-headline">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rotate-1 border-2 border-headline bg-background p-7 shadow-[12px_12px_0_var(--primary-accent)] md:p-9">
                <span className="inline-block rotate-1 bg-primary-accent px-3 py-1 font-display text-sm font-black uppercase text-primary-foreground">Cancellation policy</span>
                <p className="mt-6 text-base leading-relaxed">
                  We only have 1 accommodation on site to make each stay exclusive. This means we cannot rebook it easily for last minute cancellations. Our policy is as follows:
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
                <a href={BOOK_HREF}>Book Farm Glamping <ArrowRight aria-hidden="true" /></a>
              </Button>
            </div>
          </div>
        </section>

        {/* 7. Location / map */}
        <LocationSection />

        {/* 8. Oxford County Cheese Trail */}
        <section id="cheese-trail" className="bg-farm-blue py-20 md:py-28">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[1fr_0.85fr]">
            <div className="order-2 lg:order-1">
              <p className="font-accent text-xl italic text-primary-accent">A proud stop on the trail</p>
              <h2 className="mt-3 font-display text-[clamp(2.6rem,6vw,5.4rem)] font-black uppercase leading-[0.82] text-headline">
                Follow the<br />cheese trail.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed md:text-lg">
                The Oxford County Cheese Trail is a self-guided tour featuring 30+ stops dedicated to cheese, dairy, and local flavours. From artisanal cheesemakers to restaurants, museums, and boutique shops, each stop offers a unique way to experience Oxford’s rich dairy heritage.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed md:text-lg">
                As a proud stop on the trail, we invite you to make the most of your farm stay by exploring delicious cheeses, meeting passionate producers, and discovering the flavours that make this region special.
              </p>
              <Button asChild size="large" className="mt-8">
                <a href="https://oxfordcountycheesetrail.ca/" target="_blank" rel="noreferrer">
                  See all stops on the Cheese Trail <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </div>

            <a
              href="https://oxfordcountycheesetrail.ca/"
              target="_blank"
              rel="noreferrer"
              className="order-1 mx-auto block w-full max-w-sm transition-transform duration-300 hover:scale-105 hover:rotate-2 active:scale-95 lg:order-2"
            >
              <img src={cheeseTrailLogoAsset.url} alt="Oxford County Cheese Trail logo" width={800} height={800} loading="lazy" className="h-auto w-full" />
            </a>
          </div>
        </section>

        {/* 9. Curated reviews */}
        <CuratedReviews
          title="They came for one night. They stayed ridiculous."
          reviews={reviews}
          ctaLabel="Book Farm Glamping"
          ctaHref={BOOK_HREF}
        />

        {/* 10. Newsletter */}
        <NewsletterSection />
      </main>

      <SiteFooter />
    </div>
  );
}
