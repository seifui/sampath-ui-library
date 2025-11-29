# Storybook Theme Verification Guide

This guide helps you verify that Subframe Tailwind CSS v4 styles, colors, and typography are correctly synced to Storybook.

## Quick Verification Steps

### 1. Check Theme File Sync

Compare your local theme file with Subframe:

```bash
# Get the latest theme from Subframe
npx subframe sync --all

# Or manually compare:
# Local: src/ui/theme.css
# Subframe: Check via Subframe dashboard or API
```

**What to check:**
- Colors (brand, neutral, error, warning, success)
- Typography (font sizes, weights, line heights)
- Font families (should be "Rethink Sans")
- Shadows, border radiuses, spacing

### 2. Verify CSS Import in Storybook

Check `.storybook/preview.js`:
```javascript
import '../src/styles/globals.css';
```

This should import:
- `src/styles/globals.css` → which imports `src/ui/theme.css`
- The theme.css contains all Tailwind v4 `@theme` definitions

### 3. Verify Font Loading

Check `.storybook/preview-head.html`:
- Should include Google Fonts link for "Rethink Sans"
- Font weights: 400, 500, 600, 700

### 4. Visual Verification

Use the **ThemeTest** story in Storybook to verify:
- Colors render correctly
- Typography scales properly
- Font family is "Rethink Sans"
- Shadows and spacing work

### 5. Component Verification

Check a few components:
- **Button**: Should use brand colors
- **TextField**: Should use proper typography
- **Badge**: Should use correct colors and shadows

## Common Issues

### Colors Not Showing
- Check if `theme.css` is imported in `globals.css`
- Verify PostCSS is processing CSS files
- Check browser console for CSS errors

### Typography Wrong
- Verify "Rethink Sans" font is loaded
- Check if font-family CSS variables are set
- Ensure font weights match Subframe

### Styles Not Applied
- Check webpack PostCSS configuration in `.storybook/main.js`
- Verify `@tailwindcss/postcss` plugin is configured
- Check if CSS files are being processed

## Sync Command

To sync theme from Subframe:
```bash
npm run sync:subframe
```

This runs: `subframe sync --all`

## Manual Theme Update

If automatic sync doesn't work:

1. Get theme from Subframe dashboard
2. Copy theme CSS to `src/ui/theme.css`
3. Restart Storybook: `npm run storybook`

## Testing Checklist

- [ ] Colors match Subframe design system
- [ ] Typography scales correctly
- [ ] Font family is "Rethink Sans"
- [ ] Shadows render properly
- [ ] Border radiuses are correct
- [ ] Spacing values work
- [ ] Components use theme variables
- [ ] Responsive breakpoints work

