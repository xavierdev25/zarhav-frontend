'use client'; // 🚨 IMPORTANTE: Necesario para usar hooks (useState) y pasar handlers (onClick)

import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { SelectField, SelectOption } from '../ui/SelectField';
import { ActionButtons } from './ActionButtons';

// 🚨 NUEVA IMPORTACIÓN: Contenedor dinámico de servicios
import { ServiceListContainer } from './ServiceListContainer'; 

// Placeholder para el tipo de datos del formulario (se expandiría para incluir servicios)
interface QuoteData {
  clientName: string;
  clientEmail: string;
  serviceType: string;
  price: number;
}

const serviceOptions: SelectOption[] = [
  { value: 'web', label: 'Desarrollo Web' },
  { value: 'app', label: 'Aplicación Móvil' },
  { value: 'marketing', label: 'Marketing Digital' },
];

interface CotizacionFormProps {
  initialData?: QuoteData;
  isNew: boolean;
}

export const CotizacionForm: React.FC<CotizacionFormProps> = ({ initialData, isNew }) => {
  const [formData, setFormData] = useState<QuoteData>(
    initialData || { clientName: '', clientEmail: '', serviceType: '', price: 0 }
  );
  const [isSaving, setIsSaving] = useState(false);
  
  // Handlers de ejemplo
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    setIsSaving(true);
    console.log('Guardando/Actualizando datos:', formData);
    // Nota: Aquí, la lógica real también necesitaría recolectar los datos de ServiceListContainer
    setTimeout(() => setIsSaving(false), 1500); 
  };
  
  const handlePreview = () => console.log('Vista Previa de Cotización');
  const handleDelete = () => console.log('Eliminando Cotización');

  return (
    <Card title={isNew ? "Crear Nueva Cotización" : `Editar Cotización: ${formData.clientName}`}>
      <div className="space-y-6">
        
        {/* Sección de Cliente */}
        <section>
          <h4 className="text-md font-medium text-gray-700 mb-3 border-b pb-1">Datos del Cliente</h4>
          <Input 
            label="Nombre del Cliente" 
            name="clientName" 
            value={formData.clientName} 
            onChange={handleChange} 
          />
          <Input 
            label="Email del Cliente" 
            name="clientEmail" 
            type="email"
            value={formData.clientEmail} 
            onChange={handleChange} 
          />
        </section>

        {/* Sección de Servicio y Precio */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField
            label="Tipo de Servicio"
            name="serviceType"
            options={serviceOptions}
            value={formData.serviceType}
            onChange={handleChange}
          />
          <Input
            label="Precio Estimado (USD)"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
          />
        </section>
        
        {/* 🚨 SECCIÓN DE SERVICIOS DINÁMICOS AGREGADA */}
        <section>
          <h4 className="text-md font-medium text-gray-700 mb-3 border-b pb-1">Detalle de Ítems de Cotización</h4>
          {/* El ServiceListContainer gestiona la adición/eliminación de bloques ServiceBlock */}
          <ServiceListContainer />
        </section>
        
      </div>
      
      {/* Botones de Acción */}
      <ActionButtons 
        onPreview={handlePreview} 
        onUpdate={handleUpdate} 
        onDelete={handleDelete}
        isSaving={isSaving}
        isNew={isNew}
      />
    </Card>
  );
};