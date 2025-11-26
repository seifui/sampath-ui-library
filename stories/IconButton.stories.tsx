import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '../src/ui/components/IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Subframe/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    icon: '🔍',
  },
};

export const Small: Story = {
  args: {
    icon: '🔍',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    icon: '🔍',
    size: 'large',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton icon="🔍" variant="brand-primary" />
      <IconButton icon="🔍" variant="brand-secondary" />
      <IconButton icon="🔍" variant="neutral-primary" />
    </div>
  ),
};

