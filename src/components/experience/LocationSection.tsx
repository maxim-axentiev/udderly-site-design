import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function LocationSection() {
  return (
    <section id="location" className="bg-farm-beige py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-3xl font-display text-[clamp(2.4rem,6.5vw,6rem)] font-black uppercase leading-[0.8] text-headline">
            Come find us.<br /><span className="text-stroke">We&apos;re out here somewhere.</span>
          </h2>
          <p className="max-w-md border-l-4 border-primary-accent pl-5 text-lg font-semibold">
            Roughly 30 minutes from Kitchener-Waterloo, past the part where your GPS gets confident.
          </p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-[1fr_2fr]">
          <div className="border-2 border-headline bg-background p-7 shadow-[10px_10px_0_var(--headline)]">
            <p className="font-display text-3xl font-black uppercase leading-none text-headline">Udderly Ridiculous Farm Life</p>
            <address className="mt-5 not-italic leading-relaxed">
              906200 Township Rd 12<br />
              Blandford-Blenheim, ON N0J 1B0<br />
              Canada
            </address>
            <Button asChild size="large" className="mt-7">
              <a href="https://www.google.com/maps/dir/?api=1&destination=906200+Township+Rd+12%2C+Blandford-Blenheim%2C+ON+N0J+1B0" target="_blank" rel="noreferrer">
                Get directions <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>

          <div className="overflow-hidden border-2 border-headline bg-background p-2 shadow-[10px_10px_0_var(--secondary-accent)]">
            <iframe
              title="Map showing the location of Udderly Ridiculous Farm Life"
              src="https://www.google.com/maps?q=906200+Township+Rd+12,+Blandford-Blenheim,+ON+N0J+1B0&z=13&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full border-0 md:h-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
