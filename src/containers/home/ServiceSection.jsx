import Image from 'next/image'
import '@/sass/containers/home/ServiceSection.scss'
import { servicesCards } from '@/helpers'

export const ServiceSection = () => {
    return (
        <section className="Service-container">
            <h2> Si lo prefieres, <span>lo hacemos todo por tí</span></h2>
            <div className="Service-cards-container">
                {servicesCards.map((service) => (
                    <article key={service.image}>
                        <Image src={service.image} alt={service.content} width={300} height={300} />
                        <div className='container-content'>
                            <div className='container-icons'>
                                <Image src={service.icon} alt="Icon" width={30} height={30} />
                                <h1>{service.title}</h1>
                            </div>
                            <p>{service.content}</p>
                        </div>
                    </article>
                ))}
            </div>
            <div className="register">
                <button className='btn-blue-xl'>Continuar</button>
            </div>
        </section>
    )
}
