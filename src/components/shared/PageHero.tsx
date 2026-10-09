import type { ReactNode } from "react";

import heroPhotoAsset from "@/assets/experiences-hero.png.asset.json";

/**
 * Shared photographic hero used across the standalone pages
 * (same treatment as Our Story and the experience pages).
 */
export function PageHero({ title, subtext }: { title: ReactNode; subtext?: string }) {
  return (
    <section className="relative isolate flex min-h-[68vh] items-center justify-center overflow-hidden">
      <img
        src={heroPhotoAsset.url}
        alt="Farm animals and guests at Udderly Ridiculous Farm Life"
        width={1920}
        height={1080}
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-headline/65" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32">
        <h1 className="font-display text-[clamp(2.6rem,7.5vw,6.5rem)] font-black uppercase leading-[0.82] text-background">
          {title}
        </h1>
        {subtext && (
          <p className="mx-auto mt-7 max-w-2xl text-lg font-medium leading-relaxed text-background md:text-xl">
            {subtext}
          </p>
        )}
      </div>
    </section>
  );
}
