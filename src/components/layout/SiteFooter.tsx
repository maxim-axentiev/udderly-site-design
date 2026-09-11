import { Instagram } from "lucide-react";

import { navItems } from "@/components/layout/SiteHeader";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-headline bg-farm-beige">
      <div className="mx-auto max-w-[1500px] px-5 py-14 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1.5fr_0.5fr]">
          <div>
            <p className="max-w-sm font-display text-5xl font-black uppercase leading-[0.8] text-headline">Udderly<br /><span className="text-primary-accent">Ridiculous</span><br />Farm Life</p>
            <p className="mt-5 max-w-xs font-accent text-lg italic text-headline">Made with questionable judgement and excellent animal care.</p>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-4 self-start" aria-label="Footer navigation">
            {[...navItems, { label: "Contact", href: "/#newsletter" }].map((item) => (
              <a key={item.label} href={item.href} className="font-display text-xl font-bold uppercase text-headline hover:text-primary-accent hover:underline">{item.label}</a>
            ))}
          </nav>
          <div className="flex items-start gap-3 md:justify-end">
            <a href="/#top" aria-label="Instagram" className="flex size-12 items-center justify-center rounded-full border-2 border-headline bg-secondary-accent text-headline transition-transform hover:-rotate-6"><Instagram aria-hidden="true" /></a>
            <a href="/#top" aria-label="TikTok" className="flex size-12 items-center justify-center rounded-full border-2 border-headline bg-background font-display text-lg font-black text-headline transition-transform hover:rotate-6">TT</a>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap justify-between gap-4 border-t-2 border-headline pt-5 text-sm font-semibold">
          <p>Ontario, Canada · Farm life, but make it ridiculous.</p><p>© 2026 Udderly Ridiculous Farm Life</p>
        </div>
      </div>
    </footer>
  );
}
