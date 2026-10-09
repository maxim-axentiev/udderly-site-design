import { createFileRoute } from "@tanstack/react-router";

import alpacaWalk from "@/assets/alpaca-walk.jpg";
import donkeyPicnic from "@/assets/donkey-picnic.jpg";
import goatCuddles from "@/assets/goat-cuddles.jpg";
import highlandHero from "@/assets/highland-hero.jpg";
import { BookExperienceCta } from "@/components/shared/BookExperienceCta";
import { PageHero } from "@/components/shared/PageHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

const DESCRIPTION =
  "Meet the team behind Udderly Ridiculous Farm Life — the humans who keep the place running while the animals run the show.";

const team = [
  {
    name: "Team member 1",
    photo: highlandHero,
    alt: "Team member with a mini Highland cow",
    rotate: "-rotate-1",
  },
  {
    name: "Team member 2",
    photo: goatCuddles,
    alt: "Team member cuddling a goat in the barn",
    rotate: "rotate-1",
  },
  {
    name: "Team member 3",
    photo: alpacaWalk,
    alt: "Team member walking an alpaca",
    rotate: "-rotate-1",
  },
  {
    name: "Team member 4",
    photo: donkeyPicnic,
    alt: "Team member with a miniature donkey",
    rotate: "rotate-1",
  },
  {
    name: "Team member 5",
    photo: alpacaWalk,
    alt: "Team member greeting guests on the farm",
    rotate: "-rotate-1",
  },
  {
    name: "Team member 6",
    photo: goatCuddles,
    alt: "Team member playing with baby goats",
    rotate: "rotate-1",
  },
  {
    name: "Team member 7",
    photo: highlandHero,
    alt: "Team member in the pasture with the herd",
    rotate: "-rotate-1",
  },
  {
    name: "Team member 8",
    photo: donkeyPicnic,
    alt: "Team member preparing a farm picnic",
    rotate: "rotate-1",
  },
  {
    name: "Team member 9",
    photo: alpacaWalk,
    alt: "Team member waving hello at the farm gate",
    rotate: "-rotate-1",
  },
];

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team | Udderly Ridiculous Farm Life" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Team | Udderly Ridiculous Farm Life" },
      { property: "og:description", content: "We have no idea what we're doing. We just let the animals run the show." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-body-copy">
      <SiteHeader />

      <main id="top">
        <PageHero
          title={
            <>
              The <span className="text-secondary-accent">Team</span>
            </>
          }
          subtext="We have no idea what we’re doing. We just let the animals run the show."
        />

        <section className="overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <article
                  key={member.name}
                  className={`group flex flex-col border-2 border-headline bg-background p-3 shadow-[7px_7px_0_var(--headline)] transition-transform duration-200 hover:-translate-y-2 ${member.rotate}`}
                >
                  <div className="overflow-hidden">
                    <img src={member.photo} alt={member.alt} width={1000} height={750} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-3 pb-4">
                    <h2 className="font-display text-3xl font-black uppercase leading-none text-headline">{member.name}</h2>
                    <p className="mt-3 leading-relaxed">
                      Placeholder bio. A short, fun paragraph about this team member and what they do around the farm.
                    </p>
                    <p className="mt-4 border-l-4 border-primary-accent pl-4 font-accent text-lg italic text-headline">
                      Udderly ridiculous fact: Placeholder — send us the real fact and we’ll drop it in.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <BookExperienceCta
          title="The animals would love to meet you."
          copy="Our team will show you around. The herd will do the rest."
        />
      </main>

      <SiteFooter />
    </div>
  );
}
