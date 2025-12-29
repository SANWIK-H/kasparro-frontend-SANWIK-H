import { Hero } from '@/components/features/Hero';
import { ModulesList } from '@/components/features/ModulesList';
import { AuditPipeline } from '@/components/features/AuditPipeline';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <Hero />
      
      {/* Why AI-SEO Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Why AI-SEO is Different
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center max-w-3xl mx-auto">
          Traditional SEO optimized for Google's algorithms. AI-SEO optimizes for how language models 
          understand, synthesize, and cite information across ChatGPT, Perplexity, and emerging AI search engines.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Traditional SEO</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Keywords, backlinks, page rank, meta tags, domain authority
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-500">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AI-SEO</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Semantic depth, citations, context quality, entity relationships
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">The Future</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Hybrid optimization for both traditional and AI search
            </p>
          </div>
        </div>
      </section>

      <ModulesList />
      <AuditPipeline />
      <Footer />
    </main>
  );
}