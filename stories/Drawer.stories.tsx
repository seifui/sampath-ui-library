import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import * as SubframeCore from '@subframe/core';
import { Drawer } from '../src/ui/components/Drawer';
import { Button } from '../src/ui/components/Button';

const meta: Meta<typeof Drawer> = {
  title: 'Subframe/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer open={open} onOpenChange={setOpen}>
          <SubframeCore.Drawer.Portal>
            <SubframeCore.Drawer.Overlay className="fixed inset-0 bg-[#00000066]" />
            <Drawer.Content className="p-6">
              <h2 className="text-lg font-semibold mb-4">Drawer Title</h2>
              <p className="mb-4">This is the drawer content.</p>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </Drawer.Content>
          </SubframeCore.Drawer.Portal>
        </Drawer>
      </>
    );
  },
};

