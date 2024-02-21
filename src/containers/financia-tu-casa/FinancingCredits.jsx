import { InternalLink } from '@/components/InternalLink'
import React from 'react'

export const FinancingCredits = () => {
    return (
        <section className="financing-credits">
            <h2>
                <span>Tu casa en Colombia es una realidad </span>con nuestras opciones de crédito
            </h2>
            <article className="row-reverse slideLeft">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/img/financia/financia-credito-hipotecario.webp" />
                    <img src="/icons/financia-icon-hipotecario.svg" alt="Crédito hipotecario" />
                </picture>
                <aside>
                    <h1>Crédito hipotecario</h1>
                    <p>
                        Consigue tu casa en Colombia: tasas competitivas, plazos flexibles para viviendas urbanas y
                        rurales, o si prefieres, para inmuebles comerciales.
                    </p>
                </aside>
            </article>
            <article className="slideRight">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/img/financia/financia-leasing.webp" />
                    <img src="/icons/financia-icon-leasing.svg" alt="Crédito hipotecario" />
                </picture>
                <aside>
                    <h1>Leasing habitacional</h1>
                    <p>
                        Paga tu casa como un arriendo con nuestro leasing habitacional. Mensualidades más bajas, plazo
                        más amplio y beneficios tributarios.
                    </p>
                </aside>
            </article>
            <div>
                <InternalLink options={{ type: 'anchor', href: 'https://colraices.com/cupocreditoalinstante' }}>
                    Puedes hacerlo tú
                </InternalLink>
                <InternalLink options={{ type: 'internal', href: '#seccion-de-contacto', className: 'bg-blue' }}>
                    Empecemos juntos
                </InternalLink>
            </div>
        </section>
    )
}
