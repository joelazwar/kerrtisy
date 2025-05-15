import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/kerrtisy/',
  server: {
    port: 3000,
    open: true,
    hmr:true,
  },
  build: {
    outDir: 'dist',
  },
});