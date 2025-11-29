import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Breadcrumbs } from '../src/ui/components/Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Subframe/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      <Breadcrumbs.Item>Home</Breadcrumbs.Item>
      <Breadcrumbs.Divider />
      <Breadcrumbs.Item>Products</Breadcrumbs.Item>
      <Breadcrumbs.Divider />
      <Breadcrumbs.Item active>Current Page</Breadcrumbs.Item>
    </Breadcrumbs>
  ),
};

