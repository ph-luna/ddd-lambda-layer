import { configDefaults, defineConfig } from 'vitest/config'
import { resolve } from 'node:path'

export default defineConfig({
  test: {
    globals: true,
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
    silent: false,
    exclude: [...configDefaults.exclude],
    coverage: {
      all: true,
      provider: 'v8',
      exclude: [
        ...configDefaults.exclude,
        'tests/**/*.ts',
        '**/interfaces/**',
        '**/dtos/**',
        '**/factories/**',
      ],
      thresholds: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },
  },
  resolve: {
    alias: {
      '/opt/nodejs/node_modules/src/*': resolve(__dirname, './src/*'),
    },
  },
})
