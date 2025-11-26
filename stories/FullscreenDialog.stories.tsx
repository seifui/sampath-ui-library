import type { Meta, StoryObj } from '@storybook/react';
import { FullscreenDialog } from '../src/ui/components/FullscreenDialog';

const meta: Meta<typeof FullscreenDialog> = {
  title: 'Subframe/FullscreenDialog',
  component: FullscreenDialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FullscreenDialog>;

export const Default: Story = {
  args: {},
};

