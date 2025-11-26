import type { Meta, StoryObj } from '@storybook/react';
import { VerticalStepper } from '../src/ui/components/VerticalStepper';

const meta: Meta<typeof VerticalStepper> = {
  title: 'Subframe/VerticalStepper',
  component: VerticalStepper,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof VerticalStepper>;

export const Default: Story = {
  args: {},
};

