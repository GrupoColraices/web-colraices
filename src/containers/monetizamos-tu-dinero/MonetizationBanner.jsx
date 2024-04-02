import { InternalLink } from '@/components/InternalLink'
import React from 'react'

export const MonetizationBanner = () => {
    return (
        <header className="monetization-banner">
            <div className="container">
                <h1>
                    Envía dinero y asegura las
                    <span> llaves de tu casa en Colombia.</span>
                </h1>
                <p>Servicio de Monetización para colombianos en el exterior</p>
                <InternalLink
                    options={{
                        type: 'anchor',
                        href: 'https://colraices.com/cupocreditoalinstante',
                    }}
                >
                    {' '}
                    MONETIZAR
                </InternalLink>
            </div>
            <picture>
                <img
                    src="/img/monetizamos/banner.webp"
                    alt="Mujer sonriendo con una mano arriba y sosteniendo el PC con la otra"
                    width={1000}
                />
            </picture>
        </header>
    )
}
