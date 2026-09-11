import { createFileRoute } from "@tanstack/react-router";

import { ExperiencePageTemplate } from "@/components/experience/ExperiencePageTemplate";

const TITLE = "Taste of Farm Life Family Friendly";
const INTRO =
  "Placeholder copy. Everything the grown-ups get — animals, local Ontario food and three glorious hours — sized for the whole crew.";

export const Route = createFileRoute("/experiences_/taste-of-farm-life-family-friendly")({
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
  component: () => <ExperiencePageTemplate title={TITLE} intro={INTRO} showFeastOn showSignature />,
});
