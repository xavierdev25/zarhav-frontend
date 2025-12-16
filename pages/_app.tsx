import type { AppProps } from 'next/app';
import type { NextPage } from 'next'; // <--- ¡Faltaba esta importación!
import type { ReactElement, ReactNode } from 'react';
import '@/app/globals.css'; 

// 1. Tipado del componente de página (con el método getLayout opcional)
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// 2. Tipado de las props que recibe _app.tsx
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  
  // 3. Lógica para determinar el Layout:
  // Si la página tiene un getLayout definido, úsalo; si no, usa un fragmento simple.
  const getLayout = Component.getLayout ?? ((page) => page);

  // 4. Renderiza el layout envolviendo la página
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;