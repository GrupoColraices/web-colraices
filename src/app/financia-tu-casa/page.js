import { Header } from '@/components/Header'
import { Partners } from '@/components/Partners'
import { Form } from '@/components/gestionamos-tu-credito/Form'
import { FinancingBanner } from '@/containers/financia-tu-casa/FinancingBanner'
import { FinancingBenefics } from '@/containers/financia-tu-casa/FinancingBenefics'
import { FinancingCredits } from '@/containers/financia-tu-casa/FinancingCredits'
import { FinancingRequirements } from '@/containers/financia-tu-casa/FinancingRequirements'
import { FinancingSteps } from '@/containers/financia-tu-casa/FinancingSteps'
import { partners } from '@/helpers'
import '@/sass/containers/financia-tu-casa/FinancingPage.scss'
export const metadata = {
    title: 'Financia tu casa en Colombia desde el exterior | Las mejores opciones de crédito en línea',
    description:
        'Financia tu casa en Colombia desde el exterior con opciones de crédito hipotecario y leasing habitacional con Bancolombia, Davivienda y Banco Unión. Accede a las mejores tasas de crédito y encuentra la financiación que necesitas en línea. Calcula tu crédito y encuentra oportunidades para comprar, mejorar o adquirir vivienda nueva y usada.',
    keywords:
        'bancolombia credito colombianos en el exterior, davivienda financiacion vivienda, bancolombia prestamo para vivienda, credito de vivienda Bancolombia, credito de vivienda para colombianos en el exterior, credito hipotecario Bancolombia, credito hipotecario bancolombia colombianos en el exterior, credito hipotecario en línea, credito mejoramiento de vivienda, credito para comprar casa en Colombia, crédito para vivienda usada, davivienda credito de vivienda, davivienda leasing, leasing habitacional, leasing habitacional Bancolombia, banco davivienda leasing, bancolombia leasing inmobiliario',
}
export default function FinancingPage() {
    return (
        <>
            <main className="financing-main">
                <FinancingBanner />
                <section className="financing-partners">
                    <Partners partners={partners} />
                </section>
                <FinancingCredits />
                <FinancingBenefics />
                <FinancingSteps />
                <FinancingRequirements />
                <Form />
            </main>
        </>
    )
}
