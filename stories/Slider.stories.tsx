import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '../src/ui/components/Slider';

const meta: Meta<typeof Slider> = {
  title: 'Subframe/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
  },
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
  },
};

