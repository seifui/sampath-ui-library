import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from '../src/ui/components/LinkButton';

const meta: Meta<typeof LinkButton> = {
  title: 'Subframe/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {
  args: {
    children: 'Link Button',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Link',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Link',
    size: 'large',
  },
};

