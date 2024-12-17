import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import devServer from '@hono/vite-dev-server'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 4000, // change to a custom port
  },
  build: {
    outDir: "build", // change to 'build', explain later
  },
  plugins: [
    react(),
    devServer({
      entry: "server/server.ts",
      exclude: [ // We need to override this option since the default setting doesn't fit
          /.*\.tsx?($|\?)/,
          /.*\.(s?css|less)($|\?)/,
          /.*\.(svg|png)($|\?)/,
          /^\/@.+$/,
          /^\/favicon\.ico$/,
          /^\/(public|assets|static)\/.+/,
          /^\/node_modules\/.*/
      ],
      injectClientScript: false, // This option is buggy, disable it and inject the code manually
  })
  ],
  optimizeDeps: {
    exclude: ["server/server.ts"], // Exclude it from dependency pre-bundling
  },
})
