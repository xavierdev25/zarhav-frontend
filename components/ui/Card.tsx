'use client'
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title?: string;
  actions?: ReactNode; // Espacio para botones de acción en la cabecera
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, title, actions, className = "" }) => {
  return (
    <div className={`bg-white shadow-lg rounded-xl overflow-hidden ${className}`}>
      
      {(title || actions) && (
        <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
          {title && (
            <h3 className="text-lg font-semibold text-gray-800">
              {title}
            </h3>
          )}
          {actions && (
            <div className="flex space-x-2">
              {actions}
            </div>
          )}
        </div>
      )}
      
      <div className="p-5">
        {children}
      </div>
      
    </div>
  );
};