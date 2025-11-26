import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '../src/ui/components/Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Subframe/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {},
};

