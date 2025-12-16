import React, { ReactNode } from 'react';

type BadgeVariant = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'neutral', className = '' }) => {
  
  // Mapeo de colores de Tailwind a las variantes
  const variantStyles = {
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
    neutral: "bg-gray-100 text-gray-800",
  };

  const baseClasses = `
    inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium 
    leading-4 
  `;

  return (
    <span className={`${baseClasses} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};