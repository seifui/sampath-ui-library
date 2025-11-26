import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../src/ui/components/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Subframe/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {},
};

