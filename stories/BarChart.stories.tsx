import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from '../src/ui/components/BarChart';

const meta: Meta<typeof BarChart> = {
  title: 'Subframe/BarChart',
  component: BarChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof BarChart>;

export const Default: Story = {
  args: {},
};

