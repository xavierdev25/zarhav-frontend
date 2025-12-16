'use client'; // Necesario para usar useRouter y componentes interactivos

import React from 'react';
import { useRouter } from 'next/router';
import type { NextPageWithLayout } from '@/pages/_app';
import { AppLayout } from '@/components/layout/AppLayout';
import { PageContainer } from '@/components/layout/PageContainer';
import { ActionButtons } from '../../components/forms/ActionButtons';

// 🚨 IMPORTACIONES DE BLOQUES DE FORMULARIO
import { IdentificacionBlock } from '../../components/forms/IdentificationBlock';
import { ClienteBlock } from '../../components/forms/ClienteBlock';
import { PropuestaBlock } from '../../components/forms/PropuestaBlock';
import { ContratistaBlock } from '../../components/forms/ContratistaBlock';
import { ServiceListContainer } from '../../components/forms/ServiceListContainer';

// =========================================================
// EL COMPONENTE DE PÁGINA: CotizacionPage
// =========================================================
const CotizacionPage: NextPageWithLayout = () => {
    const router = useRouter();
    const { id } = router.query;
    const isNew = id === 'new';

    // Manejadores de ejemplo
    const handleUpdate = () => console.log('Guardando cotización...');
    const handlePreview = () => console.log('Mostrando vista previa...');
    const handleDelete = () => console.log('Eliminando cotización...');

    if (!id) return <PageContainer>Cargando...</PageContainer>;

    return (
        <PageContainer>
            <div>
                <i className="fa-solid fa-file-invoice-dollar"></i>
                <h2 className="text-2xl font-bold text-white mb-6">Cotizacion</h2>
            </div>
            <p className="text-gray-400 mb-6">Estos datos son requeridos para generar una cotizacion</p>

            {/* 🚨 GRID PRINCIPAL MODIFICADO: Estructura 50%/50% */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"> 

                {/* ========================================== */}
                {/* COLUMNA IZQUIERDA (50% de ancho) */}
                {/* Usamos lg:col-span-1 (o simplemente omitirlo, pero lo mantenemos explícito) */}
                {/* ========================================== */}
                <div className="lg:col-span-1 space-y-6">
                    
                    <IdentificacionBlock />
                    <PropuestaBlock />
                    
                    {/* Lista de Servicios (Bloque dinámico) */}
                    <div className="mt-6">
                        <ServiceListContainer />
                    </div>
                </div>

                {/* ========================================== */}
                {/* COLUMNA DERECHA (50% de ancho) */}
                {/* Usamos lg:col-span-1 */}
                {/* ========================================== */}
                <div className="lg:col-span-1 space-y-6">
                    
                    <ClienteBlock />
                    <ContratistaBlock />
                </div>
            </div>

            {/* Botones de Acción Flotantes (Al final de la página) */}
            <div className="flex justify-end sticky bottom-0 py-3 mt-8">
                <ActionButtons
                    onPreview={handlePreview}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                    isSaving={false} // Reemplazar con estado real
                    isNew={isNew}
                />
            </div>

        </PageContainer>
    );
};

// =========================================================
// LAYOUT: Envuelve la página con AppLayout
// =========================================================
CotizacionPage.getLayout = (page) => {
    const router = useRouter();
    const title = router.query.id === 'new' ? "Nueva Cotización" : "Edición de Cotización";

    return (
        // AppLayout proporciona la Sidebar, TopBar y el fondo oscuro
        <AppLayout>
            {page}
        </AppLayout>
    );
};

export default CotizacionPage;