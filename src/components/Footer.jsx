'use client'
import {
    infoContact,
    linksFooter,
    socialNetworks,
} from '../app/casas-apartamentos-colombia-desde-el-exterior/helpers/options'
import Link from 'next/link'
import '@/sass/components/Footer.scss'

export const Footer = () => {
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
                        {index === 0 && <a href={`mailto:${item?.email}`}>{item?.email}</a>}
                    </p>
                ))}

                <nav className="side-links">
                    <div className="container-list-link">
                        <ul>
                            {linksFooter?.map((item) => (
                                <li key={item.id}>
                                    <a href={item.url} target="_blank">
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
            </section>
            <a id="whatsapp-widget" href="https://wa.me/+15136479405" target="_blank">
                <img src="https://img.icons8.com/color/96/whatsapp--v1.png" alt="WhatsApp Logo" />
            </a>
        </footer>
    )
}
