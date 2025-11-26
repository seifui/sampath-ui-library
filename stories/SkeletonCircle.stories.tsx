import type { Meta, StoryObj } from '@storybook/react';
import { SkeletonCircle } from '../src/ui/components/SkeletonCircle';

const meta: Meta<typeof SkeletonCircle> = {
  title: 'Subframe/SkeletonCircle',
  component: SkeletonCircle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SkeletonCircle>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

