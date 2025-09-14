import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  base: '/portfolio_in_vue/',
  assetsInclude: ['**/*.woff', '**/*.woff2'],
  resolve: {
    alias: {
  '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
