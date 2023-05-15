import '@/sass/containers/home/ServiceSection.scss'
import Image from 'next/image'

export const ServiceSection = () => {
    return (
        <section className="Service-container">
            <h2>
                Ven y conoce los nuevos servicios <span>para colombianos en el exterior</span>
            </h2>
            <div className="Service-cards-container">
                <article>
                    <Image
                        src="/buena-data.jpg"
                        alt="Mujer sonriendo mirando el celular"
                        width={300}
                        height={300}
                    />
                    <div>
                        <Image
                            src="/icons/datacredito_icon.svg"
                            alt="Icon"
                            width={30}
                            height={30}
                        />

                        <h1>Buena Data</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                            recusandae eaque excepturi.
                        </p>
                    </div>
                </article>
                <article>
                    <Image
                        src="/pensiones.jpg"
                        alt="Pareja adultos mayores con tablet"
                        width={300}
                        height={300}
                    />
                    <div>
                        <Image src="/icons/pension_icon.svg" alt="Icon" width={30} height={30} />
                        <h1>Pensiones</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                            recusandae eaque excepturi.
                        </p>
                    </div>
                </article>
                <article>
                    <Image
                        src="/credito.jpg"
                        alt="Pareja de jovenes sonriendo"
                        width={300}
                        height={300}
                    />
                    <div>
                        <Image src="/icons/credit_icon.svg" alt="Icon" width={30} height={30} />
                        <h1>Crédito</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                            recusandae eaque excepturi.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}
