import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/testpave/", // Базовый путь для GitHub Pages (имя репозитория)
});
