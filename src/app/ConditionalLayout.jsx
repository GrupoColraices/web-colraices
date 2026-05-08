'use client'

import { usePathname } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FormRequestAssistence } from '@/components/FormRequestAssistence'

const TOUR_BASE_PATH = '/casas-apartamentos-colombia-desde-el-exterior'

export function ConditionalLayout({ children }) {
    const pathname = usePathname()

    const isCampaignForm = pathname === '/formulario-campanas'

    const isTourRoute =
        pathname === TOUR_BASE_PATH ||
        pathname.startsWith(`${TOUR_BASE_PATH}/`)

    const isCleanLayout = isCampaignForm || isTourRoute

    return (
        <>
            {!isCleanLayout && <Header />}
            {children}
            {!isCleanLayout && <FormRequestAssistence />}
            {!isCleanLayout && <Footer />}
        </>
    )
}