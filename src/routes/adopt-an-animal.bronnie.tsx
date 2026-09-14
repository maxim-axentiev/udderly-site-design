import { createFileRoute } from "@tanstack/react-router";

import { AnimalAdoptionPage, buildAdoptionMeta } from "@/components/adopt/AnimalAdoptionPage";

const NAME = "Bronnie";
const TAGLINE = "Loudest Voice in the Barn";

export const Route = createFileRoute("/adopt-an-animal/bronnie")({
  head: () => buildAdoptionMeta(NAME, TAGLINE),
  component: () => <AnimalAdoptionPage name={NAME} tagline={TAGLINE} />,
});
