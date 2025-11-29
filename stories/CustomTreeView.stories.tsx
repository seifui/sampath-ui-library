import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CustomTreeView } from '../src/ui/components/CustomTreeView';

const meta: Meta<typeof CustomTreeView> = {
  title: 'Subframe/CustomTreeView',
  component: CustomTreeView,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CustomTreeView>;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <CustomTreeView>
        <CustomTreeView.Folder label="Banking" value="$9,682.12">
          <CustomTreeView.Item label="Cash & Checking" value="$3,729.04" />
          <CustomTreeView.Item label="Savings" value="$5,963.08" />
        </CustomTreeView.Folder>
        <CustomTreeView.Folder label="Investments" value="$25,946.83">
          <CustomTreeView.Item label="Brokerage" value="$8,385.88" />
          <CustomTreeView.Item label="Retirement IRA" value="$6,743.92" />
          <CustomTreeView.Item label="401k" value="$11,422.48" />
        </CustomTreeView.Folder>
      </CustomTreeView>
    </div>
  ),
};

export const SingleFolder: Story = {
  render: () => (
    <div className="w-96">
      <CustomTreeView>
        <CustomTreeView.Folder label="Documents" value="12 items">
          <CustomTreeView.Item label="File 1.pdf" value="2.4 MB" />
          <CustomTreeView.Item label="File 2.docx" value="1.8 MB" />
          <CustomTreeView.Item label="File 3.xlsx" value="3.2 MB" />
        </CustomTreeView.Folder>
      </CustomTreeView>
    </div>
  ),
};

export const NestedFolders: Story = {
  render: () => (
    <div className="w-96">
      <CustomTreeView>
        <CustomTreeView.Folder label="Projects" value="5">
          <CustomTreeView.Folder label="Frontend" value="3">
            <CustomTreeView.Item label="React App" value="Active" />
            <CustomTreeView.Item label="Vue App" value="Active" />
          </CustomTreeView.Folder>
          <CustomTreeView.Folder label="Backend" value="2">
            <CustomTreeView.Item label="API Server" value="Running" />
            <CustomTreeView.Item label="Database" value="Connected" />
          </CustomTreeView.Folder>
        </CustomTreeView.Folder>
      </CustomTreeView>
    </div>
  ),
};

