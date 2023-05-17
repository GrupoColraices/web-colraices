'use client'
import { infoContact } from '@/helpers'
import Link from 'next/link'
import '@/sass/components/Footer.scss'
import Image from 'next/image'
export const Footer = () => {
    return (
        <footer className='Footer-container'>
            <section>
                <div className='Content-left' >
                    <Image src='logoWhite.svg' width={125} height={56} alt='Logo' quality={100}></Image>
                    {infoContact.map((data) => (
                        <ul key={data.id} >
                            <li>{data.office}</li>
                            <li>{data.address} Teléfono: <a href={"tel:" + data.phoneNumber}> {data.phoneNumber}</a> </li>
                            <li>{data.email}</li>

                            <li>Oficina Madrid, España</li>
                            <li>{data.addressMadrid}</li>

                            <li>Oficina Mühl, Alemania</li>
                            <li>{data.addressAlemania}</li>
                        </ul>
                    ))}
                </div>
                <div className='Content-right'>
                    <ul>
                        <li>Broker autorizado Bancolombia, </li>
                        <li>Davivienda y Banco Unión para América,</li>
                        <li>Europa, Asia, Oceanía.</li>
                    </ul>
                    <ul>
                        <div>
                            <li>Inmuebles</li>
                            <li>Crédito</li>
                            <li>Contacto</li>
                            <li>Buena Data</li>
                            <li>Paso a Paso</li>
                            <li>Pensiones</li>
                            <li>Portal Cliente</li>
                        </div>
                        <div>
                            <li>Política de privacidad</li>
                            <li>Mapa del sitio </li>
                            <li >{new Date().getFullYear()} Momentum</li>
                        </div>
                    </ul>
                </div>
                <div className='Redes-icons'>
                    <Link href={'https://www.facebook.com/colraices'} target='_blank'>
                        <Image src='icons/facebook.svg' width={36} height={36} alt='Icon'></Image>
                    </Link>
                    <Link href={'https://www.instagram.com/colraices/'} target='_blank'>
                        <Image src='icons/instagram.svg' width={36} height={36} alt='Icon'></Image>
                    </Link>
                    <Link href={'https://www.linkedin.com/company/colraices/mycompany'} target='_blank'>
                        <Image src='icons/linkedin.svg' width={36} height={36} alt='Icon'></Image>
                    </Link>
                    <Link href={'https://api.whatsapp.com/send/?phone=15136479405'} target='_blank'>
                        <Image src='icons/whatsapp.svg' width={36} height={36} alt='Icon'></Image>
                    </Link>
                    <Link href={'https://www.youtube.com/c/Colraicesserviciosinmobiliariosfinancieros'} target='_blank'>
                        <Image src='icons/youtube.svg' width={36} height={36} alt='Icon'></Image>
                    </Link>
                </div>
            </section>

        </footer>
    )
}
