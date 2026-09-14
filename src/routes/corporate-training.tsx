import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/corporate-training")({
  component: CorporateTrainingLayout,
});

function CorporateTrainingLayout() {
  return <Outlet />;
}
