import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useState } from "react";

import { useSwipe } from "@/components/experience/useSwipe";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BookExperienceCta } from "@/components/shared/BookExperienceCta";
import { Button } from "@/components/ui/button";
import { Corkboard, Polaroid } from "@/components/urbort/Corkboard";
import { urbortGallery, urbortPosts } from "@/data/urbort-posts";

export const Route = createFileRoute("/urbort-blog/$slug")({
  loader: ({ params }) => {
    const post = urbortPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const t = `${loaderData.post.title} — URBORT`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.post.excerpt },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BlogPost,
});

const P = "Placeholder copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function H({ children }: { children: string }) {
  return <h2 className="mt-14 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-black uppercase leading-[0.9] text-headline">{children}</h2>;
}
function Para() {
  return <p className="mt-5 text-lg leading-relaxed">{P}</p>;
}
function Img({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} loading="lazy" className="mt-6 aspect-[16/10] w-full border-4 border-headline object-cover photo-frame" />;
}

function Slideshow() {
  const [i, setI] = useState(0);
  const n = urbortGallery.length;
  const go = (next: number) => setI((next + n) % n);
  const swipe = useSwipe(() => go(i - 1), () => go(i + 1));
  const btn = "flex size-12 items-center justify-center rounded-full border-2 border-headline bg-background text-headline shadow-[3px_3px_0_var(--headline)] transition-transform hover:-translate-y-0.5";
  return (
    <div className="mt-14" {...swipe}>
      <div className="relative overflow-hidden border-4 border-headline photo-frame-pink">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${i * 100}%)` }}>
          {urbortGallery.map((src, idx) => (
            <img key={idx} src={src} alt={`Gallery photo ${idx + 1}`} className="aspect-[16/10] w-full shrink-0 object-cover" />
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-4">
        <button type="button" className={btn} onClick={() => go(i - 1)} aria-label="Previous photo"><ChevronLeft /></button>
        <span className="font-display text-lg font-bold text-headline">{i + 1} / {n}</span>
        <button type="button" className={btn} onClick={() => go(i + 1)} aria-label="Next photo"><ChevronRight /></button>
      </div>
    </div>
  );
}

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <>
      <SiteHeader />
      <main>
        <Corkboard>
          <div className="flex justify-center">
            <Button asChild variant="outline">
              <Link to="/urbort-blog"><ArrowLeft aria-hidden="true" /> Back to the board</Link>
            </Button>
          </div>
          <div className="mx-auto mt-14 max-w-sm">
            <Polaroid post={post} withCta={false} />
          </div>
        </Corkboard>

        <article className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <h1 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-black uppercase leading-[0.85] text-headline">{post.title}</h1>
            <div className="mt-8 flex aspect-video w-full items-center justify-center border-4 border-headline bg-farm-beige photo-frame">
              <div className="text-center text-headline">
                <Play className="mx-auto size-14" aria-hidden="true" />
                <p className="mt-2 font-display text-xl font-bold uppercase">Video placeholder</p>
              </div>
            </div>
            <Para />
            <Para />
            <H>Placeholder section title</H>
            <Img src={urbortGallery[0]!} alt="Placeholder blog image" />
            <Para />
            <H>Another placeholder title</H>
            <Img src={urbortGallery[1]!} alt="Placeholder blog image" />
            <Para />
            <Para />
            <Para />
            <Slideshow />
          </div>
        </article>
        <BookExperienceCta title="Come do something ridiculous with us" />
      </main>
      <SiteFooter />
    </>
  );
}
