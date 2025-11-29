import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Slider } from '../src/ui/components/Slider';

const meta: Meta<typeof Slider> = {
  title: 'Subframe/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    defaultValue: {
      control: { type: 'object' },
      description: 'The default value(s) for the slider',
    },
    value: {
      control: { type: 'object' },
      description: 'The controlled value(s) for the slider',
    },
    min: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'The minimum value',
    },
    max: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'The maximum value',
    },
    step: {
      control: { type: 'number', min: 0.1, max: 10, step: 0.1 },
      description: 'The step value',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => (
    <div className="w-96 p-4">
      <Slider defaultValue={[50]} />
    </div>
  ),
};

export const Range: Story = {
  render: () => (
    <div className="w-96 p-4">
      <Slider defaultValue={[25, 75]} />
    </div>
  ),
};

export const WithMinMax: Story = {
  render: () => (
    <div className="w-96 p-4">
      <Slider defaultValue={[30]} min={0} max={100} />
    </div>
  ),
};

export const WithStep: Story = {
  render: () => (
    <div className="w-96 p-4">
      <Slider defaultValue={[50]} min={0} max={100} step={10} />
    </div>
  ),
};

