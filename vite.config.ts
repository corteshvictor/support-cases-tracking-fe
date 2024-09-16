/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { configDefaults, coverageConfigDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./vitest.setup.ts'],
    exclude: [...configDefaults.exclude, './__tests__/**/*'],
    coverage: {
      exclude: [...coverageConfigDefaults.exclude, '*.config.*', './src/main.tsx']
    }
  }
})
