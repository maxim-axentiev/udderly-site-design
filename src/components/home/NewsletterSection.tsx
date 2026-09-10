import { useState } from "react";

import mobileFirstAsset from "@/assets/newsletter-first-mobile.png.asset.json";
import mobileFourthAsset from "@/assets/newsletter-fourth-mobile.png.asset.json";
import leftLowerAsset from "@/assets/newsletter-left-lower-desktop.png.asset.json";
import leftUpperAsset from "@/assets/newsletter-left-upper-desktop.png.asset.json";
import rightLowerAsset from "@/assets/newsletter-right-lower-desktop.png.asset.json";
import rightUpperAsset from "@/assets/newsletter-right-upper-desktop.png.asset.json";
import mobileSecondAsset from "@/assets/newsletter-second-mobile.png.asset.json";
import mobileThirdAsset from "@/assets/newsletter-third-mobile.png.asset.json";
import { Button } from "@/components/ui/button";

const mobileAnimals = [
  { image: mobileFirstAsset.url, alt: "Alpaca peeking over the newsletter form", rotate: "-rotate-3" },
  { image: mobileSecondAsset.url, alt: "Mini donkey peeking over the newsletter form", rotate: "rotate-2" },
  { image: mobileThirdAsset.url, alt: "Goat peeking over the newsletter form", rotate: "-rotate-2" },
  { image: mobileFourthAsset.url, alt: "Mini Highland cow peeking over the newsletter form", rotate: "rotate-3" },
];

const leftAnimals = [
  { image: leftUpperAsset.url, alt: "Alpaca peeking from behind the newsletter form", position: "top-[8%]" },
  { image: leftLowerAsset.url, alt: "Mini donkey peeking from behind the newsletter form", position: "bottom-[5%]" },
];

const rightAnimals = [
  { image: rightUpperAsset.url, alt: "Goat peeking from behind the newsletter form", position: "top-[8%]" },
  { image: rightLowerAsset.url, alt: "Mini Highland cow peeking from behind the newsletter form", position: "bottom-[5%]" },
];

const fieldClass =
  "min-h-12 w-full rounded-full border-2 border-headline bg-background px-5 text-base text-headline placeholder:text-body-copy/60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring";

export function NewsletterSection() {
  const [signedUp, setSignedUp] = useState(false);

  return (
    <section id="newsletter" className="relative overflow-hidden bg-farm-beige py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="relative pt-20 md:pt-0">
          <div className="pointer-events-none absolute inset-x-[-0.5rem] top-0 z-0 grid h-32 grid-cols-4 items-end md:hidden" aria-hidden="true">
            {mobileAnimals.map((animal) => (
              <img key={animal.alt} src={animal.image} alt="" width={768} height={768} loading="lazy" className={`h-32 w-full object-contain object-bottom ${animal.rotate}`} />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 -left-36 z-0 hidden w-72 md:block" aria-hidden="true">
            {leftAnimals.map((animal) => (
              <img key={animal.alt} src={animal.image} alt="" width={768} height={768} loading="lazy" className={`absolute right-0 h-64 w-64 object-contain object-right ${animal.position}`} />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 -right-36 z-0 hidden w-72 md:block" aria-hidden="true">
            {rightAnimals.map((animal) => (
              <img key={animal.alt} src={animal.image} alt="" width={768} height={768} loading="lazy" className={`absolute left-0 h-64 w-64 object-contain object-left ${animal.position}`} />
            ))}
          </div>

          <div className="relative z-10 border-2 border-headline bg-background p-7 text-center shadow-[10px_10px_0_var(--secondary-accent)] md:p-12">
            <h2 className="font-display text-[clamp(2.6rem,6vw,4.6rem)] font-black uppercase leading-[0.85] text-headline">
              The Udderly Update
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base font-medium leading-relaxed">
              Sign up for our monthly email newsletter to be the first to know about special promotions, new experiences, farm &amp; animal updates, and just ridiculous content that’ll make you gasp, ooh, aw, and woah!
            </p>

            <form
              className="mx-auto mt-8 grid max-w-md gap-3 text-left"
              onSubmit={(event) => {
                event.preventDefault();
                setSignedUp(true);
              }}
            >
              <div>
                <label htmlFor="newsletter-first-name" className="mb-1 block font-display text-sm font-bold uppercase text-headline">First name (required)</label>
                <input id="newsletter-first-name" name="firstName" type="text" required autoComplete="given-name" placeholder="Cheryl" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="newsletter-email" className="mb-1 block font-display text-sm font-bold uppercase text-headline">Email (required)</label>
                <input id="newsletter-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="newsletter-dob" className="mb-1 block font-display text-sm font-bold uppercase text-headline">Date of birth (required)</label>
                <input id="newsletter-dob" name="dateOfBirth" type="date" required className={fieldClass} />
              </div>
              <Button type="submit" className="mt-2 justify-self-center">Sign me up</Button>
            </form>
            {signedUp && <p className="mt-4 font-accent text-lg italic text-primary-accent">Placeholder confirmation — nothing is stored yet.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
