'use client'
import '@/sass/containers/pagos/BannerSection.scss'
import { useState } from 'react'
import Image from 'next/image'
const services = [
    [
        { name: 'Cupo crédio', price: 10 },
        { name: 'Cupo crédito pro', price: 9 },
        { name: 'Pre-aprobado', price: 8 },
        { name: 'Crédito', price: 8 },
        { name: 'Cuenta ahorro', price: 8 },
        { name: 'Monetización', price: 8 },
    ],
    [
        { name: 'Básico', price: 10 },
        { name: 'Estandar', price: 9 },
        { name: 'Premium', price: 8 },
    ],
    [{ name: 'Resera de inmueble', price: 10 }],
]
export const BannerSection = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <section className="Pagos-banner">
            <h1>
                Pasarela<span> de pago</span>
            </h1>
            <h3>Selecciona el servicio a pagar</h3>
            <div className="Pagos-nav">
                <div className="Nav-toggle">
                    <button onClick={() => setIsOpen(true)}>
                        <Image src="/icons/hamburguer-services.svg" alt="Icon" width={24} height={24} />
                    </button>
                    <h4>Selecciona el servicio a pagar</h4>
                </div>

                <div className={`Nav-services ${isOpen ? 'show' : ''}`}>
                    <div className="Services-title">
                        <h4>Selecciona el servicio a pagar</h4>
                        <button className="Close-services" onClick={() => setIsOpen(false)}>
                            <Image src="/icons/close-services.svg" alt="Icon" width={24} height={24} />
                        </button>
                    </div>
                    <div className="Services-group container">
                        <details>
                            <summary>
                                Servicios financieros{' '}
                                <Image src="/icons/drop-down.svg" alt="Icon" width={16} height={16} />
                            </summary>
                            <ul>
                                {services[0].map((service) => (
                                    <li key={service.name}>{service.name}</li>
                                ))}
                            </ul>
                        </details>
                        <details>
                            <summary>
                                Buena Data <Image src="/icons/drop-down.svg" alt="Icon" width={16} height={16} />
                            </summary>
                            <ul>
                                {services[1].map((service) => (
                                    <li key={service.name}>{service.name}</li>
                                ))}
                            </ul>
                        </details>
                        <details>
                            <summary>
                                Inmobiliarios <Image src="/icons/drop-down.svg" alt="Icon" width={16} height={16} />
                            </summary>
                            <ul>
                                {services[2].map((service) => (
                                    <li key={service.name}>{service.name}</li>
                                ))}
                            </ul>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    )
}
