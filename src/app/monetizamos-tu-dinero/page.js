import { Header } from '@/components/Header'
import React from 'react'
import '@/sass/containers/monetizamos-tu-dinero/MonetizationPage.scss'
import { MonetizationBanner } from '@/containers/monetizamos-tu-dinero/MonetizationBanner'
import { BenefitsSection } from '@/containers/monetizamos-tu-dinero/BenefitsSection'
import { Form } from '@/components/gestionamos-tu-credito/Form'

export const metadata = {
    title: 'Envía dinero a Colombia para tu casa propia l Colraices',
    description:
        'Con el servicio de monetización de Colraices, puedes enviar dinero a Colombia con confianza, aprovechando las mejores tasas del mercado. Facilitamos que los colombianos en el exterior envíen dinero para la compra de su vivienda en Colombia.',
    keywords:
        'Enviar dinero a Colombia, Monetización de remesas, Envío de dinero seguro a Colombia, Transferir dinero a Colombia desde el exterior, Servicio de envío de remesas a Colombia, Enviar dinero a familiares en Colombia, Remesas a Colombia',
}
export default function MonetizationPage() {
    return (
        <>
            <Header />
            <main className="monetization-main">
                <MonetizationBanner />
                <BenefitsSection />
                <Form />
            </main>
        </>
    )
}
