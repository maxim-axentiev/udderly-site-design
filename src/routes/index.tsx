import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Gamepad2, Instagram, Menu } from "lucide-react";

import donkeyPicnic from "@/assets/donkey-picnic.jpg";
import highlandHero from "@/assets/highland-hero.jpg";
import animalsForSaleAsset from "@/assets/homepage-animals-for-sale.png.asset.json";
import experiencesPhotoAsset from "@/assets/homepage-experiences.png.asset.json";
import giftAGoatAsset from "@/assets/homepage-gift-a-goat.png.asset.json";
import glampingPhotoAsset from "@/assets/homepage-glamping.png.asset.json";
import iceCreamAsset from "@/assets/homepage-ice-cream.png.asset.json";
import storePhotoAsset from "@/assets/homepage-store.png.asset.json";
import tripadvisor2023 from "@/assets/tripadvisor-2023.png.asset.json";
import tripadvisor2024 from "@/assets/tripadvisor-2024.png.asset.json";
import tripadvisor2025 from "@/assets/tripadvisor-2025.png.asset.json";
import tripadvisor2026 from "@/assets/tripadvisor-2026.png.asset.json";

const experiencesPhoto = experiencesPhotoAsset.url;
const glampingPhoto = glampingPhotoAsset.url;
const animalsForSalePhoto = animalsForSaleAsset.url;
const farmStore = storePhotoAsset.url;
const iceCream = iceCreamAsset.url;
const giftAGoat = giftAGoatAsset.url;
import ownersFamily from "@/assets/owners-family.jpg";
import ownersFun from "@/assets/owners-fun.jpg";
import { GiftGoatCounter } from "@/components/home/GiftGoatCounter";
import { MediaCarousel } from "@/components/home/MediaCarousel";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { UrbortSection } from "@/components/home/UrbortSection";
import { WelfareSection } from "@/components/home/WelfareSection";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farm Animal Experiences | Udderly Ridiculous" },
      {
        name: "description",
        content: "Meet mini Highland cows, alpacas, mini donkeys and goats through intimate, award-winning farm experiences near Kitchener-Waterloo.",
      },
      { property: "og:title", content: "Udderly Ridiculous Farm Life" },
      {
        property: "og:description",
        content: "Come do something udderly ridiculous with Ontario's fluffiest farm personalities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = ["Experiences", "Meet the Herd", "Stay", "Adopt", "Corporate", "Our Farm"];

const awards = [
  { year: "2023", badge: tripadvisor2023.url },
  { year: "2024", badge: tripadvisor2024.url },
  { year: "2025", badge: tripadvisor2025.url },
  { year: "2026", badge: tripadvisor2026.url },
];

const experiences = [
  {
    title: "Award winning farm experiences",
    fact: "MOST POPULAR",
    copy: "Get licked by a mini Highland cow, downward dog pose with a mini goat, enjoy a romantic lunch picnic with alpacas, and SOOO much more!",
    cta: "See all experiences",
    image: experiencesPhoto,
    alt: "Guest surrounded by playful goats during a farm experience",
    className: "lg:-rotate-2 lg:translate-y-6",
  },
  {
    title: "Farm glamping with the animals",
    fact: "STAY OVER",
    copy: "Unwind in a luxury RV right on the farm, with front-row seats to stunning sunsets and animals who’ll audition for your next Instagram post.",
    cta: "Sleepover with the animals",
    image: glampingPhoto,
    alt: "Luxury RV glowing at night beside a campfire on the farm",
    className: "lg:rotate-1",
  },
  {
    title: "Corporate training and team experiences",
    fact: "FOR TEAMS",
    copy: "Leverage 20+ years of corporate training expertise along with the unique environment of our crazy animals to learn a lot, have fun, and bond.",
    cta: "See all training programs and team-building experiences",
    image: donkeyPicnic,
    alt: "Mini donkey greeting a group of visitors",
    className: "lg:-rotate-1 lg:translate-y-10",
  },
  {
    title: "Buy an animal from the farm",
    fact: "FOR SALE",
    copy: "Add lovingly and Udderly ridiculously raised farm animals to your pastures.",
    cta: "View all animals for sale",
    image: animalsForSalePhoto,
    alt: "Two fluffy mini Highland calves standing in a sunny pasture",
    className: "lg:rotate-2 lg:translate-y-2",
  },
];

const milestones = [
  "14 awards for our experiences",
  "Gone viral on TikTok and Instagram",
  "Been featured in the news",
  "Top 10% of worldwide attractions",
  "Over 40,000 guests since 2021",
];

const faqs = [
  {
    q: "Are you a petting farm?",
    a: "Nope! The words “petting farm” give us the ick! We’re much more ethical and treat our animals better, which means they’re happy, healthy, and ready to connect with you!",
  },
  {
    q: "Is your farm pet friendly?",
    a: "Nope! Although we’re sure your dog is really cute and great, our animals may get scared by their presence (unless you have a pet rock or something, then they’ll probably be okay)! Also, our guard llama will see it as a stranger and do his job… and he’s really dang good at his job!",
  },
  {
    q: "Are kids allowed on the farm?",
    a: "Yup! However, please read the experience descriptions carefully, as some of our activities have age restrictions for the safety and comfort of our animals and other guests. We recommend checking these details before booking to ensure the experience is the perfect fit for your family — because while goats love kids, they don’t do babysitting!",
  },
  {
    q: "Do I need a reservation to visit the farm?",
    a: "Nope! You can always stop by the farm market store or stroll our walkable paths to see the animals during our open hours. But if you’re planning on doing an experience without booking it in advance, there’s a chance it may already be full! So we definitely recommend to book an experience in advance… unless you enjoy the thrill of last-minute plans, then good luck and buy yourself an ice-cream while you’re here!",
  },
  {
    q: "Is the farm wheelchair accessible?",
    a: "Ehh, kinda? We’re not officially wheelchair certified because we don’t have specific features like ramps or electric doors, but plenty of visitors with wheelchairs have successfully navigated the farm. Our spaces are wide enough to accommodate, and our staff is always happy to assist you.",
  },
  {
    q: "Is parking available?",
    a: "Yup! Parking is located next to the farm market store, and there are handicap spots closer to the entrance. Um, not sure what else you need to know about our parking… OH, read the signs and please don’t drive through the farm. Thank you!",
  },
  {
    q: "What is your cancellation policy?",
    a: "Here you go my friend! You’ll see this cancellation policy on every experience page:",
    list: [
      "Please note in order to create the best experience for our guests and our animals we have limited numbers in each experience. It is very difficult to rebook a last-minute cancellation and so we have instituted a fair cancellation policy that we need to adhere to.",
      "Customers will receive full credit (less booking system processing fee) in case of operator cancellation due to weather or other unforeseen circumstances that are out of our control.",
      "Cancellations can be made with a full refund or credit 5 days or more prior to the experience (less booking system processing fee).",
      "Cancellations can be made with 50% refund or 50% credit 2-4 days prior to the experience (less booking system processing fee).",
      "Cancellations within 48 hours of their booked experience will not be refunded or credited.",
      "No-shows will not be provided a refund or credit for the experience.",
    ],
  },
  {
    q: "What happens when there is bad weather?",
    a: "THE SHOW GOES ON! Most of our experiences can continue despite bad weather. For example, Goat Recess is moved inside the barn, there’s a large tent for Goat Yoga, and you’ll eat under gazebos during Alpaca Lunch and Sunset Picnics. For other experiences, we recommend bringing protective clothing like a raincoat or poncho if rain is in the forecast. If you’re prone to mosquito bites, we also suggest bringing some bug spray. If the weather is dangerously terrible, then we will offer credit and refunds.",
  },
  {
    q: "What days and times are you open?",
    a: "Spring/summer/fall | May – September:",
    list: [
      "Monday – closed",
      "Tuesday – closed",
      "Wednesday – 10:00am to 5:00pm",
      "Thursday – 10:00am to 5:00pm",
      "Friday – 10:00am to 6:00pm",
      "Saturday – 10:00am to 6:00pm",
      "Sunday – 10:00am to 5:00pm",
    ],
    a2: "Winter | October to April:",
    list2: [
      "Monday – closed",
      "Tuesday – closed",
      "Wednesday – closed",
      "Thursday – closed",
      "Friday – 10:00am to 5:00pm",
      "Saturday – 10:00am to 5:00pm",
      "Sunday – 10:00am to 5:00pm",
      "Midweek only by appointment or chance (call us)",
    ],
  },
  {
    q: "How early should I arrive before my experience begins?",
    a: "We recommend arriving 10 minutes before your experience begins to check in, sign the waiver if you haven’t already, wash your hands, and mentally prepare to feel cute aggression. We typically start right on time so you can get the most out of your experience! If you arrive earlier than 10 minutes, feel free to browse the farm market store or stroll the walkable paths to see the animals — just be sure to ask a staff member about the paths.",
  },
  {
    q: "Is there a washroom on site?",
    a: "Yup, we have three washrooms! There is one washroom inside the farm market store. You’ll notice there are two doors inside the washroom: one that leads from the store to the washroom, and one that leads from the washroom to the goat barn. Please lock both doors when you’re inside—otherwise, someone might walk in, and we’re pretty sure you wouldn’t want that. Oh, and definitely don’t open the door to the goat barn, unless you want goats jumping on your lap while you’re on the toilet. Sounds fun, but it’s not (we promise), and getting them back into the barn is a whole operation! There are two more spacious washrooms outside behind the goat barn!",
  },
] as {
  q: string;
  a: string;
  list?: string[];
  a2?: string;
  list2?: string[];
}[];


function Index() {
  return (
    <div className="min-h-screen bg-background text-body-copy">
      <header className="relative z-50 border-b-2 border-headline bg-background">
        <div className="mx-auto flex min-h-24 max-w-[1500px] items-center justify-between gap-6 px-5 md:px-8">
          <a href="#top" className="group flex max-w-52 -rotate-1 flex-col font-display font-black uppercase leading-[0.78] text-headline md:max-w-60" aria-label="Udderly Ridiculous Farm Life home">
            <span className="text-[1.7rem] md:text-[2rem]">Udderly Ridiculous</span>
            <span className="mt-1 flex items-center gap-2 text-sm tracking-[0.16em] text-primary-accent"><span className="h-1.5 w-7 bg-secondary-accent" /> Farm Life</span>
          </a>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="font-display text-base font-bold uppercase text-headline decoration-secondary-accent decoration-[3px] underline-offset-8 hover:underline">{item}</a>)}
          </nav>

          <Button asChild className="hidden lg:inline-flex"><a href="#experiences">Book an Experience <ArrowRight aria-hidden="true" size={18} /></a></Button>

          <details className="relative xl:hidden">
            <summary className="flex size-12 cursor-pointer list-none items-center justify-center rounded-full border-2 border-headline bg-farm-beige text-headline [&::-webkit-details-marker]:hidden" aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
            <div className="absolute right-0 top-14 w-72 border-2 border-headline bg-background p-5 shadow-[7px_7px_0_var(--secondary-accent)]">
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="border-b border-border py-3 font-display text-xl font-bold uppercase text-headline">{item}</a>)}
                <Button asChild className="mt-5"><a href="#experiences">Book an Experience</a></Button>
              </nav>
            </div>
          </details>
        </div>
      </header>

      <main id="top">
        {/* 1. Hero */}
        <section className="relative overflow-hidden bg-farm-beige">
          <div className="farm-dots absolute -left-10 top-12 h-28 w-28 rotate-12 opacity-20" aria-hidden="true" />
          <div className="mx-auto grid min-h-[760px] max-w-[1500px] items-center gap-10 px-5 py-14 md:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:py-20">
            <div className="relative z-10 lg:pb-14">
              <h1 className="max-w-3xl font-display text-[clamp(4.6rem,10vw,9.5rem)] font-black uppercase leading-[0.75] text-headline">

                Come do something <span className="relative inline-block text-primary-accent after:absolute after:-bottom-2 after:left-1 after:h-2 after:w-full after:-rotate-1 after:bg-secondary-accent">udderly</span> ridiculous.
              </h1>
              <p className="mt-10 max-w-xl text-lg font-medium leading-relaxed md:text-xl">
                Connect with gentle mini Highland cows, quirky alpacas, curious mini donkeys, and playful goats in authentic, intimate, and responsible farm experiences.
              </p>
              <div className="mt-8">
                <Button asChild size="large"><a href="#experiences">Book an Experience <ArrowRight aria-hidden="true" /></a></Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[690px] pb-12 lg:pb-0">
              <div className="absolute -right-10 top-10 h-[80%] w-[85%] rotate-3 rounded-[48%_52%_42%_58%/45%_40%_60%_55%] bg-secondary-accent" aria-hidden="true" />
              <div className="absolute -left-2 bottom-2 z-20 -rotate-6 bg-primary-accent px-5 py-3 font-accent text-lg italic text-primary-foreground shadow-[5px_5px_0_var(--headline)] md:text-2xl">Make core memories.</div>
              <img src={highlandHero} alt="Curious fluffy mini Highland cow looking at the camera" width={1280} height={1536} fetchPriority="high" className="relative z-10 ml-auto aspect-[4/5] w-[88%] rotate-2 rounded-[45%_45%_10%_10%/25%_25%_8%_8%] border-[5px] border-background object-cover object-center shadow-[12px_14px_0_var(--headline)]" />
              <div className="gentle-float absolute -right-1 -top-5 z-20 flex size-28 items-center justify-center rounded-full border-2 border-headline bg-background p-3 text-center font-display text-lg font-black uppercase leading-none text-headline shadow-[4px_4px_0_var(--primary-accent)] md:size-36 md:text-2xl">Ooh,<br />amazing</div>

            </div>
          </div>
        </section>

        {/* Awards strip */}
        <section aria-label="TripAdvisor awards" className="border-y-2 border-headline bg-background py-6">
          <div className="mx-auto flex max-w-[1500px] flex-col items-center gap-5 px-5 md:flex-row md:justify-between md:px-8">
            <div className="text-center md:max-w-[24rem] md:text-left">
              <p className="font-display text-lg font-black uppercase leading-tight text-headline">
                TripAdvisor Travelers’ Choice
              </p>
              <p className="mt-1 text-sm font-semibold">TripAdvisor kinda has a thing for us.</p>
            </div>

            <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-7">
              {awards.map((award, index) => (
                <li key={award.year} className={index % 2 === 0 ? "-rotate-3" : "rotate-3"}>
                  <img src={award.badge} alt={`TripAdvisor Travelers' Choice Award ${award.year}`} width={1080} height={1080} loading="lazy" className="size-20 rounded-full border-2 border-headline object-cover shadow-[3px_3px_0_var(--headline)] md:size-24" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 2. Pick your ridiculousness */}
        <section id="experiences" className="overflow-hidden bg-farm-blue py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8">
            <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
              <h2 className="font-display text-[clamp(2.8rem,8vw,8rem)] font-black uppercase leading-[0.78] text-headline">Pick your<br /><span className="text-stroke">ridiculousness.</span></h2>
              <p className="max-w-sm border-l-4 border-primary-accent pl-5 text-lg font-semibold">Four ways to get ridiculous, mischievous, and happy...ous.</p>
            </div>


            <div className="mt-16 grid gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:pb-14">
              {experiences.map((experience, index) => (
                <article key={experience.title} className={`group relative flex flex-col border-2 border-headline bg-background p-3 shadow-[7px_7px_0_var(--headline)] transition-transform duration-200 hover:-translate-y-2 ${experience.className}`}>
                  <div className="relative overflow-hidden">
                    <img src={experience.image} alt={experience.alt} width={index === 0 ? 1280 : 1024} height={index === 0 ? 1536 : 1280} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className={`absolute right-2 top-2 rounded-full border-2 border-headline px-3 py-1 font-display text-xs font-black uppercase text-headline ${index % 2 === 0 ? "bg-secondary-accent" : "bg-primary-accent text-primary-foreground"}`}>{experience.fact}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-3 pb-4">
                    <h3 className="font-display text-3xl font-black uppercase leading-none text-headline">{experience.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed">{experience.copy}</p>
                    <a href="#experiences" className="mt-5 inline-flex items-start gap-2 font-display text-base font-extrabold uppercase leading-tight text-primary-accent hover:underline">
                      {experience.cta} <ArrowRight size={17} aria-hidden="true" className="mt-1 shrink-0" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Meet the owners */}
        <section id="meet-the-herd" className="relative overflow-hidden bg-farm-beige py-20 md:py-28">
          <div className="absolute right-0 top-0 h-28 w-28 bg-secondary-accent [clip-path:polygon(100%_0,100%_100%,0_0)]" aria-hidden="true" />
          <div className="mx-auto grid max-w-[1360px] items-start gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.05fr]">
            <div className="relative lg:sticky lg:top-8">
              <div className="photo-frame relative">
                <img src={ownersFamily} alt="Cheryl and Greg with their farm greeter dog Aspen in the pasture" width={1280} height={960} loading="lazy" className="w-full border-2 border-headline object-cover" />
                <span className="absolute -bottom-5 -left-3 z-10 -rotate-2 border-2 border-headline bg-primary-accent px-4 py-2 font-display text-lg font-black uppercase text-primary-foreground">Cheryl, Greg &amp; Aspen</span>
              </div>
              <div className="relative mt-16 rotate-2 border-2 border-headline bg-background p-3 shadow-[9px_9px_0_var(--secondary-accent)]">
                <img src={ownersFun} alt="Cheryl and Greg laughing together on the farm" width={1024} height={1280} loading="lazy" className="w-full object-cover" />
                <p className="mt-3 px-1 pb-1 text-center font-accent text-lg italic text-headline">Yes, they are always like this.</p>
              </div>
            </div>


            <div>
              <p className="font-accent text-xl italic text-primary-accent">Meet the owners</p>
              <h2 className="mt-3 font-display text-[clamp(3rem,6.5vw,5.6rem)] font-black uppercase leading-[0.84] text-headline">
                Welcome to Udderly Ridiculous Farm Life
              </h2>
              <div className="mt-7 space-y-5 text-base leading-relaxed md:text-lg">
                <p>
                  Hi, we’re Cheryl &amp; Greg! Beside us is our friendly farm greeter dog, Aspen. Welcome to Udderly Ridiculous Farm Life, our third-generation family farm about 30min from Kitchener-Waterloo. Our story began with a ridiculous idea to make goat-milk ice cream, which quickly grew to experiences when customers asked us to offer Goat Yoga. We thought, “Who’d want goats chewing on their Lululemon pants?” (apparently a lot of people).
                </p>
                <p>
                  Our family farm has become the place for people seeking a true connection to animals and agriculture. A place where sustainability thrives and the human-animal bond sparks joy and understanding.
                </p>
              </div>

              <p className="mt-8 font-accent text-2xl italic text-headline">Fast forward to today…</p>
              <ul className="mt-5 grid gap-3">
                {milestones.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-border pb-3 font-display text-xl font-bold uppercase leading-tight text-headline">
                    <span className="mt-1.5 size-3 shrink-0 rotate-45 bg-secondary-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button asChild size="large" className="mt-9"><a href="#experiences">Learn more about our ridiculous story <ArrowRight aria-hidden="true" /></a></Button>
            </div>
          </div>
        </section>

        {/* 4. In media */}
        <section id="media" className="overflow-hidden bg-farm-blue py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8">
            <div className="max-w-4xl">
              <p className="font-accent text-xl italic text-primary-accent">In the media</p>
              <h2 className="mt-3 font-display text-[clamp(3.4rem,7.5vw,7rem)] font-black uppercase leading-[0.8] text-headline">
                Ridiculousness is contagious
              </h2>
            </div>

            <MediaCarousel />

            <div className="mt-14 flex justify-center">
              <Button asChild size="large"><a href="#experiences">Book your ridiculous adventure <ArrowRight aria-hidden="true" /></a></Button>
            </div>

          </div>
        </section>

        {/* 5. Animal welfare */}
        <WelfareSection />

        {/* 6. Store + ice cream */}
        <section id="store" className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] space-y-20 px-5 md:px-8 md:space-y-28">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative">
                <div className="absolute -inset-4 -rotate-2 bg-secondary-accent" aria-hidden="true" />
                <img src={farmStore} alt="Looking through the doorway into the Farm Market Store with wooden barrels and local products" width={1080} height={800} loading="lazy" className="relative w-full border-2 border-headline object-cover" />
              </div>
              <div>
                <span className="inline-block -rotate-2 bg-secondary-accent px-4 py-2 font-display text-base font-black uppercase text-headline">Farm Market Store</span>
                <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,5.2rem)] font-black uppercase leading-[0.84] text-headline">Bring a piece of the farm home with you</h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed">After your experience, take home a souvenir. Whether it’s a conversation starter or a treat for your belly. We’ve stocked items from over 100 local producers, and you know it’s good because we’re ridiculously picky about what we offer! It’s a win-win-win: you support local businesses, support us, and take something special home with you. We love a triple win!</p>
                <Button asChild size="large" className="mt-8"><a href="#experiences">See what’s inside <ArrowRight aria-hidden="true" /></a></Button>
              </div>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="lg:order-2 relative">
                <div className="absolute -inset-4 rotate-2 bg-primary-accent" aria-hidden="true" />
                <img src={iceCream} alt="Stacked tubs of Udderly Ridiculous goat milk ice cream in many flavours" width={1080} height={800} loading="lazy" className="relative w-full border-2 border-headline object-cover" />
              </div>
              <div className="lg:order-1">
                <span className="inline-block rotate-1 bg-primary-accent px-4 py-2 font-display text-base font-black uppercase text-primary-foreground">Goat Milk Ice-Cream</span>
                <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,5.2rem)] font-black uppercase leading-[0.84] text-headline">Enjoy our goat milk ice-cream</h2>
                <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed">
                  <p>Are you like 65% of lactose intolerant folks? No problem. Our award-winning goat milk ice cream is the perfect treat for a smooth car ride home…no awkward pit stops or windows-down moments.</p>
                  <p>Packed with more nutrients than regular ice cream and featuring rich, unique flavours like Vanilla Lavender and Wine &amp; Dark Chocolate, it’s all made with real, locally sourced ingredients.</p>
                  <p>You’re on a farm with goats… you need to try goat milk ice cream!</p>
                </div>
                <Button asChild size="large" className="mt-8"><a href="#experiences">See the ridiculous flavours <ArrowRight aria-hidden="true" /></a></Button>
              </div>
            </div>

            {/* Gift A Goat */}
            <div className="grid items-center gap-10 border-2 border-headline bg-farm-beige p-7 shadow-[10px_10px_0_var(--headline)] md:grid-cols-[auto_1fr_auto] md:p-12">
              <img src={giftAGoat} alt="Gift A Goat program logo" width={1080} height={1080} loading="lazy" className="mx-auto size-36 -rotate-3 rounded-full border-2 border-headline bg-background object-contain shadow-[4px_4px_0_var(--headline)] md:size-44" />
              <div>
                <span className="font-accent text-xl italic text-primary-accent">Gift A Goat</span>
                <h3 className="mt-2 font-display text-[clamp(1.9rem,4.5vw,3.6rem)] font-black uppercase leading-[0.86] text-headline">Eating ice-cream gives back</h3>
                <p className="mt-4 max-w-xl leading-relaxed">For every tub of Udderly Ridiculous goat milk ice cream you enjoy, we donate a portion of the profit to provide goats to rural communities in need through our Gift a Goat™ program, in partnership with World Vision Canada.</p>
              </div>
              <div className="text-center md:text-right">
                <GiftGoatCounter target={118} />
                <p className="mt-2 font-display text-lg font-black uppercase text-headline">Goats gifted</p>
              </div>
            </div>

          </div>
        </section>

        {/* 7. Reviews */}
        <ReviewsSection />

        {/* 8. Newsletter */}
        <NewsletterSection />

        {/* 9. URBORT */}
        <UrbortSection />

        {/* 10. FAQ */}
        <section id="faq" className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <h2 className="font-display text-[clamp(2.6rem,7vw,6rem)] font-black uppercase leading-[0.82] text-headline">You have questions. We might have answers.</h2>
            <div className="mt-10 border-t-2 border-headline">
              {faqs.map((faq) => (
                <details key={faq.q} className="group border-b-2 border-headline py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-display text-xl font-bold uppercase leading-tight text-headline [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="mt-1 shrink-0 text-primary-accent transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-4 leading-relaxed">{faq.a}</p>
                  {faq.list && (
                    <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
                      {faq.list.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                  {faq.a2 && <p className="mt-5 leading-relaxed">{faq.a2}</p>}
                  {faq.list2 && (
                    <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
                      {faq.list2.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                </details>
              ))}
            </div>
          </div>
        </section>


      </main>

      <footer className="border-t-2 border-headline bg-farm-beige">
        <div className="mx-auto max-w-[1500px] px-5 py-14 md:px-8">
          <div className="grid gap-12 md:grid-cols-[1.1fr_1.5fr_0.5fr]">
            <div>
              <p className="max-w-sm font-display text-5xl font-black uppercase leading-[0.8] text-headline">Udderly<br /><span className="text-primary-accent">Ridiculous</span><br />Farm Life</p>
              <p className="mt-5 max-w-xs font-accent text-lg italic text-headline">Made with questionable judgement and excellent animal care.</p>
            </div>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-4 self-start" aria-label="Footer navigation">
              {[...navItems, "Contact"].map((item) => <a key={item} href={item === "Meet the Herd" ? "#meet-the-herd" : "#experiences"} className="font-display text-xl font-bold uppercase text-headline hover:text-primary-accent hover:underline">{item}</a>)}
            </nav>
            <div className="flex items-start gap-3 md:justify-end">
              <a href="#top" aria-label="Instagram" className="flex size-12 items-center justify-center rounded-full border-2 border-headline bg-secondary-accent text-headline transition-transform hover:-rotate-6"><Instagram aria-hidden="true" /></a>
              <a href="#top" aria-label="TikTok" className="flex size-12 items-center justify-center rounded-full border-2 border-headline bg-background font-display text-lg font-black text-headline transition-transform hover:rotate-6">TT</a>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap justify-between gap-4 border-t-2 border-headline pt-5 text-sm font-semibold">
            <p>Ontario, Canada · Farm life, but make it ridiculous.</p><p>© 2026 Udderly Ridiculous Farm Life</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
