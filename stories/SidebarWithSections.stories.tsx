import type { Meta, StoryObj } from '@storybook/react';
import { SidebarWithSections } from '../src/ui/components/SidebarWithSections';

const meta: Meta<typeof SidebarWithSections> = {
  title: 'Subframe/SidebarWithSections',
  component: SidebarWithSections,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SidebarWithSections>;

export const Default: Story = {
  args: {},
};

