// Error reporting utility - logs errors to console
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  if (error instanceof Error) {
    console.error("Error reported:", {
      message: error.message,
      stack: error.stack,
      route: window.location.pathname,
      ...context,
    });
  } else {
    console.error("Error reported:", { error, route: window.location.pathname, ...context });
  }
}
