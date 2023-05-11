import { Partners } from '@/components/Partners'
import { Slider } from '@/components/Slider'
import '@/sass/containers/home/PropertySection.scss'
import Image from 'next/image'
import Link from 'next/link'
export const PropertySection = () => {
    const constructionCompany = [
        { id: 1, icon: '/icons/jaramilloIcon.svg', name: 'Jaramillo' },
        { id: 2, icon: '/icons/bolivarIcon.svg', name: 'Bolivar' },
        { id: 3, icon: '/icons/contexIcon.svg', name: 'Contex' },
    ]
    return (
        <section className='Property-container'>
            <h2>Financiación con <span>bancos colombianos</span></h2>
            <div className='Property-border'>
                {/* <Image className='Figure-left' src={'/circleLeft.svg'} width={43} height={144} alt='image circle'></Image>
                <Image className='Figure-right' src={'/circleRight.svg'} width={39} height={122} alt='image circle'></Image> */}
                <div className='Property-slider'>
                    <div className='Property-title'><h3>Inmueble Destacado</h3></div>
                    <Slider></Slider>
                    <div>
                        <p>Entra y visita Vitrina Colombia, el portal inmobiliario pensado especialmente para los colombianos en el exterior.</p>
                        <p><span>Oferta de vivienda nueva y usada.</span></p>
                        <button type='button' className='Property-button'><Link href="https://colraices.com/vitrina-colombia" target='_blank'>Oferta del Mes</Link><Image src={'/icons/startIcon.svg'} width={19} height={18} alt='icon'></Image></button>
                    </div>
                </div>
                <Partners partners={constructionCompany}></Partners>
            </div>
        </section>
    )

}
