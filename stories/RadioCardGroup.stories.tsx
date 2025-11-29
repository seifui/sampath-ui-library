import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { RadioCardGroup } from '../src/ui/components/RadioCardGroup';

const meta: Meta<typeof RadioCardGroup> = {
  title: 'Subframe/RadioCardGroup',
  component: RadioCardGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof RadioCardGroup>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <div className="w-96">
        <RadioCardGroup value={value} onValueChange={setValue}>
          <RadioCardGroup.RadioCard value="option1">
            <div>
              <div className="text-body-bold font-body-bold text-default-font">Option 1</div>
              <div className="text-caption font-caption text-subtext-color">Description for option 1</div>
            </div>
          </RadioCardGroup.RadioCard>
          <RadioCardGroup.RadioCard value="option2">
            <div>
              <div className="text-body-bold font-body-bold text-default-font">Option 2</div>
              <div className="text-caption font-caption text-subtext-color">Description for option 2</div>
            </div>
          </RadioCardGroup.RadioCard>
          <RadioCardGroup.RadioCard value="option3">
            <div>
              <div className="text-body-bold font-body-bold text-default-font">Option 3</div>
              <div className="text-caption font-caption text-subtext-color">Description for option 3</div>
            </div>
          </RadioCardGroup.RadioCard>
        </RadioCardGroup>
      </div>
    );
  },
};

export const Horizontal: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <div className="w-full max-w-4xl">
        <RadioCardGroup value={value} onValueChange={setValue} className="flex-row">
          <RadioCardGroup.RadioCard value="option1">
            <div>
              <div className="text-body-bold font-body-bold text-default-font">Option 1</div>
              <div className="text-caption font-caption text-subtext-color">Description</div>
            </div>
          </RadioCardGroup.RadioCard>
          <RadioCardGroup.RadioCard value="option2">
            <div>
              <div className="text-body-bold font-body-bold text-default-font">Option 2</div>
              <div className="text-caption font-caption text-subtext-color">Description</div>
            </div>
          </RadioCardGroup.RadioCard>
          <RadioCardGroup.RadioCard value="option3">
            <div>
              <div className="text-body-bold font-body-bold text-default-font">Option 3</div>
              <div className="text-caption font-caption text-subtext-color">Description</div>
            </div>
          </RadioCardGroup.RadioCard>
        </RadioCardGroup>
      </div>
    );
  },
};

export const WithoutRadio: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <div className="w-96">
        <RadioCardGroup value={value} onValueChange={setValue}>
          <RadioCardGroup.RadioCard value="option1" hideRadio>
            <div>
              <div className="text-body-bold font-body-bold text-default-font">Option 1</div>
              <div className="text-caption font-caption text-subtext-color">No radio button visible</div>
            </div>
          </RadioCardGroup.RadioCard>
          <RadioCardGroup.RadioCard value="option2" hideRadio>
            <div>
              <div className="text-body-bold font-body-bold text-default-font">Option 2</div>
              <div className="text-caption font-caption text-subtext-color">No radio button visible</div>
            </div>
          </RadioCardGroup.RadioCard>
        </RadioCardGroup>
      </div>
    );
  },
};

export const WithDisabled: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <div className="w-96">
        <RadioCardGroup value={value} onValueChange={setValue}>
          <RadioCardGroup.RadioCard value="option1">
            <div>
              <div className="text-body-bold font-body-bold text-default-font">Option 1</div>
              <div className="text-caption font-caption text-subtext-color">Available</div>
            </div>
          </RadioCardGroup.RadioCard>
          <RadioCardGroup.RadioCard value="option2" disabled>
            <div>
              <div className="text-body-bold font-body-bold text-default-font">Option 2</div>
              <div className="text-caption font-caption text-subtext-color">Disabled</div>
            </div>
          </RadioCardGroup.RadioCard>
          <RadioCardGroup.RadioCard value="option3">
            <div>
              <div className="text-body-bold font-body-bold text-default-font">Option 3</div>
              <div className="text-caption font-caption text-subtext-color">Available</div>
            </div>
          </RadioCardGroup.RadioCard>
        </RadioCardGroup>
      </div>
    );
  },
};

