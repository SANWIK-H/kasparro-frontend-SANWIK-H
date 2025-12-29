// lib/data/modules.ts
import { AuditModule, Brand, DashboardMetrics } from '../types';

export const MOCK_BRANDS: Brand[] = [
  {
    id: '1',
    name: 'TechCorp',
    domain: 'techcorp.com',
    lastAudit: '2024-12-27'
  },
  {
    id: '2',
    name: 'HealthPlus',
    domain: 'healthplus.io',
    lastAudit: '2024-12-25'
  },
  {
    id: '3',
    name: 'FinanceHub',
    domain: 'financehub.co',
    lastAudit: '2024-12-20'
  }
];

export const MOCK_AUDIT_MODULES: AuditModule[] = [
  {
    id: 'content-quality',
    name: 'Content Quality & Depth',
    description: 'Analyzes content comprehensiveness and AI-readability',
    score: 82,
    insights: [
      'Strong technical depth in product documentation',
      'Content structure optimized for LLM parsing',
      'High semantic coherence across pages',
      'Effective use of structured data in key sections'
    ],
    issues: [
      'Missing schema markup on 23% of pages',
      'Inconsistent heading hierarchy in blog posts',
      'Some pages lack meta descriptions'
    ],
    recommendations: [
      'Implement FAQ schema on product pages to improve AI understanding',
      'Standardize H1-H6 structure across all content types',
      'Add more contextual internal linking between related topics',
      'Create content briefs with semantic keyword clusters'
    ]
  },
  {
    id: 'eeat-signals',
    name: 'E-E-A-T Signals',
    description: 'Evaluates Experience, Expertise, Authoritativeness, Trust',
    score: 76,
    insights: [
      'Strong author bios and credentials on key pages',
      'Clear expertise demonstration through case studies',
      'Consistent brand voice and messaging',
      'Good use of first-hand experience content'
    ],
    issues: [
      'Limited external citations to authoritative sources',
      'Author bylines missing on 15% of content',
      'Some outdated content not refreshed in 12+ months'
    ],
    recommendations: [
      'Add cited sources and references to research-heavy content',
      'Implement author schema markup across all articles',
      'Showcase case studies and client testimonials prominently',
      'Create an editorial calendar for content refreshes'
    ]
  },
  {
    id: 'semantic-relevance',
    name: 'Semantic Relevance',
    description: 'Measures topic coverage and entity relationships',
    score: 88,
    insights: [
      'Excellent entity linking and disambiguation',
      'Strong topical authority clusters in core areas',
      'Well-defined content pillars with supporting articles',
      'Good coverage of related subtopics'
    ],
    issues: [
      'Gaps in coverage for emerging AI search trends',
      'Some pillar pages could link to more subtopics'
    ],
    recommendations: [
      'Expand content on emerging AI trends and technologies',
      'Create more connecting content between existing pillars',
      'Add topic cluster visualization for internal planning',
      'Develop glossary pages for technical terminology'
    ]
  },
  {
    id: 'citation-patterns',
    name: 'Citation & Attribution',
    description: 'Tracks how AI models reference your brand',
    score: 64,
    insights: [
      'Moderate citation frequency in ChatGPT responses',
      'Brand mentioned in 12 distinct topic categories',
      'Strong citation rate for branded queries'
    ],
    issues: [
      'Low citation rate for commercial intent queries',
      'Competitors cited 2.3x more frequently for comparisons',
      'Limited presence in Perplexity citations'
    ],
    recommendations: [
      'Create more comparison and vs. content',
      'Optimize for question-based queries that trigger AI citations',
      'Build strategic content partnerships with authoritative sites',
      'Develop comprehensive buying guides and reviews'
    ]
  },
  {
    id: 'visibility-trends',
    name: 'AI Visibility Trends',
    description: 'Monitors presence across AI search platforms',
    score: 71,
    insights: [
      'Growing presence in ChatGPT responses (+15% MoM)',
      'Stable visibility in Perplexity results',
      'Strong performance for branded queries',
      'Good coverage in technical documentation queries'
    ],
    issues: [
      'Declining visibility for non-branded commercial terms',
      'Low presence in Gemini responses',
      'Inconsistent ranking across different AI platforms'
    ],
    recommendations: [
      'Target high-intent informational queries',
      'Optimize content for multi-model consumption',
      'Increase content freshness frequency',
      'Develop platform-specific optimization strategies'
    ]
  },
  {
    id: 'keyword-coverage',
    name: 'Keyword & Intent Mapping',
    description: 'Maps content to search intents and queries',
    score: 79,
    insights: [
      'Strong coverage of informational queries',
      'Good intent alignment in top-performing pages',
      'Effective keyword clustering in main categories'
    ],
    issues: [
      'Weak coverage of comparison keywords',
      'Missing content for how-to queries',
      'Gap in local/regional query coverage'
    ],
    recommendations: [
      'Create comprehensive vs. comparison content series',
      'Build step-by-step how-to guides for common tasks',
      'Target long-tail question queries',
      'Develop location-specific landing pages'
    ]
  },
  {
    id: 'technical-optimization',
    name: 'Technical Optimization',
    description: 'Assesses site architecture and crawlability',
    score: 91,
    insights: [
      'Clean site architecture with logical hierarchy',
      'Fast page load times (avg 1.2s)',
      'Excellent mobile experience (95 Lighthouse score)',
      'Proper use of canonical tags'
    ],
    issues: [
      'Some duplicate content issues on product pages',
      'Robots.txt blocking some useful resources',
      'Missing breadcrumb schema on category pages'
    ],
    recommendations: [
      'Implement canonical tags consistently across variants',
      'Review and update robots.txt to allow beneficial crawling',
      'Add structured data (breadcrumbs, products) to key pages',
      'Optimize image delivery with next-gen formats'
    ]
  }
];

export const MOCK_DASHBOARD_METRICS: DashboardMetrics = {
  aiVisibilityScore: 78,
  trustScore: 85,
  keywordCoverage: 62,
  lastAuditDate: '2024-12-27T10:30:00Z'
};