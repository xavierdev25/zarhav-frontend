import React, { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    // Contenedor con padding y ancho máximo
    <div className={`p-6 mx-auto w-full bg-[#121212] ${className}`}>
      {children}
    </div>
  );
};