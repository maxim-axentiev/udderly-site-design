import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useState } from "react";

import iceCream from "@/assets/ice-cream.jpg";
import goatMilkIconsAsset from "@/assets/goat-milk-icons.jpg.asset.json";
import homepageIceCreamAsset from "@/assets/homepage-ice-cream.png.asset.json";
import giftAGoatAsset from "@/assets/homepage-gift-a-goat.png.asset.json";
import { GiftGoatCounter } from "@/components/home/GiftGoatCounter";
import { useSwipe } from "@/components/experience/useSwipe";
import { BookExperienceCta } from "@/components/shared/BookExperienceCta";
import { PageHero } from "@/components/shared/PageHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

const DESCRIPTION =
  "Udderly Ridiculous Goat Milk Ice Cream — award-winning, lactose friendly flavours made with fresh Ontario goat milk. Lemon Cream, Peachy Mango Tango, Vanilla Bean Lavender and Wine & Dark Chocolate.";

type Flavour = {
  name: string;
  story: string;
  ingredients: string;
  image: string;
  alt: string;
};

const flavours: Flavour[] = [
  {
    name: "Lemon Cream",
    story:
      "On a whirlwind trip to Italy for Greg’s 40th birthday we were introduced to Italian Gelato. We would make a daily stop for this treat, I became addicted to a combination - a scoop of lemon and a scoop of yogurt Gelato - to die for. I went through Gelato withdrawl when we returned unable to find this combination anywhere…. until now. This ice cream is a beautiful blend of creamy and tart rolled onto one spoon! We make a sweet base containing fresh Ontario Goat milk, cream and curd, then blend in real lemon juice to create a perfect balance of sweet and tart fresh lemon taste . Now you don’t have to go to Italy to experience my favorite combination - you’re welcome.",
    ingredients:
      "Goat's milk · Goat's cream · Cane sugar · Lemon juice · Goat's milk cheese curd (pasteurized goat's milk, sea salt, microbial enzyme, and bacterial culture) · Goat whey protein concentrate · Locust bean gum · Guar gum · Sea salt. Contains: Milk.",
    image: iceCream,
    alt: "Tub of Lemon Cream goat milk ice cream",
  },
  {
    name: "Peachy Mango Tango",
    story:
      "So many people are into the smoothie craze mixed with green this, and kale that… I give them credit but I just can’t seem to get them down. When I reach for a smoothie, I think fresh flavours a little tart and a little sweet and absolutely refreshing - my go to base Mangos and Peaches. So I thought to myself - self this would be a great light refreshing ice cream - and here it is. This ice cream is made with our sweet base made with fresh Ontario Goat milk, cream and curd and blended with real peach and mango purees to have the sweet and tangy smoothie feel. I apologize to kale lovers - I am just not ready to go there yet!",
    ingredients:
      "Goat's milk ▪ Goat's cream ▪ Cane sugar ▪ Mango puree ▪ Peach puree ▪ Goats milk cheese curd (pasteurized goat's milk, sea salt, microbial enzyme, and bacterial culture) ▪ Goat whey protein concentrate ▪ Locust bean gum ▪ Guar gum ▪ Sea salt Contains: Milk",
    image: homepageIceCreamAsset.url,
    alt: "Tub of Peachy Mango Tango goat milk ice cream",
  },
  {
    name: "Vanilla Bean Lavender",
    story:
      "Vanilla is no longer bland and boring, and why should it be? Vanilla is one of the most complex flavours and ice creams - it should have center stage not be buried under a mountain of sugary sauces. This award-winning flavour starts with fresh Ontario goat milk, cream and curd and a base of sweetness we blend in luscious vanilla with their beans and then perfectly marry it with a subtle undertone of English Lavender sourced from Apple Hill Lavender farm. Although it can still accompany the likes of pie, and be slathered in berry sauces, why would you?",
    ingredients:
      "Goat's milk · Goat's cream · Cane sugar · Goat's milk cheese curd (pasteurized goat's milk, sea salt, microbial enzyme, and bacterial culture) · Goat whey protein concentrate · Locust bean gum · Guar gum · Vanilla Extract · Vanilla seeds · Sea salt · Lavender oil. Contains: Milk.",
    image: iceCream,
    alt: "Tub of Vanilla Bean Lavender goat milk ice cream",
  },
  {
    name: "Wine & Dark Chocolate",
    story:
      "It is amazing how tastes mature as you age (and the things you utilize for stress relief when you have 4 teenage boys)! A sweet indulgence (and for those pull my hair out moments) for me has become a glass of full bodied smooth Red Wine and a small piece of good dark chocolate… taking a bite of the chocolate, getting it to just the right temperature as you sip and swirl the red wine releasing all of the flavours of that heavenly combination ... Who has time for that anymore??! In this decadent ice cream, we have brought both worlds together. Working with a sweet cream base including fresh Ontario goat milk and cream and curd, we bring together dutch cocoa with exquisite 74% bittersweet chocolate infused with Legends Estate Ontario VQA Merlot wine. Go ahead, indulge because you want to, or because you just need a little “time out” and some peace and quiet. I get it.",
    ingredients:
      "Goat's milk ▪ Goat's cream ▪ Cane sugar ▪ Red wine ▪ Cocoa powder ▪ Bitter sweet chocolate (unsweetened chocolate, sugar, cocoa butter, soy lecithin, natural flavour) ▪ Goats milk cheese curd (pasteurized goat's milk, sea salt, microbial enzyme, and bacterial culture) ▪ Goat whey protein concentrate ▪ Locust bean gum ▪ Guar gum ▪ Sea salt. Contains: Milk ▪ Soya ▪ Sulphites",
    image: homepageIceCreamAsset.url,
    alt: "Tub of Wine & Dark Chocolate goat milk ice cream",
  },
];

const whyGoatMilk = [
  "Goat milk contains less lactose than cow’s milk and is filled with vitamins, enzymes, and protein. Goat milk is also less allergenic. It doesn’t contain the complex proteins that stimulate allergic reactions to cow’s milk (goat milk contains A2 casein), so it doesn’t suppress the immune system. It’s easier to digest than cow’s milk. Statistics show that goat milk will digest in a baby’s stomach in twenty minutes, whereas pasteurized cow’s milk takes eight hours. The difference is in the structure of the milk. It contains twice the healthful medium chain fatty acids, such as capric and caprylic acids, which are highly anti-microbial. So why wouldn't you choose Goat's Milk Ice Cream?!",
  "Compared to cow's milk, goat milk contains more of the following nutrients (1) : Potassium, Calcium, Magnesium, Vitamin B6, Vitamin C, Iron. Goat milk is high in protein. Per 100g serving, goat milk has more protein than cow's milk (2). Goat milk has low lactose levels - goat's milk naturally contains lesser lactose levels than cow’s milk (3).",
];

export const Route = createFileRoute("/ice-cream")({
  head: () => ({
    meta: [
      { title: "Goat Milk Ice Cream | Udderly Ridiculous Farm Life" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Udderly Ridiculous Goat Milk Ice Cream" },
      { property: "og:description", content: "Award-winning, lactose friendly goat milk ice cream made with fresh Ontario goat milk." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IceCreamPage,
});

function FlavourSlideshow() {
  const [index, setIndex] = useState(0);
  const total = flavours.length;
  const go = (next: number) => setIndex((next + total) % total);
  const swipe = useSwipe(() => go(index - 1), () => go(index + 1));
  const current = flavours[index]!;

  return (
    <div className="relative">
      <div className="absolute -inset-3 rotate-2 bg-secondary-accent" aria-hidden="true" />
      <div
        className="relative border-2 border-headline bg-background p-5 shadow-[10px_10px_0_var(--headline)] md:p-8"
        {...swipe}
        role="group"
        aria-roledescription="carousel"
        aria-label="Ice cream flavours"
      >
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <img
            key={current.image}
            src={current.image}
            alt={current.alt}
            width={1000}
            height={750}
            loading="lazy"
            className="aspect-[4/3] w-full border-2 border-headline object-cover"
          />
          <div>
            <h3 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black uppercase leading-[0.85] text-headline">
              {current.name}
            </h3>
            <p className="mt-5 leading-relaxed">{current.story}</p>
            <p className="mt-5 border-l-4 border-primary-accent pl-4 text-sm leading-relaxed">
              <span className="font-display text-base font-black uppercase text-headline">Ingredients: </span>
              {current.ingredients}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous flavour"
          className="absolute left-3 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-headline bg-background text-headline shadow-[3px_3px_0_var(--headline)] transition-transform hover:-translate-y-[55%] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next flavour"
          className="absolute right-3 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-headline bg-background text-headline shadow-[3px_3px_0_var(--headline)] transition-transform hover:-translate-y-[55%] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <div className="relative mt-5 flex items-center justify-center gap-3 md:justify-end">
        {flavours.map((flavour, i) => (
          <button
            key={flavour.name}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show ${flavour.name}`}
            aria-current={i === index}
            className={`h-4 w-4 rounded-full border-2 border-headline transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring ${i === index ? "scale-110 bg-primary-accent" : "bg-background"}`}
          />
        ))}
        <span className="ml-3 font-display text-lg font-black uppercase text-headline">
          {index + 1} / {total}
        </span>
      </div>
    </div>
  );
}

function IceCreamPage() {
  return (
    <div className="min-h-screen bg-background text-body-copy">
      <SiteHeader />

      <main id="top">
        <PageHero
          title={
            <>
              Udderly Ridiculous <span className="text-secondary-accent">Goat Milk Ice Cream</span>
            </>
          }
        />

        {/* Intro — text left, image right */}
        <section className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-[1300px] items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-black uppercase leading-[0.85] text-headline">
                Scooped straight from the farm
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed md:text-lg">
                <p>
                  Are you like 65% of lactose intolerant folks? No problem. Our award-winning goat milk ice
                  cream is the perfect treat for a smooth car ride home…no awkward pit stops or windows-down
                  moments.
                </p>
                <p>
                  Packed with more nutrients than regular ice cream and featuring rich, unique flavours like
                  Vanilla Bean Lavender and Wine &amp; Dark Chocolate, it’s all made with real, locally sourced
                  ingredients.
                </p>
              </div>
            </div>
            <div className="relative -rotate-2">
              <div className="overflow-hidden border-2 border-headline shadow-[12px_12px_0_var(--secondary-accent)]">
                <img src={homepageIceCreamAsset.url} alt="Tubs of Udderly Ridiculous goat milk ice cream stacked in the store" width={1000} height={750} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
              <span aria-hidden="true" className="farm-dots absolute -bottom-5 -left-4 h-16 w-28 opacity-60" />
            </div>
          </div>
        </section>

        {/* Why goat milk — white background so the callout icons sit cleanly */}
        <section className="border-y-2 border-headline bg-background py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <h2 className="text-center font-display text-[clamp(2.4rem,6vw,5rem)] font-black uppercase leading-[0.82] text-headline">
              Why goat milk <span className="text-stroke">ice cream?</span>
            </h2>
            <ul className="mt-10 space-y-8">
              {whyGoatMilk.map((point) => (
                <li key={point.slice(0, 24)} className="flex items-start gap-4 leading-relaxed">
                  <span className="mt-1.5 size-3 shrink-0 rotate-45 bg-primary-accent" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <img
              src={goatMilkIconsAsset.url}
              alt="Callout badges: Allergen friendly, Low in casein, Canadian made, Lactose friendly, and Clean label"
              width={2000}
              height={400}
              loading="lazy"
              className="mx-auto mt-14 w-full max-w-5xl"
            />
          </div>
        </section>

        {/* Flavours slideshow */}
        <section className="overflow-hidden bg-farm-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1300px] px-5 md:px-8">
            <div className="max-w-4xl">
              <h2 className="font-display text-[clamp(2.8rem,7vw,6.5rem)] font-black uppercase leading-[0.8] text-headline">
                Pick your <span className="text-primary-accent">flavour.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-lg font-semibold">Four ridiculous reasons to skip the grocery-store freezer aisle.</p>
            </div>
            <div className="mt-12">
              <FlavourSlideshow />
            </div>
          </div>
        </section>

        {/* Gift A Goat — copy from the homepage, edited for the ice cream page */}
        <section className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8">
            <div className="grid items-center gap-10 border-2 border-headline bg-farm-beige p-7 shadow-[10px_10px_0_var(--headline)] md:grid-cols-[auto_1fr_auto] md:p-12">
              <img src={giftAGoatAsset.url} alt="Gift A Goat program logo" width={1080} height={1080} loading="lazy" tabIndex={0} className="mx-auto size-36 -rotate-3 cursor-pointer rounded-full border-2 border-headline bg-background object-contain shadow-[4px_4px_0_var(--headline)] outline-none transition-transform duration-500 motion-safe:hover:rotate-12 motion-safe:hover:scale-110 motion-safe:active:-rotate-12 motion-safe:active:scale-95 focus-visible:ring-4 focus-visible:ring-ring md:size-44" />
              <div>
                <span className="font-accent text-xl italic text-primary-accent">Gift A Goat</span>
                <h3 className="mt-2 font-display text-[clamp(1.9rem,4.5vw,3.6rem)] font-black uppercase leading-[0.86] text-headline">Eating ice-cream gives back</h3>
                <p className="mt-4 max-w-2xl leading-relaxed">
                  We want to be a part of creating opportunities to help rural communities not just survive but
                  to flourish. We created the Gift a Goat™ program with the support of World Vision Canada with
                  this idea in mind. 10¢ from each purchase of our 473ml ice cream goes to our Gift a Goat™
                  program - purchasing goats for needy families through World Vision. We are excited to support
                  agriculture at home and around the world.
                </p>
              </div>
              <div className="text-center md:text-right">
                <GiftGoatCounter target={118} />
                <p className="mt-2 font-display text-lg font-black uppercase text-headline">Goats gifted</p>
              </div>
            </div>
          </div>
        </section>

        {/* News video placeholder */}
        <section className="border-y-2 border-headline bg-farm-blue py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <h2 className="font-display text-[clamp(2.2rem,5.5vw,4.6rem)] font-black uppercase leading-[0.84] text-headline">
              Udderly Ridiculous Goat Milk Ice Cream on the News
            </h2>
            <div className="relative mt-12">
              <div className="absolute -inset-3 -rotate-1 bg-secondary-accent" aria-hidden="true" />
              <div className="relative flex aspect-video items-center justify-center border-2 border-headline bg-background p-8 shadow-[10px_10px_0_var(--headline)]">
                <div className="text-center">
                  <span className="mx-auto flex size-20 items-center justify-center rounded-full border-2 border-headline bg-primary-accent text-primary-foreground shadow-[4px_4px_0_var(--headline)]" aria-hidden="true">
                    <Play className="ml-1" />
                  </span>
                  <p className="mt-6 font-semibold">Placeholder video. Send us the news clip and we’ll drop it in here.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BookExperienceCta
          title="Book an experience and enjoy a scoop on the farm."
          copy="Meet the animals, wander the farm, then treat yourself to a scoop (or two) straight from our freezer."
        />
      </main>

      <SiteFooter />
    </div>
  );
}
