import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Users } from "lucide-react";

import alpacaWalk from "@/assets/alpaca-walk.jpg";
import donkeyPicnic from "@/assets/donkey-picnic.jpg";
import goatCuddles from "@/assets/goat-cuddles.jpg";
import highlandCta from "@/assets/highland-cta.jpg";
import highlandHero from "@/assets/highland-hero.jpg";
import iceCream from "@/assets/ice-cream.jpg";
import animalsForSaleAsset from "@/assets/homepage-animals-for-sale.png.asset.json";
import experiencesPhotoAsset from "@/assets/homepage-experiences.png.asset.json";
import glampingPhotoAsset from "@/assets/homepage-glamping.png.asset.json";
import heroPhotoAsset from "@/assets/experiences-hero.png.asset.json";
import trainingPhotoAsset from "@/assets/homepage-training.png.asset.json";
import feastOnLogoAsset from "@/assets/feast-on-logo.webp.asset.json";
import rainbowRegisteredAsset from "@/assets/rainbow-registered.png.asset.json";
import { BackToCategories } from "@/components/experiences/BackToCategories";
import { SignatureBadge } from "@/components/experiences/SignatureBadge";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Farm Experiences & Farm Stays | Udderly Ridiculous" },
      {
        name: "description",
        content:
          "Book award-winning Ontario farm experiences with mini Highland cows, alpacas, mini donkeys and goats, plus farm glamping, gifts and corporate programs.",
      },
      { property: "og:title", content: "Udderly Ridiculous Farm Experiences" },
      {
        property: "og:description",
        content: "Goat yoga, alpaca picnics, Highland cow cuddles, farm glamping and more on our Ontario family farm.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencesPage,
});

const heroPhoto = heroPhotoAsset.url;
const goatsPhoto = experiencesPhotoAsset.url;
const glampingPhoto = glampingPhotoAsset.url;
const trainingPhoto = trainingPhotoAsset.url;
const calvesPhoto = animalsForSaleAsset.url;

const categories = [
  { label: "Farm Experiences", href: "#farm-experiences", image: goatsPhoto, note: "16 ways to get licked", tilt: "-rotate-2" },
  { label: "Farm Stays & Packages", href: "#farm-stays", image: glampingPhoto, note: "Sleep here, obviously", tilt: "rotate-1" },
  { label: "Gifts", href: "#gifts", image: iceCream, note: "Better than socks", tilt: "rotate-2" },
  { label: "For Businesses", href: "#for-businesses", image: trainingPhoto, note: "Grown-up ridiculous", tilt: "-rotate-1" },
];

type Experience = {
  title: string;
  copy: string;
  season: string;
  age: string;
  booking: "public" | "private" | "both";
  image: string;
  alt: string;
  limited?: boolean;
  signature?: boolean;
};

const farmExperiences: Experience[] = [
  { title: "Goat Yoga", copy: "Placeholder description. Downward dog, upward goat. Stretch while tiny hooves audit your form.", season: "May to October", age: "16+", booking: "public", image: goatCuddles, alt: "Goats climbing on guests during a farm yoga class" },
  { title: "Goat Recess", copy: "Placeholder description. Sixty minutes of unstructured goat chaos, supervised by professionals.", season: "May to October", age: "All ages", booking: "public", image: goatsPhoto, alt: "Guest surrounded by playful goats in the pasture" },
  { title: "Goat Cuddles", copy: "Placeholder description. Winter's coziest job: a warm barn, a woolly blanket, an armful of goat.", season: "November to April", age: "All ages", booking: "public", image: goatCuddles, alt: "Guest cuddling a goat inside the barn" },
  { title: "Baby Goat Playtime & Snuggles", copy: "Placeholder description. Kid season only. Yes, we mean the four-legged kind.", season: "Select dates", age: "All ages", booking: "public", image: goatCuddles, alt: "Baby goats being cuddled by guests", limited: true },
  { title: "Mini Highland Cow Experience", copy: "Placeholder description. Brush, scratch and befriend the fluffiest bovines in Ontario.", season: "Year-round", age: "12+", booking: "both", image: highlandHero, alt: "Guest brushing a fluffy mini Highland cow" },
  { title: "Mini Highland Calf Meet & Greet", copy: "Placeholder description. Thirty minutes with calves who have absolutely no idea how cute they are.", season: "Select dates", age: "All ages", booking: "both", image: calvesPhoto, alt: "Two mini Highland calves in a sunny pasture", limited: true },
  { title: "Alpaca Lunch Picnic", copy: "Placeholder description. A proper picnic, plus alpacas judging your sandwich choices.", season: "May to October", age: "16+", booking: "public", image: alpacaWalk, alt: "Alpacas beside a picnic table on the farm" },
  { title: "Alpaca Sunset Picnic", copy: "Placeholder description. Golden hour, long shadows, and the farm's smuggest models.", season: "May to October", age: "16+", booking: "public", image: highlandCta, alt: "Sunset over the farm pasture with animals grazing" },
  { title: "Alpaca Walks", copy: "Placeholder description. Take an alpaca for a stroll. Or be taken. It varies.", season: "May to October · November to April by request", age: "14+", booking: "public", image: alpacaWalk, alt: "Guest walking an alpaca along a farm path" },
  { title: "Alpaca Experience & Fibre Nesting Ball Workshop", copy: "Placeholder description. Meet the herd, then turn their fluff into something birds will fight over.", season: "Year-round", age: "10+", booking: "public", image: alpacaWalk, alt: "Alpaca fibre being handled during a workshop" },
  { title: "Miniature Donkey Visits", copy: "Placeholder description. Small donkeys. Enormous opinions. Excellent company.", season: "Year-round", age: "10+", booking: "both", image: donkeyPicnic, alt: "Miniature donkeys greeting guests at the fence" },
  { title: "Private Miniature Donkey Lunch Picnic", copy: "Placeholder description. Your group, your table, two donkeys with impeccable timing.", season: "May to October", age: "16+", booking: "private", image: donkeyPicnic, alt: "Private picnic set up beside miniature donkeys" },
  { title: "Private Miniature Donkey Sunset Picnic", copy: "Placeholder description. Same donkeys, better lighting, significantly more romance.", season: "May to October", age: "16+", booking: "private", image: highlandCta, alt: "Sunset picnic setting on the farm" },
  { title: "General Admission – Tower of Goats Discovery Trail", copy: "Placeholder description. Wander the trail, meet the tower, question your life choices (fondly).", season: "May to October", age: "All ages", booking: "public", image: goatsPhoto, alt: "Goats climbing the tower structure on the discovery trail" },
  { title: "Taste of Farm Life", copy: "Placeholder description. The full ridiculous menu: animals, local food and three glorious hours.", season: "May to October", age: "16+", booking: "public", image: highlandHero, alt: "Guests enjoying a long farm tasting experience", signature: true },
  { title: "Taste of Farm Life Family Friendly", copy: "Placeholder description. Everything the grown-ups get, sized for the whole crew.", season: "May to October", age: "All ages", booking: "public", image: trainingPhoto, alt: "Family enjoying food and animals under the farm shelter", signature: true },
];

const stays = [
  { title: "Farm Glamping", copy: "Placeholder description. A luxury RV parked where the sunsets are unreasonable and the neighbours have hooves.", season: "May to October", age: "All ages", image: glampingPhoto, alt: "Luxury RV lit at night beside a campfire on the farm", cta: "Book Farm Glamping", limited: false },
  { title: "The Farm Hopping Experience", copy: "Placeholder description. One night on the farm, stitched together with experiences across the countryside.", season: "Select dates", age: "16+", image: highlandCta, alt: "Golden hour over the farm with animals grazing", cta: "Book Farm Hopping", limited: true },
];

function QuickFact({ icon: Icon, children }: { icon: typeof Users; children: string }) {
  return (
    <li className="flex items-start gap-2 text-sm font-semibold leading-snug">
      <Icon size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-primary-accent" />
      {children}
    </li>
  );
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="group relative flex flex-col border-2 border-headline bg-background p-3 shadow-[7px_7px_0_var(--headline)] transition-transform duration-200 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img src={experience.image} alt={experience.alt} width={1024} height={1280} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {experience.limited && (
          <span className="absolute left-2 top-2 -rotate-3 rounded-full border-2 border-headline bg-primary-accent px-3 py-1 font-display text-xs font-black uppercase text-primary-foreground shadow-[3px_3px_0_var(--headline)]">
            Limited Time
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3 pb-4">
        <h3 className="font-display text-2xl font-black uppercase leading-none text-headline">{experience.title}</h3>
        {experience.signature && <div className="mt-3"><SignatureBadge /></div>}
        <p className="mt-3 text-sm leading-relaxed">{experience.copy}</p>

        <ul className="mt-4 flex-1 space-y-2 border-t-2 border-dashed border-headline/30 pt-4">
          <QuickFact icon={CalendarDays}>{experience.season}</QuickFact>
          <QuickFact icon={Users}>{experience.age}</QuickFact>
        </ul>

        <div className="mt-5 flex flex-col gap-3">
          <Button asChild variant="outline" className="w-full"><a href="#farm-experiences">Learn More</a></Button>
          {experience.booking === "both" ? (
            <>
              <Button asChild className="w-full"><a href="#farm-experiences">Book Public Experience</a></Button>
              <Button asChild className="w-full"><a href="#farm-experiences">Book Private Experience</a></Button>
            </>
          ) : (
            <Button asChild className="w-full">
              <a href="#farm-experiences">{experience.booking === "private" ? "Book Private Experience" : "Book Experience"}</a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-background text-body-copy">
      <SiteHeader />
      <BackToCategories />

      <main id="top">
        {/* Hero */}
        <section className="relative isolate flex min-h-[72vh] items-center justify-center overflow-hidden">
          <img src={heroPhoto} alt="A guest holding a fluffy Highland calf on the farm with other visitors in the background" width={1920} height={1080} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-headline/65" aria-hidden="true" />
          <div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32">
            <h1 className="font-display text-[clamp(3.2rem,9vw,8rem)] font-black uppercase leading-[0.8] text-background">
              Udderly Ridiculous<br />
              <span className="text-secondary-accent">Farm Experiences</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg font-medium leading-relaxed text-background md:text-xl">
              Award-Winning farm experiences with mini Highland cows, mini donkeys, mini goats, alpacas, and local food.
            </p>
          </div>
        </section>

        {/* Category chooser */}
        <section id="categories" className="bg-farm-beige py-16 md:py-20">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-black uppercase leading-[0.85] text-headline">What are you<br />in the mood for?</h2>
              <p className="max-w-sm border-l-4 border-primary-accent pl-5 text-lg font-semibold">Click on what you want. Magically teleport to it.</p>
            </div>

            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <li key={category.label}>
                  <a href={category.href} className={`group block h-full border-2 border-headline bg-background p-3 shadow-[7px_7px_0_var(--headline)] transition-transform duration-200 hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring ${category.tilt}`}>
                    <img src={category.image} alt="" width={1024} height={768} loading="lazy" className="aspect-[5/4] w-full object-cover" />
                    <span className="mt-4 block font-display text-2xl font-black uppercase leading-none text-headline">{category.label}</span>
                    <span className="mt-2 flex items-center gap-2 pb-2 font-accent text-base italic text-primary-accent">
                      {category.note} <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 1. Farm experiences */}
        <section id="farm-experiences" className="scroll-mt-20 overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-3xl font-display text-[clamp(2.8rem,7vw,7rem)] font-black uppercase leading-[0.8] text-headline">Farm Experiences</h2>
              <p className="max-w-xl text-base leading-relaxed md:text-lg">
                Get up close with the animals who actually run this place. From Highland cows and goats to alpacas and miniature donkeys, these immersive experiences are designed for real connection, ridiculous memories, and a whole lot of personality.
              </p>
            </div>

            <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {farmExperiences.map((experience) => (
                <ExperienceCard key={experience.title} experience={experience} />
              ))}
            </div>
          </div>
        </section>

        {/* 2. Farm stays */}
        <section id="farm-stays" className="scroll-mt-20 overflow-hidden bg-farm-blue py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <div className="max-w-4xl">
              <p className="font-accent text-xl italic text-primary-accent">Stay a while</p>
              <h2 className="mt-3 font-display text-[clamp(2.8rem,7vw,6.4rem)] font-black uppercase leading-[0.8] text-headline">Farm Stays &amp; Packages</h2>
              <p className="mt-6 text-base leading-relaxed md:text-lg">
                Why leave after a few hours when you can stay right here? Spend the night on the farm or turn your visit into a full countryside getaway with animals, food, and experiences built right in.
              </p>
            </div>

            <div className="mt-14 space-y-24 lg:space-y-14">
              {stays.map((stay, index) => (
                <article key={stay.title} className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${index % 2 === 1 ? "lg:[&>figure]:order-2" : ""}`}>
                  <figure className="relative m-0">
                    <div className={`absolute -inset-3 ${index % 2 === 0 ? "-rotate-2 bg-secondary-accent" : "rotate-2 bg-primary-accent"}`} aria-hidden="true" />
                    <img src={stay.image} alt={stay.alt} width={1280} height={860} loading="lazy" className="relative aspect-[16/10] w-full border-2 border-headline object-cover" />
                    {stay.limited && (
                      <figcaption className="absolute -bottom-4 left-4 z-10 -rotate-2 border-2 border-headline bg-primary-accent px-4 py-2 font-display text-sm font-black uppercase text-primary-foreground">Limited Time</figcaption>
                    )}
                  </figure>

                  <div className="border-2 border-headline bg-background p-7 shadow-[10px_10px_0_var(--headline)] md:p-10">
                    <h3 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-black uppercase leading-[0.86] text-headline">{stay.title}</h3>
                    <p className="mt-4 text-base leading-relaxed md:text-lg">{stay.copy}</p>
                    <ul className="mt-6 flex-1 space-y-2 border-t-2 border-dashed border-headline/30 pt-4">
                      <QuickFact icon={CalendarDays}>{stay.season}</QuickFact>
                      <QuickFact icon={Users}>{stay.age}</QuickFact>
                    </ul>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <Button asChild size="large" variant="outline"><a href="#farm-stays">Learn More</a></Button>
                      <Button asChild size="large"><a href="#farm-stays">{stay.cta} <ArrowRight aria-hidden="true" /></a></Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Gifts */}
        <section id="gifts" className="scroll-mt-20 relative overflow-hidden bg-farm-beige py-20 md:py-28">
          <div className="farm-dots absolute -right-8 top-10 h-32 w-32 rotate-12 opacity-20" aria-hidden="true" />
          <div className="mx-auto max-w-[1300px] px-5 md:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
              <h2 className="font-display text-[clamp(2.8rem,7.5vw,7rem)] font-black uppercase leading-[0.78] text-headline">
                Give something<br /><span className="text-stroke">less boring.</span>
              </h2>
              <p className="max-w-xl text-base leading-relaxed md:text-lg">
                Skip the candles and socks. Give someone a ridiculous farm experience, or let them symbolically adopt one of the animals and support the care that keeps this place running.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              <article className="relative -rotate-1 border-2 border-headline bg-background p-3 shadow-[12px_12px_0_var(--primary-accent)]">
                <img src={iceCream} alt="Udderly Ridiculous goat milk ice cream tubs ready to gift" width={1080} height={800} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                <div className="p-5">
                  <span className="inline-block -rotate-2 bg-secondary-accent px-3 py-1 font-display text-sm font-black uppercase text-headline">Gift Card</span>
                  <h3 className="mt-4 font-display text-4xl font-black uppercase leading-[0.9] text-headline">A ridiculous day, wrapped</h3>
                  <p className="mt-3 leading-relaxed">Placeholder description. They pick the animals, the date and the level of chaos. You look like a genius.</p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Button asChild size="large" variant="outline"><a href="#gifts">Learn More</a></Button>
                    <Button asChild size="large"><a href="#gifts">Give a Farm Experience <ArrowRight aria-hidden="true" /></a></Button>
                  </div>
                </div>
              </article>

              <article className="relative rotate-1 border-2 border-headline bg-background p-3 shadow-[12px_12px_0_var(--secondary-accent)]">
                <img src={goatCuddles} alt="Goat looking hopefully at the camera, ready for adoption" width={1080} height={800} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                <div className="p-5">
                  <span className="inline-block rotate-1 bg-primary-accent px-3 py-1 font-display text-sm font-black uppercase text-primary-foreground">Adopt an Animal</span>
                  <h3 className="mt-4 font-display text-4xl font-black uppercase leading-[0.9] text-headline">Symbolically theirs. Actually ours.</h3>
                  <p className="mt-3 leading-relaxed">Placeholder description. Adopt a goat, alpaca, donkey or cow and help cover hay, hooves and vet visits.</p>
                  <Button asChild size="large" className="mt-6"><a href="#gifts">Meet the Adoptable Animals <ArrowRight aria-hidden="true" /></a></Button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 4. For businesses */}
        <section id="for-businesses" className="scroll-mt-20 overflow-hidden bg-farm-blue py-20 md:py-28">
          <div className="mx-auto max-w-[1300px] px-5 md:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
              <h2 className="font-display text-[clamp(2.6rem,7vw,6.4rem)] font-black uppercase leading-[0.78] text-headline">
                Yes, we also do<br /><span className="text-primary-accent">grown-up stuff.</span>
              </h2>
              <p className="max-w-xl text-base leading-relaxed md:text-lg">
                The farm is ridiculous, but the work is serious. We help teams, leaders, and tourism businesses build stronger relationships, develop better experiences, and occasionally learn something useful from an alpaca.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              <article className="flex flex-col border-2 border-headline bg-background shadow-[10px_10px_0_var(--headline)]">
                <img src={trainingPhoto} alt="Team gathered under the farm shelter with a mini Highland cow" width={1280} height={860} loading="lazy" className="aspect-[16/9] w-full border-b-2 border-headline object-cover" />
                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <h3 className="font-display text-3xl font-black uppercase leading-none text-headline md:text-4xl">Corporate Training &amp; Team-Building</h3>
                  <p className="mt-4 flex-1 leading-relaxed">Placeholder description. Twenty years of training expertise, delivered somewhere nobody can hide behind a slide deck.</p>
                  <Button asChild size="large" className="mt-7 self-start"><a href="#for-businesses">Explore Corporate Programs <ArrowRight aria-hidden="true" /></a></Button>
                </div>
              </article>

              <article className="flex flex-col border-2 border-headline bg-background shadow-[10px_10px_0_var(--headline)]">
                <img src={alpacaWalk} alt="Alpacas walking with guests along a farm path" width={1280} height={860} loading="lazy" className="aspect-[16/9] w-full border-b-2 border-headline object-cover" />
                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <h3 className="font-display text-3xl font-black uppercase leading-none text-headline md:text-4xl">Experiential Tourism Development</h3>
                  <p className="mt-4 flex-1 leading-relaxed">Placeholder description. We help other operators build experiences people actually brag about afterwards.</p>
                  <Button asChild size="large" className="mt-7 self-start"><a href="#for-businesses">Explore Tourism Development <ArrowRight aria-hidden="true" /></a></Button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Reviews (reused) */}
        <ReviewsSection />

        {/* Rainbow Registered */}
        <section id="rainbow-registered" className="bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[0.75fr_1fr]">
            <a
              href="https://www.rainbowregistered.com/"
              target="_blank"
              rel="noreferrer"
              className="mx-auto block w-full max-w-md transition-transform duration-300 hover:scale-105 hover:-rotate-2 active:scale-95"
            >
              <img src={rainbowRegisteredAsset.url} alt="Rainbow Registered / Arc-en-ciel Officiel accreditation logo" width={1920} height={620} loading="lazy" className="h-auto w-full" />
            </a>

            <div>
              <p className="font-accent text-xl italic text-primary-accent">Proudly Rainbow Registered</p>
              <h2 className="mt-3 font-display text-[clamp(2.6rem,6vw,5.4rem)] font-black uppercase leading-[0.82] text-headline">
                Everyone is<br />welcome here.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed md:text-lg">
                Placeholder copy. Udderly Ridiculous Farm Life is a Rainbow Registered business, which means we are committed to providing a welcoming, safe and inclusive environment for 2SLGBTQI+ visitors, families, employees and community members. Everybody gets the same warm welcome here, and the animals genuinely do not care who you are — they just want the brush.
              </p>
            </div>
          </div>
        </section>

        {/* FeastON Certification */}
        <section id="feast-on" className="bg-farm-beige py-20 md:py-28">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[1fr_0.85fr]">
            <div className="order-2 lg:order-1">
              <p className="font-accent text-xl italic text-primary-accent">Certified Local by FeastON</p>
              <h2 className="mt-3 font-display text-[clamp(2.6rem,6vw,5.4rem)] font-black uppercase leading-[0.82] text-headline">
                We eat<br />and serve local.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed md:text-lg">
                FeastON officially verifies that a significant portion of our ingredients and products are sourced right here in Ontario. We only support local, Ontario-made products, and so far we have had the privilege of supporting more than 140 local producers through everything we serve, sell and celebrate on the farm.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed md:text-lg">
                When you visit, you are not just meeting the animals — you are tasting the neighbourhood.
              </p>
            </div>

            <a
              href="https://feaston.com/"
              target="_blank"
              rel="noreferrer"
              className="order-1 mx-auto block w-full max-w-sm transition-transform duration-300 hover:scale-105 hover:rotate-2 active:scale-95 lg:order-2"
            >
              <img src={feastOnLogoAsset.url} alt="FeastON Certified Local by the Culinary Tourism Alliance logo" width={800} height={800} loading="lazy" className="h-auto w-full" />
            </a>
          </div>
        </section>

        {/* Newsletter (reused) */}
        <NewsletterSection />

        {/* Location */}
        <section id="location" className="bg-farm-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-3xl font-display text-[clamp(2.4rem,6.5vw,6rem)] font-black uppercase leading-[0.8] text-headline">
                Come find us.<br /><span className="text-stroke">We&apos;re out here somewhere.</span>
              </h2>
              <p className="max-w-md border-l-4 border-primary-accent pl-5 text-lg font-semibold">
                Roughly 30 minutes from Kitchener-Waterloo, past the part where your GPS gets confident.
              </p>
            </div>

            <div className="mt-12 grid gap-7 lg:grid-cols-[1fr_2fr]">
              <div className="border-2 border-headline bg-background p-7 shadow-[10px_10px_0_var(--headline)]">
                <p className="font-display text-3xl font-black uppercase leading-none text-headline">Udderly Ridiculous Farm Life</p>
                <address className="mt-5 not-italic leading-relaxed">
                  906200 Township Rd 12<br />
                  Blandford-Blenheim, ON N0J 1B0<br />
                  Canada
                </address>
                <Button asChild size="large" className="mt-7">
                  <a href="https://www.google.com/maps/dir/?api=1&destination=906200+Township+Rd+12%2C+Blandford-Blenheim%2C+ON+N0J+1B0" target="_blank" rel="noreferrer">Get directions <ArrowRight aria-hidden="true" /></a>
                </Button>
              </div>

              <div className="overflow-hidden border-2 border-headline bg-background p-2 shadow-[10px_10px_0_var(--secondary-accent)]">
                <iframe
                  title="Map showing the location of Udderly Ridiculous Farm Life"
                  src="https://www.google.com/maps?q=906200+Township+Rd+12,+Blandford-Blenheim,+ON+N0J+1B0&z=13&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[420px] w-full border-0 md:h-[520px]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
