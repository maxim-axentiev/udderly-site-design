import { createFileRoute } from "@tanstack/react-router";

import { ExperiencePageTemplate } from "@/components/experience/ExperiencePageTemplate";

const TITLE = "Alpaca Lunch Picnic";
const INTRO =
  "Placeholder copy. A proper picnic, plus alpacas judging your sandwich choices. Local Ontario food only.";

export const Route = createFileRoute("/experiences_/alpaca-lunch-picnic")({
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
  component: () => <ExperiencePageTemplate title={TITLE} intro={INTRO} showFeastOn />,
});
