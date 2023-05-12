import React from 'react'
import '@/sass/containers/home/BannerSection.scss'
import { ServiceIcon } from '@/components/ServiceIcon'
import Image from 'next/image'
import { Partners } from '@/components/Partners'
const iconsData = [
    { id: 1, icon: '/icons/online_credit_icon.svg', label: 'Crédito en línea' },
    { id: 2, icon: '/icons/datacredito_icon.svg', label: 'Elimina tus reportes en Datacredito' },
    { id: 3, icon: '/icons/steps_icon.svg', label: 'El paso a paso' },
    { id: 4, icon: '/icons/pension_icon.svg', label: 'Pensiones' },
    { id: 5, icon: '/icons/client_portal_icon.svg', label: 'Portal Cliente' },
]
const partners = [
    {
        id: 1,
        icon: '/icons/bancolombia_gray_icon.svg',
        hover: '/icons/bancolombia_icon.svg',
        name: 'Bancolombia',
    },
    {
        id: 2,
        icon: '/icons/davivienda_gray_icon.svg',
        hover: '/icons/davivienda_icon.svg',
        name: 'Davivienda',
    },
    {
        id: 3,
        icon: '/icons/bancounion_gray_icon.svg',
        hover: '/icons/bancounion_icon.svg',
        name: 'Banco Unión',
    },
]
export const BannerSection = () => {
    return (
        <section className="Banner-container ">
            <div className="Banner-title container">
                <h1 className="title">
                    Sí, puedes comprar <span>casa en Colombia</span> desde el exterior
                </h1>
                <p>Y es el momento para hacerlo.</p>
            </div>
            <article className="space container">
                <div className="Banner-icons-container">
                    {iconsData.map((icon) => (
                        <ServiceIcon key={icon.id} icon={icon} />
                    ))}
                </div>
                <section>
                    <Image
                        src="/banner.svg"
                        width={500}
                        height={500}
                        alt="Comprar casa en Colombia desde el exterior."
                    />
                </section>
            </article>
            <Partners partners={partners} hover={true} />
        </section>
    )
}
