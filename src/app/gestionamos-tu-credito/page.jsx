// import { Header } from '@/components/Header';
import { Form } from '@/components/gestionamos-tu-credito/Form'
import { BankLoan } from '@/containers/gestionamos-tu-credito/BankLoan'
import { Banner } from '@/containers/gestionamos-tu-credito/Banner'
import { CreditRequest } from '@/containers/gestionamos-tu-credito/CreditRequest'
import { FinancingLines } from '@/containers/gestionamos-tu-credito/FinancingLines'
import '@/sass/containers/gestionamos-tu-credito/ManagingYourCredit.scss'

export const metadata = {
    title: 'Compra tu casa en Colombia | Gestionamos tu crédito en Colraices',
    description:
        'Gestionamos el crédito para tu vivienda en Colombia. Obtén tu preaprobado en línea y calcula tu crédito con Davivienda, Bancolombia y Banco Unión',
    keywords:
        'Crédito online, Casa en Colombia, Crédito en Colombia, Bancolombia en línea, Davivienda en línea ,Pre aprobado en línea, Calculadora de crédito, Crédito preaprobado Bancolombia, Calcula tu crédito hipotecario, Crédito preaprobado Davivienda',
}
export default function ManagingYourCredit() {
    return (
        <>
            {/* <Header /> */}
            <Banner />
            <BankLoan />
            <CreditRequest />
            <FinancingLines />
            <Form />
        </>
    )
}
