import React, { ButtonHTMLAttributes } from 'react';

interface ToggleSwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onToggle'> {
  label: string;
  checked: boolean;
  onToggle: (checked: boolean) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  checked,
  onToggle,
  id,
  className,
  ...rest
}) => {
  const toggleId = id || label.toLowerCase().replace(/\s+/g, '-');

  const toggleHandler = () => onToggle(!checked);

  return (
    <div className={`flex items-center space-x-3 ${className ?? ''}`}>
      <span className="text-sm font-medium text-gray-700">
        {label}
      </span>

      <button
        type="button"
        id={toggleId}
        role="switch"
        aria-checked={checked}
        onClick={toggleHandler}
        className={`${
          checked ? 'bg-indigo-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full
        border-2 border-transparent transition-colors duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        {...rest}
      >
        <span
          aria-hidden="true"
          className={`${
            checked ? 'translate-x-5' : 'translate-x-0'
          } pointer-events-none inline-block h-5 w-5 transform rounded-full
          bg-white shadow transition duration-200 ease-in-out`}
        />
      </button>
    </div>
  );
};
