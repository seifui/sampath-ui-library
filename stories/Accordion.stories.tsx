import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
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
  render: () => (
    <div className="w-96">
      <Accordion trigger="Click to expand">
        <div className="p-4">
          This is the accordion content that appears when expanded.
        </div>
      </Accordion>
    </div>
  ),
};

export const WithChevron: Story = {
  render: () => (
    <div className="w-96">
      <Accordion trigger={
        <div className="flex items-center justify-between w-full p-2">
          <span>Section Title</span>
          <Accordion.Chevron />
        </div>
      }>
        <div className="p-4">
          This accordion includes a chevron icon that rotates when opened.
        </div>
      </Accordion>
    </div>
  ),
};

