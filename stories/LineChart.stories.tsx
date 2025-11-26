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
  args: {},
};

