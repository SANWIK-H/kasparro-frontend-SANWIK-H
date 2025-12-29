// context/AppContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppState, Brand, AuditModule } from '@/lib/types';
import { MOCK_BRANDS, MOCK_AUDIT_MODULES } from '@/lib/data/modules';

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(MOCK_BRANDS[0]);
  const [selectedModule, setSelectedModule] = useState<AuditModule | null>(MOCK_AUDIT_MODULES[0]);
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) {
      setDarkMode(JSON.parse(saved));
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    // Apply to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const value: AppState = {
    selectedBrand,
    selectedModule,
    darkMode,
    setSelectedBrand,
    setSelectedModule,
    toggleDarkMode
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within AppProvider');
  }
  return context;
}