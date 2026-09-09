import { Hand } from "lucide-react";

import faceAlpaca from "@/assets/face-alpaca.jpg";
import faceChicken from "@/assets/face-chicken.jpg";
import faceDonkey from "@/assets/face-donkey.jpg";
import faceGoat from "@/assets/face-goat.jpg";
import faceHighland from "@/assets/face-highland.jpg";
import { Button } from "@/components/ui/button";

const points = [
  { name: "Pasture first", copy: "Every animal gets daily pasture time, shade, and space to just be an animal.", image: faceHighland, alt: "Mini Highland cow face" },
  { name: "They choose", copy: "Animals opt in to every experience. If they walk away, the visit follows them.", image: faceAlpaca, alt: "Alpaca face" },
  { name: "Small groups", copy: "Group sizes stay small so nobody gets crowded, startled, or overwhelmed.", image: faceGoat, alt: "Goat face" },
  { name: "Real rest days", copy: "Scheduled days off, every week, with no guests and no cameras.", image: faceDonkey, alt: "Mini donkey face" },
  { name: "Vet on speed dial", copy: "Routine checks, hoof care, and dental work booked long before it's urgent.", image: faceChicken, alt: "Hen face" },
  { name: "Fed properly", copy: "Diets built per species and per animal, checked by an animal nutritionist.", image: faceGoat, alt: "Goat face close-up" },
  { name: "Here for life", copy: "Our animals stay with us. Retirement on the farm is part of the deal.", image: faceHighland, alt: "Highland cow face close-up" },
  { name: "Trained the kind way", copy: "Positive reinforcement only. Snacks are a legitimate management strategy.", image: faceAlpaca, alt: "Alpaca face close-up" },
];

export function WelfareSection() {
  return (
    <section id="welfare" className="relative overflow-hidden bg-farm-beige py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="max-w-4xl">
          <p className="font-accent text-xl italic text-primary-accent">Seriously, though</p>
          <h2 className="mt-3 font-display text-[clamp(3.4rem,7vw,6.6rem)] font-black uppercase leading-[0.82] text-headline">
            How we keep our animals happy and healthy
          </h2>
          <p className="mt-6 inline-flex items-center gap-3 border-2 border-headline bg-secondary-accent px-4 py-2 font-display text-base font-extrabold uppercase text-headline shadow-[3px_3px_0_var(--headline)]">
            <Hand aria-hidden="true" size={18} />
            <span className="hidden md:inline">Hover over the beautiful faces</span>
            <span className="md:hidden">Tap a face to read more</span>
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {points.map((point) => (
            <li key={point.name}>
              <details className="welfare-card group relative block border-2 border-headline bg-background shadow-[6px_6px_0_var(--headline)] md:pointer-events-none">
                <summary className="relative block cursor-pointer list-none [&::-webkit-details-marker]:hidden md:pointer-events-auto">
                  <img src={point.image} alt={point.alt} width={900} height={900} loading="lazy" className="aspect-square w-full object-cover" />
                  <span className="block border-t-2 border-headline px-3 py-2 font-display text-lg font-black uppercase leading-tight text-headline">
                    {point.name}
                  </span>
                </summary>
                <p className="welfare-reveal border-t-2 border-headline bg-primary-accent px-3 py-3 text-sm leading-relaxed text-primary-foreground md:absolute md:inset-0 md:flex md:items-center md:border-0 md:p-5 md:text-base md:opacity-0 md:transition-opacity md:duration-200 md:group-hover:opacity-100">
                  {point.copy}
                </p>
              </details>
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <Button asChild size="large">
            <a href="#experiences">Experience their happiness with a farm experience</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
