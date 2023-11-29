import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    outDir: 'dist',
    assetsDir: 'assets',
    // Add this section to copy assets (like audio files) to the build output
    assetsInclude: ['src/assets/audio/**/*'],
  },
});
