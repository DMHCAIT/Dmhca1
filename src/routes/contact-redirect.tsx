import { createFileRoute, Navigate } from "@tanstack/react-router";

// Redirect legacy /contact to /contact-us
export const Route = createFileRoute("/contact-redirect")({
  component: () => <Navigate to="/contact-us" />,
});
