import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SidebarWithSections } from '../src/ui/components/SidebarWithSections';

const meta: Meta<typeof SidebarWithSections> = {
  title: 'Subframe/SidebarWithSections',
  component: SidebarWithSections,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SidebarWithSections>;

export const Default: Story = {
  render: () => (
    <div className="h-screen flex">
      <SidebarWithSections>
        <SidebarWithSections.NavSection label="Section">
          <SidebarWithSections.NavItem selected>Item</SidebarWithSections.NavItem>
          <SidebarWithSections.NavItem>Item</SidebarWithSections.NavItem>
          <SidebarWithSections.NavItem>Item</SidebarWithSections.NavItem>
        </SidebarWithSections.NavSection>
        <SidebarWithSections.NavSection label="Section">
          <SidebarWithSections.NavItem>Item</SidebarWithSections.NavItem>
          <SidebarWithSections.NavItem>Item</SidebarWithSections.NavItem>
          <SidebarWithSections.NavItem>Item</SidebarWithSections.NavItem>
        </SidebarWithSections.NavSection>
        <SidebarWithSections.NavSection label="Section">
          <SidebarWithSections.NavItem>Item</SidebarWithSections.NavItem>
          <SidebarWithSections.NavItem>Item</SidebarWithSections.NavItem>
          <SidebarWithSections.NavItem>Item</SidebarWithSections.NavItem>
        </SidebarWithSections.NavSection>
      </SidebarWithSections>
      <div className="flex-1 p-8">
        <h1 className="text-heading-1 font-heading-1 text-default-font">Main Content</h1>
      </div>
    </div>
  ),
};

