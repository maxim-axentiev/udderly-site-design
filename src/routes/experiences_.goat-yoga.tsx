import { createFileRoute } from "@tanstack/react-router";

import { ExperiencePageTemplate } from "@/components/experience/ExperiencePageTemplate";

const TITLE = "Goat Yoga";
const INTRO =
  "Placeholder copy. Downward dog, upward goat. Stretch, breathe, and let tiny hooves audit your form.";

const INSTRUCTOR = {
  title: "Meet your yoga instructor.",
  paragraphs: [
    "Placeholder instructor copy. Your class is led by a certified yoga instructor who has been teaching for years and still insists goat yoga is the best kind — because the goats agree, loudly, from on top of your mat.",
    "Placeholder instructor copy. Every session is beginner-friendly, moderately chaotic, and impossible to take too seriously. Mats are provided. Goats are not provided; they simply arrive when they feel like it.",
  ],
};

export const Route = createFileRoute("/experiences_/goat-yoga")({
  head: () => ({
    meta: [
      { title: `${TITLE} | Udderly Ridiculous Farm Life` },
      { name: "description", content: INTRO },
      { property: "og:title", content: `${TITLE} at Udderly Ridiculous Farm Life` },
      { property: "og:description", content: INTRO },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ExperiencePageTemplate title={TITLE} intro={INTRO} instructor={INSTRUCTOR} />
  ),
});
