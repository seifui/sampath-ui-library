import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '../src/ui/components/Calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Subframe/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {},
};

