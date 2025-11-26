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
  args: {},
};

