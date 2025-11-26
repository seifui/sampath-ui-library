import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/ui/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Subframe/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'brand-primary',
    children: 'Button',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'brand-secondary',
    children: 'Button',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    variant: 'brand-primary',
    children: 'Small Button',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    variant: 'brand-primary',
    children: 'Large Button',
    size: 'large',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'brand-primary',
    children: 'Button with Icon',
    icon: '🔍',
    size: 'medium',
  },
};

export const Loading: Story = {
  args: {
    variant: 'brand-primary',
    children: 'Loading...',
    loading: true,
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'brand-primary',
    children: 'Disabled',
    disabled: true,
    size: 'medium',
  },
};

