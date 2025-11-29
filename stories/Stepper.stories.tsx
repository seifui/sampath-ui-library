import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Stepper } from '../src/ui/components/Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Subframe/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <Stepper>
        <Stepper.Step
          variant="completed"
          stepNumber={1}
          label="Create an account"
          firstStep
        />
        <Stepper.Step
          variant="active"
          stepNumber={2}
          label="Enter details"
        />
        <Stepper.Step
          variant="default"
          stepNumber={3}
          label="Start building!"
          lastStep
        />
      </Stepper>
    </div>
  ),
};

