import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/mcqna/',

  build: {
    outDir: 'dist', // Ensure build output goes to the correct folder
  },

});
