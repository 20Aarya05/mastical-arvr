import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  publicDir: 'src/assets', // Ensure this is set correctly
});
