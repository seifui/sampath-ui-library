import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Toast } from '../src/ui/components/Toast';
import { Button } from '../src/ui/components/Button';

const meta: Meta<typeof Toast> = {
  title: 'Subframe/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => (
    <Toast
      variant="neutral"
      title="A toast message"
      description="Additional details"
      actions={
        <Button variant="neutral-secondary" size="small">
          Undo
        </Button>
      }
    />
  ),
};

export const Success: Story = {
  render: () => (
    <Toast
      variant="success"
      title="Success"
      description="Operation completed successfully"
    />
  ),
};

export const Error: Story = {
  render: () => (
    <Toast
      variant="error"
      title="Error"
      description="Something went wrong"
    />
  ),
};

export const Brand: Story = {
  render: () => (
    <Toast
      variant="brand"
      title="Info"
      description="This is a brand variant toast"
    />
  ),
};

export const WithActions: Story = {
  render: () => (
    <Toast
      title="Notification"
      description="This toast has action buttons"
      actions={
        <Button variant="neutral-secondary" size="small">
          Dismiss
        </Button>
      }
    />
  ),
};

