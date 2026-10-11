import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" para que las rutas (juegos.json, img/...) funcionen igual
// en mi computador y en github pages
export default defineConfig({
  plugins: [react()],
  base: "./",
});
