import { useState } from "react";

import headAlpaca from "@/assets/head-alpaca.png";
import headDonkey from "@/assets/head-donkey.png";
import headGoat from "@/assets/head-goat.png";
import headHighland from "@/assets/head-highland.png";
import { Button } from "@/components/ui/button";

const heads = [
  { image: headGoat, alt: "Goat peeking in", rotate: "-rotate-6" },
  { image: headAlpaca, alt: "Alpaca peeking in", rotate: "rotate-3" },
  { image: headDonkey, alt: "Mini donkey peeking in", rotate: "-rotate-3" },
  { image: headHighland, alt: "Mini Highland cow peeking in", rotate: "rotate-6" },
];

const fieldClass =
  "min-h-12 w-full rounded-full border-2 border-headline bg-background px-5 text-base text-headline placeholder:text-body-copy/60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring";

export function NewsletterSection() {
  const [signedUp, setSignedUp] = useState(false);

  return (
    <section id="newsletter" className="relative overflow-hidden bg-farm-beige py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="relative pt-24 md:pt-0">
          {/* Heads peeking out from behind the form */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center gap-2 md:hidden" aria-hidden="true">
            {heads.map((head) => (
              <img key={head.alt} src={head.image} alt="" width={1024} height={1024} loading="lazy" className={`h-32 w-24 object-contain object-top ${head.rotate}`} />
            ))}
          </div>

          <div className="pointer-events-none absolute -left-24 top-1/2 z-0 hidden -translate-y-1/2 flex-col gap-8 md:flex" aria-hidden="true">
            {heads.slice(0, 2).map((head) => (
              <img key={head.alt} src={head.image} alt="" width={1024} height={1024} loading="lazy" className={`h-40 w-40 object-contain ${head.rotate}`} />
            ))}
          </div>
          <div className="pointer-events-none absolute -right-24 top-1/2 z-0 hidden -translate-y-1/2 flex-col gap-8 md:flex" aria-hidden="true">
            {heads.slice(2).map((head) => (
              <img key={head.alt} src={head.image} alt="" width={1024} height={1024} loading="lazy" className={`h-40 w-40 object-contain ${head.rotate}`} />
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
