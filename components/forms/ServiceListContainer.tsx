import React, { useState, useCallback } from 'react';
import { ServiceBlock, ServiceData } from './ServiceBlock';
import { v4 as uuidv4 } from 'uuid'; // Necesitas instalar uuid: pnpm install uuid @types/uuid
import { Button } from '../ui/Button';

export const ServiceListContainer: React.FC = () => {
  // Inicializamos con al menos un servicio (Service #1)
  const [services, setServices] = useState<ServiceData[]>([
    { id: uuidv4(), name: '', totalPrice: 0 },
  ]);

  // Maneja cambios en un campo de texto (ej: Nombre de Servicio)
  const handleServiceChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement>, 
    serviceId: string
  ) => {
    const { name, value } = e.target;
    setServices(prevServices =>
      prevServices.map(service =>
        service.id === serviceId ? { ...service, [name]: value } : service
      )
    );
  }, []);

  // Añade un nuevo bloque de servicio
  const handleAddService = () => {
    setServices(prevServices => [
      ...prevServices,
      { id: uuidv4(), name: '', totalPrice: 0 },
    ]);
  };

  // Elimina un bloque de servicio
  const handleRemoveService = useCallback((serviceId: string) => {
    setServices(prevServices => 
      prevServices.filter(service => service.id !== serviceId)
    );
  }, []);

  // Maneja el clic en "Seleccionar productos"
  const handleSelectProducts = (serviceId: string) => {
    console.log(`Abriendo modal de productos para el servicio: ${serviceId}`);
    // Aquí abrirías el Modal de productos (usando tu componente Modal)
  };
  
  return (
    <div>
      {/* Mapea y renderiza cada ServiceBlock en el array */}
      {services.map((service, index) => (
        <ServiceBlock
          key={service.id}
          index={index}
          service={service}
          onChange={(e) => handleServiceChange(e, service.id)}
          onSelectProducts={handleSelectProducts}
          // El botón de remover solo se muestra si hay más de un servicio
          onRemove={services.length > 1 ? handleRemoveService : undefined} 
        />
      ))}

      {/* Botón para añadir más servicios (se coloca visualmente al final) */}
      <div className="flex justify-start mt-4">
        <Button 
          variant="secondary" 
          onClick={handleAddService} 
          className="text-gray-700 bg-gray-200 hover:bg-gray-300"
        >
          + Agregar otro servicio
        </Button>
      </div>
    </div>
  );
};