'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAppState } from '@/context/AppContext';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const { darkMode } = useAppState();
  const router = useRouter();

  return (
    <div className={`py-20 ${
      darkMode 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
        : 'bg-gradient-to-b from-blue-50 to-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          AI-Native SEO Intelligence
          <br />
          <span className="text-blue-600">For the AI-First Era</span>
        </h1>
        
        <p className={`text-xl mb-8 max-w-3xl mx-auto ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Understand how ChatGPT, Perplexity, and Gemini see your brand. 
          Optimize for AI search engines that are reshaping discovery.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            variant="primary"
            size="lg"
            onClick={() => router.push('/audit')}
          >
            Run Free AI-SEO Audit
          </Button>

          <Button
            variant="secondary"
            size="lg"
            darkMode={darkMode}
            onClick={() => router.push('/dashboard')}
          >
            View Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
