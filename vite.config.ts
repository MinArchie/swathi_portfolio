import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// `base` must match the GitHub repo name so assets resolve on GitHub Pages
// (https://minarchie.github.io/swathi_portfolio/). If you ever rename the
// repo, update this string too.
export default defineConfig({
  base: "/swathi_portfolio/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
