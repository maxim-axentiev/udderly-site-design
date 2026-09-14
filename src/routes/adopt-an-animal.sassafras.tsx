import { createFileRoute } from "@tanstack/react-router";

import { AnimalAdoptionPage, buildAdoptionMeta } from "@/components/adopt/AnimalAdoptionPage";

const NAME = "Sassafras";
const TAGLINE = "Chief of Mischief";

export const Route = createFileRoute("/adopt-an-animal/sassafras")({
  head: () => buildAdoptionMeta(NAME, TAGLINE),
  component: () => <AnimalAdoptionPage name={NAME} tagline={TAGLINE} />,
});
