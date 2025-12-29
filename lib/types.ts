// lib/types.ts

/**
 * Brand entity representing a client/company
 */
export interface Brand {
  id: string;
  name: string;
  domain: string;
  lastAudit: string;
}

/**
 * Audit module with scoring and recommendations
 */
export interface AuditModule {
  id: string;
  name: string;
  description: string;
  score: number;
  insights: string[];
  issues: string[];
  recommendations: string[];
}

/**
 * Dashboard metrics snapshot
 */
export interface DashboardMetrics {
  aiVisibilityScore: number;
  trustScore: number;
  keywordCoverage: number;
  lastAuditDate: string;
}

/**
 * Application state interface
 */
export interface AppState {
  selectedBrand: Brand | null;
  selectedModule: AuditModule | null;
  darkMode: boolean;
  setSelectedBrand: (brand: Brand) => void;
  setSelectedModule: (module: AuditModule) => void;
  toggleDarkMode: () => void;
}

/**
 * Component prop types
 */
export interface BaseComponentProps {
  darkMode?: boolean;
  className?: string;
}

export interface MetricCardProps extends BaseComponentProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
}

export interface ScoreBarProps extends BaseComponentProps {
  score: number;
  label?: string;
}

export interface ModuleCardProps extends BaseComponentProps {
  module: AuditModule;
  isSelected?: boolean;
  onClick?: () => void;
}