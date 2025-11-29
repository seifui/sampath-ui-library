import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Theme/Verification',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

/**
 * Theme Verification Story
 * 
 * Use this story to verify that Subframe Tailwind CSS v4 styles,
 * colors, and typography are correctly synced to Storybook.
 */
export const Colors: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <h1 className="text-heading-1 font-heading-1 text-default-font mb-6">
        Color Palette Verification
      </h1>
      
      {/* Brand Colors */}
      <section>
        <h2 className="text-heading-2 font-heading-2 text-default-font mb-4">Brand Colors</h2>
        <div className="grid grid-cols-5 gap-4">
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-brand-50 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">brand-50</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-brand-100 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">brand-100</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-brand-200 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">brand-200</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-brand-300 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">brand-300</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-brand-400 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">brand-400</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-brand-500 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">brand-500</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-brand-600 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">brand-600</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-brand-700 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">brand-700</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-brand-800 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">brand-800</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-brand-900 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">brand-900</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="h-12 w-full rounded-md bg-brand-primary border border-neutral-border" />
          <p className="text-caption font-caption text-subtext-color mt-2">brand-primary</p>
        </div>
      </section>

      {/* Neutral Colors */}
      <section>
        <h2 className="text-heading-2 font-heading-2 text-default-font mb-4">Neutral Colors</h2>
        <div className="grid grid-cols-5 gap-4">
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-neutral-0 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">neutral-0</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-neutral-50 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">neutral-50</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-neutral-100 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">neutral-100</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-neutral-200 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">neutral-200</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-neutral-300 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">neutral-300</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-neutral-400 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">neutral-400</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-neutral-500 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">neutral-500</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-neutral-600 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">neutral-600</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-neutral-700 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">neutral-700</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-neutral-800 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">neutral-800</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-neutral-900 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">neutral-900</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 w-full rounded-md bg-neutral-950 border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">neutral-950</p>
          </div>
        </div>
      </section>

      {/* Semantic Colors */}
      <section>
        <h2 className="text-heading-2 font-heading-2 text-default-font mb-4">Semantic Colors</h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <h3 className="text-body-bold font-body-bold text-default-font mb-3">Error</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-error-50 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">error-50</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-error-100 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">error-100</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-error-200 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">error-200</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-error-300 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">error-300</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-error-400 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">error-400</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-error-500 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">error-500</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-error-600 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">error-600</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-error-700 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">error-700</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-error-800 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">error-800</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-error-900 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">error-900</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-body-bold font-body-bold text-default-font mb-3">Warning</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-warning-50 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">warning-50</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-warning-100 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">warning-100</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-warning-200 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">warning-200</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-warning-300 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">warning-300</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-warning-400 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">warning-400</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-warning-500 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">warning-500</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-warning-600 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">warning-600</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-warning-700 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">warning-700</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-warning-800 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">warning-800</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-warning-900 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">warning-900</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-body-bold font-body-bold text-default-font mb-3">Success</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-success-50 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">success-50</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-success-100 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">success-100</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-success-200 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">success-200</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-success-300 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">success-300</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-success-400 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">success-400</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-success-500 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">success-500</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-success-600 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">success-600</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-success-700 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">success-700</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-success-800 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">success-800</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-16 rounded bg-success-900 border border-neutral-border" />
                <span className="text-caption font-caption text-subtext-color">success-900</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Colors */}
      <section>
        <h2 className="text-heading-2 font-heading-2 text-default-font mb-4">Theme Colors</h2>
        <div className="grid grid-cols-2 gap-4 max-w-2xl">
          <div className="space-y-2">
            <div className="h-12 w-full rounded-md bg-default-background border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">default-background</p>
          </div>
          <div className="space-y-2">
            <div className="h-12 w-full rounded-md bg-default-font border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">default-font</p>
          </div>
          <div className="space-y-2">
            <div className="h-12 w-full rounded-md bg-subtext-color border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">subtext-color</p>
          </div>
          <div className="space-y-2">
            <div className="h-12 w-full rounded-md bg-neutral-border border border-neutral-border" />
            <p className="text-caption font-caption text-subtext-color">neutral-border</p>
          </div>
        </div>
      </section>
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <h1 className="text-heading-1 font-heading-1 text-default-font mb-6">
        Typography Verification
      </h1>

      {/* Font Family Check */}
      <section className="mb-8">
        <h2 className="text-heading-2 font-heading-2 text-default-font mb-4">Font Family</h2>
        <div className="p-4 bg-neutral-50 rounded-md border border-neutral-border">
          <p className="text-body font-body text-default-font">
            Current font: <span className="font-monospace-body">Rethink Sans</span>
          </p>
          <p className="text-caption font-caption text-subtext-color mt-2">
            If you see "Rethink Sans" above, the font is loaded correctly.
          </p>
        </div>
      </section>

      {/* Typography Scale */}
      <section>
        <h2 className="text-heading-2 font-heading-2 text-default-font mb-4">Typography Scale</h2>
        <div className="space-y-6">
          <div>
            <p className="text-heading-1 font-heading-1 text-default-font mb-2">
              Heading 1 (30px / 36px line-height)
            </p>
            <code className="text-caption font-monospace-body text-subtext-color">
              text-heading-1 font-heading-1
            </code>
          </div>
          <div>
            <p className="text-heading-2 font-heading-2 text-default-font mb-2">
              Heading 2 (20px / 24px line-height)
            </p>
            <code className="text-caption font-monospace-body text-subtext-color">
              text-heading-2 font-heading-2
            </code>
          </div>
          <div>
            <p className="text-heading-3 font-heading-3 text-default-font mb-2">
              Heading 3 (16px / 20px line-height)
            </p>
            <code className="text-caption font-monospace-body text-subtext-color">
              text-heading-3 font-heading-3
            </code>
          </div>
          <div>
            <p className="text-body-bold font-body-bold text-default-font mb-2">
              Body Bold (14px / 20px line-height)
            </p>
            <code className="text-caption font-monospace-body text-subtext-color">
              text-body-bold font-body-bold
            </code>
          </div>
          <div>
            <p className="text-body font-body text-default-font mb-2">
              Body (14px / 20px line-height)
            </p>
            <code className="text-caption font-monospace-body text-subtext-color">
              text-body font-body
            </code>
          </div>
          <div>
            <p className="text-caption-bold font-caption-bold text-default-font mb-2">
              Caption Bold (12px / 16px line-height)
            </p>
            <code className="text-caption font-monospace-body text-subtext-color">
              text-caption-bold font-caption-bold
            </code>
          </div>
          <div>
            <p className="text-caption font-caption text-subtext-color mb-2">
              Caption (12px / 16px line-height)
            </p>
            <code className="text-caption font-monospace-body text-subtext-color">
              text-caption font-caption
            </code>
          </div>
        </div>
      </section>

      {/* Font Weights */}
      <section>
        <h2 className="text-heading-2 font-heading-2 text-default-font mb-4">Font Weights</h2>
        <div className="space-y-3">
          <p className="text-body font-body text-default-font" style={{ fontWeight: 400 }}>
            Regular (400) - Body text
          </p>
          <p className="text-body font-body-bold text-default-font" style={{ fontWeight: 500 }}>
            Medium (500) - Bold body text
          </p>
        </div>
      </section>
    </div>
  ),
};

export const Shadows: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <h1 className="text-heading-1 font-heading-1 text-default-font mb-6">
        Shadows Verification
      </h1>

      <div className="grid grid-cols-2 gap-8 max-w-4xl">
        <div className="space-y-4">
          <div className="p-6 bg-default-background rounded-md shadow-sm border border-neutral-border">
            <p className="text-body-bold font-body-bold text-default-font mb-2">shadow-sm</p>
            <code className="text-caption font-monospace-body text-subtext-color">shadow-sm</code>
          </div>
          <div className="p-6 bg-default-background rounded-md shadow-default border border-neutral-border">
            <p className="text-body-bold font-body-bold text-default-font mb-2">shadow-default</p>
            <code className="text-caption font-monospace-body text-subtext-color">shadow-default</code>
          </div>
          <div className="p-6 bg-default-background rounded-md shadow-md border border-neutral-border">
            <p className="text-body-bold font-body-bold text-default-font mb-2">shadow-md</p>
            <code className="text-caption font-monospace-body text-subtext-color">shadow-md</code>
          </div>
          <div className="p-6 bg-default-background rounded-md shadow-lg border border-neutral-border">
            <p className="text-body-bold font-body-bold text-default-font mb-2">shadow-lg</p>
            <code className="text-caption font-monospace-body text-subtext-color">shadow-lg</code>
          </div>
        </div>
        <div className="space-y-4">
          <div className="p-6 bg-default-background rounded-md shadow-overlay border border-neutral-border">
            <p className="text-body-bold font-body-bold text-default-font mb-2">shadow-overlay</p>
            <code className="text-caption font-monospace-body text-subtext-color">shadow-overlay</code>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const BorderRadius: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <h1 className="text-heading-1 font-heading-1 text-default-font mb-6">
        Border Radius Verification
      </h1>

      <div className="grid grid-cols-4 gap-6 max-w-4xl">
        <div className="space-y-3">
          <div className="h-20 w-full bg-brand-100 rounded-sm border border-neutral-border" />
          <p className="text-caption font-caption text-subtext-color">rounded-sm (4px)</p>
          <code className="text-caption font-monospace-body text-subtext-color">rounded-sm</code>
        </div>
        <div className="space-y-3">
          <div className="h-20 w-full bg-brand-100 rounded-md border border-neutral-border" />
          <p className="text-caption font-caption text-subtext-color">rounded-md (8px)</p>
          <code className="text-caption font-monospace-body text-subtext-color">rounded-md</code>
        </div>
        <div className="space-y-3">
          <div className="h-20 w-full bg-brand-100 rounded-lg border border-neutral-border" />
          <p className="text-caption font-caption text-subtext-color">rounded-lg (12px)</p>
          <code className="text-caption font-monospace-body text-subtext-color">rounded-lg</code>
        </div>
        <div className="space-y-3">
          <div className="h-20 w-20 bg-brand-100 rounded-full border border-neutral-border" />
          <p className="text-caption font-caption text-subtext-color">rounded-full</p>
          <code className="text-caption font-monospace-body text-subtext-color">rounded-full</code>
        </div>
      </div>
    </div>
  ),
};

