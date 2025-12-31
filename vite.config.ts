import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  const repo =
    process.env.GITHUB_REPOSITORY?.split('/')[1] ??
    'jt-project-public';

  return {
    base: isProd ? `/${repo}/` : '/',
    plugins: [
      react(),
      svgr({
        svgrOptions: { icon: true },
      }),
    ],
    resolve: {
      alias: { '@': path.resolve(__dirname, './src') },
    },
    css: {
      postcss: './postcss.config.mjs',
    },
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
    },
  };
});