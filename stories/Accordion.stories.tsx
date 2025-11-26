import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../src/ui/components/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Subframe/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    children: 'Accordion Content',
  },
};

export const WithTrigger: Story = {
  args: {
    trigger: 'Click to expand',
    children: 'This is the accordion content that appears when expanded.',
  },
};

