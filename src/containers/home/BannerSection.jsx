import Link from 'next/link'
import Image from 'next/image'
import '@/sass/containers/home/BannerSection.scss'
import { Partners } from '@/components/Partners'
import { partners } from '@/helpers'

export const BannerSection = () => {
    return (
        <div className='container-flex'>
            <section className="Banner-container ">
                <div className="Banner-title">
                    <h1 className="title">¡Compra tu casa en Colombia</h1>
                    <p>desde el exterior!</p>

                    <div className="container-buttons-desktop">
                        <Link href={'/casas-apartamentos-colombia-desde-el-exterior'} target="_blank" className="btn-blue-xl">Buscar mi casa</Link>
                        <Link href={'/busqueda-asistida'} target="_blank" className="btn-gray-xl">La buscamos por ti</Link>
                    </div>
                </div>
                <article>
                    <div className="container-buttons">
                        <Link href={'/busqueda-asistida'} target="_blank" className="btn-gray">La buscamos por ti</Link>
                        <Link href={'/casas-apartamentos-colombia-desde-el-exterior'} target="_blank" className="btn-blue">Buscar mi casa</Link>
                    </div>
                    <section>
                        <Image className='bannerMobile'
                            src="/bannerMobile.svg"
                            width={500}
                            height={500}
                            alt="Comprar casa en Colombia desde el exterior."
                        />
                        <Image className='bannerDesktop'
                            src="/banner.svg"
                            width={500}
                            height={500}
                            alt="Comprar casa en Colombia desde el exterior."
                        />
                    </section>
                </article>
                <div className='partners'>
                    <Partners partners={partners} hover={true} />
                </div>
            </section>
            <div className='partners-desktop'>
                <Partners partners={partners} hover={true} />
            </div>
        </div>
    )
}
