import React, { ReactNode } from 'react';
import { Sidebar } from './SideBar';


interface AppLayoutProps {
  children: ReactNode
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  
  // Ancho del Sidebar fijo (64 = 16rem)
  const sidebarWidth = 'w-64'; 
  
  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* 1. Sidebar (Fijo a la izquierda) */}
      <Sidebar />

      {/* 2. Contenedor Principal (Con margen izquierdo para el Sidebar) */}
      <div className={`ml-64 relative`}> 
        
        {/* 3. Contenido de la Página */}
        {/* El padding-top de 16 (4rem) compensa la altura de la TopBar (h-16) */}
        <main className="pt-2"> 
          {children}
        </main>
      </div>
      
    </div>
  );
};