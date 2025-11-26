import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../src/ui/components/Select';

const meta: Meta<typeof Select> = {
  title: 'Subframe/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {},
};

