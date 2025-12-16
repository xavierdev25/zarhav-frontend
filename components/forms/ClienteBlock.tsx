import React from 'react';
import { FormSection } from './FormSection';
import { Input } from '../ui/Input';
import { Users } from 'lucide-react';

export const ClienteBlock: React.FC = () => {

    const icon = <Users className="h-5 w-5 text-white" />; 

    return (
        <FormSection title="Cliente" icon={icon} className="h-full">
            {/* Fila 1 */}
            <Input label="Razón Social" name="client_razon_social" placeholder="Ingrese información..." />
            <Input label="Contacto" name="client_contacto" placeholder="Ingrese información..." />
            <Input label="Teléfono" name="client_telefono" placeholder="Ingrese información..." />
            
            {/* Fila 2 */}
            <Input label="RUC/NIT" name="client_ruc_nit" placeholder="Ingrese información..." />
            <Input label="Cargo" name="client_cargo" placeholder="Ingrese información..." />
            <Input label="E-mail" name="client_email" placeholder="Ingrese información..." />
        </FormSection>
    );
};