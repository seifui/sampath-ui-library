import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ToggleGroup } from '../src/ui/components/ToggleGroup';

const meta: Meta<typeof ToggleGroup> = {
  title: 'Subframe/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="option1">
      <ToggleGroup.Item value="option1">Option</ToggleGroup.Item>
      <ToggleGroup.Item value="option2">Option</ToggleGroup.Item>
      <ToggleGroup.Item value="option3">Option</ToggleGroup.Item>
    </ToggleGroup>
  ),
};

