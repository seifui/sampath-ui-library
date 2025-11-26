import type { Meta, StoryObj } from '@storybook/react';
import { SkeletonText } from '../src/ui/components/SkeletonText';

const meta: Meta<typeof SkeletonText> = {
  title: 'Subframe/SkeletonText',
  component: SkeletonText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SkeletonText>;

export const Default: Story = {
  args: {},
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <SkeletonText size="header" />
      <SkeletonText size="section-header" />
      <SkeletonText size="subheader" />
      <SkeletonText size="label" />
      <SkeletonText size="default" />
    </div>
  ),
};

