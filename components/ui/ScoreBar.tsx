import React from 'react';
import { ScoreBarProps } from '@/lib/types';

export function ScoreBar({ 
  score, 
  label,
  darkMode = false,
  className = ''
}: ScoreBarProps) {
  const getColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getTextColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {label && (
        <span className={`text-sm font-medium ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        } min-w-[100px]`}>
          {label}
        </span>
      )}
      <div className={`flex-1 h-2 rounded-full overflow-hidden ${
        darkMode ? 'bg-gray-700' : 'bg-gray-200'
      }`}>
        <div 
          className={`h-full ${getColor(score)} transition-all duration-500`}
          style={{ width: `${score}%` }}
        />
      </div>
      <span className={`text-sm font-semibold min-w-[3rem] text-right ${
        getTextColor(score)
      }`}>
        {score}%
      </span>
    </div>
  );
}
