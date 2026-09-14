import { createFileRoute } from "@tanstack/react-router";

import { AnimalAdoptionPage, buildAdoptionMeta } from "@/components/adopt/AnimalAdoptionPage";

const NAME = "Chicken";
const TAGLINE = "Small Bird, Enormous Opinions";

export const Route = createFileRoute("/adopt-an-animal/chicken")({
  head: () => buildAdoptionMeta(NAME, TAGLINE),
  component: () => <AnimalAdoptionPage name={NAME} tagline={TAGLINE} showGold={false} />,
});
