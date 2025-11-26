import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu } from '../src/ui/components/ContextMenu';

const meta: Meta<typeof ContextMenu> = {
  title: 'Subframe/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  args: {},
};

