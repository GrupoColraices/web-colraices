import { Header } from '@/components/Header'
import React from 'react'
import '@/sass/containers/monetizamos-tu-dinero/MonetizationPage.scss'
import { MonetizationBanner } from '@/containers/monetizamos-tu-dinero/MonetizationBanner'
import { BenefitsSection } from '@/containers/monetizamos-tu-dinero/BenefitsSection'
import { Form } from '@/components/gestionamos-tu-credito/Form'

const MonetizationPage = () => {
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

export default MonetizationPage
