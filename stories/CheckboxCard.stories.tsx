import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxCard } from '../src/ui/components/CheckboxCard';

const meta: Meta<typeof CheckboxCard> = {
  title: 'Subframe/CheckboxCard',
  component: CheckboxCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxCard>;

export const Default: Story = {
  args: {
    label: 'Checkbox Card',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Card',
    checked: true,
  },
};

