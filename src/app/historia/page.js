import { Header } from '@/components/Header'
import { Timeline } from '@/containers/historia/Timeline'
import { Banks } from '@/containers/historia/Banks'
import { Banner } from '@/containers/historia/Banner'
import { CompaniesConstruction } from '@/containers/historia/CompaniesConstruction'
import { OurPurpose } from '@/containers/historia/OurPurpose'
import { PromotionalVideo } from '@/containers/historia/PromotionalVideo'
import { Form } from '@/components/gestionamos-tu-credito/Form'

export const metadata = {
    title: '20 años ayudando a colombianos en el exterior a comprar su casa en Colombia | Colraices',
    description: 'Con 20 años de experiencia, Colraices ha sido el aliado de los colombianos en el exterior para adquirir su vivienda en Colombia. Ofrecemos asesoramiento integral, los mejores inmuebles y guía en la obtención de créditos con los bancos en Colombia.',
    keywords: "Casa en Colombia Comprar casa en Colombia desde el exterior Asesoramiento para colombianos en el exterior Crédito hipotecario en Colombia Crédito para casa en Colombia Casa en Colombia Casas y apartamentos en Colombia"
}
export default function History() {
    return (
        <>
            <Header />
            <Banner />
            <CompaniesConstruction />
            <Banks />
            <Timeline />
            <OurPurpose />
            <PromotionalVideo />
            <Form />

        </>
    )
}
