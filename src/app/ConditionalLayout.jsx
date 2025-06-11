'use client'

import { usePathname } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FormRequestAssistence } from '@/components/FormRequestAssistence'

export function ConditionalLayout({ children }) {
    const pathname = usePathname()
    const isCleanLayout = pathname === '/formulario-campanas'

    return (
        <>
            {!isCleanLayout && <Header />}
            {children}
            {!isCleanLayout && <FormRequestAssistence />}
            {!isCleanLayout && <Footer />}
        </>
    )
}