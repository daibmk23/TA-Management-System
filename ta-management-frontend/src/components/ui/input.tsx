import React from 'react';          

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input className={`p-2 border border-gray-300 rounded ${className}`} {...props} />
  );
}; 