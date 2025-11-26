import { defineConfig } from 'tsup';
import { copyFileSync, mkdirSync } from 'fs';
import { join } from 'path';

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
  loader: {
    '.css': 'copy',
  },
  publicDir: false,
  onSuccess: async () => {
    // Copy CSS file to dist/styles directory
    try {
      mkdirSync(join(process.cwd(), 'dist', 'styles'), { recursive: true });
      copyFileSync(
        join(process.cwd(), 'src', 'styles', 'globals.css'),
        join(process.cwd(), 'dist', 'styles', 'globals.css')
      );
      console.log('✓ Build completed successfully');
      console.log('✓ CSS file copied to dist/styles/globals.css');
    } catch (error) {
      console.error('Error copying CSS file:', error);
    }
  },
});

