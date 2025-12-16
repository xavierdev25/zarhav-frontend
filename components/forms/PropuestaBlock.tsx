import React from 'react';
import { FormSection } from './FormSection';
import { Input } from '../ui/Input';
import { ClipboardList } from 'lucide-react';

export const PropuestaBlock: React.FC = () => {
    // Icono placeholder para Propuesta (similar a un documento)
    const icon = <ClipboardList className="h-5 w-5 text-white" />; 
              
    return (
        <FormSection title="Propuesta" icon={icon}>
            {/* Fila 1 */}
            <Input label="Periodo de Validez" name="prop_validez" placeholder="Ingrese información..." />
            <Input label="Tiempo de respuesta (dias)" name="prop_tiempo_respuesta" placeholder="Ingrese información..." />
            <Input label="Condicion de pago" name="prop_condicion_pago" placeholder="Ingrese información..." />
            
            {/* Fila 2 */}
            {/* Cantidad de servicios es un campo que ocupa la columna 1, dejando las otras 2 vacías en el diseño. */}
            <div className="col-span-1">
                <Input label="Cantidad de servicios" name="prop_cantidad_servicios" type="number" placeholder="1" />
            </div>
            {/* Columna 2 y 3 quedan vacías para este diseño */}
            <div className="col-span-2"></div> 

            {/* Fila 3 (Fechas, ocupan 1 columna cada una) */}
            <Input label="Fecha Inicio de proyecto" name="prop_fecha_inicio" type="date" placeholder="Ingrese información..." />
            <Input label="Fecha fin de proyecto" name="prop_fecha_fin" type="date" placeholder="Ingrese información..." />
            {/* Columna 3 queda vacía */}
            <div></div> 
        </FormSection>
    );
};