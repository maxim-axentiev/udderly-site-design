import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/animals-for-sale")({
  component: () => <Outlet />,
});
