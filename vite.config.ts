import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
// biome-ignore lint/style/useNodejsImportProtocol: We use Bun here instead of Node
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  esbuild: {
    supported: {
      "top-level-await": true,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext",
    },
    exclude: ["@surrealdb/wasm"],
  },
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
