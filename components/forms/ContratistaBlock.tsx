import React from 'react';
import { FormSection } from './FormSection';
import { Input } from '../ui/Input';

export const ContratistaBlock: React.FC = () => {
    // Icono placeholder para Contratista (similar a un edificio o empresa)
    const icon = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm4 0h1v4H6V5zm3 0h1v4H9V5zm3 0h1v4h-1V5z" /></svg>;
    
    return (
        <FormSection title="Contratista" icon={icon} className="h-full">
            {/* Fila 1 */}
            <Input label="Razón Social" name="cont_razon_social" placeholder="Ingrese información..." />
            <Input label="E-mail" name="cont_email_principal" placeholder="Ingrese información..." />
            {/* Columna 3 vacía en la primera fila */}
            <div></div> 

            {/* Fila 2 */}
            <Input label="RUC/NIT" name="cont_ruc_nit" placeholder="Ingrese información..." />
            <Input label="Contacto Secundario" name="cont_contacto_secundario" placeholder="Ingrese información..." />
            <Input label="E-mail" name="cont_email_secundario" placeholder="Ingrese información..." />

            {/* Fila 3 */}
            <Input label="Contacto Principal" name="cont_contacto_principal" placeholder="Ingrese información..." />
            <Input label="Cargo" name="cont_cargo" placeholder="Ingrese información..." />
            <Input label="Teléfono" name="cont_telefono" placeholder="Ingrese información..." />
        </FormSection>
    );
};