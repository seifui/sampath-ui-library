import type { Meta, StoryObj } from '@storybook/react';
import { TreeView } from '../src/ui/components/TreeView';

const meta: Meta<typeof TreeView> = {
  title: 'Subframe/TreeView',
  component: TreeView,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TreeView>;

export const Default: Story = {
  args: {},
};

