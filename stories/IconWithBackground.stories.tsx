import type { Meta, StoryObj } from '@storybook/react';
import { IconWithBackground } from '../src/ui/components/IconWithBackground';

const meta: Meta<typeof IconWithBackground> = {
  title: 'Subframe/IconWithBackground',
  component: IconWithBackground,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof IconWithBackground>;

export const Default: Story = {
  args: {
    icon: '🔍',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconWithBackground icon="🔍" variant="brand" />
      <IconWithBackground icon="🔍" variant="neutral" />
      <IconWithBackground icon="🔍" variant="success" />
      <IconWithBackground icon="🔍" variant="warning" />
      <IconWithBackground icon="🔍" variant="error" />
    </div>
  ),
};

