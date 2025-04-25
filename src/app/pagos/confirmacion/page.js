'use client'
import { useSearchParams } from 'next/navigation'
import '@/sass/containers/pagos/Confirmation.scss'
import Link from 'next/link'
export default function ConfirmacionPage() {
    const searchParams = useSearchParams()
    const success = 'APPROVED'
    const message = searchParams.get('message')
    if (message !== success) {
        return (
            <section className="Confirmation-container container">
                <div>
                    <h1>TRANSACCIÓN RECHAZADA</h1>
                    <p>
                        Estimado usuario, lamentamos informarle que su pago ha sido rechazado. Por favor, revise su
                        cuenta bancaria para asegurarse de que tiene suficientes fondos o que su tarjeta de crédito no
                        ha expirado. También puede comunicarse con su banco para obtener más información sobre el motivo
                        del rechazo. Si necesita ayuda adicional, no dude en ponerse en contacto con nuestro servicio de
                        atención al cliente. Gracias por su comprensión.
                    </p>
                    <div className="Confirmation-cta">
                        <Link href="/">Ir al inicio</Link>
                        <a href={'https://api.whatsapp.com/send/?phone=15136479405'} target="_blank">
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
                <p>
                    Estimado usuario, nos complace informarle que su pago ha sido aprobado. Gracias por su compra y por
                    confiar en nuestros servicios. Si tiene alguna pregunta o necesita ayuda adicional, no dude en
                    ponerse en contacto con nuestro servicio de atención al cliente. ¡Disfrute de su compra!
                </p>
                <div className="Confirmation-cta">
                    <Link href="/">Ir al inicio</Link>
                    <a href={'https://api.whatsapp.com/send/?phone=15136479405'} target="_blank">
                        Contactar un asesor
                    </a>
                </div>
            </div>
        </section>
    )
}
