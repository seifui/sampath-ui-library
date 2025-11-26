import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from '../src/ui/components/RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Subframe/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {},
};

