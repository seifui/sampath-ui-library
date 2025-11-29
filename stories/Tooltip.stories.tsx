import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import * as SubframeCore from '@subframe/core';
import { Tooltip } from '../src/ui/components/Tooltip';
import { Button } from '../src/ui/components/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Subframe/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <SubframeCore.Tooltip.Provider>
      <SubframeCore.Tooltip.Root>
        <SubframeCore.Tooltip.Trigger asChild>
          <Button>Hover me</Button>
        </SubframeCore.Tooltip.Trigger>
        <SubframeCore.Tooltip.Portal>
          <SubframeCore.Tooltip.Content>
            <Tooltip>Tooltip</Tooltip>
          </SubframeCore.Tooltip.Content>
        </SubframeCore.Tooltip.Portal>
      </SubframeCore.Tooltip.Root>
    </SubframeCore.Tooltip.Provider>
  ),
};

