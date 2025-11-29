import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Tabs } from '../src/ui/components/Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Subframe/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');
    return (
      <div className="w-full">
        <Tabs>
          <Tabs.Item
            active={activeTab === 'tab1'}
            onClick={() => setActiveTab('tab1')}
          >
            Tab 1
          </Tabs.Item>
          <Tabs.Item
            active={activeTab === 'tab2'}
            onClick={() => setActiveTab('tab2')}
          >
            Tab 2
          </Tabs.Item>
          <Tabs.Item
            active={activeTab === 'tab3'}
            onClick={() => setActiveTab('tab3')}
          >
            Tab 3
          </Tabs.Item>
        </Tabs>
        <div className="mt-4 p-4 border border-neutral-border rounded-md">
          {activeTab === 'tab1' && <p>Content for Tab 1</p>}
          {activeTab === 'tab2' && <p>Content for Tab 2</p>}
          {activeTab === 'tab3' && <p>Content for Tab 3</p>}
        </div>
      </div>
    );
  },
};

