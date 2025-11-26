import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '../src/ui/components/TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Subframe/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    label: 'Text Area',
    placeholder: 'Enter your message...',
  },
};

export const WithHelpText: Story = {
  args: {
    label: 'Description',
    helpText: 'Please provide a detailed description',
    placeholder: 'Enter description...',
  },
};

export const Error: Story = {
  args: {
    label: 'Text Area',
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

