import React, { ReactNode } from 'react';

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertProps {
  type: AlertType;
  title: string;
  message?: ReactNode;
  className?: string;
  onClose?: () => void; // Permite que el componente sea cerrable
}

export const Alert: React.FC<AlertProps> = ({ type, title, message, onClose, className = '' }) => {
  
  // Mapeo de estilos y colores de Tailwind
  const styles = {
    success: { 
      bg: "bg-green-50", 
      text: "text-green-800", 
      icon: "text-green-400" 
    },
    error: { 
      bg: "bg-red-50", 
      text: "text-red-800", 
      icon: "text-red-400" 
    },
    warning: { 
      bg: "bg-yellow-50", 
      text: "text-yellow-800", 
      icon: "text-yellow-400" 
    },
    info: { 
      bg: "bg-blue-50", 
      text: "text-blue-800", 
      icon: "text-blue-400" 
    },
  };
  
  const currentStyle = styles[type];

  return (
    <div className={`rounded-md p-4 mb-4 ${currentStyle.bg} ${className}`}>
      <div className="flex">
        
        {/* Icono de Alerta */}
        <div className="flex-shrink-0">
          <svg className={`h-5 w-5 ${currentStyle.icon}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            {/* Ejemplo simple: Icono de Checkmark (para success) o Exclamation (para warning/error) */}
            {type === 'success' && <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />}
            {type !== 'success' && <path fillRule="evenodd" d="M8.257 3.342a1.5 1.5 0 00-2.514 0l-4.5 9A1.5 1.5 0 002.75 14h14.5a1.5 1.5 0 001.257-1.658l-4.5-9zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />}
          </svg>
        </div>
        
        <div className="ml-3">
          <h3 className={`text-sm font-medium ${currentStyle.text}`}>{title}</h3>
          {message && (
            <div className={`mt-2 text-sm ${currentStyle.text}`}>
              {message}
            </div>
          )}
        </div>
        
        {/* Botón de Cerrar (si es cerrable) */}
        {onClose && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${currentStyle.text} ${currentStyle.bg}`}
                onClick={onClose}
              >
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};