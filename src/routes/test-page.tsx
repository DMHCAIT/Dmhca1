import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test-page")({
  component: TestPage,
});

function TestPage() {
  return (
    <div className="min-h-screen bg-white">
      <h1>Test Page</h1>
      <p>If you see this, the build system works!</p>
    </div>
  );
}
