/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/iwamad-practice/', // GitHub Pages serves the site from /iwamad-practice/
  build: { outDir: 'docs' }, // Pages: Deploy from a branch -> week-05 -> /docs
  test: { environment: 'jsdom' },
})
