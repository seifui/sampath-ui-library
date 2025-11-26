import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from '../src/ui/components/Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'Subframe/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {},
};

