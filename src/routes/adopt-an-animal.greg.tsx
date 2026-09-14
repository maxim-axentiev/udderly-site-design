import { createFileRoute } from "@tanstack/react-router";

import { AnimalAdoptionPage, buildAdoptionMeta } from "@/components/adopt/AnimalAdoptionPage";

const NAME = "Greg";
const TAGLINE = "Naps First, Questions Later";

export const Route = createFileRoute("/adopt-an-animal/greg")({
  head: () => buildAdoptionMeta(NAME, TAGLINE),
  component: () => <AnimalAdoptionPage name={NAME} tagline={TAGLINE} />,
});
