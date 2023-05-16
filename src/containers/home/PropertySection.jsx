import Link from 'next/link'
import Image from 'next/image'

import { TitleLine } from '@/components/TitleLine'
import { Slider } from '@/components/SliderProperty'
import { Partners } from '@/components/Partners'
import '@/sass/containers/home/PropertySection.scss'
import { constructionCompany } from '@/helpers'
export const PropertySection = async () => {
    const response = await fetch('https://vc.colraices.com/api/v1/likes', { cache: 'no-cache' })
    const { data } = await response.json()

    return (
        <section className="Property-container">
            <h2>
                <TitleLine left={true} top={40} width={7.5} />
                Financiación con <span>bancos colombianos</span>
                <TitleLine right={true} top={40} width={7.5} />
            </h2>
            <div className="Property-border">
                {/* <Image className='Figure-left' src={'/circleLeft.svg'} width={43} height={144} alt='image circle'></Image>
                <Image className='Figure-right' src={'/circleRight.svg'} width={39} height={122} alt='image circle'></Image> */}
                <div className="Property-slider">
                    <div className="Property-title">
                        <h3>Inmueble Destacado</h3>
                    </div>
                    <Slider immovables={data}></Slider>
                    <div>
                        <p>
                            Entra y visita Vitrina Colombia, el portal inmobiliario pensado
                            especialmente para los colombianos en el exterior.
                        </p>
                        <p>
                            <span>Oferta de vivienda nueva y usada.</span>
                        </p>
                        <button type="button" className="Property-button">
                            <Link href="https://colraices.com/vitrina-colombia" target="_blank">
                                Oferta del Mes
                            </Link>
                            <Image
                                src={'/icons/startIcon.svg'}
                                width={19}
                                height={18}
                                alt="icon"
                            ></Image>
                        </button>
                    </div>
                </div>
                <Partners partners={constructionCompany}></Partners>
            </div>
        </section>
    )
}
