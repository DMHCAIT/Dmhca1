import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/obstetrics-and-gynecology-courses/")({
  component: ObsGynaeCoursesIndex,
});

function ObsGynaeCoursesIndex() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the main obstetrics-and-gynecology-courses page
    navigate({ to: "/obstetrics-and-gynecology-courses" });
  }, [navigate]);

  return null;
}
