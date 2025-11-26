import React from 'react';

export interface PlaceholderProps {
  text?: string;
  className?: string;
}

export const Placeholder: React.FC<PlaceholderProps> = ({ 
  text = 'Placeholder Component',
  className = ''
}) => {
  return (
    <div className={`p-4 border-2 border-dashed border-gray-300 rounded-lg text-center ${className}`}>
      <p className="text-gray-600">{text}</p>
      <p className="text-sm text-gray-400 mt-2">
        Sync Subframe components to replace this placeholder
      </p>
    </div>
  );
};

