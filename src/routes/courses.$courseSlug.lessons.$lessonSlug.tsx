import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/courses/$courseSlug/lessons/$lessonSlug")({
  loader: async ({ params }) => {
    // Redirect to the course page (lessons are not available as separate pages)
    // The lesson slug is included in the URL but we redirect to the main course page
    throw redirect({
      to: "/courses/$slug",
      params: { slug: params.courseSlug },
    });
  },
});
