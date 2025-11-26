import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '../src/ui/components/Loader';

const meta: Meta<typeof Loader> = {
  title: 'Subframe/Loader',
  component: Loader,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

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

