import { createFileRoute } from "@tanstack/react-router";

import { ExperiencePageTemplate } from "@/components/experience/ExperiencePageTemplate";

const TITLE = "Alpaca Experience & Fibre Nesting Ball Workshop";
const INTRO =
  "Placeholder copy. Meet the herd, then turn their fluff into something the local birds will absolutely fight over.";

export const Route = createFileRoute("/experiences_/alpaca-experience-and-fibre-nesting-ball-workshop")({
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
