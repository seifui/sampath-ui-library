<<<<<<< HEAD
# Subframe UI Library

A production-ready UI component library built with Subframe UI, Tailwind CSS 4, and optimized for Next.js projects with TypeScript/TSX support.

## Features

- 🎨 **Subframe UI Integration** - Sync components directly from Subframe
- 🎯 **Tailwind CSS 4** - Latest Tailwind CSS with modern features
- ⚛️ **React & Next.js** - Built for React 18+ and Next.js 13+
- 📦 **TypeScript** - Full TypeScript support with type definitions
- 📚 **Storybook** - Component documentation and development
- 🌳 **Tree-shakeable** - Optimized for bundle size

## Installation

### In Your Next.js Project

```bash
npm install subframe-ui-library
# or
yarn add subframe-ui-library
# or
pnpm add subframe-ui-library
```

## Setup for Next.js Projects

### 1. Install Peer Dependencies

Make sure you have React and React-DOM installed:

```bash
npm install react react-dom
```

### 2. Configure Tailwind CSS 4

This package uses Tailwind CSS 4. In your Next.js project, ensure you have Tailwind CSS 4 configured.

#### Install Tailwind CSS 4

```bash
npm install -D tailwindcss@^4 postcss autoprefixer
```

#### Configure `tailwind.config.ts`

Update your `tailwind.config.ts` to include the package's content:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/subframe-ui-library/**/*.{js,ts,jsx,tsx}', // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
```

#### Import Styles

In your Next.js app, import the package styles. For **App Router**, add to your `app/globals.css` or `app/layout.tsx`:

```css
@import "tailwindcss";
@import "subframe-ui-library/styles";
```

For **Pages Router**, add to your `pages/_app.tsx`:

```tsx
import 'subframe-ui-library/styles';
```

### 3. Configure PostCSS

Ensure your `postcss.config.js` includes Tailwind and Autoprefixer:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## Usage

### Import Components

```tsx
import { Placeholder } from 'subframe-ui-library';

export default function MyPage() {
  return (
    <div>
      <Placeholder text="Hello from Subframe UI Library!" />
    </div>
  );
}
```

### After Syncing Subframe Components

Once you sync your Subframe components (see Development section), you can import them:

```tsx
import { Button, Card, Input } from 'subframe-ui-library';

export default function MyPage() {
  return (
    <div>
      <Button>Click me</Button>
      <Card>
        <Input placeholder="Enter text..." />
      </Card>
    </div>
  );
}
```

## Development

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd subframe-ui-library
```

2. Install dependencies:
```bash
npm install
```

### Configure Subframe

1. Update `.subframe/sync.json` with your Subframe project ID:
```json
{
  "directory": "./src/ui",
  "importAlias": "@/ui/*",
  "projectId": "YOUR_PROJECT_ID"
}
```

2. Sync Subframe components:
```bash
npm run sync:subframe
```

3. Update `src/index.ts` to export your synced components:
```typescript
export { Button } from './ui/Button';
export { Card } from './ui/Card';
// ... other components
```

4. Update `src/styles/globals.css` to import Subframe theme (for Tailwind v4):
```css
@import "tailwindcss";
@import "../ui/theme.css";
```

### Build

Build the package:

```bash
npm run build
```

This will create the `dist` folder with:
- `index.js` (CommonJS)
- `index.mjs` (ES Modules)
- `index.d.ts` (TypeScript definitions)
- `styles/globals.css` (CSS styles)

### Storybook

Run Storybook for component development:

```bash
npm run storybook
```

Build static Storybook:

```bash
npm run build-storybook
```

### Deploy Storybook to GitHub Pages

The project includes a GitHub Actions workflow to automatically deploy Storybook to GitHub Pages.

#### Setup Steps:

1. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **"GitHub Actions"** (not "Deploy from a branch")
   - This allows the workflow to deploy your site

2. **Set Workflow Permissions:**
   - Go to **Settings** → **Actions** → **General**
   - Scroll to **"Workflow permissions"**
   - Select **"Read and write permissions"**
   - Click **Save**

3. **Push to Main Branch:**
   - Push the workflow file (`.github/workflows/deploy-storybook.yml`) to your repository
   - The workflow will automatically run on push to `main` or `master` branch
   - After successful build, your Storybook will be available at:
     - `https://<username>.github.io/<repository-name>/`
     - Or `https://<username>.github.io/` if your repository is named `username.github.io`

#### Base Path Configuration:

- For repositories named `username.github.io`: The base path is automatically set to root (`/`)
- For other repositories: The base path is set to `/repository-name`
- To customize the base path, edit the `STORYBOOK_BASE_PATH` environment variable in `.github/workflows/deploy-storybook.yml`

#### Manual Deployment:

You can also trigger the workflow manually:
- Go to **Actions** tab in your repository
- Select **"Deploy Storybook to GitHub Pages"** workflow
- Click **"Run workflow"** → **"Run workflow"**

### Watch Mode

For development with auto-rebuild:

```bash
npm run dev
```

## Publishing

### Before Publishing

1. Update `package.json`:
   - Set the correct package name
   - Update version number
   - Add author information
   - Verify `files` field includes all necessary files

2. Build the package:
```bash
npm run build
```

3. Test locally:
```bash
npm pack
```

This creates a `.tgz` file you can install in a test project:
```bash
npm install /path/to/subframe-ui-library-0.1.0.tgz
```

### Publish to npm

1. Login to npm:
```bash
npm login
```

2. Publish:
```bash
npm publish
```

For scoped packages:
```bash
npm publish --access public
```

## Project Structure

```
subframe-ui-library/
├── src/
│   ├── components/          # Custom components
│   ├── ui/                  # Subframe synced components
│   ├── styles/              # Tailwind CSS and theme files
│   └── index.ts            # Main entry point
├── .storybook/             # Storybook configuration
├── stories/                # Storybook stories
├── dist/                   # Built output (gitignored)
├── .subframe/              # Subframe sync config
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── tsup.config.ts
```

## Requirements for Consuming Projects

When using this package in a Next.js project, ensure:

1. **Tailwind CSS 4** is installed and configured
2. **PostCSS** is configured with Tailwind and Autoprefixer
3. **React 18+** or **React 19+** is installed
4. **Next.js 13+** is installed (for App Router support)
5. Package styles are imported in your app's global CSS file
6. Tailwind config includes the package's content paths

## Troubleshooting

### Styles not applying

- Ensure you've imported the package styles in your app
- Verify Tailwind config includes the package in `content` paths
- Check that PostCSS is properly configured

### TypeScript errors

- Ensure `@types/react` and `@types/react-dom` are installed
- Verify TypeScript version is 5.0+

### Build errors

- Clear `node_modules` and `dist` folders
- Run `npm install` again
- Ensure all peer dependencies are installed

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
