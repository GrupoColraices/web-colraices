import { Header } from '@/components/Header';
import { Form } from '@/components/gestionamos-tu-credito/Form';
import { BankLoan } from '@/containers/gestionamos-tu-credito/BankLoan';
import { Banner } from '@/containers/gestionamos-tu-credito/Banner';
import { CreditRequest } from '@/containers/gestionamos-tu-credito/CreditRequest';
import { FinancingLines } from '@/containers/gestionamos-tu-credito/FinancingLines';
import '@/sass/containers/gestionamos-tu-credito/ManagingYourCredit.scss'

export default function ManagingYourCredit() {
    return (
        <>
            <Header />
            <Banner />
            <BankLoan />
            <CreditRequest />
            <FinancingLines />
            <Form />
        </>
    )
}