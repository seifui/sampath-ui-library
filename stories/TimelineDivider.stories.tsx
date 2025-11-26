import type { Meta, StoryObj } from '@storybook/react';
import { TimelineDivider } from '../src/ui/components/TimelineDivider';

const meta: Meta<typeof TimelineDivider> = {
  title: 'Subframe/TimelineDivider',
  component: TimelineDivider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TimelineDivider>;

export const Default: Story = {
  args: {},
};

