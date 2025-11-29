import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CheckboxGroup } from '../src/ui/components/CheckboxGroup';
import { Checkbox } from '../src/ui/components/Checkbox';

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
  render: () => (
    <CheckboxGroup label="Select your preferences">
      <Checkbox label="Option 1" />
      <Checkbox label="Option 2" checked />
      <Checkbox label="Option 3" />
    </CheckboxGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <CheckboxGroup label="Select your preferences" horizontal>
      <Checkbox label="Option 1" />
      <Checkbox label="Option 2" checked />
      <Checkbox label="Option 3" />
    </CheckboxGroup>
  ),
};

export const WithHelpText: Story = {
  render: () => (
    <CheckboxGroup 
      label="Select your preferences" 
      helpText="Choose all options that apply"
    >
      <Checkbox label="Option 1" />
      <Checkbox label="Option 2" checked />
      <Checkbox label="Option 3" />
    </CheckboxGroup>
  ),
};

export const WithError: Story = {
  render: () => (
    <CheckboxGroup 
      label="Select your preferences" 
      helpText="Please select at least one option"
      error
    >
      <Checkbox label="Option 1" />
      <Checkbox label="Option 2" />
      <Checkbox label="Option 3" />
    </CheckboxGroup>
  ),
};

