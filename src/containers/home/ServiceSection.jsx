import '@/sass/containers/home/ServiceSection.scss'
import Image from 'next/image'
import { TitleLine } from '../../components/TitleLine'
import { servicesCards } from '@/helpers'

export const ServiceSection = () => {
    return (
        <section className="Service-container">
            <h2>
                <TitleLine left={true} top={50} />
                Ven y conoce los nuevos servicios <span>para colombianos en el exterior</span>
                <TitleLine right={true} top={50} />
            </h2>
            <div className="Service-cards-container">
                {servicesCards.map((service) => (
                    <article key={service.image}>
                        <Image src={service.image} alt={service.content} width={300} height={300} />
                        <div>
                            <Image src={service.icon} alt="Icon" width={30} height={30} />
                            <h1>{service.title}</h1>
                            <p>{service.content}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
