import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import * as SubframeCore from '@subframe/core';
import { ContextMenu } from '../src/ui/components/ContextMenu';

const meta: Meta<typeof ContextMenu> = {
  title: 'Subframe/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: () => (
    <SubframeCore.ContextMenu.Root>
      <SubframeCore.ContextMenu.Trigger asChild>
        <div
          className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed border-neutral-border bg-neutral-50 text-sm text-neutral-600"
        >
          Right-click here to open context menu
        </div>
      </SubframeCore.ContextMenu.Trigger>
      <SubframeCore.ContextMenu.Portal>
        <SubframeCore.ContextMenu.Content
          className="flex min-w-[192px] flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background px-1 py-1 shadow-lg"
        >
          <ContextMenu.ContextItem>Edit</ContextMenu.ContextItem>
          <ContextMenu.ContextItem>Duplicate</ContextMenu.ContextItem>
          <ContextMenu.ContextDivider />
          <ContextMenu.ContextItem>Archive</ContextMenu.ContextItem>
          <ContextMenu.ContextItem>Delete</ContextMenu.ContextItem>
        </SubframeCore.ContextMenu.Content>
      </SubframeCore.ContextMenu.Portal>
    </SubframeCore.ContextMenu.Root>
  ),
};

