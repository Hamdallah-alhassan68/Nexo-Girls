import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const appRoutes = new Set([
  '/',
  '/about',
  '/milestones',
  '/team',
  '/programs',
  '/get-involved',
  '/volunteer',
  '/partners',
  '/ambassadors',
  '/contact',
  '/donate',
  '/home.html',
  '/about.html',
  '/milestone.html',
  '/meet_team.html',
  '/Program.html',
  '/program.html',
  '/getinvolve.html',
  '/volunteer.html',
  '/partnership.html',
  '/ambassador.html',
  '/contact.html',
  '/donate.html',
])

function appRouteFallback() {
  return {
    name: 'app-route-fallback',
    configureServer(server) {
      server.middlewares.use((request, _response, next) => {
        if (!request.url) {
          next()
          return
        }

        const url = new URL(request.url, 'http://localhost')
        if (appRoutes.has(url.pathname)) {
          request.url = `/index.html${url.search}`
        }
        next()
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), appRouteFallback()],
  server: {
    port: 3000,
    open: true
  }
})
