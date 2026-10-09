import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import iceCream from "@/assets/ice-cream.jpg";
import farmStore from "@/assets/farm-store.jpg";
import urbort2 from "@/assets/urbort-2.jpg";
import urbort3 from "@/assets/urbort-3.jpg";
import homepageIceCreamAsset from "@/assets/homepage-ice-cream.png.asset.json";
import homepageStoreAsset from "@/assets/homepage-store.png.asset.json";
import homepageExperiencesAsset from "@/assets/homepage-experiences.png.asset.json";
import { ExperienceGallery } from "@/components/experience/ExperienceGallery";
import { BookExperienceCta } from "@/components/shared/BookExperienceCta";
import { PageHero } from "@/components/shared/PageHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";

const DESCRIPTION =
  "The Farm Market Store at Udderly Ridiculous Farm Life — local goods from over 140 producers, our goat milk ice cream, and farm treats to take home.";

const storeGallery = [
  { src: farmStore, alt: "Looking through the doorway into the Farm Market Store" },
  { src: homepageStoreAsset.url, alt: "Shelves of local products inside the Farm Market Store" },
  { src: urbort2, alt: "Visitors browsing the store after their experience" },
  { src: urbort3, alt: "A closer look at the local goods in the store" },
];

const iceCreamSlideshow = [
  { src: iceCream, alt: "Stacked tubs of Udderly Ridiculous goat milk ice cream in many flavours" },
  { src: homepageIceCreamAsset.url, alt: "Tubs of goat milk ice cream lined up on the counter" },
  { src: homepageExperiencesAsset.url, alt: "Guests enjoying ice cream at the farm" },
];

export const Route = createFileRoute("/farm-market-store")({
  head: () => ({
    meta: [
      { title: "Farm Market Store | Udderly Ridiculous Farm Life" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Farm Market Store | Udderly Ridiculous Farm Life" },
      { property: "og:description", content: "Local goods, farm treats and award-winning goat milk ice cream." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FarmMarketStorePage,
});

function FarmMarketStorePage() {
  return (
    <div className="min-h-screen bg-background text-body-copy">
      <SiteHeader />

      <main id="top">
        <PageHero
          title={
            <>
              Farm Market <span className="text-secondary-accent">Store</span>
            </>
          }
        />

        {/* Intro — text left, image right */}
        <section className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-[1300px] items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-black uppercase leading-[0.85] text-headline">
                Bring a piece of the farm home with you
              </h2>
              <p className="mt-6 text-base leading-relaxed md:text-lg">
                After your experience, take home a souvenir. Whether it’s a conversation starter or a treat for
                your belly. We’ve stocked items from over 100 local producers, and you know it’s good because
                we’re ridiculously picky about what we offer! It’s a win-win-win: you support local businesses,
                support us, and take something special home with you. We love a triple win!
              </p>
            </div>
            <div className="relative rotate-2">
              <div className="overflow-hidden border-2 border-headline shadow-[12px_12px_0_var(--headline)]">
                <img src={farmStore} alt="Looking through the doorway into the Farm Market Store with wooden barrels and local products" width={1000} height={750} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
              <span aria-hidden="true" className="farm-dots absolute -bottom-5 -right-4 h-16 w-28 opacity-60" />
            </div>
          </div>
        </section>

        {/* Why we support local */}
        <section className="overflow-hidden bg-farm-blue py-20 md:py-28">
          <div className="farm-dots absolute -left-10 top-12 h-28 w-28 rotate-12 opacity-20" aria-hidden="true" />
          <div className="mx-auto grid max-w-[1300px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-black uppercase leading-[0.85] text-headline">
                Why shopping local is a big deal to us
              </h2>
              <p className="mt-6 text-base leading-relaxed md:text-lg">
                Every shelf in our store tells the story of a neighbour. When you grab a jar, a bar, or a bag of
                something delicious here, you’re not lining the pockets of a far-away boardroom — you’re helping
                an Ontario farmer keep farming, a maker keep making, and a small town keep its spark.
              </p>
              <p className="mt-4 text-base leading-relaxed md:text-lg">
                We taste it, we test it, we interrogate the label, and only the good stuff makes it in. That’s
                the deal: if it’s in our store, somebody’s grandmother would approve.
              </p>
            </div>
            <div className="border-2 border-headline bg-background p-8 text-center shadow-[10px_10px_0_var(--headline)] md:p-12">
              <p className="font-display text-[clamp(4.5rem,10vw,8.5rem)] font-black leading-[0.8] text-primary-accent tabular-nums">140+</p>
              <p className="mt-3 font-display text-2xl font-black uppercase leading-tight text-headline">Local producers supported</p>
              <p className="mt-2 font-accent text-lg italic text-headline">And ridiculously proud of every single one.</p>
            </div>
          </div>
        </section>

        {/* Store gallery */}
        <section aria-label="Photos from the Farm Market Store" className="border-y-2 border-headline bg-farm-beige py-16 md:py-20">
          <div className="mx-auto grid max-w-[1300px] gap-8 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
            {storeGallery.map((photo, index) => (
              <div key={photo.src} className={`overflow-hidden border-2 border-headline shadow-[8px_8px_0_var(--headline)] transition-transform duration-300 hover:-translate-y-1 ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`}>
                <img src={photo.src} alt={photo.alt} width={800} height={600} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* Ice cream teaser — text left, slideshow right */}
        <section className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-[1300px] items-center gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-black uppercase leading-[0.85] text-headline">
                And yes… we make our own ice cream
              </h2>
              <p className="mt-6 text-base leading-relaxed md:text-lg">
                Our award-winning goat milk ice cream is made right here with fresh Ontario goat milk, in
                flavours you won’t find anywhere else. Lactose friendly, ridiculously creamy, and scoopable
                straight from the store freezer.
              </p>
              <Button asChild size="large" className="mt-8">
                <Link to="/ice-cream">
                  Learn more about our ice cream <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <ExperienceGallery images={iceCreamSlideshow} caption="Straight from the freezer" />
          </div>
        </section>

        <BookExperienceCta
          title="Come shop, snack and say hi."
          copy="Wander the store, meet the herd, and grab a scoop before you go."
        />
      </main>

      <SiteFooter />
    </div>
  );
}
