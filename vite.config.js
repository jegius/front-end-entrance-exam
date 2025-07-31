import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: './',
  root: '.',
  build: {
    sourcemap: true,
  },
  server: {
    open: true,
    port: 5173,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'js'),
    },
  },
  css: {
    devSourcemap: true,
  },
});
