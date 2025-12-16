import React, { useState, ReactNode } from 'react';

export interface TabItem {
  key: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  initialTabKey?: string;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, initialTabKey, className = '' }) => {
  const [activeTab, setActiveTab] = useState(
    initialTabKey || (tabs.length > 0 ? tabs[0].key : '')
  );

  const activeContent = tabs.find(tab => tab.key === activeTab)?.content;

  return (
    <div className={className}>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab.key}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(tab.key);
              }}
              className={`${
                tab.key === activeTab
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition duration-150 ease-in-out`}
              aria-current={tab.key === activeTab ? 'page' : undefined}
            >
              {tab.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Contenido de la pestaña activa */}
      <div className="pt-6">
        {activeContent}
      </div>
    </div>
  );
};