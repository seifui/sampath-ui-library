import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import * as SubframeCore from '@subframe/core';
import { FullscreenDialog } from '../src/ui/components/FullscreenDialog';
import { Button } from '../src/ui/components/Button';

const meta: Meta<typeof FullscreenDialog> = {
  title: 'Subframe/FullscreenDialog',
  component: FullscreenDialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FullscreenDialog>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <div className="p-8">
          <Button onClick={() => setOpen(true)}>Open Fullscreen Dialog</Button>
        </div>
        <FullscreenDialog open={open} onOpenChange={setOpen}>
          <SubframeCore.FullScreenDialog.Portal>
            <div className="flex h-full w-full flex-col p-8">
              <div className="mb-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold">Fullscreen Dialog</h1>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </div>
              <div className="flex-1">
                <p>This is a fullscreen dialog that takes up the entire viewport.</p>
              </div>
            </div>
          </SubframeCore.FullScreenDialog.Portal>
        </FullscreenDialog>
      </>
    );
  },
};

