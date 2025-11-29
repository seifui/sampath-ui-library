import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Table } from '../src/ui/components/Table';
import { Badge } from '../src/ui/components/Badge';
import * as SubframeCore from '@subframe/core';

const meta: Meta<typeof Table> = {
  title: 'Subframe/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-3xl">
      <Table
        header={
          <Table.HeaderRow>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.HeaderRow>
        }
      >
        <Table.Row>
          <Table.Cell>John Walton</Table.Cell>
          <Table.Cell>john.walton@example.com</Table.Cell>
          <Table.Cell>
            <Badge variant="brand">Engineering</Badge>
          </Table.Cell>
          <Table.Cell>
            <SubframeCore.IconWrapper className="text-body font-body text-subtext-color">
              <SubframeCore.FeatherMoreHorizontal />
            </SubframeCore.IconWrapper>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Sarah Chandler</Table.Cell>
          <Table.Cell>sarah.chandler@example.com</Table.Cell>
          <Table.Cell>
            <Badge variant="warning">Design</Badge>
          </Table.Cell>
          <Table.Cell>
            <SubframeCore.IconWrapper className="text-body font-body text-subtext-color">
              <SubframeCore.FeatherMoreHorizontal />
            </SubframeCore.IconWrapper>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Susan Best</Table.Cell>
          <Table.Cell>susan.best@example.com</Table.Cell>
          <Table.Cell>
            <Badge variant="success">Product</Badge>
          </Table.Cell>
          <Table.Cell>
            <SubframeCore.IconWrapper className="text-body font-body text-subtext-color">
              <SubframeCore.FeatherMoreHorizontal />
            </SubframeCore.IconWrapper>
          </Table.Cell>
        </Table.Row>
      </Table>
    </div>
  ),
};

