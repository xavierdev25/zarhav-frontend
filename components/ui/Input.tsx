import React, { InputHTMLAttributes } from 'react';

// Extiende las propiedades nativas de un <input> y añade nuestra propia propiedad 'label'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, id, error, className, ...rest }) => {
  const inputId = id || label.toLowerCase().replace(/\s/g, '-');
  
  // Clases condicionales de Tailwind para el estilo de error
  const baseClasses = "mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm transition duration-150 ease-in-out bg-white";
  const errorClasses = error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-yellow-500 focus:border-gray-500";

  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={inputId} className="block text-sm font-medium text-white">
        {label}
      </label>
      <input
        id={inputId}
        className={`${baseClasses} ${errorClasses}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};