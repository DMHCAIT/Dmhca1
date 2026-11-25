import { test } from "node:test";
import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { parse } from "dotenv";

test("production browser assets do not contain Supabase service-role credentials", async () => {
  const env = await readFile(".env.local", "utf8")
    .then(parse)
    .catch((error) => {
      if (error.code === "ENOENT") return {};
      throw error;
    });
  const secrets = [
    env.SUPABASE_SERVICE_ROLE_KEY,
    env.VITE_SUPABASE_SERVICE_ROLE_KEY,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    process.env.VITE_SUPABASE_SERVICE_ROLE_KEY,
  ].filter(Boolean);

  async function checkDirectory(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) {
        await checkDirectory(path);
      } else if (/\.(js|html|json|map)$/.test(entry.name)) {
        const content = await readFile(path, "utf8");
        assert.ok(
          !secrets.some((secret) => content.includes(secret)),
          `${path} contains a service credential`,
        );
        for (const match of content.matchAll(
          /eyJ[A-Za-z0-9_-]+\.eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/g,
        )) {
          let payload;
          try {
            payload = JSON.parse(Buffer.from(match[0].split(".")[1], "base64url").toString());
          } catch {
            continue;
          }
          assert.notEqual(payload.role, "service_role", `${path} contains a service-role token`);
        }
      }
    }
  }

  await checkDirectory(".vercel/output/static");
});
