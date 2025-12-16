// pages/dashboard.tsx
import { AppLayout } from '../components/layout/AppLayout';
import { PageContainer } from '../components/layout/PageContainer';

const DashboardPage = () => {
  return (
    // El PageContainer es el contenedor de padding interno
    <PageContainer>
      <h2 className="text-2xl font-bold">¡Bienvenido a tu Dashboard!</h2>
      <p>Aquí va el contenido de tu página.</p>
      {/* Aquí usarías los componentes Card, Table, etc. */}
    </PageContainer>
  );
};

// Exporta la página envuelta en el Layout
DashboardPage.getLayout = (page: React.ReactNode) => (
  <AppLayout>
    {page}
  </AppLayout>
);

export default DashboardPage;