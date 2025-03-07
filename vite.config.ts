import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss'; // PostCSS 플러그인 추가
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist',
    }),
    postcss({
      plugins: [tailwindcss(), autoprefixer()],
      extract: 'styles.css',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'KoastUI',
      formats: ['es', 'umd'],
      fileName: (format) => `koast-ui.${format}.js`
    },
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    cssCodeSplit: false,
  },
  esbuild: {
    target: 'esnext',
    format: 'esm',
  },
  server: {
    host: true,
  }
}));
