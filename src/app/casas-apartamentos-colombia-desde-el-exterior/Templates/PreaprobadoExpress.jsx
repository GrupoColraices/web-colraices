import Link from "next/link"

export const PreaprobadoExpress = () => {
    return (
        <section className='container-express'>
            <div className='content-express'>
                <h2>Pre-aprobado <span>Express</span></h2>
                <p>¡Aprovecha el preaprobado exprés, gratis y en minutos, durante la Feria Colraices!</p>
                <p>Desde tu hogar, confirma que te prestan lo que necesitas para tu vivienda. ¡Ahorra tiempo y dinero y acércate a tu inmueble  ideal en Colombia!</p>
                <Link href="https://colraices.com/preaprobado/" target="_blank"> Pre - Apruebate ahora</Link>
            </div>
            <img src="/gestionamos-tu-credito/img/image-movil.webp" alt="imagen ilustrativa" />
        </section>
    )
}
