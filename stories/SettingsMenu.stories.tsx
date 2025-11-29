import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FeatherUser, FeatherLock, FeatherBell, FeatherCreditCard, FeatherSettings, FeatherUsers } from '@subframe/core';
import { SettingsMenu } from '../src/ui/components/SettingsMenu';

const meta: Meta<typeof SettingsMenu> = {
  title: 'Subframe/SettingsMenu',
  component: SettingsMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SettingsMenu>;

export const Default: Story = {
  render: () => (
    <div className="h-screen">
      <SettingsMenu>
        <div>
          <h2 className="text-heading-2 font-heading-2 text-default-font">Settings</h2>
        </div>
        <div>
          <h3 className="text-caption-bold font-caption-bold text-subtext-color mb-2">Personal</h3>
          <SettingsMenu.Item icon={<FeatherUser />} label="Account" selected />
          <SettingsMenu.Item icon={<FeatherLock />} label="API Keys" />
          <SettingsMenu.Item icon={<FeatherBell />} label="Notifications" />
        </div>
        <div>
          <h3 className="text-caption-bold font-caption-bold text-subtext-color mb-2">Workspace</h3>
          <SettingsMenu.Item icon={<FeatherCreditCard />} label="Billing" />
          <SettingsMenu.Item icon={<FeatherSettings />} label="Integrations" />
          <SettingsMenu.Item icon={<FeatherUsers />} label="Team Members" />
        </div>
      </SettingsMenu>
    </div>
  ),
};

