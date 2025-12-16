import React from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button'; // Componente Button reutilizable
import { Settings } from 'lucide-react';

// Define la estructura de datos para un solo servicio
export interface ServiceData {
  id: string; // ID único para mapear y manipular el array
  name: string;
  totalPrice: number;
}

interface ServiceBlockProps {
  index: number; // Índice en el array (para el título "Servicio #1")
  service: ServiceData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectProducts: (serviceId: string) => void;
  onRemove?: (serviceId: string) => void; // Opcional: botón de eliminar
}

export const ServiceBlock: React.FC<ServiceBlockProps> = ({
  index,
  service,
  onChange,
  onSelectProducts,
  onRemove,
}) => {
  
  const title = `Servicios`;
  const nameLabel = `Nombre de Servicio #${index + 1}:`;
  const totalLabel = `(total_price)`;
  
  return (
    <div className="bg-[#313030] p-4 rounded-lg mt-4">
      {/* Cabecera Negra (Servicios) */}
      <div className="flex items-center text-white mb-4">
      <Settings className="h-5 w-5 mr-2" /><span className="text-lg font-semibold">{title}</span>
      </div>
      
      {/* Cuerpo del Bloque */}
      <div className="flex items-center space-x-4">
        {/* Input del Nombre del Servicio */}
        <div className="flex-grow">
          <label className="block text-sm font-medium text-gray-400"></label>
          <Input
            label={nameLabel}
            id={`service-name-${service.id}`}
            name="name"
            placeholder="Ingrese información..."
            value={service.name}
            onChange={onChange}
            className="w-full"
          />
        </div>
        
        {/* Botón Seleccionar Productos */}
        <Button 
          variant="primary" 
          onClick={() => onSelectProducts(service.id)}
          className="bg-[#EC6020] h-10 mt-5 whitespace-nowrap"
        >Seleccionar productos</Button>
        
        {/* Total del Precio (Placeholder) */}
        <span className="text-gray-400 text-sm mt-5">{totalLabel} {service.totalPrice.toFixed(2)}</span>
        
        {/* Botón de Remover (aparece a partir del segundo servicio) */}
        {onRemove && index > 0 && (
          <Button 
            variant="danger" 
            onClick={() => onRemove(service.id)}
            className="h-10 mt-5"
          >
            X
          </Button>
        )}
      </div>
    </div>
  );
};