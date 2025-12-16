import React, { useState, ReactNode } from 'react';

export interface DropdownItem {
  label: string;
  onClick: () => void;
  icon?: ReactNode;
  isDanger?: boolean;
}

interface DropdownMenuProps {
  trigger: ReactNode; // El elemento que abre el menú (ej: un botón o un icono)
  items: DropdownItem[];
  className?: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, items, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Cierra el menú cuando se hace clic fuera
  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    // Pequeño timeout para permitir el clic antes de cerrar
    setTimeout(() => {
      if (!event.currentTarget.contains(document.activeElement)) {
        setIsOpen(false);
      }
    }, 100);
  };

  return (
    <div className={`relative inline-block text-left ${className}`} onBlur={handleBlur}>
      
      {/* Botón de activación (Trigger) */}
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      {/* Menú Desplegable */}
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  item.onClick();
                  setIsOpen(false);
                }}
                className={`
                  ${item.isDanger ? 'text-red-700 hover:bg-red-50' : 'text-gray-700 hover:bg-gray-100'}
                  group flex items-center px-4 py-2 text-sm transition duration-150 ease-in-out
                `}
                role="menuitem"
              >
                {item.icon && <span className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500">{item.icon}</span>}
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};