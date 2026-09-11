import { createFileRoute } from "@tanstack/react-router";

import { ExperiencePageTemplate } from "@/components/experience/ExperiencePageTemplate";

const TITLE = "Goat Cuddles";
const INTRO =
  "Come meet our 4-legged toddlers, teenagers and adults. Slow down, snuggle up, and experience the pure joy of goat cuddles.";

export const Route = createFileRoute("/experiences_/goat-cuddles")({
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
  component: () => <ExperiencePageTemplate title={TITLE} intro={INTRO} />,
});
