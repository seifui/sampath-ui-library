import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
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
  render: () => (
    <div className="w-64">
      <Select placeholder="Select an option" label="Choose an option">
        <Select.Item value="option1">Option 1</Select.Item>
        <Select.Item value="option2">Option 2</Select.Item>
        <Select.Item value="option3">Option 3</Select.Item>
      </Select>
    </div>
  ),
};

export const WithHelpText: Story = {
  render: () => (
    <div className="w-64">
      <Select
        placeholder="Select an option"
        label="Choose an option"
        helpText="This is helpful text"
      >
        <Select.Item value="option1">Option 1</Select.Item>
        <Select.Item value="option2">Option 2</Select.Item>
        <Select.Item value="option3">Option 3</Select.Item>
      </Select>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div className="w-64">
      <Select
        placeholder="Select an option"
        label="Choose an option"
        helpText="This field is required"
        error
      >
        <Select.Item value="option1">Option 1</Select.Item>
        <Select.Item value="option2">Option 2</Select.Item>
        <Select.Item value="option3">Option 3</Select.Item>
      </Select>
    </div>
  ),
};

