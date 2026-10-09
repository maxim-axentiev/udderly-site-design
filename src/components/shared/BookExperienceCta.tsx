import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

/**
 * Large closing call-to-action that sends visitors to /experiences.
 * Used at the bottom of the Vision & Values, Team, Farm Market Store
 * and Ice Cream pages.
 */
export function BookExperienceCta({ title, copy }: { title: string; copy?: string }) {
  return (
    <section className="relative overflow-hidden bg-farm-blue py-20 md:py-28">
      <div className="farm-dots absolute -right-10 top-10 h-28 w-28 -rotate-12 opacity-20" aria-hidden="true" />
      <div className="farm-dots absolute -left-12 bottom-8 h-24 w-24 rotate-12 opacity-20" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <h2 className="font-display text-[clamp(2.6rem,7vw,6rem)] font-black uppercase leading-[0.82] text-headline">
          {title}
        </h2>
        {copy && <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed">{copy}</p>}
        <Button asChild size="large" className="mt-9">
          <Link to="/experiences">
            Book an Experience with Us <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
