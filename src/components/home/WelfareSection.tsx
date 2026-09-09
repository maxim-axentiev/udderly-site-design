import { Hand } from "lucide-react";
import { useState } from "react";

import faceAlpaca from "@/assets/face-alpaca.jpg";
import faceChicken from "@/assets/face-chicken.jpg";
import faceDonkey from "@/assets/face-donkey.jpg";
import faceGoat from "@/assets/face-goat.jpg";
import faceHighland from "@/assets/face-highland.jpg";
import { Button } from "@/components/ui/button";

const points = [
  {
    name: "Rest like a corporate girlie",
    copy: "We limit the number of experiences and number of people per experience. Our animals rest more than the average corporate girlie working a 9-5. Because of this, it's smart to book an experience early in advance before spots fill up.",
    image: faceHighland,
    alt: "Mini Highland cow face",
  },
  {
    name: "Clean ya shoes",
    copy: "We ask guests to sanitize their shoes with our sanitary foot mat before entering the farm. We don't want two years of spit and chewing gum bacteria staying on the farm (yuck). It's a biohazard thing!",
    image: faceAlpaca,
    alt: "Alpaca face",
  },
  {
    name: "No jumping jacks near alpacas",
    copy: "We provide a detailed safety and handling briefing to make sure you and the animals are safe at all times. If you start doing jumping jacks next to the alpacas, they will run from you like their lives depend on it.",
    image: faceGoat,
    alt: "Goat face",
  },
  {
    name: "You do our job",
    copy: "Our experiences are designed to be safe and enriching for the animals. For example, in our mini Highland cow experience, one part of it is brushing our cows. So, you not only take care of them for us, but the cows tilt their heads up and absolutely get lost in the brushing!",
    image: faceDonkey,
    alt: "Mini donkey face",
  },
  {
    name: "Not a petting zoo",
    copy: "We are not a petting farm/zoo. We do not sell feed and do not provide unrestricted access to the pastures. That means you can only interact with them during an experience. That's right... the animals are HOT commodities.",
    image: faceChicken,
    alt: "Hen face",
  },
  {
    name: "Everyone has a bestie",
    copy: "We keep the animals together in their own pastures to promote their social wellbeing. Some of them ask the others for lunch money, but our guard llama, Snickers, watches over and does his job well.",
    image: faceGoat,
    alt: "Goat face close-up",
  },
  {
    name: "An apple a day",
    copy: "We provide excellent veterinary care and regular checkups. Our animals are treated better than most of us treat ourselves. Do you have a nutritionist and a personal doctor on call? If you do, we're sorry for calling you out like that.",
    image: faceHighland,
    alt: "Highland cow face close-up",
  },
  {
    name: "Resort with room service",
    copy: "We prioritize natural behaviours and enrichment for our animals. From climbing structures for goats to grazing pastures for alpacas, we ensure they have opportunities to play, explore, and thrive. Basically, it’s a luxury resort with room service, but for animals.",
    image: faceAlpaca,
    alt: "Alpaca face close-up",
  },
];

export function WelfareSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="welfare" className="relative overflow-hidden bg-farm-beige py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="max-w-4xl">
          <p className="font-accent text-xl italic text-primary-accent">Seriously, though</p>
          <h2 className="mt-3 font-display text-[clamp(2.6rem,7vw,6.6rem)] font-black uppercase leading-[0.82] text-headline">
            How we keep our animals happy and healthy
          </h2>
          <p className="mt-6 inline-flex items-center gap-3 border-2 border-headline bg-secondary-accent px-4 py-2 font-display text-base font-extrabold uppercase text-headline shadow-[3px_3px_0_var(--headline)]">
            <Hand aria-hidden="true" size={18} />
            <span className="hidden md:inline">Hover over the beautiful faces</span>
            <span className="md:hidden">Tap a face to read more</span>
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {points.map((point, i) => {
            const open = active === i;
            return (
              <li key={point.name}>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setActive(open ? null : i)}
                  className="group relative block w-full overflow-hidden border-2 border-headline bg-background text-left shadow-[6px_6px_0_var(--headline)] transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
                >
                  <img src={point.image} alt={point.alt} width={900} height={900} loading="lazy" className="aspect-square w-full object-cover" />
                  <span className="block border-t-2 border-headline px-3 py-2 font-display text-lg font-black uppercase leading-tight text-headline">
                    {point.name}
                  </span>
                  <span
                    className={`absolute inset-0 flex items-center overflow-auto bg-primary-accent p-4 text-xs leading-relaxed text-primary-foreground transition-opacity duration-200 group-hover:opacity-100 sm:text-sm ${
                      open ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {point.copy}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-14 flex justify-center">
          <Button asChild size="large">
            <a href="#experiences">Experience their happiness with a farm experience</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
