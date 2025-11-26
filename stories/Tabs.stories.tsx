import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../src/ui/components/Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Subframe/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {},
};

