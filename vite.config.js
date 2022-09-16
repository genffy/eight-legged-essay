// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
import path from 'path';

function resolve(dir) {
  return path.join(__dirname, dir);
}

export default defineConfig({
  // ...
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
});
