'use client';

import React from 'react';
import Link from 'next/link';
import { useAppState } from '@/context/AppContext';

export function Footer() {
  const { darkMode } = useAppState();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Platform', href: '/platform' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Documentation', href: '/docs' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' }
      ]
    }
  ];

  return (
    <footer className={`border-t mt-20 ${
      darkMode 
        ? 'bg-gray-900 border-gray-800' 
        : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className={`font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Kasparro
            </h3>
            <p className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              AI-native SEO & Brand Intelligence for the AI-first search era.
            </p>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className={`font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-sm transition-colors ${
                        darkMode 
                          ? 'text-gray-400 hover:text-white' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className={`mt-8 pt-8 border-t text-sm text-center ${
          darkMode 
            ? 'border-gray-800 text-gray-400' 
            : 'border-gray-200 text-gray-600'
        }`}>
          © {new Date().getFullYear()} Kasparro. Built for the AI-first search era.
        </div>
      </div>
    </footer>
  );
}