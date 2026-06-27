//#region src/lib/error-capture.ts
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
//#endregion
//#region src/lib/error-page.ts
function renderErrorPage() {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        color: #1a202c;
        display: grid;
        place-items: center;
        min-height: 100vh;
        padding: 1.5rem;
      }
      
      .container {
        max-width: 32rem;
        width: 100%;
        background: white;
        border-radius: 1rem;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        padding: 3rem 2rem;
        text-align: center;
      }
      
      .icon {
        width: 4rem;
        height: 4rem;
        margin: 0 auto 1.5rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
      }
      
      h1 {
        font-size: 1.875rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      p {
        font-size: 1rem;
        color: #4a5568;
        margin-bottom: 2rem;
        line-height: 1.6;
      }
      
      .actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      
      button, a {
        padding: 0.75rem 1.75rem;
        border-radius: 0.5rem;
        font: inherit;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        border: 2px solid transparent;
        transition: all 0.3s ease;
        font-size: 1rem;
      }
      
      .primary {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
      }
      
      .primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
      }
      
      .secondary {
        background: transparent;
        color: #667eea;
        border-color: #667eea;
      }
      
      .secondary:hover {
        background: #f0f4ff;
        transform: translateY(-2px);
      }
      
      @media (max-width: 640px) {
        .container {
          padding: 2rem 1.5rem;
        }
        
        h1 {
          font-size: 1.5rem;
        }
        
        .actions {
          flex-direction: column;
        }
        
        button, a {
          width: 100%;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="icon">⚠️</div>
      <h1>Oops! Something went wrong</h1>
      <p>We encountered an unexpected error. Don't worry—it's not your fault. Try refreshing the page or head back to the home page.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">↻ Try again</button>
        <a class="secondary" href="/">← Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
//#endregion
//#region src/server.ts
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./assets/server-BCAQRCGh.js").then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!body.includes("\"unhandled\":true") || !body.includes("\"message\":\"HTTPError\"")) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
var server_default = { async fetch(request, env, ctx) {
	try {
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { server_default as default, renderErrorPage as t };
