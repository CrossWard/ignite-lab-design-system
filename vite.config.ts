import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
throwIfNamespace: false

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
