import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/paediatrics-courses/")({
  component: PaediatricsCoursesIndex,
});

function PaediatricsCoursesIndex() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the main paediatrics-courses page
    navigate({ to: "/paediatrics-courses" });
  }, [navigate]);

  return null;
}
