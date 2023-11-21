import Image from 'next/image'
import '@/sass/containers/home/BannerSection.scss'
import { Partners } from '@/components/Partners'
import { partners } from '@/helpers'

export const BannerSection = () => {
    return (
        <section className="Banner-container ">
            <div className="Banner-title container">
                <h1 className="title">¡Compra tu casa en Colombia</h1>
                <p>desde el exterior!</p>
            </div>
            <article>
                <div className="container-buttons">
                    <button className="btn-gray">La buscamos por ti</button>
                    <button className="btn-blue">Buscar mi casa</button>
                </div>
                <section>
                    <Image
                        src="/bannerMobile.svg"
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
