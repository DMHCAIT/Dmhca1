import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: { preset: "vercel" },
  tanstackStart: {
    server: { entry: "server" },
    router: {
      routeFileIgnorePattern: ".*api.*",
    },
  },
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
});
