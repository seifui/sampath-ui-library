import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '../src/ui/components/Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Subframe/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {},
};

