import React from 'react';
import { Button } from '../ui/Button'; // Asegúrate que la ruta de importación sea correcta

interface ActionButtonsProps {
  onPreview: () => void;
  onUpdate: () => void;
  onDelete: () => void;
  isSaving: boolean;
  isNew: boolean; // Para ocultar 'Eliminar' en una cotización nueva
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  onPreview, 
  onUpdate, 
  onDelete, 
  isSaving, 
  isNew 
}) => {
  return (
    <div className="flex justify-end space-x-3 mt-6">
      
      {/* Botón de acción peligrosa (Eliminar) */}
      {!isNew && (
        <Button 
          variant="danger" 
          onClick={onDelete}
          disabled={isSaving}
        >
          Eliminar
        </Button>
      )}

      {/* Botón de acción secundaria (Vista Previa) */}
      <Button 
        variant="secondary" 
        onClick={onPreview}
        disabled={isSaving}
      >
        Vista Previa
      </Button>

      {/* Botón de acción principal (Guardar/Actualizar) */}
      <Button 
        variant="primary" 
        onClick={onUpdate} 
        isLoading={isSaving}
      >
        {isNew ? 'Crear Cotización' : 'Guardar Cambios'}
      </Button>
    </div>
  );
};