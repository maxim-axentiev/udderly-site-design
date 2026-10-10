import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/urbort-blog")({
  component: () => <Outlet />,
});
