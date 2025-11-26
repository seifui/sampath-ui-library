import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '../src/ui/components/TextField';

const meta: Meta<typeof TextField> = {
  title: 'Subframe/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Text Field',
    placeholder: 'Enter text...',
  },
};

export const WithHelpText: Story = {
  args: {
    label: 'Email',
    helpText: 'Enter your email address',
    placeholder: 'email@example.com',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Search',
    icon: '🔍',
    placeholder: 'Search...',
  },
};

export const Error: Story = {
  args: {
    label: 'Text Field',
    error: true,
    helpText: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    placeholder: 'Cannot edit',
  },
};

export const Filled: Story = {
  args: {
    label: 'Filled Variant',
    variant: 'filled',
    placeholder: 'Enter text...',
  },
};

