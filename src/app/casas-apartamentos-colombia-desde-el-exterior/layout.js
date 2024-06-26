import { ContextLikeProvider } from '../casas-apartamentos-colombia-desde-el-exterior/Context/Like';
import { FiltroContextProvider } from '../casas-apartamentos-colombia-desde-el-exterior/Context/Filtro';
import Header from '../casas-apartamentos-colombia-desde-el-exterior/Templates/Header';
import { Animation } from '../casas-apartamentos-colombia-desde-el-exterior/molecules/Animation';
import '../casas-apartamentos-colombia-desde-el-exterior/sass/app.scss'
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';
import { FairModeContextProvider } from './Context/Mode';



export const metadata = {
  title: 'Compra tu casa en Colombia desde el exterior | Portal Inmobiliario',
  description: 'El mejor sitio para comprar tu casa en Colombia desde el exterior',
  keywords: "Casa en Colombia | Comprar casa en Colombia | Invertir en Colombia desde el exterior | Crédito hipotecario | Crédito hipotecario en Colombia | Consultoría financiera | Requisitos para el crédito | Envio de dinero a Colombia",
  lenguage: 'es',
  audience: 'all',
  robots: 'index, all, follow',
  googlebot: 'index, all, follow',
  google: 'translete',
  copyright: 'momentumdigital.com.co',
}
export default function Layout({ children }) {
  return (
    <>
      <Script id='HotJarAnalytics'
        dangerouslySetInnerHTML={{
          __html: `(function (h, o, t, j, a, r) {
            h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
            h._hjSettings = { hjid: 3262680, hjsv: 6 };
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script'); r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
          })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');`}} />
      <ContextLikeProvider>
        <FiltroContextProvider>
          <FairModeContextProvider>
            <Animation>
              <Toaster containerStyle={{ zIndex: 10000000 }} position="top-right" />
              <Header />
              {children}
            </Animation>
          </FairModeContextProvider>
        </FiltroContextProvider>
      </ContextLikeProvider>
    </>
  )
}
