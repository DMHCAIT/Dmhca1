import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/simple-event")({
  head: () => ({
    meta: [
      { title: "Events & Webinars - DMHCA" },
      { name: "description", content: "Explore our upcoming events, webinars, and workshops on medical specialties." },
    ],
  }),
  component: EventsLayout,
});

function EventsLayout() {
  return <Outlet />;
}
