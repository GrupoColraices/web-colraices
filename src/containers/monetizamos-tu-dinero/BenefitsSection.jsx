import React from 'react'

export const BenefitsSection = () => {
    return (
        <section className="monetization-benefits">
            <article className="slideLeft">
                <h2>
                    Con <span>nosotros</span>
                </h2>
                <p>
                    Podrás convertir tus dólares en pesos, depósitalos en un banco confiable en Colombia y disfruta de
                    la facilidad y seguridad al pagar la cuota inicial de tu casa, las cuotas bancarias o incluso
                    comprar tu vivienda de contado.
                </p>
            </article>
            <aside className="slideRight">
                <div className="item item-1">
                    <h3>100% seguro</h3>
                    <img src="/img/monetizamos/credit-card-hold.svg" alt="Icono de tarjeta de credito en la mano" />
                </div>
                <div className="item item-2">
                    <h3>Tasa de cambio favorable</h3>
                    <img src="/img/monetizamos/currencies-circle.svg" alt="Icono de tarjeta de credito en la mano" />
                </div>
                <div className="item item-3">
                    <h3>Ahorra: no pagas impuesto por el envío</h3>
                    <img src="/img/monetizamos/currency-hold.svg" alt="Icono de tarjeta de credito en la mano" />
                </div>
                <div className="item item-4">
                    <h3>No hay límite de envío</h3>
                    <img src="/img/monetizamos/dollars.svg" alt="Icono de tarjeta de credito en la mano" />
                </div>
            </aside>
        </section>
    )
}
