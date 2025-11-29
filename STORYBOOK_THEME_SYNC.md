# Storybook Theme Sync Verification Guide

## Overview

This guide explains how to verify that Subframe Tailwind CSS v4 styles, colors, and typography are correctly synced to Storybook.

## Quick Start

1. **Open Storybook**: Run `npm run storybook`
2. **Navigate to Theme Test**: Go to "Theme" → "Verification" in Storybook sidebar
3. **Verify visually**: Check Colors, Typography, Shadows, and Border Radius stories

## Verification Methods

### Method 1: Visual Verification (Recommended)

Use the **ThemeTest** story in Storybook:

1. Open Storybook: `npm run storybook`
2. Navigate to: **Theme → Verification**
3. Check these stories:
   - **Colors**: Verify all color swatches render correctly
   - **Typography**: Verify font sizes, weights, and "Rethink Sans" font
   - **Shadows**: Verify shadow effects render properly
   - **Border Radius**: Verify rounded corners match expected values

### Method 2: File Comparison

Compare your local theme file with Subframe:

```bash
# Get latest theme from Subframe
npm run sync:subframe

# Or manually check:
# Local file: src/ui/theme.css
# Subframe: Check via dashboard or API
```

**What to verify:**
- ✅ Colors (brand, neutral, error, warning, success)
- ✅ Typography variables (sizes, weights, line heights)
- ✅ Font families ("Rethink Sans")
- ✅ Shadows (sm, default, md, lg, overlay)
- ✅ Border radiuses (sm, md, lg, full)
- ✅ Spacing values

### Method 3: Component Testing

Test components that use theme variables:

1. **Button**: Should use `brand-primary` color
2. **TextField**: Should use proper typography classes
3. **Badge**: Should use correct colors and shadows
4. **Alert**: Should use semantic colors (error, success, warning)

## Configuration Files

### Storybook Preview (`.storybook/preview.js`)

```javascript
import '../src/styles/globals.css';
```

This imports:
- `src/styles/globals.css` → imports `src/ui/theme.css`
- `theme.css` contains all Tailwind v4 `@theme` definitions

### Font Loading (`.storybook/preview-head.html`)

```html
<link href="https://fonts.googleapis.com/css2?family=Rethink+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Ensures "Rethink Sans" font is loaded with correct weights.

### Webpack Configuration (`.storybook/main.js`)

PostCSS is configured to process CSS files with Tailwind v4:
- Uses `@tailwindcss/postcss` plugin
- Processes CSS files through PostCSS pipeline
- Ensures Tailwind directives are processed

## Sync Process

### Automatic Sync

```bash
npm run sync:subframe
```

This runs `subframe sync --all` which:
- Downloads latest components from Subframe
- Updates theme files
- Syncs component code

### Manual Sync

If automatic sync doesn't work:

1. Get theme from Subframe dashboard
2. Copy theme CSS to `src/ui/theme.css`
3. Restart Storybook: `npm run storybook`

## Common Issues & Solutions

### ❌ Colors Not Showing

**Symptoms**: Colors appear as default/gray

**Solutions**:
1. Check if `theme.css` is imported in `globals.css`
2. Verify PostCSS is processing CSS files (check webpack config)
3. Check browser console for CSS errors
4. Restart Storybook

### ❌ Typography Wrong

**Symptoms**: Wrong font family or sizes

**Solutions**:
1. Verify "Rethink Sans" font is loaded (check Network tab)
2. Check if font-family CSS variables are set in theme.css
3. Ensure font weights match Subframe (400, 500, 600, 700)
4. Clear browser cache

### ❌ Styles Not Applied

**Symptoms**: Components don't use theme styles

**Solutions**:
1. Check webpack PostCSS configuration in `.storybook/main.js`
2. Verify `@tailwindcss/postcss` plugin is configured
3. Check if CSS files are being processed (check webpack output)
4. Ensure `globals.css` is imported in preview.js

### ❌ Theme Out of Sync

**Symptoms**: Local theme differs from Subframe

**Solutions**:
1. Run `npm run sync:subframe`
2. Compare `src/ui/theme.css` with Subframe dashboard
3. Manually update theme.css if needed
4. Restart Storybook

## Testing Checklist

Use this checklist to verify everything is synced:

- [ ] **Colors**: All color swatches render correctly in ThemeTest story
- [ ] **Typography**: Font sizes, weights, and line heights match Subframe
- [ ] **Font Family**: "Rethink Sans" is loaded and applied
- [ ] **Shadows**: Shadow effects render properly
- [ ] **Border Radius**: Rounded corners match expected values
- [ ] **Spacing**: Spacing values work correctly
- [ ] **Components**: Components use theme variables correctly
- [ ] **Responsive**: Breakpoints work correctly
- [ ] **Theme File**: `src/ui/theme.css` matches Subframe theme

## Files to Check

1. **`.storybook/preview.js`**: Imports `globals.css`
2. **`src/styles/globals.css`**: Imports `theme.css`
3. **`src/ui/theme.css`**: Contains all theme definitions
4. **`.storybook/preview-head.html`**: Loads "Rethink Sans" font
5. **`.storybook/main.js`**: Configures PostCSS for Tailwind

## Additional Resources

- **Subframe Dashboard**: https://app.subframe.com/18dc152f11e0/library
- **Theme Documentation**: See `.storybook/VERIFICATION.md`
- **Theme Test Story**: `stories/ThemeTest.stories.tsx`

## Quick Commands

```bash
# Start Storybook
npm run storybook

# Sync from Subframe
npm run sync:subframe

# Build Storybook
npm run build-storybook
```

---

**Last Updated**: Check `src/ui/theme.css` modification date to see when theme was last synced.

