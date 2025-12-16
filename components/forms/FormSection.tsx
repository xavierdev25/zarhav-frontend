// components/forms/FormSection.tsx
import React, { ReactNode } from 'react';

interface FormSectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

export const FormSection: React.FC<FormSectionProps> = ({ title, icon, children, className = '' }) => {
  return (
    <div className={`bg-[#313030] p-6 rounded-lg shadow-xl ${className}`}>
      <h3 className="flex items-center text-white text-lg font-semibold mb-4 pb-2">
        <span className="mr-3 text-indigo-400">{icon}</span>
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
};