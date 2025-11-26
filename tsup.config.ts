import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  treeshake: true,
  outDir: 'dist',
  // Copy CSS files to dist
  loader: {
    '.css': 'copy',
  },
  publicDir: false,
  onSuccess: 'echo "Build completed successfully"',
});

