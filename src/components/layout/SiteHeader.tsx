import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

export const navItems = [
  { label: "Experiences", href: "/experiences" },
  { label: "Meet the Herd", href: "/#meet-the-herd" },
  { label: "Stay", href: "/experiences#farm-stays" },
  { label: "Adopt", href: "/experiences#gifts" },
  { label: "Corporate", href: "/experiences#for-businesses" },
  { label: "Our Farm", href: "/#store" },
];

export function SiteHeader() {
  return (
    <header className="relative z-50 border-b-2 border-headline bg-background">
      <div className="mx-auto flex min-h-24 max-w-[1500px] items-center justify-between gap-6 px-5 md:px-8">
        <Link to="/" className="group flex max-w-52 -rotate-1 flex-col font-display font-black uppercase leading-[0.78] text-headline md:max-w-60" aria-label="Udderly Ridiculous Farm Life home">
          <span className="text-[1.7rem] md:text-[2rem]">Udderly Ridiculous</span>
          <span className="mt-1 flex items-center gap-2 text-sm tracking-[0.16em] text-primary-accent"><span className="h-1.5 w-7 bg-secondary-accent" /> Farm Life</span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="font-display text-base font-bold uppercase text-headline decoration-secondary-accent decoration-[3px] underline-offset-8 hover:underline">{item.label}</a>
          ))}
        </nav>

        <Button asChild className="hidden lg:inline-flex"><a href="/experiences">Book an Experience <ArrowRight aria-hidden="true" size={18} /></a></Button>

        <details className="relative xl:hidden">
          <summary className="flex size-12 cursor-pointer list-none items-center justify-center rounded-full border-2 border-headline bg-farm-beige text-headline [&::-webkit-details-marker]:hidden" aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
          <div className="absolute right-0 top-14 w-72 border-2 border-headline bg-background p-5 shadow-[7px_7px_0_var(--secondary-accent)]">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="border-b border-border py-3 font-display text-xl font-bold uppercase text-headline">{item.label}</a>
              ))}
              <Button asChild className="mt-5"><a href="/experiences">Book an Experience</a></Button>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
