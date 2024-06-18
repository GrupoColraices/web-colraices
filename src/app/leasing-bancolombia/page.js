import { Header } from '@/components/Header';
import { Form } from '@/components/gestionamos-tu-credito/Form';
import { LeasingBanner } from '@/containers/leasing-bancolombia/LeasingBanner';
import { LeasingBenefits } from '@/containers/leasing-bancolombia/LeasingBenefits';
import { LeasingSeeQuota } from '@/containers/leasing-bancolombia/LeasingSeeQuota';
import { LeasingWhyChoose } from '@/containers/leasing-bancolombia/LeasingWhyChoose';


export const metadata = {
    title: "Leasing habitacional Bancolombia: Tasas de interés bajas para comprar casa en Colombia desde",
    description: "El crédito leasing habitacional de Bancolombia, ahora disponible para los colombianos en el exterior a través de Colraices, ofrece una oportunidad única de inversión en vivienda en Colombia. Descubre cómo hacer realidad este sueño hoy mismo.",
    keywords: "Leasing habitacional, Leasing de vivienda, Leasing habitacional Bancolombia, Tasas de interés bajas en Colombia, Comprar casa en Colombia desde el exterior, Leasing Bancolombia, Financiamiento de vivienda en Colombia, Bancolombia y Colraices, Leasing habitacional para colombianos en el exterior, Compra de vivienda en Colombia desde el exterior, Leasing habitacional vivienda usada"
}
export default function LeasingBancolombia() {
    return (
        <>
            <Header />
            <LeasingBanner />
            <LeasingWhyChoose />
            <LeasingBenefits />
            <LeasingSeeQuota />
            <Form />

        </>
    )
}
