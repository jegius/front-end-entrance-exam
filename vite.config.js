import {defineConfig} from "vite";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslint({
      cache: false,
    }),
  ],

  base: "/front-end-entrance-exam/",

  build: {
    outDir: "dist",
  },

  server: {
    open: true,
  },
});
