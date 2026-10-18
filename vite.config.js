import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vaishvannn/", // served at vaishvan.github.io/vaishvannn/
})
