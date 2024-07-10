import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/about-wrapper/',
  server: {
    host: '0.0.0.0',
    port: 5173, // Ensure this is the correct port
    cors: {
      origin: '*'
    }
  }
})
