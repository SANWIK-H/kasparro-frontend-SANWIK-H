import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  darkMode?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary',
  size = 'md',
  darkMode = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-colors';
  
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: darkMode 
      ? 'bg-gray-800 text-white border-2 border-gray-700 hover:border-blue-600'
      : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-blue-600',
    ghost: darkMode
      ? 'text-gray-300 hover:bg-gray-700'
      : 'text-gray-600 hover:bg-gray-100'
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}