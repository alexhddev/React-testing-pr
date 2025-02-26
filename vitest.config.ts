import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './test/setup',
      coverage: {
        include:[
          'src/**/*.{js,jsx,ts,tsx}'
        ],
        exclude: [
          'src/**/*.test.{ts,tsx}'
        ]
      }
    }
  })
