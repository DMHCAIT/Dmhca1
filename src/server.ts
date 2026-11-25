import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { getAbortedRequestResponse } from "./lib/request-abort";
import { normalizeHtmlMetadata } from "./lib/html-metadata";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

const redirectMap: Record<string, string> = {
  "/scope-of-cardiology": "/blog",
  "/scope-of-radiology": "/blog",
  "/radiology-courses-after-12th-in-india": "/top-medical-courses/radiology",
  "/fellowship": "/top-medical-courses/fellowships",
  "/cardiology-courses/city": "/top-medical-courses/cardiology",
  "/what-is-mrcp-and-why-should-mbbs-students-pursue-it": "/blog",
  "/obstetrics-and-gynecology-courses": "/top-medical-courses/obs-gynae",
  "/critical-care-medicine-courses": "/top-medical-courses/emergency",
  "/neurology-courses": "/top-medical-courses/neurology",
  "/embryology-courses": "/top-medical-courses/reproductive",
  "/paediatrics-courses": "/top-medical-courses/pediatrics",
  "/top-medical-courses/paediatrics": "/top-medical-courses/pediatrics",
  "/oncology-courses": "/top-medical-courses/oncology",
  "/emergency-medicine-courses": "/top-medical-courses/emergency",
  "/clinical-embryology-courses": "/top-medical-courses/reproductive",
  "/clinical-cardiology-courses": "/top-medical-courses/cardiology",
  "/diabetology-courses": "/top-medical-courses/nutrition",
  "/internal-medicine-courses": "/top-medical-courses/medicine",
  "/how-to-become-a-dermatologist": "/blog",
  "/careers": "/",
  "/echocardiography-courses": "/top-medical-courses/cardiology",
  "/fellowship-in-neurology": "/top-medical-courses/fellowships/neurology",
  "/in/fellowship-in-neurology": "/top-medical-courses/fellowships/neurology",
  "/in/radiology-courses/ates-in-12th-in-india":
    "/top-medical-courses/radiology",
  "/courses/certificate-courses-in-tuberculosis":
    "/top-medical-courses/fellowship",
};

const redirectPrefixes: Array<[string, string]> = [
  ["/cardiology-courses/", "/top-medical-courses/cardiology"],
  ["/emergency-medicine-courses/", "/top-medical-courses/emergency"],
  ["/clinical-cardiology-courses/", "/top-medical-courses/cardiology"],
  ["/paediatrics-courses/", "/top-medical-courses/pediatrics"],
  ["/cosmetology-courses/", "/courses/fellowship-in-cosmetology-and-aesthetic-medicine"],
  ["/critical-care-medicine-courses/", "/top-medical-courses/medicine"],
  ["/oncology-courses/", "/top-medical-courses/oncology"],
  ["/radiology-courses/", "/top-medical-courses/radiology"],
  ["/neurology-courses/", "/top-medical-courses/neurology"],
  ["/in/metrology-courses/", "/top-medical-courses/neurology"],
];

const canonicalMap: Record<string, string> = {
  "/about-dmhca": "https://www.dmhca.in/about-dmhca",
  "/top-medical-courses/pg-diplomas":
    "https://www.dmhca.in/top-medical-courses/pg-diplomas",
  "/top-medical-courses/fellowships":
    "https://www.dmhca.in/top-medical-courses/fellowships",
  "/blog": "https://www.dmhca.in/blog",
  "/top-medical-courses/obs-gynae":
    "https://www.dmhca.in/top-medical-courses/obs-gynae",
  "/top-medical-courses/cardiology":
    "https://www.dmhca.in/top-medical-courses/cardiology",
  "/top-medical-courses/emergency":
    "https://www.dmhca.in/top-medical-courses/emergency",
  "/top-medical-courses/neurology":
    "https://www.dmhca.in/top-medical-courses/neurology",
  "/top-medical-courses/reproductive":
    "https://www.dmhca.in/top-medical-courses/reproductive",
  "/top-medical-courses/pediatrics":
    "https://www.dmhca.in/top-medical-courses/pediatrics",
  "/top-medical-courses/oncology":
    "https://www.dmhca.in/top-medical-courses/oncology",
  "/top-medical-courses/nutrition":
    "https://www.dmhca.in/top-medical-courses/nutrition",
  "/top-medical-courses/medicine":
    "https://www.dmhca.in/top-medical-courses/medicine",
  "/top-medical-courses/radiology":
    "https://www.dmhca.in/top-medical-courses/radiology",
  "/courses/fellowship-in-cosmetology-and-aesthetic-medicine":
    "https://www.dmhca.in/courses/fellowship-in-cosmetology-and-aesthetic-medicine",
  "/top-medical-courses/fellowships/neurology":
    "https://www.dmhca.in/top-medical-courses/fellowships/neurology",
};

function normalizePath(pathname: string): string {
  if (pathname.length > 1) return pathname.replace(/\/+$/, "");
  return pathname;
}

function getRedirectPath(pathname: string): string | undefined {
  const normalized = normalizePath(pathname);
  const exact = redirectMap[normalized];
  if (exact) return exact;

  for (const [prefix, destination] of redirectPrefixes) {
    if (normalized.startsWith(prefix)) return destination;
  }
  return undefined;
}

async function applyCanonical(
  response: Response,
  canonical: string | undefined,
): Promise<Response> {
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) return response;

  const updated = normalizeHtmlMetadata(await response.text(), canonical);

  const headers = new Headers(response.headers);
  headers.delete("content-length");
  return new Response(updated, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(
  request: Request,
  response: Response,
): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  try {
    const body = await response.clone().text();
    const abortedResponse = getAbortedRequestResponse(request);
    if (abortedResponse) return abortedResponse;
    if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
      return response;
    }

    console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  } catch (error) {
    const abortedResponse = getAbortedRequestResponse(request);
    if (abortedResponse) return abortedResponse;

    // Handle connection reset or other errors reading the response body
    console.error("Error reading SSR response body:", error);
    console.error(consumeLastCapturedError() ?? new Error("SSR error with connection reset"));
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const abortedResponse = getAbortedRequestResponse(request);
    if (abortedResponse) return abortedResponse;

    const requestUrl = new URL(request.url);
    if (requestUrl.pathname === "/verification" && requestUrl.searchParams.has("notfound")) {
      return Response.redirect(`${requestUrl.origin}/verification`, 301);
    }
    if (requestUrl.pathname === "/top-medical-courses") {
      const legacyParams = ["q", "s", "search_term_string", "organizer"];
      if (
        legacyParams.some((name) => requestUrl.searchParams.has(name)) &&
        !["cat", "fmt"].some((name) => requestUrl.searchParams.has(name))
      ) {
        return Response.redirect(`${requestUrl.origin}/top-medical-courses`, 301);
      }
    }
    if (requestUrl.pathname.startsWith("/top-medical-courses/")) {
      const legacyParams = ["q", "s", "search_term_string", "organizer"];
      if (
        legacyParams.some((name) => requestUrl.searchParams.has(name)) &&
        !["cat", "fmt"].some((name) => requestUrl.searchParams.has(name))
      ) {
        return Response.redirect(
          `${requestUrl.origin}${requestUrl.pathname}`,
          301,
        );
      }
    }

    const redirectPath = getRedirectPath(requestUrl.pathname);
    if (redirectPath) {
      return Response.redirect(`${requestUrl.origin}${redirectPath}`, 301);
    }

    try {
      const handler = await getServerEntry();
      const abortedBeforeHandling = getAbortedRequestResponse(request);
      if (abortedBeforeHandling) return abortedBeforeHandling;

      let response = await handler.fetch(request, env, ctx);
      const abortedAfterHandling = getAbortedRequestResponse(request);
      if (abortedAfterHandling) return abortedAfterHandling;

      response = await normalizeCatastrophicSsrResponse(request, response);
      const normalizedPath = normalizePath(requestUrl.pathname);
      response = await applyCanonical(response, canonicalMap[normalizedPath]);
      const isCourseListing =
        normalizedPath === "/top-medical-courses" ||
        normalizedPath.startsWith("/top-medical-courses/");
      const hasFilter = ["cat", "fmt", "q", "s", "search_term_string", "organizer"].some((name) =>
        requestUrl.searchParams.has(name),
      );
      if (
        isCourseListing &&
        hasFilter &&
        response.status === 200 &&
        response.headers.get("content-type")?.includes("text/html")
      ) {
        const headers = new Headers(response.headers);
        headers.set("X-Robots-Tag", "noindex, follow");
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers,
        });
      }
      return response;
    } catch (error) {
      const abortedResponse = getAbortedRequestResponse(request);
      if (abortedResponse) return abortedResponse;

      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
