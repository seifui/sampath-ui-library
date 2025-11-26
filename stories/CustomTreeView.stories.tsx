import type { Meta, StoryObj } from '@storybook/react';
import { CustomTreeView } from '../src/ui/components/CustomTreeView';

const meta: Meta<typeof CustomTreeView> = {
  title: 'Subframe/CustomTreeView',
  component: CustomTreeView,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CustomTreeView>;

export const Default: Story = {
  args: {},
};

