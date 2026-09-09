import { useState } from "react";

import faceAlpaca from "@/assets/face-alpaca.jpg";
import faceChicken from "@/assets/face-chicken.jpg";
import faceDonkey from "@/assets/face-donkey.jpg";
import faceGoat from "@/assets/face-goat.jpg";
import { Button } from "@/components/ui/button";

const heads = [
  { image: faceGoat, alt: "Goat peeking in" },
  { image: faceAlpaca, alt: "Alpaca peeking in" },
  { image: faceDonkey, alt: "Mini donkey peeking in" },
  { image: faceChicken, alt: "Hen peeking in" },
];

export function NewsletterSection() {
  const [signedUp, setSignedUp] = useState(false);

  return (
    <section id="newsletter" className="relative overflow-hidden bg-farm-beige py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="mb-[-2.5rem] flex justify-center gap-3 md:hidden">
          {heads.map((head) => (
            <img key={head.alt} src={head.image} alt={head.alt} width={900} height={900} loading="lazy" className="size-20 rounded-full border-2 border-headline object-cover" />
          ))}
        </div>

        <div className="relative border-2 border-headline bg-background p-7 text-center shadow-[10px_10px_0_var(--secondary-accent)] md:p-12">
          <div className="pointer-events-none absolute -left-16 top-1/2 hidden -translate-y-1/2 flex-col gap-5 md:flex">
            {heads.slice(0, 2).map((head) => (
              <img key={head.alt} src={head.image} alt={head.alt} width={900} height={900} loading="lazy" className="size-28 -rotate-6 rounded-full border-2 border-headline object-cover" />
            ))}
          </div>
          <div className="pointer-events-none absolute -right-16 top-1/2 hidden -translate-y-1/2 flex-col gap-5 md:flex">
            {heads.slice(2).map((head) => (
              <img key={head.alt} src={head.image} alt={head.alt} width={900} height={900} loading="lazy" className="size-28 rotate-6 rounded-full border-2 border-headline object-cover" />
            ))}
          </div>

          <h2 className="font-display text-[clamp(2.6rem,6vw,4.6rem)] font-black uppercase leading-[0.85] text-headline">
            Get the ridiculous newsletter
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base font-medium leading-relaxed">
            Placeholder sentence about farm news, new experiences, and ice cream flavours. Second placeholder sentence promising we email far less than the goats would like.
          </p>

          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(event) => {
              event.preventDefault();
              setSignedUp(true);
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="min-h-12 flex-1 rounded-full border-2 border-headline bg-background px-5 text-base text-headline placeholder:text-body-copy/60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
            />
            <Button type="submit">Sign me up</Button>
          </form>
          {signedUp && <p className="mt-4 font-accent text-lg italic text-primary-accent">Placeholder confirmation — nothing is stored yet.</p>}
        </div>
      </div>
    </section>
  );
}
