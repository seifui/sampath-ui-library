import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../src/ui/components/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Subframe/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    children: 'JD',
    variant: 'brand',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    children: 'JD',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'JD',
    size: 'large',
  },
};

export const WithImage: Story = {
  args: {
    image: 'https://i.pravatar.cc/150?img=1',
    size: 'medium',
  },
};

export const Square: Story = {
  args: {
    children: 'JD',
    square: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar variant="brand">BR</Avatar>
      <Avatar variant="neutral">NE</Avatar>
      <Avatar variant="success">SU</Avatar>
      <Avatar variant="warning">WA</Avatar>
      <Avatar variant="error">ER</Avatar>
    </div>
  ),
};

