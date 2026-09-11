import { createFileRoute } from "@tanstack/react-router";

import { ExperiencePageTemplate } from "@/components/experience/ExperiencePageTemplate";

const TITLE = "Miniature Donkey Visits";
const INTRO =
  "Placeholder copy. Small donkeys. Enormous opinions. Excellent company for an unhurried hour on the farm.";

export const Route = createFileRoute("/experiences_/miniature-donkey-visits")({
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
