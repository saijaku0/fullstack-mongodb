import { defineConfig } from 'vite';
import type { PluginOption } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import process from 'node:process';
import path from 'node:path';
import tsconfigPath from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPath(),
    process.env.ANALYZE ? (visualizer({ gzipSize: true, open: true }) as PluginOption) : null,
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      app: path.resolve(__dirname, "./src/app/"),
    },
  },
})