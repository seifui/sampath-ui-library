import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SkeletonText } from '../src/ui/components/SkeletonText';

const meta: Meta<typeof SkeletonText> = {
  title: 'Subframe/SkeletonText',
  component: SkeletonText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SkeletonText>;

export const Default: Story = {
  args: {
    size: 'default',
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <SkeletonText size="header" />
      <SkeletonText size="section-header" />
      <SkeletonText size="subheader" />
      <SkeletonText size="label" />
      <SkeletonText size="default" />
    </div>
  ),
};

