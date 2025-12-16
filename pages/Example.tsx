'use client'
import React from 'react';
import type { NextPageWithLayout } from './_app';
import { AppLayout } from '../components/layout/AppLayout';
import { PageContainer } from '../components/layout/PageContainer';

// --- Importaciones de Componentes Creados ---
import { Card } from '@/components/ui/Card';
import {Table,Column} from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

// Placeholder para un tipo de datos de cotización simplificada
interface DemoQuote {
  id: number;
  client: string;
  service: string;
  amount: number;
  status: 'PENDIENTE' | 'ACEPTADA' | 'RECHAZADA';
}

// 1. Datos de ejemplo para la tabla
const MOCK_QUOTES: DemoQuote[] = [
  { id: 101, client: 'Anthony Atiro', service: 'Desarrollo Web', amount: 4500, status: 'ACEPTADA' },
  { id: 102, client: 'Sofía Lazo', service: 'App Móvil', amount: 8200, status: 'PENDIENTE' },
  { id: 103, client: 'Carlos Vera', service: 'Marketing', amount: 1500, status: 'RECHAZADA' },
  { id: 104, client: 'Laura Torres', service: 'Hosting', amount: 350, status: 'ACEPTADA' },
];

// 2. Datos de ejemplo para la StatsBar
const DEMO_STATS = {
  total: MOCK_QUOTES.length,
  pending: MOCK_QUOTES.filter(q => q.status === 'PENDIENTE').length,
  conversionRate: '75%', // Ejemplo simple
};

// 3. Definición de las columnas de la tabla (usando la interfaz Column<T>)
const QUOTE_COLUMNS: Column<DemoQuote>[] = [
  { key: 'id', header: 'ID' },
  { key: 'client', header: 'Cliente' },
  { key: 'service', header: 'Servicio' },
  { key: 'amount', header: 'Monto', 
    render: (row) => <span>${row.amount.toFixed(2)}</span> // Formato de moneda
  },
  { key: 'status', header: 'Estado', 
    render: (row) => {
      let variant: 'success' | 'warning' | 'danger' | 'neutral' = 'neutral';
      if (row.status === 'ACEPTADA') variant = 'success';
      if (row.status === 'PENDIENTE') variant = 'warning';
      if (row.status === 'RECHAZADA') variant = 'danger';
      
      return <Badge variant={variant}>{row.status}</Badge>;
    }
  },
  { key: 'id', header: 'Acciones', 
    render: (row) => (
      <Button 
        variant="secondary" 
        size="sm" // Asumiendo que definiste tamaños en tu Button
        onClick={() => alert(`Editando cotización #${row.id}`)}
      >
        Ver Detalle
      </Button>
    )
  },
];


// =========================================================
// EL COMPONENTE DE PÁGINA PRINCIPAL
// =========================================================
const EjemploPage: NextPageWithLayout = () => {
  return (
    <PageContainer className="space-y-8">
      
      {/* 2. Tarjeta con la Tabla */}
      <Card title="Cotizaciones Recientes" actions={
          <Button variant="primary" onClick={() => alert('Crear Nueva')}>
            + Nueva Cotización
          </Button>
        }
      >
        <Table<DemoQuote> 
          data={MOCK_QUOTES} 
          columns={QUOTE_COLUMNS} 
        />
      </Card>

      {/* 3. Placeholder de otro contenido */}
      <Card title="Gráfico de Conversión (Placeholder)" className="h-64 flex items-center justify-center">
        <p className="text-gray-500">Aquí iría un gráfico de ventas o conversión.</p>
      </Card>
      
    </PageContainer>
  );
};


// 4. Implementación del Layout Persistente
EjemploPage.getLayout = (page) => {
  return (
    <AppLayout>
      {page}
    </AppLayout>
  );
};

export default EjemploPage;