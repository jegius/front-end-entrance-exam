export default {
  base: "./",
  build: {
    emptyOutDir: true,
    rollupOptions: {
      treeshake: {
        annotations: false,
      },
    },
  },
  server: {
    host: true,
    port: 5000,
    open: true,
  },
};
