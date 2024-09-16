/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { configDefaults, coverageConfigDefaults } from 'vitest/config'

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
