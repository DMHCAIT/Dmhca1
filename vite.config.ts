import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { defineConfig as defineViteConfig } from "vite";

const createConfig = defineConfig({
  nitro: { preset: "vercel" },
  tanstackStart: {
    server: { entry: "server" },
    router: {
      routeFileIgnorePattern: ".*api.*",
    },
  },
  vite: {
    resolve: {
      tsconfigPaths: true,
    },
    optimizeDeps: {
      exclude: ["@tanstack/start"],
    },
    server: {
      watch: {
        ignored: ["**/.tanstack/**", "**/node_modules/**"],
      },
    },
  },
});

export default defineViteConfig(async (env) => {
  const config = await createConfig(env);
  // The Lovable wrapper still injects this plugin even with Vite 8 native resolution.
  config.plugins = config.plugins?.filter(
    (plugin) =>
      !plugin ||
      typeof plugin !== "object" ||
      !("name" in plugin) ||
      plugin.name !== "vite-tsconfig-paths",
  );
  return config;
});
