import React from 'react';
import { MetricCardProps } from '@/lib/types';

export function MetricCard({ 
  title, 
  value, 
  subtitle, 
  icon,
  darkMode = false,
  className = ''
}: MetricCardProps) {
  return (
    <div className={`p-6 rounded-lg border ${
      darkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    } ${className}`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className={`text-sm font-medium ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {title}
        </h3>
        {icon && (
          <div className={darkMode ? 'text-gray-500' : 'text-gray-400'}>
            {icon}
          </div>
        )}
      </div>
      <div className={`text-3xl font-bold mb-1 ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>
        {value}
      </div>
      {subtitle && (
        <p className={`text-sm ${
          darkMode ? 'text-gray-500' : 'text-gray-500'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}