import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Progress } from '../src/ui/components/Progress';

const meta: Meta<typeof Progress> = {
  title: 'Subframe/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 30,
  },
  render: (args) => (
    <div className="w-96 p-4">
      <Progress {...args} />
    </div>
  ),
};

export const Zero: Story = {
  args: {
    value: 0,
  },
  render: (args) => (
    <div className="w-96">
      <Progress {...args} />
    </div>
  ),
};

export const Half: Story = {
  args: {
    value: 50,
  },
  render: (args) => (
    <div className="w-96">
      <Progress {...args} />
    </div>
  ),
};

export const Full: Story = {
  args: {
    value: 100,
  },
  render: (args) => (
    <div className="w-96">
      <Progress {...args} />
    </div>
  ),
};

export const CustomValues: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div>
        <p className="text-caption font-caption text-subtext-color mb-2">25%</p>
        <Progress value={25} />
      </div>
      <div>
        <p className="text-caption font-caption text-subtext-color mb-2">75%</p>
        <Progress value={75} />
      </div>
      <div>
        <p className="text-caption font-caption text-subtext-color mb-2">90%</p>
        <Progress value={90} />
      </div>
    </div>
  ),
};

