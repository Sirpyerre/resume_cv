import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import blogPlugin from './src/plugins/blogPlugin.js'

export default defineConfig({
    plugins: [react(), blogPlugin()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    router: ['react-router-dom'],
                    helmet: ['react-helmet-async'],
                }
            }
        }
    }
})
