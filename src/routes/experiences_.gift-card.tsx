import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import feastOnLogoAsset from "@/assets/feast-on-logo.webp.asset.json";
import rainbowRegisteredAsset from "@/assets/rainbow-registered.png.asset.json";
import heroPhotoAsset from "@/assets/experiences-hero.png.asset.json";
import experiencesPhotoAsset from "@/assets/homepage-experiences.png.asset.json";
import glampingPhotoAsset from "@/assets/homepage-glamping.png.asset.json";
import iceCreamPhotoAsset from "@/assets/homepage-ice-cream.png.asset.json";
import storePhotoAsset from "@/assets/homepage-store.png.asset.json";
import giftCard from "@/assets/gift-card.jpg";
import alpacaWalk from "@/assets/alpaca-walk.jpg";
import donkeyPicnic from "@/assets/donkey-picnic.jpg";
import goatCuddles from "@/assets/goat-cuddles.jpg";
import highlandHero from "@/assets/highland-hero.jpg";
import { AwardsStrip } from "@/components/experience/AwardsStrip";
import { ExperienceDetails, type ExperienceDetail } from "@/components/experience/ExperienceDetails";
import { LocationSection } from "@/components/experience/LocationSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";

const TITLE = "Gift Card";
const INTRO =
  "Give a day on the farm. Goats, alpacas, mini cows, ice cream — whatever they pick, it beats socks.";
const BUY_HREF = "#buy";
const CTA = "Get a Gift Card";

const details: ExperienceDetail[] = [
  { icon: CircleDollarSign, label: "Value", lines: ["Any amount you like"] },
  { icon: Mail, label: "Delivery", lines: ["Instantly by email"] },
  { icon: CalendarClock, label: "Expiry", lines: ["Never expires"] },
  { icon: Sparkles, label: "Use it on", lines: ["Experiences, store & more"] },
];

const gallery = [
  { src: goatCuddles, alt: "Guest cuddling a mini goat in the barn" },
  { src: experiencesPhotoAsset.url, alt: "Goats crowding around a laughing visitor" },
  { src: alpacaWalk, alt: "Alpacas walking with guests along the farm path" },
  { src: iceCreamPhotoAsset.url, alt: "Tubs of Udderly Ridiculous goat milk ice cream" },
  { src: highlandHero, alt: "Mini Highland cow with a very impressive fringe" },
  { src: donkeyPicnic, alt: "Miniature donkeys beside a picnic spread" },
  { src: storePhotoAsset.url, alt: "Inside the farm market store" },
  { src: glampingPhotoAsset.url, alt: "Farm glamping stay at golden hour" },
];

const thingsToKnow = [
  "Choose any denomination for your gift certificate.",
  "Gift certificates are delivered via email and include a unique code for checkout.",
  "Redeemable in part or whole; can be used multiple times if there’s a remaining balance.",
  "No expiration date – gift certificates never expire.",
];

export const Route = createFileRoute("/experiences_/gift-card")({
  head: () => ({
    meta: [
      { title: `${TITLE} | Udderly Ridiculous Farm Life` },
      { name: "description", content: INTRO },
      { property: "og:title", content: `${TITLE} at Udderly Ridiculous Farm Life` },
      { property: "og:description", content: INTRO },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GiftCardPage,
});

function GiftGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const current = open === null ? null : gallery[open];

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {gallery.map((image, i) => (
          <button
            key={image.src + i}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Open photo: ${image.alt}`}
            className={`group relative block overflow-hidden border-2 border-headline bg-background shadow-[8px_8px_0_var(--headline)] transition-transform duration-300 hover:-translate-y-2 hover:rotate-1 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring ${i % 3 === 0 ? "-rotate-1" : "rotate-1"}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={800}
              height={800}
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <span className="pointer-events-none absolute inset-0 flex items-end justify-start bg-headline/0 p-3 transition-colors duration-300 group-hover:bg-headline/45 group-active:bg-headline/45">
              <span className="translate-y-3 border-2 border-headline bg-secondary-accent px-2 py-1 font-display text-xs font-black uppercase text-headline opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100">
                View photo
              </span>
            </span>
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-headline/85 p-5"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={() => setOpen(null)}
        >
          <img src={current.src} alt={current.alt} className="max-h-[85vh] w-auto max-w-full border-4 border-background object-contain" />
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Close photo"
            className="absolute right-5 top-5 flex size-12 items-center justify-center rounded-full border-2 border-headline bg-background text-headline"
          >
            <X aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}

function GiftCardPage() {
  return (
    <div className="min-h-screen bg-background text-body-copy">
      <SiteHeader />

      <main id="top">
        {/* 1. Hero */}
        <section className="relative isolate flex min-h-[68vh] items-center justify-center overflow-hidden">
          <img src={heroPhotoAsset.url} alt="Farm animals and guests at Udderly Ridiculous Farm Life" width={1920} height={1080} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-headline/65" aria-hidden="true" />
          <div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32">
            <h1 className="font-display text-[clamp(2.6rem,8vw,7rem)] font-black uppercase leading-[0.82] text-background">
              Gift <span className="text-secondary-accent">Card</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg font-medium leading-relaxed text-background md:text-xl">{INTRO}</p>
          </div>
        </section>

        {/* 2. TripAdvisor recognition */}
        <AwardsStrip tagline="Top 10% of attractions worldwide by Tripadvisor." />

        {/* 3. Introduction */}
        <section id="buy" className="scroll-mt-20 overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_1fr]">
              <div>
                <img
                  src={giftCard}
                  alt="Udderly Ridiculous Farm Life gift card featuring a baby goat"
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="w-full"
                />
              </div>

              <div>
                <h2 className="font-display text-[clamp(2.6rem,6vw,5rem)] font-black uppercase leading-[0.82] text-headline">
                  Give a day<br /><span className="text-stroke">of ridiculous.</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed md:text-lg">
                  Placeholder description. Pick an amount, we email a gift certificate with a unique code, and they choose their own adventure — goat cuddles, an alpaca picnic, a night of farm glamping, ice cream by the tub, or something from the farm market store.
                </p>
                <p className="mt-4 text-base leading-relaxed md:text-lg">
                  Placeholder description. It is the easy present for the person who says they do not want anything, and a much better story than another candle.
                </p>

                <Button asChild size="large" className="mt-8">
                  <a href={BUY_HREF}>{CTA} <ArrowRight aria-hidden="true" /></a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Fun gallery */}
        <section id="gallery" className="overflow-hidden bg-background pb-20 md:pb-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <GiftGallery />

            <div className="mt-12 flex justify-center">
              <Button asChild size="large"><a href={BUY_HREF}>{CTA} <ArrowRight aria-hidden="true" /></a></Button>
            </div>
          </div>
        </section>

        {/* 5. Reviews (reused) */}
        <ReviewsSection
          cta={
            <Button asChild size="large">
              <a href={BUY_HREF}>{CTA} <ArrowRight aria-hidden="true" /></a>
            </Button>
          }
        />

        {/* 6. Things to know */}
        <section id="things-to-know" className="overflow-hidden bg-farm-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1100px] px-5 md:px-8">
            <h2 className="max-w-3xl font-display text-[clamp(2.4rem,6.5vw,5.4rem)] font-black uppercase leading-[0.8] text-headline">
              A few things<br />to know.
            </h2>

            <div className="mt-12 -rotate-1 border-2 border-headline bg-background p-7 shadow-[12px_12px_0_var(--secondary-accent)] md:p-9">
              <ul className="space-y-4">
                {thingsToKnow.map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-base leading-relaxed">
                    <span aria-hidden="true" className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-headline bg-farm-beige font-display text-sm font-black text-headline">✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild size="large"><a href={BUY_HREF}>{CTA} <ArrowRight aria-hidden="true" /></a></Button>
            </div>
          </div>
        </section>

        {/* 7. Rainbow Registered */}
        <section id="rainbow-registered" className="bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[0.75fr_1fr]">
            <a
              href="https://www.rainbowregistered.com/"
              target="_blank"
              rel="noreferrer"
              className="mx-auto block w-full max-w-md transition-transform duration-300 hover:scale-105 hover:-rotate-2 active:scale-95"
            >
              <img src={rainbowRegisteredAsset.url} alt="Rainbow Registered / Arc-en-ciel Officiel accreditation logo" width={1920} height={620} loading="lazy" className="h-auto w-full" />
            </a>

            <div>
              <p className="font-accent text-xl italic text-primary-accent">Proudly Rainbow Registered</p>
              <h2 className="mt-3 font-display text-[clamp(2.6rem,6vw,5.4rem)] font-black uppercase leading-[0.82] text-headline">
                Everyone is<br />welcome here.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed md:text-lg">
                Placeholder copy. Udderly Ridiculous Farm Life is a Rainbow Registered business, which means we are committed to providing a welcoming, safe and inclusive environment for 2SLGBTQI+ visitors, families, employees and community members. Everybody gets the same warm welcome here, and the animals genuinely do not care who you are — they just want the brush.
              </p>
              <Button asChild size="large" className="mt-8">
                <a href={BUY_HREF}>{CTA} <ArrowRight aria-hidden="true" /></a>
              </Button>
            </div>
          </div>
        </section>

        {/* 8. FeastON */}
        <section id="feast-on" className="bg-farm-beige py-20 md:py-28">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[1fr_0.85fr]">
            <div className="order-2 lg:order-1">
              <p className="font-accent text-xl italic text-primary-accent">Certified Local by FeastON</p>
              <h2 className="mt-3 font-display text-[clamp(2.6rem,6vw,5.4rem)] font-black uppercase leading-[0.82] text-headline">
                We eat<br />and serve local.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed md:text-lg">
                FeastON officially verifies that a significant portion of our ingredients and products are sourced right here in Ontario. We only support local, Ontario-made products, and so far we have had the privilege of supporting more than 140 local producers through everything we serve, sell and celebrate on the farm.
              </p>
              <Button asChild size="large" className="mt-8">
                <a href={BUY_HREF}>{CTA} <ArrowRight aria-hidden="true" /></a>
              </Button>
            </div>

            <a
              href="https://feaston.com/"
              target="_blank"
              rel="noreferrer"
              className="order-1 mx-auto block w-full max-w-sm transition-transform duration-300 hover:scale-105 hover:rotate-2 active:scale-95 lg:order-2"
            >
              <img src={feastOnLogoAsset.url} alt="FeastON Certified Local by the Culinary Tourism Alliance logo" width={800} height={800} loading="lazy" className="h-auto w-full" />
            </a>
          </div>
        </section>

        {/* 9. Newsletter */}
        <NewsletterSection />

        {/* 10. Location */}
        <LocationSection />
      </main>

      <SiteFooter />
    </div>
  );
}
