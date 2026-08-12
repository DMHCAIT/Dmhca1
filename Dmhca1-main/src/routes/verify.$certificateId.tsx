import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/verify/$certificateId")({
  loader: ({ params }) => {
    throw redirect({
      to: `/verification/${params.certificateId}`,
    });
  },
});
