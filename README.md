# Kasparro - AI-Native SEO Platform

A comprehensive frontend application for tracking and optimizing brand visibility in AI-powered search engines (ChatGPT, Gemini, Perplexity).

## 🚀 Live Demo

**Deployed URL**: [Your Vercel URL here]

## 📋 Project Overview

This project demonstrates a production-ready Next.js application built for Kasparro's AI-SEO platform. It includes both public-facing marketing pages and an authenticated product dashboard with mocked data.

### Routes Implemented

**Public Website:**
- `/` - Home page with hero, modules overview, and CTA
- `/platform` - Product explainer and audit pipeline
- `/about` - Mission, philosophy, and vision

**Product Dashboard:**
- `/app/dashboard` - High-level brand snapshot with key metrics
- `/app/audit` - 7 audit modules with detailed analysis
- `/app/architecture` - System architecture visualization

## 🏗️ Architecture

### Folder Structure

```
kasparro-platform/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── platform/
│   │   └── page.tsx            # Platform overview page
│   ├── about/
│   │   └── page.tsx            # About page
│   └── app/                    # Dashboard namespace
│       ├── layout.tsx          # Dashboard layout with sidebar
│       ├── dashboard/
│       │   └── page.tsx
│       ├── audit/
│       │   └── page.tsx
│       └── architecture/
│           └── page.tsx
├── components/
│   ├── ui/                     # Primitive components
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Button.tsx
│   ├── layout/                 # Layout components
│   │   ├── Navigation.tsx
│   │   └── AppSidebar.tsx
│   └── features/               # Feature-specific components
│       ├── Hero.tsx
│       ├── ModulesOverview.tsx
│       ├── PlatformOverview.tsx
│       ├── DashboardView.tsx
│       ├── AuditView.tsx
│       └── ArchitectureView.tsx
├── contexts/
│   └── AppContext.tsx          # Global state management
├── lib/
│   ├── types.ts                # TypeScript interfaces
│   └── data.ts                 # Mock data
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### Component Architecture

**Three-tier component hierarchy:**

1. **UI Primitives** (`components/ui/`)
   - Reusable, presentational components
   - No business logic
   - Examples: Card, Badge, Button

2. **Layout Components** (`components/layout/`)
   - Application structure and navigation
   - Examples: Navigation, AppSidebar

3. **Feature Components** (`components/features/`)
   - Domain-specific, composable features
   - Connect to data and state
   - Examples: DashboardView, AuditView

### Data Modeling

All data is driven by **strongly-typed interfaces** defined in `lib/types.ts`:

```typescript
interface Brand { id, name, domain, lastAudit }
interface AuditModule { id, name, score, status, insights, issues, recommendations }
interface BrandSnapshot { aiVisibilityScore, trustScore, keywordCoverage, lastAudit }
```

Mock data in `lib/data.ts` follows these schemas consistently. No ad-hoc object shapes.

### State Management

**React Context API** for global application state:
- Selected brand
- Selected audit module
- Clean, predictable state flow via `useAppState()` hook

Chose Context over external libraries to minimize dependencies while maintaining scalability.

## 🎯 Key Technical Decisions

### 1. Component Modularity
- No massive JSX files (largest component: ~120 lines)
- Clear separation of concerns
- Easy to test, extend, and maintain

### 2. Type Safety
- Full TypeScript coverage
- Compile-time error catching
- Better IDE autocomplete and documentation

### 3. Data-Driven Rendering
- All audit module content from structured JSON
- No hardcoded JSX content in audit views
- Easy to swap mock data with real API responses

### 4. Scalable State Management
- Context pattern easily upgrades to Redux/Zustand if needed
- Provider wraps only authenticated routes
- Minimal re-renders through proper hook usage

### 5. Semantic HTML & Accessibility
- Proper heading hierarchy
- Meaningful component names
- Color contrast meets WCAG standards

## 🛠️ Tech Stack

**Required (as per assignment):**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Component-based architecture

**Dependencies:**
- `lucide-react` - Icon library (lightweight, tree-shakeable)
- No other external UI libraries

## 📦 Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm/pnpm/yarn

### Installation

```bash
# Clone the repository
git clone [your-repo-url]
cd kasparro-platform

# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
```

### Build for Production

```bash
# Create optimized build
npm run build

# Start production server
npm start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deployments.

## 🎨 Design Philosophy

### Visual Style
- **Clean & Professional**: Blue accent color (#2563eb), ample whitespace
- **Data-Dense UI**: Cards, badges, and clear hierarchy for complex information
- **Modern but Conservative**: Focus on usability over visual flair
- **Responsive**: Grid layouts adapt to screen sizes

### UX Principles
- **Progressive Disclosure**: Dashboard overview → detailed module view
- **Clear Information Hierarchy**: Scores prominent, details accessible
- **Predictable Navigation**: Sidebar for main views, consistent patterns
- **Status Communication**: Color-coded badges (excellent/good/warning/critical)

## ⚖️ Tradeoffs & Shortcuts

### What I Prioritized
✅ **System thinking** over pixel perfection  
✅ **Component architecture** over visual polish  
✅ **Data modeling** over feature completeness  
✅ **Code quality** over scope  

### Intentional Simplifications
1. **Single-file components** (some could be split further in production)
2. **Mock data in-code** (would use `/data/*.json` or API in real app)
3. **No animations** (prioritized structure; would add Framer Motion selectively)
4. **Simplified routing** (no nested dynamic routes)
5. **No dark mode** (bonus feature, deprioritized for time)

### Production Improvements
If given more time, I would add:
- Dark/light mode toggle
- Loading skeletons for data fetching
- Error boundaries for robust error handling
- Micro-interactions on module switching
- Responsive mobile navigation
- Unit tests (Jest + React Testing Library)
- Storybook for component documentation

## 🧪 Testing Strategy (Future)

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Type checking
npm run type-check
```

Would implement:
- Component unit tests with RTL
- Integration tests for user flows
- Visual regression tests (Percy/Chromatic)

## 📊 Performance Considerations

- **Next.js App Router** for optimal performance
- **No runtime CSS-in-JS** (Tailwind compiles to static CSS)
- **Tree-shakeable icons** (lucide-react)
- **No unnecessary client components** (most components are server-side)

## 🔒 Security Notes

- No authentication implemented (as per assignment)
- All API calls would use environment variables in production
- CSRF tokens for form submissions in real app

## 📝 Additional Notes

### Why This Architecture?

This structure is designed for a **real product team**:
- New developers can navigate easily
- Features can be built independently
- Components are reusable across features
- Type system catches errors early
- Easy to migrate to real API data

### Estimated Time Spent

**~14 hours total:**
- Planning & architecture: 2h
- Component library (UI primitives): 2h
- Public website pages: 3h
- Dashboard implementation: 4h
- Data modeling & state: 2h
- Polish & documentation: 1h

## 🤝 Contributing

This is an assignment submission, but architectural feedback is welcome!

## 📄 License

MIT

---

**Built by**: [Your Name]  
**For**: Kasparro Frontend Engineering Assignment  
**Date**: December 2025