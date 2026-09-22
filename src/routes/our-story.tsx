import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";

import heroPhotoAsset from "@/assets/experiences-hero.png.asset.json";
import ownersFamily from "@/assets/owners-family.jpg";
import iceCream from "@/assets/ice-cream.jpg";
import highlandHero from "@/assets/highland-hero.jpg";
import farmStore from "@/assets/farm-store.jpg";
import alpacaWalk from "@/assets/alpaca-walk.jpg";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";

const DESCRIPTION =
  "From an unexpected connection to a farm full of joy — how Udderly Ridiculous Farm Life grew from a pilot course, an ice-cream idea and Alvin's legacy into a third-generation Ontario farm experience.";

type StorySection = {
  id: string;
  title: string;
  paragraphs: string[];
  image: string;
  alt: string;
  imageLeft: boolean;
  tone?: "beige" | "blue";
  signOff?: boolean;
};

const storySections: StorySection[] = [
  {
    id: "how-it-all-began",
    title: "How it all began",
    paragraphs: [
      "Like any good story, ours began as a love story… okay, it didn't really, but it became one, so that's close enough, right? Greg and I met at a pilot for a course I was teaching aimed at farmers. There was an earth-shattering hug at the end of the class, and we decided to keep in touch.",
      "Since I wasn't a farmer (and my background only included one summer at a farm, being chased by a bull and stepping in fresh cow poop with my see-through jelly shoes—I know, I seriously just dated myself), I called on Greg from time to time for connections or advice on how best to connect with farmers.",
    ],
    image: ownersFamily,
    alt: "Greg and Cheryl, the owners of Udderly Ridiculous Farm Life",
    imageLeft: false,
    tone: "beige",
  },
  {
    id: "growing-together",
    title: "Growing together",
    paragraphs: [
      "Fast forward, and our connection became a little more than just chatting… we began an \"un-relationship\" and eventually determined we really didn't want to be without each other, so we made plans to figure out how to integrate our lives, including my two city boys and his two farm boys… especially now that we had an Udderly Ridiculous product idea.",
    ],
    image: alpacaWalk,
    alt: "Guests walking alpacas together along the farm lane",
    imageLeft: true,
  },
  {
    id: "the-ice-cream-idea",
    title: "The ice-cream idea",
    paragraphs: [
      "Fast forward, while helping Greg with strategic planning for the farm, he mentioned wanting a farm product. We brainstormed and landed on goat milk ice cream—it was perfect, especially since my son and I couldn't digest cow dairy. After some challenges, we launched Udderly Ridiculous in March 2019. The name reflected the craziness of starting a company with no experience while working full-time. I left my corporate job to focus on the brand. We won awards, including Canada's Grand Prix of New Products, and entered retailers, but the pandemic brought challenges, from missed customer interactions to supply chain issues.",
    ],
    image: iceCream,
    alt: "Tubs of Udderly Ridiculous goat milk ice cream",
    imageLeft: false,
    tone: "beige",
  },
  {
    id: "alvins-legacy",
    title: "Udderly Ridiculous Farm Life - honouring Alvin's legacy",
    paragraphs: [
      "The idea for a facility began when someone asked about goat yoga, and I thought, \"Who would want goats chewing on their Lululemon pants?\" That sparked the conversation between Greg and me about creating a space where we could interact with people, educate them, and offer memorable experiences.",
      "We envisioned Greg's dad, Alvin, who was at the farm six days a week, welcoming visitors and sharing stories. After Alvin was diagnosed with pancreatic cancer in January 2021, we knew we had to make this dream a reality while we still had time with him. Though we lost him sooner than expected, the plan was in motion, and now it stands as a tribute to Alvin and all he gave to the land, animals, and community he loved.",
    ],
    image: highlandHero,
    alt: "A mini Highland cow at the farm Alvin cared for",
    imageLeft: true,
  },
  {
    id: "where-our-journey-meets-yours",
    title: "Where our journey meets yours",
    paragraphs: [
      "Today, our third-generation family farm has become the go-to place for people seeking memorable, hands-on experiences with our animals and a true connection to agriculture. We pour our hearts into ensuring every guest leaves with an incredible, enlightening experience. Through our farm market, we proudly support local farms and producers, and on a global scale, we've donated 115 goats to families in need, helping to make a difference far beyond our fields.",
      "I can't wait to welcome you to the farm, where every visit is part of our Udderly Ridiculous adventure!",
    ],
    image: farmStore,
    alt: "Guests meeting the animals at the farm",
    imageLeft: false,
    tone: "blue",
    signOff: true,
  },
];

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story | Udderly Ridiculous Farm Life" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Our Story | Udderly Ridiculous Farm Life" },
      { property: "og:description", content: "From an unexpected connection to a farm full of joy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurStoryPage,
});

function StoryImage({ image, alt, rotated }: { image: string; alt: string; rotated: boolean }) {
  return (
    <div className={`relative ${rotated ? "-rotate-2" : "rotate-2"}`}>
      <div className="overflow-hidden border-2 border-headline shadow-[12px_12px_0_var(--headline)]">
        <img src={image} alt={alt} width={1000} height={750} loading="lazy" className="aspect-[4/3] w-full object-cover" />
      </div>
      <span aria-hidden="true" className="farm-dots absolute -bottom-5 h-16 w-28 opacity-60" style={rotated ? { right: -18 } : { left: -18 }} />
    </div>
  );
}

function StoryBlock({ section }: { section: StorySection }) {
  const bg = section.tone === "blue" ? "bg-farm-blue" : section.tone === "beige" ? "bg-farm-beige" : "bg-background";
  const eyebrowTone = section.tone === "blue" ? "text-headline" : "text-primary-accent";

  return (
    <section id={section.id} className={`scroll-mt-20 overflow-hidden ${bg} py-20 md:py-28`}>
      <div className="mx-auto max-w-[1300px] px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div className={section.imageLeft ? "order-2 lg:order-1" : ""}>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-black uppercase leading-[0.85] text-headline">
              {section.title}
            </h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-6 text-base leading-relaxed md:text-lg">{p}</p>
            ))}

            {section.signOff && (
              <>
                <p className="mt-8 flex items-center gap-2 font-accent text-2xl italic text-headline">
                  Cheryl <Heart aria-hidden="true" size={22} className="fill-primary-accent text-primary-accent" />
                </p>
                <Button asChild size="large" className="mt-6">
                  <a href="/experiences">Book an Experience <ArrowRight aria-hidden="true" /></a>
                </Button>
              </>
            )}
          </div>

          <div className={section.imageLeft ? "order-1 lg:order-2" : ""}>
            <StoryImage image={section.image} alt={section.alt} rotated={section.imageLeft} />
          </div>
        </div>

        {section.tone === "beige" && (
          <span aria-hidden="true" className={`mt-14 block font-accent text-lg italic ${eyebrowTone}`}></span>
        )}
      </div>
    </section>
  );
}

function OurStoryPage() {
  return (
    <div className="min-h-screen bg-background text-body-copy">
      <SiteHeader />

      <main id="top">
        {/* 1. Hero — same treatment as all pages */}
        <section className="relative isolate flex min-h-[68vh] items-center justify-center overflow-hidden">
          <img src={heroPhotoAsset.url} alt="Farm animals and guests at Udderly Ridiculous Farm Life" width={1920} height={1080} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-headline/65" aria-hidden="true" />
          <div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32">
            <h1 className="font-display text-[clamp(2.6rem,8vw,7rem)] font-black uppercase leading-[0.82] text-background">
              Our <span className="text-secondary-accent">Story</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg font-medium leading-relaxed text-background md:text-xl">
              From an unexpected connection to a farm full of joy
            </p>
          </div>
        </section>

        {/* 2. Story sections */}
        {storySections.map((section) => (
          <StoryBlock key={section.id} section={section} />
        ))}
      </main>

      <SiteFooter />
    </div>
  );
}
