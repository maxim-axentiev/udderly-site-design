import { createFileRoute } from "@tanstack/react-router";

import { AnimalAdoptionPage, buildAdoptionMeta } from "@/components/adopt/AnimalAdoptionPage";

const NAME = "Michael";
const TAGLINE = "Yes, That Is His Real Name";

export const Route = createFileRoute("/adopt-an-animal/michael")({
  head: () => buildAdoptionMeta(NAME, TAGLINE),
  component: () => <AnimalAdoptionPage name={NAME} tagline={TAGLINE} />,
});
