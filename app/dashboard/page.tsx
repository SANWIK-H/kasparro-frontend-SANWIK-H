'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, Shield, Search, BarChart3 } from 'lucide-react';

const MOCK_BRANDS = [
  { id: '1', name: 'TechCorp', domain: 'techcorp.com' },
  { id: '2', name: 'HealthPlus', domain: 'healthplus.io' }
];

const MOCK_MODULES = [
  { id: 'content', name: 'Content Quality', score: 82 },
  { id: 'eeat', name: 'E-E-A-T Signals', score: 76 },
  { id: 'semantic', name: 'Semantic Relevance', score: 88 },
  { id: 'citation', name: 'Citation Patterns', score: 64 },
  { id: 'visibility', name: 'AI Visibility', score: 71 },
  { id: 'keyword', name: 'Keyword Mapping', score: 79 },
  { id: 'technical', name: 'Technical SEO', score: 91 }
];

export default function DashboardPage() {
  const [brand, setBrand] = useState(MOCK_BRANDS[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link href="/dashboard" className="text-blue-600 font-semibold">Dashboard</Link>
          <Link href="/audit" className="text-gray-600 hover:text-gray-900">Audit</Link>
          <Link href="/architecture" className="text-gray-600 hover:text-gray-900">Architecture</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600 mt-1">Brand AI-SEO Performance Overview</p>
          </div>
          <select 
            className="px-4 py-2 border rounded-lg"
            value={brand.id}
            onChange={(e) => setBrand(MOCK_BRANDS.find(b => b.id === e.target.value)!)}
          >
            {MOCK_BRANDS.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="p-6 bg-white rounded-lg border">
            <div className="flex justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">AI Visibility</h3>
              <Eye className="w-5 h-5 text-gray-400" />
            </div>
            <div className="text-3xl font-bold">78</div>
            <p className="text-sm text-gray-500">ChatGPT, Perplexity, Gemini</p>
          </div>

          <div className="p-6 bg-white rounded-lg border">
            <div className="flex justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Trust Score</h3>
              <Shield className="w-5 h-5 text-gray-400" />
            </div>
            <div className="text-3xl font-bold">85</div>
            <p className="text-sm text-gray-500">Authority signals</p>
          </div>

          <div className="p-6 bg-white rounded-lg border">
            <div className="flex justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Keyword Coverage</h3>
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <div className="text-3xl font-bold">62%</div>
            <p className="text-sm text-gray-500">Non-branded queries</p>
          </div>

          <div className="p-6 bg-white rounded-lg border">
            <div className="flex justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Last Audit</h3>
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>
            <div className="text-3xl font-bold">Dec 27</div>
            <p className="text-sm text-gray-500">10:30 AM</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-6">Module Performance</h2>
          <div className="space-y-4">
            {MOCK_MODULES.map(m => {
              const color = m.score >= 80 ? 'bg-green-500' : m.score >= 60 ? 'bg-yellow-500' : 'bg-red-500';
              return (
                <div key={m.id}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{m.name}</span>
                    <span className="text-sm font-semibold">{m.score}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full ${color}`} style={{ width: `${m.score}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}