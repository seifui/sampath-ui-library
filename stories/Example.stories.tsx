import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Example/Button',
  component: 'button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: () => <button className="bg-blue-500 text-white px-4 py-2 rounded">Button</button>,
};

export const Secondary: Story = {
  render: () => <button className="bg-gray-500 text-white px-4 py-2 rounded">Button</button>,
};

