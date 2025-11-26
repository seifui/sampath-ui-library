import type { Meta, StoryObj } from '@storybook/react';
import { SettingsMenu } from '../src/ui/components/SettingsMenu';

const meta: Meta<typeof SettingsMenu> = {
  title: 'Subframe/SettingsMenu',
  component: SettingsMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SettingsMenu>;

export const Default: Story = {
  args: {},
};

