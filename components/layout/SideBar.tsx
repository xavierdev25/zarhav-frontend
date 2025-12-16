"use client"
import React, { useState } from 'react';
import Link from 'next/link';
// 🚨 IMPORTAR ICONOS DE LUCIDE NECESARIOS
import { Home, Briefcase, Users, Settings } from 'lucide-react';

// Define la estructura de un enlace de navegación
interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

// 🚨 REEMPLAZAR LOS SVG POR COMPONENTES LUCIDE
const navigation: NavItem[] = [
  // Dashboard: Usamos Home
  { name: 'Dashboard', href: '/', icon: <Home className="h-6 w-6" /> },

  // Servicios: Usamos Briefcase (Maletín/Servicios) o podrías usar ClipboardList
  { name: 'Servicios', href: '/services', icon: <Briefcase className="h-6 w-6" /> },

  // Clientes: Usamos Users (Contactos/Clientes)
  { name: 'Clientes', href: '/clients', icon: <Users className="h-6 w-6" /> },

  // Configuración: Usamos Settings (Engranaje)
  { name: 'Configuración', href: '/settings', icon: <Settings className="h-6 w-6" /> }
];

export const Sidebar: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('/');

  return (
    // Sidebar fijo y con sombra
    <div className="fixed top-0 left-0 h-full w-64 bg-[#222222] text-white shadow-xl z-20">

      {/* Logo/Nombre de la App */}
      <div className="flex items-center justify-center h-16 pt-4">
        <img src='/zarhavLogo.png' alt="Logo" className="h-18 w-auto" />
      </div>

      {/* Menú de Navegación */}
      <nav className="p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = currentPath === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                  flex items-center px-4 py-2 rounded-lg transition duration-150 ease-in-out
                  ${isActive
                  ? 'bg-[#EC6020] text-white shadow-md'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }
                `}
              onClick={() => setCurrentPath(item.href)} // Simulación de cambio de ruta
            >
              <div className="w-6 h-6 mr-3">{item.icon}</div>
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};