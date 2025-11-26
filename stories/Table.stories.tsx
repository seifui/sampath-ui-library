import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../src/ui/components/Table';

const meta: Meta<typeof Table> = {
  title: 'Subframe/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {},
};

