import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'jt-project-public'
  return {
    base: isProd ? // : '/',
    plugins: [react(), svgr()],
    resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  }
})