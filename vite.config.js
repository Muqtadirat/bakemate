import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import VitePages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), VitePages()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
