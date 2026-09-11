import { createFileRoute } from "@tanstack/react-router";

import { ExperiencePageTemplate } from "@/components/experience/ExperiencePageTemplate";

const TITLE = "Private Miniature Donkey Lunch Picnic";
const INTRO =
  "Placeholder copy. Your group, your table, two donkeys with impeccable timing.";

export const Route = createFileRoute("/experiences/private-miniature-donkey-lunch-picnic")({
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
