'use client';

import React from 'react';
import { FileText, Shield, Brain, Link, TrendingUp, Search, BarChart3 } from 'lucide-react';
import { useAppState } from '@/context/AppContext';

export function ModulesList() {
  const { darkMode } = useAppState();

  const modules = [
    { 
      icon: <FileText className="w-6 h-6" />, 
      title: 'Content Quality & Depth', 
      desc: 'AI-readability analysis and content comprehensiveness scoring' 
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: 'E-E-A-T Signals', 
      desc: 'Trust, authority, and expertise metrics evaluation' 
    },
    { 
      icon: <Brain className="w-6 h-6" />, 
      title: 'Semantic Relevance', 
      desc: 'Topic coverage mapping and entity relationship analysis' 
    },
    { 
      icon: <Link className="w-6 h-6" />, 
      title: 'Citation Patterns', 
      desc: 'AI attribution tracking across major language models' 
    },
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      title: 'Visibility Trends', 
      desc: 'Cross-platform monitoring and performance tracking' 
    },
    { 
      icon: <Search className="w-6 h-6" />, 
      title: 'Keyword Intent', 
      desc: 'Query-content alignment and intent matching' 
    },
    { 
      icon: <BarChart3 className="w-6 h-6" />, 
      title: 'Technical SEO', 
      desc: 'Site architecture analysis and crawlability assessment' 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className={`text-3xl font-bold mb-4 text-center ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>
        7 Core Audit Modules
      </h2>
      
      <p className={`text-lg mb-12 text-center max-w-2xl mx-auto ${
        darkMode ? 'text-gray-400' : 'text-gray-600'
      }`}>
        Comprehensive analysis of your brand's presence in AI-powered search
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-lg border hover:border-blue-500 transition-all cursor-pointer group ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' 
                : 'bg-white border-gray-200 hover:shadow-lg'
            }`}
          >
            <div className={`mb-4 transition-colors ${
              darkMode 
                ? 'text-blue-400 group-hover:text-blue-300' 
                : 'text-blue-600 group-hover:text-blue-700'
            }`}>
              {module.icon}
            </div>
            
            <h3 className={`font-semibold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {module.title}
            </h3>
            
            <p className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {module.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
