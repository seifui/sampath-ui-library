import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroup } from '../src/ui/components/CheckboxGroup';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Subframe/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  args: {},
};

