import { InternalLink } from '@/components/InternalLink'
import React from 'react'

export const FinancingBanner = () => {
    return (
        <header className="financing-banner">
            <div>
                <h1>
                    Crédito a la medida de tu<span> casa en Colombia</span>
                </h1>
                <p>
                    Si quieres comprar tu casa en Colombia y vives en el exterior, nuestras opciones de financiamiento
                    te permiten hacerlo.
                </p>
                <InternalLink
                    options={{
                        type: 'anchor',
                        href: 'https://colraices.com/cupocreditoalinstante',
                    }}
                >
                    {' '}
                    Clacula tu credito
                </InternalLink>
            </div>
            <picture>
                <img
                    src="/img/financia/financia-tu-casa-banner.webp"
                    alt="Mujer sonriendo mientras solicita financiación para su casa"
                />
            </picture>
        </header>
    )
}
