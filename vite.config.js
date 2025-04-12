import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@logger': '@pnp/logging', // Alias for getRandomString or the core library
      '@sp': '@pnp/sp',
      '@nodejs' : '@pnp/nodejs'
    },
  },




})
