import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from '../src/ui/components/DropdownMenu';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Subframe/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  args: {},
};

