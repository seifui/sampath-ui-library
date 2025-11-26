import type { Meta, StoryObj } from '@storybook/react';
import { TextFieldUnstyled } from '../src/ui/components/TextFieldUnstyled';

const meta: Meta<typeof TextFieldUnstyled> = {
  title: 'Subframe/TextFieldUnstyled',
  component: TextFieldUnstyled,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TextFieldUnstyled>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

