import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../src/ui/components/Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Subframe/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {},
};

