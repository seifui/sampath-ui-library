import type { Meta, StoryObj } from '@storybook/react';
import { CopyToClipboardButton } from '../src/ui/components/CopyToClipboardButton';

const meta: Meta<typeof CopyToClipboardButton> = {
  title: 'Subframe/CopyToClipboardButton',
  component: CopyToClipboardButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CopyToClipboardButton>;

export const Default: Story = {
  args: {
    text: 'Copy this text',
  },
};

