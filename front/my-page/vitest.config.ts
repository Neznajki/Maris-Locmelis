/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.env.VITE_API_BASE_URL": JSON.stringify("https://api.example.com/"),
    "import.meta.env.VITE_FALLBACK_URL": JSON.stringify("https://fallback.example.com/"),
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./__tests__/setupTests.ts'],
    globals: true,
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage',
      reporter: ['text', 'html', 'lcov', 'json-summary'],
      exclude: [
        'src/data/api/',
        'node_modules/',
        'dist/',
        '**.css',
        'src/assets/**',
        '**/__tests__/**',
        '**/testSetup.ts',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
