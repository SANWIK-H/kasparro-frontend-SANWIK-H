// app/about/page.tsx

import React from 'react';
import { Navigation } from '@/components/layout/Navigation';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation variant="public" />
      
      <main>
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-8">Our Mission</h1>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Traditional SEO was built for Google's 10 blue links. That era is ending. 
                ChatGPT, Gemini, and Perplexity are becoming the new search interfaces, 
                and they work fundamentally differently.
              </p>
              <p>
                Kasparro is built from the ground up for AI-first search. We help brands 
                understand how they're perceived by AI models, where they appear in responses, 
                and how to optimize for this new paradigm.
              </p>
              <p>
                Our platform combines deep technical analysis with AI model behavior research 
                to give you a complete picture of your AI-SEO performance.
              </p>
              
              <div className="mt-12 pt-12 border-t border-gray-200">
                <h2 className="text-2xl font-bold mb-4">Product Philosophy</h2>
                <p>
                  We believe in transparency, data-driven insights, and actionable recommendations. 
                  Every score we generate is backed by concrete analysis. Every recommendation 
                  is prioritized by impact.
                </p>
              </div>
              
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Vision for AI-First Search</h2>
                <p>
                  As AI becomes the primary interface for information discovery, brands need 
                  new tools to ensure they're visible, trusted, and accurately represented. 
                  We're building the infrastructure for this new era of search.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}