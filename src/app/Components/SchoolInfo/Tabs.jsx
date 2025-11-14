'use client'
import React from 'react';

export default function Tabs({ tabs, active, onChange }) {
  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:block space-y-3">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={`w-full text-left px-5 py-3 rounded-lg border transition flex items-center justify-between ${
              active === t.key ? 'bg-blue-600 text-white shadow' : 'bg-white hover:bg-gray-50'
            }`}
          >
            <span className="text-sm font-medium">{t.label}</span>
            <span className="text-xs opacity-70"></span>
          </button>
        ))}
      </div>

      {/* Mobile accordion */}
      <div className="lg:hidden space-y-4">
        {tabs.map((t) => (
          <div key={`mobile-${t.key}`} className="bg-white rounded-xl border">
            <button
              onClick={() => onChange(t.key === active ? '' : t.key)}
              className="w-full text-left px-4 py-3 flex items-center justify-between"
            >
              <span className="font-medium">{t.label}</span>
              <span className="text-sm">{active === t.key ? '−' : '+'}</span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
