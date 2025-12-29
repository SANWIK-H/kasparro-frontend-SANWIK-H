'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const MODULES = [
  {
    id: 'content', name: 'Content Quality', desc: 'AI-readability', score: 82,
    insights: ['Strong technical depth', 'Optimized for LLM'],
    issues: ['Missing schema markup 23%'],
    recommendations: ['Implement FAQ schema', 'Standardize headings']
  },
  {
    id: 'eeat', name: 'E-E-A-T Signals', desc: 'Trust metrics', score: 76,
    insights: ['Strong author credentials'],
    issues: ['Limited citations'],
    recommendations: ['Add cited sources']
  },
  {
    id: 'semantic', name: 'Semantic Relevance', desc: 'Topic mapping', score: 88,
    insights: ['Excellent entity linking'],
    issues: ['Gaps in subtopics'],
    recommendations: ['Expand AI content']
  }
];

export default function AuditPage() {
  const [current, setCurrent] = useState(MODULES[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-4">
          <Link href="/" className="text-gray-600">Home</Link>
          <Link href="/dashboard" className="text-gray-600">Dashboard</Link>
          <Link href="/audit" className="text-blue-600 font-semibold">Audit</Link>
          <Link href="/architecture" className="text-gray-600">Architecture</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">AI-SEO Audit</h1>
        
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg border p-4">
            <h2 className="text-sm font-semibold mb-4 uppercase text-gray-600">Modules</h2>
            {MODULES.map(m => (
              <button
                key={m.id}
                onClick={() => setCurrent(m)}
                className={`w-full text-left px-3 py-2 rounded mb-1 text-sm ${
                  current.id === m.id ? 'bg-blue-50 text-blue-900' : 'hover:bg-gray-50'
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-lg border p-6">
              <div className="flex justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{current.name}</h2>
                  <p className="text-gray-600">{current.desc}</p>
                </div>
                <div className="text-4xl font-bold text-green-500">{current.score}</div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Key Insights</h3>
              {current.insights.map((i, idx) => (
                <div key={idx} className="flex gap-2 mb-2">
                  <span className="text-green-500">✓</span>
                  <span>{i}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Issues</h3>
              {current.issues.map((i, idx) => (
                <div key={idx} className="flex gap-2 mb-2">
                  <span className="text-yellow-500">⚠</span>
                  <span>{i}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Recommendations</h3>
              {current.recommendations.map((r, idx) => (
                <div key={idx} className="p-3 bg-gray-50 rounded mb-2">
                  <span className="font-semibold text-blue-600">{idx + 1}.</span> {r}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}