import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This allows Vite to receive requests from the specified host.
    // It's a security measure to prevent DNS rebinding attacks.
    allowedHosts: ['gke.react-movie.nasir.id'],
  },
})
