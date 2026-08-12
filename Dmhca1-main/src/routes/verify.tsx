import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/verify")({
  component: VerifyRedirect,
});

function VerifyRedirect() {
  return <Navigate to="/verification" replace />;
}
