'use client'
import { useSearchParams } from 'next/navigation'
import '@/sass/containers/pagos/Confirmation.scss'
import Link from 'next/link'

export default function ConfirmationClient() {
    const searchParams = useSearchParams()
    const success = 'APPROVED'
    const message = searchParams.get('message')

    if (message !== success && message !== 'CANCELLED') {
        return (
            <section className="Confirmation-container container">
                <div>
                    <h1>TRANSACCIÓN RECHAZADA</h1>
                    <p>...</p>
                    <div className="Confirmation-cta">
                        <Link href="/">Ir al inicio</Link>
                        <a href="https://api.whatsapp.com/send/?phone=15136479405" target="_blank">
                            Contactar un asesor
                        </a>
                    </div>
                </div>
            </section>
        )
    }

    if (message === 'CANCELLED') {
        return (
            <section className="Confirmation-container container">
                <div>
                    <h1>TRANSACCIÓN CANCELADA</h1>
                    <p>...</p>
                    <div className="Confirmation-cta">
                        <Link href="/">Ir al inicio</Link>
                        <a href="https://api.whatsapp.com/send/?phone=15136479405" target="_blank">
                            Contactar un asesor
                        </a>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="Confirmation-container container">
            <div>
                <h1>TRANSACCIÓN APROBADA</h1>
                <p>...</p>
                <div className="Confirmation-cta">
                    <Link href="/">Ir al inicio</Link>
                    <a href="https://api.whatsapp.com/send/?phone=15136479405" target="_blank">
                        Contactar un asesor
                    </a>
                </div>
            </div>
        </section>
    )
}
