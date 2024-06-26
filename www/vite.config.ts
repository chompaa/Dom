import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/dom/",
  plugins: [react(), wasm() as PluginOption, topLevelAwait()],
});
