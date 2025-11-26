import type { Meta, StoryObj } from '@storybook/react';
import { DefaultPageLayout } from '../src/ui/layouts/DefaultPageLayout';

const meta: Meta<typeof DefaultPageLayout> = {
  title: 'Subframe/Layouts/DefaultPageLayout',
  component: DefaultPageLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof DefaultPageLayout>;

export const Default: Story = {
  args: {},
};

