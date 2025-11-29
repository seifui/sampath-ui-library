import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { VerticalStepper } from '../src/ui/components/VerticalStepper';

const meta: Meta<typeof VerticalStepper> = {
  title: 'Subframe/VerticalStepper',
  component: VerticalStepper,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof VerticalStepper>;

export const Default: Story = {
  render: () => (
    <div className="w-64">
      <VerticalStepper>
        <VerticalStepper.Step
          variant="completed"
          stepNumber={1}
          label="Create account"
          firstStep
        />
        <VerticalStepper.Step
          variant="active"
          stepNumber={2}
          label="Invite team"
        />
        <VerticalStepper.Step
          variant="default"
          stepNumber={3}
          label="Start building"
          lastStep
        />
      </VerticalStepper>
    </div>
  ),
};

