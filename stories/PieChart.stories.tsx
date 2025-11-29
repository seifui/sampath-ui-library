import type { Meta, StoryObj } from '@storybook/react';
import { PieChart } from '../src/ui/components/PieChart';

const meta: Meta<typeof PieChart> = {
  title: 'Subframe/PieChart',
  component: PieChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof PieChart>;

export const Default: Story = {
  args: {
    category: 'value',
    index: 'name',
    data: [
      { name: 'Category A', value: 30 },
      { name: 'Category B', value: 25 },
      { name: 'Category C', value: 20 },
      { name: 'Category D', value: 15 },
      { name: 'Category E', value: 10 },
    ],
  },
};

