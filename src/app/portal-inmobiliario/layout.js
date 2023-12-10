import { ContextLikeProvider } from '../portal-inmobiliario/Context/Like';
import { FiltroContextProvider } from '../portal-inmobiliario/Context/Filtro';
import { Header } from '../portal-inmobiliario/Templates/Header';
import { Footer } from '../portal-inmobiliario/Templates/Footer';
import { Animation } from '../portal-inmobiliario/molecules/Animation';
import HeadScript from '../portal-inmobiliario/components/HeadScript';
import '../portal-inmobiliario/sass/app.scss'
import { Toaster } from 'react-hot-toast';



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
      <HeadScript />
      <ContextLikeProvider>
        <FiltroContextProvider>
          <Animation>
            <Toaster containerStyle={{ zIndex: 10000000 }} position="top-right" />
            <Header />
            {children}
            <Footer />
          </Animation>
        </FiltroContextProvider>
      </ContextLikeProvider>
    </>
  )
}
