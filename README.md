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
npm install sief-ds1
# or
yarn add sief-ds1
# or
pnpm add sief-ds1
```

## Setup for Next.js Projects

### 1. Install Peer Dependencies

Install the required peer dependencies:

```bash
npm install react react-dom next tailwindcss@^4
```

### 2. Configure Tailwind CSS 4

This package uses Tailwind CSS 4 with CSS-based configuration. In your Next.js project:

#### Install Tailwind CSS 4 and PostCSS

```bash
npm install -D tailwindcss@^4 @tailwindcss/postcss postcss autoprefixer
```

#### Configure PostCSS

Create or update your `postcss.config.js`:

```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
```

#### Import Styles

**IMPORTANT**: You must import Tailwind CSS first, then the package styles.

**For App Router** (Next.js 13+), add to your `app/globals.css`:

```css
@import "tailwindcss";
@import "sief-ds1/styles";
```

Or import in your `app/layout.tsx` (make sure Tailwind is imported first in your CSS):

```tsx
import 'sief-ds1/styles';
```

**For Pages Router**, add to your `pages/_app.tsx`:

```tsx
import 'sief-ds1/styles';
```

**Alternative: Import with explicit .css extension** (if the above doesn't work):

```css
@import "tailwindcss";
@import "sief-ds1/styles.css";
```

Or in your layout file:

```tsx
import 'sief-ds1/styles.css';
```

#### Optional: Import Theme Only

If you want to use the theme with your own Tailwind setup:

```css
@import "tailwindcss";
@import "sief-ds1/styles/theme";
```

Or with explicit extension:

```css
@import "tailwindcss";
@import "sief-ds1/styles/theme.css";
```

## Usage

### Import Components

```tsx
import { Placeholder } from 'sief-ds1';

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
import { Button, Card, Input } from 'sief-ds1';

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
cd sief-ds1-ui
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

4. The theme is already configured in `src/ui/theme.css` using Tailwind 4's `@theme` directive. The build process automatically includes it in the package exports.

### Build

Build the package:

```bash
npm run build
```

This will create the `dist` folder with:
- `index.js` (CommonJS)
- `index.mjs` (ES Modules)
- `index.d.ts` (TypeScript definitions)
- `styles/globals.css` (Complete CSS with Tailwind + theme)
- `styles/theme.css` (Theme only for custom imports)

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

### Deploy Storybook to Netlify

The project includes a `netlify.toml` configuration file for easy deployment to Netlify.

#### Setup Steps:

1. **Sign up/Login to Netlify:**
   - Go to https://app.netlify.com
   - Sign up or log in with your GitHub account

2. **Connect Your Repository:**
   - Click **"Add new site"** → **"Import an existing project"**
   - Select **"GitHub"** as your Git provider
   - Authorize Netlify to access your GitHub account if prompted
   - Search for and select `seifui/sampath-ui-library`
   - Click **"Connect"**

3. **Configure Build Settings:**
   - Netlify will auto-detect the `netlify.toml` configuration file
   - Build command: `npm ci && npm run build-storybook` (auto-detected)
   - Publish directory: `storybook-static` (auto-detected)
   - Node version: 18 (auto-detected)
   - Click **"Deploy site"**

4. **Wait for Deployment:**
   - Netlify will start building your site automatically
   - Build typically takes 2-5 minutes
   - You can watch the build progress in real-time
   - Once complete, your Storybook will be live!

5. **Access Your Storybook:**
   - Your site will be available at: `https://<auto-generated-name>.netlify.app`
   - You can customize the site name in **Site settings** → **Change site name**
   - Custom domain can be added later in **Domain settings**

#### Automatic Deployments:

- **Main Branch**: Every push to `main` branch triggers a new production deployment
- **Pull Requests**: Automatic preview deployments for each PR
- **Deploy Previews**: Get a unique URL for each PR to preview changes

#### Netlify Configuration:

The `netlify.toml` file includes:
- Build command: Installs dependencies and builds Storybook
- Publish directory: `storybook-static` (Storybook's output)
- Node version: 18 for compatibility
- Redirect rules: Ensures proper routing for the static site

#### Benefits of Netlify:

- **Fast CDN**: Global content delivery network
- **Instant Deployments**: Deploys in seconds
- **Automatic SSL**: Free HTTPS certificates
- **Preview URLs**: Automatic previews for pull requests
- **Free Tier**: 100GB bandwidth, 300 build minutes/month

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
npm install /path/to/sief-ds1-0.1.1.tgz
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
sief-ds1-ui/
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
├── postcss.config.js
└── tsup.config.ts
```

## Requirements for Consuming Projects

When using this package in a Next.js project, ensure:

1. **Tailwind CSS 4** is installed (`tailwindcss@^4`)
2. **PostCSS** is configured with `@tailwindcss/postcss` plugin
3. **React 18+** or **React 19+** is installed
4. **Next.js 13+** is installed (for App Router support)
5. Package styles are imported in your app's global CSS file (`app/globals.css` or `pages/_app.tsx`)

**Note**: This package uses Tailwind 4's CSS-based configuration. No `tailwind.config.ts` is needed for the package itself - the theme is defined in CSS using the `@theme` directive.

## Troubleshooting

### Styles not applying

**Common Issues and Solutions:**

1. **CSS not loading from npm package:**
   - Ensure you've imported Tailwind CSS FIRST in your `app/globals.css`:
     ```css
     @import "tailwindcss";
     @import "sief-ds1/styles";
     ```
   - Try using the explicit `.css` extension: `@import "sief-ds1/styles.css"`
   - Verify PostCSS is configured with `@tailwindcss/postcss` plugin (not `tailwindcss`)
   - Check that Tailwind CSS 4 is installed: `npm list tailwindcss`

2. **Import order matters:**
   - Tailwind CSS import must come BEFORE the package styles
   - Ensure your `app/globals.css` or `pages/_app.tsx` imports in this order:
     1. `@import "tailwindcss";`
     2. `@import "sief-ds1/styles";`
     3. Your own custom styles

3. **If styles still don't work:**
   - Clear Next.js cache: `rm -rf .next`
   - Restart your dev server
   - Verify the package version: `npm list sief-ds1` (should be 0.1.2 or later)
   - Check browser console for CSS loading errors

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
