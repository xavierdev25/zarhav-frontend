'use client'
import React, { ButtonHTMLAttributes } from 'react';

// Define las variantes de estilo permitidas
type ButtonVariant = 'primary' | 'danger' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg'; 

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean; // Opción para mostrar estado de carga
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled,
  isLoading,
  size = 'md',
  className,
  ...rest
}) => {
  
  // Mapeo de estilos de Tailwind a las variantes
  const variantStyles = {
    primary: "bg-[#EC6020] hover:bg-[#CC4305] focus:ring-bg-white",
    danger: "bg-[#313030] hover:bg-[#313030] focus:ring-bg-[#313030]",
    secondary: "bg-transparent text-white border border-white backdrop-blur-md hover:bg-white/10 focus:bg-transparent focus:backdrop-blur-md"
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-xs", // Tamaño pequeño
    md: "px-4 py-2 text-sm", // Tamaño medio (default)
    lg: "px-6 py-3 text-lg", // Tamaño grande
  };

  // Clases base y de deshabilitado
  const baseClasses = `
    inline-flex justify-center items-center rounded-md border border-transparent shadow-sm 
    ${sizeStyles[size]} 
    font-medium 
    focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out
  `;
  
  const disabledClasses = disabled || isLoading
    ? "opacity-50 cursor-not-allowed"
    : variantStyles[variant];
    
  // Estilo de texto específico para la variante 'secondary'
  const textColor = variant === 'secondary' ? "text-gray-800" : "text-white";

  return (
    <button
      className={`${baseClasses} ${disabledClasses} ${textColor} ${className}`}
      disabled={disabled || isLoading}
      type={rest.type || 'button'} // Asegura que el tipo sea 'button' por defecto
      {...rest}
    >
      {isLoading ? (
        // Icono de carga (Spinner simple con Tailwind)
        <svg className={`animate-spin -ml-1 mr-3 h-5 w-5 ${textColor}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        children
      )}
    </button>
  );
};