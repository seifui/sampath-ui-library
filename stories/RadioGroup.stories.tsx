import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
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
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <RadioGroup
        label="Choose an option"
        value={value}
        onValueChange={setValue}
      >
        <RadioGroup.Option value="option1" label="Option 1" />
        <RadioGroup.Option value="option2" label="Option 2" />
        <RadioGroup.Option value="option3" label="Option 3" />
      </RadioGroup>
    );
  },
};

export const Horizontal: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <RadioGroup
        label="Choose an option"
        horizontal
        value={value}
        onValueChange={setValue}
      >
        <RadioGroup.Option value="option1" label="Option 1" />
        <RadioGroup.Option value="option2" label="Option 2" />
        <RadioGroup.Option value="option3" label="Option 3" />
      </RadioGroup>
    );
  },
};

export const WithHelpText: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <RadioGroup
        label="Choose an option"
        helpText="Select one of the options above"
        value={value}
        onValueChange={setValue}
      >
        <RadioGroup.Option value="option1" label="Option 1" />
        <RadioGroup.Option value="option2" label="Option 2" />
        <RadioGroup.Option value="option3" label="Option 3" />
      </RadioGroup>
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <RadioGroup
        label="Choose an option"
        helpText="Please select an option"
        error
        value={value}
        onValueChange={setValue}
      >
        <RadioGroup.Option value="option1" label="Option 1" />
        <RadioGroup.Option value="option2" label="Option 2" />
        <RadioGroup.Option value="option3" label="Option 3" />
      </RadioGroup>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <RadioGroup
        label="Choose an option"
        value={value}
        onValueChange={setValue}
      >
        <RadioGroup.Option value="option1" label="Option 1" />
        <RadioGroup.Option value="option2" label="Option 2" disabled />
        <RadioGroup.Option value="option3" label="Option 3" />
      </RadioGroup>
    );
  },
};

