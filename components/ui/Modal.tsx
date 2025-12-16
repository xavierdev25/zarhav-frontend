import React, { ReactNode, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, size = 'md' }) => {
  
  if (!isOpen) {
    return null;
  }
  
  // Clases de Tailwind para el tamaño del modal
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  // Efecto para controlar el scroll del cuerpo de la página
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    // Fondo oscuro (Overlay)
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        {/* Fondo (Overlay) con transición */}
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
          aria-hidden="true" 
          onClick={onClose}
        ></div>

        {/* Truco para centrar el modal */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Panel del Modal */}
        <div className={`
          inline-block align-bottom bg-white rounded-lg text-left overflow-hidden 
          shadow-xl transform transition-all sm:my-8 sm:align-middle w-full 
          ${sizeClasses[size]}
        `}>
          
          {/* Cabecera */}
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 border-b">
            <div className="flex justify-between items-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                {title}
              </h3>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
                onClick={onClose}
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Cuerpo del Modal */}
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6">
            {children}
          </div>
          
          {/* Pie de página (se puede añadir para botones de acción) */}
          {/*
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
             <Button variant="primary" onClick={onClose} className="w-full sm:ml-3 sm:w-auto">Aceptar</Button>
             <Button variant="secondary" onClick={onClose} className="mt-3 sm:mt-0 w-full sm:w-auto">Cancelar</Button>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};