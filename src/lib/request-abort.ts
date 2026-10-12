export function getAbortedRequestResponse(request: Request): Response | undefined {
  if (!request.signal.aborted) return undefined;

  console.info(`[SSR] Client cancelled ${request.method} ${new URL(request.url).pathname}`);
  return new Response(null, {
    status: 499,
    statusText: "Client Closed Request",
    headers: { "cache-control": "no-store" },
  });
}
