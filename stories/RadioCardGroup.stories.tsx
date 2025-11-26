import type { Meta, StoryObj } from '@storybook/react';
import { RadioCardGroup } from '../src/ui/components/RadioCardGroup';

const meta: Meta<typeof RadioCardGroup> = {
  title: 'Subframe/RadioCardGroup',
  component: RadioCardGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof RadioCardGroup>;

export const Default: Story = {
  args: {},
};

