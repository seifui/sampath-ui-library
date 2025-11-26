import type { Meta, StoryObj } from '@storybook/react';
import { ButtonPlaceholder } from '../src/ui/components/ButtonPlaceholder';

const meta: Meta<typeof ButtonPlaceholder> = {
  title: 'Subframe/ButtonPlaceholder',
  component: ButtonPlaceholder,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ButtonPlaceholder>;

export const Default: Story = {
  args: {},
};

