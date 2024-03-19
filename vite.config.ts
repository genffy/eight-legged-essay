// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

function resolve(dir) {
  return path.join(__dirname, dir);
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
});
