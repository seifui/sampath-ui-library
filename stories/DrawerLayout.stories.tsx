import type { Meta, StoryObj } from '@storybook/react';
import { DrawerLayout } from '../src/ui/layouts/DrawerLayout';

const meta: Meta<typeof DrawerLayout> = {
  title: 'Subframe/Layouts/DrawerLayout',
  component: DrawerLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof DrawerLayout>;

export const Default: Story = {
  args: {},
};

