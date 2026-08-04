import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // برای development
  },
  preview: {
    port: 3000,  // برای production preview
  },
})