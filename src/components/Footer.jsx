'use client'
import {
    infoContact,
    linksFooter,
    socialNetworks,
} from '../app/casas-apartamentos-colombia-desde-el-exterior/helpers/options'
import Link from 'next/link'
import '@/sass/components/Footer.scss'
import { FaHeart } from "react-icons/fa";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import Tippy from '@tippyjs/react';
import { usePathname } from 'next/navigation'

export const Footer = () => {
    const router = usePathname();
    const paths = [
        'filtrados',
        'inmueble'
    ];
    const showButtonUP = paths.some(path => router.includes(`/casas-apartamentos-colombia-desde-el-exterior/${path}`));
    const showButton = router.includes('/casas-apartamentos-colombia-desde-el-exterior');
    return (
        <footer id="contact">
            <section>
                <Link href={'/'}>
                    <img
                        className="logo"
                        src="/portal-inmobiliario/img/colraicesInmobiliario/home/logo.svg"
                        alt="logo"
                    />
                </Link>
                {infoContact?.map((item, index) => (
                    <p key={item.id}>
                        <a href={item.map} target="_blank">
                            <strong> {item.office} </strong>
                            {item.address}
                        </a>
                        <span>
                            {' '}
                            {item.phoneNumber && 'Teléfono:'} {item.phoneNumber}{' '}
                        </span>
                        {index === 0 && <a href={`mailto: ${item?.email}`}>{item?.email}</a>}
                    </p>
                ))}

                <nav className="side-links">
                    <div className="container-list-link">
                        <ul>
                            {linksFooter?.map((item) => (
                                <li key={item.id}>
                                    <a href={item.url} target={item.target}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <ul>
                            <li>
                                <Link href={'/politica-de-privacidad'}>Política de privacidad</Link>
                            </li>
                            <li>
                                <Link href={'/blog'}>Blog</Link>
                            </li>
                            <li>
                                <a href="https://agenciamomentum.co/" target="_blank">
                                    {new Date().getFullYear()} Momentum
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="social-networks">
                    {socialNetworks?.map((item) => (
                        <a key={item.id} href={item.url} target="_blank">
                            <img src={item.src} alt="Icon" />
                        </a>
                    ))}

                </div>
                {showButton && (
                    <Tippy
                        animation="scale"
                        theme={'dark'}
                        content="Ir a favoritos"
                    >
                        <Link className="favorites-widget" href="/casas-apartamentos-colombia-desde-el-exterior/favoritos">
                            <FaHeart color='#F9635c' size={30} />
                        </Link>
                    </Tippy>
                )}
            </section>
            <Link className="whatsapp-widget" href="https://wa.me/+15136479405" target="_blank">
                <img src="https://img.icons8.com/color/96/whatsapp--v1.png" alt="WhatsApp Logo" />
            </Link>

            {showButtonUP && <Tippy
                animation="scale"
                theme={'dark'}
                content="Volver a arriba"
            >
                <Link href={'#inicio'} className='button-up-widget'>
                    <RiArrowUpDoubleLine size={30} color='#2E4077' />
                </Link>
            </Tippy>}
        </footer>
    )
}
