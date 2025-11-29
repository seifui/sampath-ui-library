import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FeatherFile, FeatherFolder } from '@subframe/core';
import { TreeView } from '../src/ui/components/TreeView';

const meta: Meta<typeof TreeView> = {
  title: 'Subframe/TreeView',
  component: TreeView,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TreeView>;

export const Default: Story = {
  render: () => (
    <div className="w-64">
      <TreeView>
        <TreeView.Item icon={<FeatherFile />} label="Overview" />
        <TreeView.Item icon={<FeatherFile />} label="Installation" />
        <TreeView.Item icon={<FeatherFile />} label="Theme" />
        <TreeView.Folder label="Components" icon={<FeatherFolder />}>
          <TreeView.Item icon={<FeatherFile />} label="Avatar" selected />
          <TreeView.Item icon={<FeatherFile />} label="Button" />
          <TreeView.Item icon={<FeatherFile />} label="Tabs" />
          <TreeView.Folder label="Forms" icon={<FeatherFolder />}>
            <TreeView.Item icon={<FeatherFile />} label="Checkbox" />
            <TreeView.Item icon={<FeatherFile />} label="Radio" />
            <TreeView.Item icon={<FeatherFile />} label="Text Field" />
          </TreeView.Folder>
        </TreeView.Folder>
      </TreeView>
    </div>
  ),
};

