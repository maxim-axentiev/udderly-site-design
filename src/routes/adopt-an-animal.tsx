import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/adopt-an-animal")({
  component: AdoptAnAnimalLayout,
});

function AdoptAnAnimalLayout() {
  return <Outlet />;
}
