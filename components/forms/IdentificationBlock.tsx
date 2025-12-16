// components/forms/IdentificacionBlock.tsx
import React from 'react';
import { FormSection } from './FormSection';
import { Input } from '../ui/Input';
import { FileText } from 'lucide-react';

export const IdentificacionBlock: React.FC = () => {
    // Icono placeholder
    const icon = <FileText className="h-5 w-5 text-white" />;    

    return (
        <FormSection title="Identificacion" icon={icon} className="col-span-1 md:col-span-2">
            <div className="col-span-3"> {/* Ocupa el ancho completo de la sección */}
                <Input label="Servicio" name="service" placeholder="Ingrese información..." />
            </div>
        </FormSection>
    );
};