import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/paediatrics-courses/")({
  beforeLoad: () => {
    throw redirect({
      to: "/top-medical-courses/$fmt",
      params: { fmt: "pediatrics" },
      statusCode: 301,
    });
  },
});
