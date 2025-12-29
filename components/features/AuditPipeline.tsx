'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useAppState } from '@/context/AppContext';

export function AuditPipeline() {
  const { darkMode } = useAppState();

  const stages = [
    {
      emoji: '🔍',
      title: 'Input Assembler',
      description: 'Crawls site, analyzes content, builds knowledge graph'
    },
    {
      emoji: '⚙️',
      title: 'Audit Modules',
      description: '7 parallel analyses across AI-SEO dimensions'
    },
    {
      emoji: '📊',
      title: 'Actionable Output',
      description: 'Scores, insights, and clear recommendations'
    }
  ];

  return (
    <div className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold mb-12 text-center ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          How Kasparro Works
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {stages.map((stage, idx) => (
            <React.Fragment key={idx}>
              <div className={`flex-1 p-6 rounded-lg border ${
                darkMode 
                  ? 'bg-gray-900 border-gray-700' 
                  : 'bg-white border-gray-200'
              }`}>
                <div className="text-2xl mb-2">{stage.emoji}</div>
                <h3 className={`font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {stage.title}
                </h3>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stage.description}
                </p>
              </div>

              {idx < stages.length - 1 && (
                <ChevronRight className={`hidden md:block ${
                  darkMode ? 'text-gray-600' : 'text-gray-400'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}