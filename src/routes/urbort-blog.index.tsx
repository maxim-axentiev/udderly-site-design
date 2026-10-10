import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BookExperienceCta } from "@/components/shared/BookExperienceCta";
import { Corkboard, Polaroid } from "@/components/urbort/Corkboard";
import { urbortPosts } from "@/data/urbort-posts";

const TITLE = "URBORT — Udderly Ridiculous Board of Ridiculous Things";
const DESC = "Our collection of ridiculous things we've done at Udderly Ridiculous Farm Life.";

export const Route = createFileRoute("/urbort-blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UrbortHome,
});

function UrbortHome() {
  return (
    <>
      <SiteHeader />
      <main>
        <Corkboard>
          <div className="mx-auto max-w-3xl -rotate-1 border-4 border-headline bg-background p-7 text-center shadow-[10px_10px_0_rgba(0,0,0,0.35)] md:p-10">
            <h1 className="font-display text-[clamp(2.4rem,6vw,5rem)] font-black uppercase leading-[0.85] text-headline">
              URBORT: <span className="text-primary-accent">Udderly Ridiculous Board of Ridiculous Things</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed">
              URBORT! Sounds gross, but it&apos;s something amazing - our collection of ridiculous things we&apos;ve done!
            </p>
          </div>
          <ul className="mt-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
            {urbortPosts.map((post) => (
              <li key={post.slug}><Polaroid post={post} /></li>
            ))}
          </ul>
        </Corkboard>
        <BookExperienceCta title="Come do something ridiculous with us" />
      </main>
      <SiteFooter />
    </>
  );
}
