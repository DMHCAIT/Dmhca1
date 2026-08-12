import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — DMHCA" },
      { name: "description", content: "Notes from DMHCA — clinical updates, course launches, and faculty insights." },
    ],
  }),
  component: BlogLayout,
});

function BlogLayout() {
  return <Outlet />;
}
