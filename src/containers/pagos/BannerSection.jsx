'use client'
import '@/sass/containers/pagos/BannerSection.scss'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { services } from '@/helpers/services'

export const BannerSection = ({ handleAddToCard }) => {
    const [isOpen, setIsOpen] = useState(false)
    const financierosList = useRef()
    const buenaDataList = useRef()
    const inmobiliariosList = useRef()

    const addToCart = (service, list) => {
        handleAddToCard(service)
        list.current.removeAttribute('open')
    }

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
                        <details ref={financierosList}>
                            <summary>
                                Servicios financieros{' '}
                                <Image src="/icons/drop-down.svg" alt="Icon" width={16} height={16} />
                            </summary>
                            <ul>
                                {services[0].map((service) => (
                                    <li key={service.name} onClick={() => addToCart(service, financierosList)}>
                                        {service.name}
                                    </li>
                                ))}
                            </ul>
                        </details>
                        <details ref={buenaDataList}>
                            <summary>
                                Otros servicios <Image src="/icons/drop-down.svg" alt="Icon" width={16} height={16} />
                            </summary>
                            <ul>
                                {services[1].map((service) => (
                                    <li key={service.name} onClick={() => addToCart(service, buenaDataList)}>
                                        {service.name}
                                    </li>
                                ))}
                            </ul>
                        </details>
                        <details ref={inmobiliariosList}>
                            <summary>
                                Inmobiliarios <Image src="/icons/drop-down.svg" alt="Icon" width={16} height={16} />
                            </summary>
                            <ul>
                                {services[2].map((service) => (
                                    <li key={service.name} onClick={() => addToCart(service, inmobiliariosList)}>
                                        {service.name}
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    )
}
