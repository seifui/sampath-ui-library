import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../src/ui/components/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Subframe/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    title: 'Alert Title',
    description: 'This is a neutral alert message.',
  },
};

export const Brand: Story = {
  args: {
    variant: 'brand',
    title: 'Brand Alert',
    description: 'This is a brand alert message.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success!',
    description: 'Operation completed successfully.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    description: 'Please review this information.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    description: 'Something went wrong.',
  },
};

