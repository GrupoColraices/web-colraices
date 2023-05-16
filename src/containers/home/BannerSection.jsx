import React from 'react'
import '@/sass/containers/home/BannerSection.scss'
import { ServiceIcon } from '@/components/ServiceIcon'
import Image from 'next/image'
import { Partners } from '@/components/Partners'
import { iconsData, partners } from '@/helpers'
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
