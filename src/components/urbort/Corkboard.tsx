import type { CSSProperties, ReactNode } from "react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import type { UrbortPost } from "@/data/urbort-posts";

export const corkStyle: CSSProperties = {
  backgroundColor: "#b98a4e",
  backgroundImage:
    "radial-gradient(rgba(90,55,20,0.35) 1px, transparent 1.6px), radial-gradient(rgba(255,240,210,0.25) 1px, transparent 1.6px)",
  backgroundSize: "9px 9px, 13px 13px",
  backgroundPosition: "0 0, 5px 7px",
};

export function Corkboard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`relative overflow-hidden border-y-[14px] border-headline py-16 md:py-24 ${className}`} style={corkStyle}>
      <div className="mx-auto max-w-[1300px] px-5 md:px-8">{children}</div>
    </section>
  );
}

export function Pin() {
  return (
    <span
      className="absolute -top-4 left-1/2 z-10 size-7 -translate-x-1/2 rounded-full border-2 border-headline bg-primary-accent shadow-[2px_2px_0_rgba(0,0,0,0.35)]"
      aria-hidden="true"
    />
  );
}

/** Polaroid pinned at its top-centre; hovering swings it around the pin. */
export function Polaroid({ post, withCta = true }: { post: UrbortPost; withCta?: boolean }) {
  return (
    <div className={`relative ${post.rotate}`}>
      <Pin />
      <div className="origin-top bg-background p-3 pb-6 shadow-[8px_10px_0_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out hover:rotate-[5deg] motion-reduce:transition-none">
        <img src={post.image} alt={post.title} width={1024} height={1024} loading="lazy" className="aspect-square w-full border-2 border-headline object-cover" />
        <h3 className="mt-4 px-2 font-display text-2xl font-black uppercase leading-none text-headline">{post.title}</h3>
        {withCta && (
          <>
            <p className="mt-3 px-2 leading-relaxed">{post.excerpt}</p>
            <div className="mt-4 px-2">
              <Button asChild>
                <Link to="/urbort-blog/$slug" params={{ slug: post.slug }}>Read more</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
