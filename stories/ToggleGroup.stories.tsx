import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup } from '../src/ui/components/ToggleGroup';

const meta: Meta<typeof ToggleGroup> = {
  title: 'Subframe/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  args: {},
};

