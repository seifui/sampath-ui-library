import { defineConfig } from 'tsup';
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
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
    // Copy CSS files to dist/styles directory
    try {
      const distStylesDir = join(process.cwd(), 'dist', 'styles');
      mkdirSync(distStylesDir, { recursive: true });
      
      // Copy theme.css for consumers who want to import it separately
      copyFileSync(
        join(process.cwd(), 'src', 'ui', 'theme.css'),
        join(distStylesDir, 'theme.css')
      );
      
      // Create globals.css for npm package - include tailwindcss import and theme
      // This ensures Storybook and other consumers get all necessary styles
      const globalsCssContent = `@import "tailwindcss";
@import "./theme.css";

/* Apply Rethink Sans as the default font */
body {
  font-family: "Rethink Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
`;
      writeFileSync(
        join(distStylesDir, 'globals.css'),
        globalsCssContent
      );
      
      console.log('✓ Build completed successfully');
      console.log('✓ CSS files copied to dist/styles/');
      console.log('  - globals.css (includes Tailwind CSS + theme)');
      console.log('  - theme.css (theme only for custom imports)');
    } catch (error) {
      console.error('Error copying CSS files:', error);
    }
  },
});

