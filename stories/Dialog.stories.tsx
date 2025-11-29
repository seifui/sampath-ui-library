import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import * as SubframeCore from '@subframe/core';
import { Dialog } from '../src/ui/components/Dialog';
import { Button } from '../src/ui/components/Button';

const meta: Meta<typeof Dialog> = {
  title: 'Subframe/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <SubframeCore.Dialog.Portal>
            <SubframeCore.Dialog.Overlay className="fixed inset-0 bg-[#00000099]" />
            <Dialog.Content className="p-6">
              <h2 className="text-lg font-semibold mb-4">Dialog Title</h2>
              <p className="mb-4">This is the dialog content.</p>
              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpen(false)}>Confirm</Button>
              </div>
            </Dialog.Content>
          </SubframeCore.Dialog.Portal>
        </Dialog>
      </>
    );
  },
};

