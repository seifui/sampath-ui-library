'use client';

import { useState } from 'react';
import { TextField, Button } from '../src';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    alert(`You entered: ${inputValue}`);
  };

  return (
    <div className="min-h-screen bg-default-background p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-heading-1 font-heading-1 text-default-font mb-8">
          Welcome to Subframe UI Library
        </h1>
        
        <div className="flex flex-col gap-4">
          <TextField
            label="Enter your name"
            helpText="This is a demo input field with Subframe theme"
          >
            <TextField.Input
              placeholder="Type something here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          
          <div className="flex gap-2">
            <Button
              variant="brand-primary"
              onClick={handleSubmit}
              disabled={!inputValue.trim()}
            >
              Submit
            </Button>
            
            <Button
              variant="neutral-secondary"
              onClick={() => setInputValue('')}
            >
              Clear
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

