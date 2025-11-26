import type { Meta, StoryObj } from '@storybook/react';
import { AreaChart } from '../src/ui/components/AreaChart';

const meta: Meta<typeof AreaChart> = {
  title: 'Subframe/AreaChart',
  component: AreaChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof AreaChart>;

export const Default: Story = {
  args: {},
};

