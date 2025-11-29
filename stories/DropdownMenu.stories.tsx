import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import * as SubframeCore from '@subframe/core';
import { DropdownMenu } from '../src/ui/components/DropdownMenu';
import { Button } from '../src/ui/components/Button';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Subframe/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => (
    <SubframeCore.DropdownMenu.Root>
      <SubframeCore.DropdownMenu.Trigger asChild>
        <Button>Open Menu</Button>
      </SubframeCore.DropdownMenu.Trigger>
      <SubframeCore.DropdownMenu.Portal>
        <SubframeCore.DropdownMenu.Content
          className="flex min-w-[192px] flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background px-1 py-1 shadow-lg"
        >
          <DropdownMenu.DropdownItem>Edit</DropdownMenu.DropdownItem>
          <DropdownMenu.DropdownItem>Duplicate</DropdownMenu.DropdownItem>
          <DropdownMenu.DropdownDivider />
          <DropdownMenu.DropdownItem>Archive</DropdownMenu.DropdownItem>
          <DropdownMenu.DropdownItem>Delete</DropdownMenu.DropdownItem>
        </SubframeCore.DropdownMenu.Content>
      </SubframeCore.DropdownMenu.Portal>
    </SubframeCore.DropdownMenu.Root>
  ),
};

