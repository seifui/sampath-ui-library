import type { Meta, StoryObj } from '@storybook/react';
import { DialogLayout } from '../src/ui/layouts/DialogLayout';

const meta: Meta<typeof DialogLayout> = {
  title: 'Subframe/Layouts/DialogLayout',
  component: DialogLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof DialogLayout>;

export const Default: Story = {
  args: {},
};

