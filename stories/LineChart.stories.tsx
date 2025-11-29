import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from '../src/ui/components/LineChart';

const meta: Meta<typeof LineChart> = {
  title: 'Subframe/LineChart',
  component: LineChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof LineChart>;

export const Default: Story = {
  args: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    index: 'name',
    data: [
      { name: 'Series 1', Jan: 10, Feb: 15, Mar: 20, Apr: 18, May: 25, Jun: 30 },
      { name: 'Series 2', Jan: 5, Feb: 8, Mar: 12, Apr: 15, May: 18, Jun: 22 },
    ],
  },
};

