'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
    FaLinkedinIn,
} from 'react-icons/fa'
import {
    OFFICIAL_CONTACT_URLS,
    OFFICIAL_FOOTER_URLS,
    OFFICIAL_LEGAL_URLS,
    OFFICIAL_MARKETING_URLS,
    OFFICIAL_SOCIAL_URLS,
} from '@/lib/officialUrls'
import '../sass/components/_newFooter.scss'

const FOOTER_LINKS = {
    home: OFFICIAL_MARKETING_URLS.inicio,
    finanzas: OFFICIAL_MARKETING_URLS.hubFinanzas,
    inmuebles: OFFICIAL_MARKETING_URLS.hubInmueble,
    legalMigracion: OFFICIAL_MARKETING_URLS.hubLegalMigratorio,
    tourVivienda: OFFICIAL_MARKETING_URLS.tourVivienda,
    quienesSomos: OFFICIAL_MARKETING_URLS.nosotros,
    trabajaConNosotros: OFFICIAL_FOOTER_URLS.trabajaConNosotros,
    blog: OFFICIAL_MARKETING_URLS.blog,
    politicaPrivacidad: OFFICIAL_LEGAL_URLS.politicaPrivacidad,
    terminosUso: OFFICIAL_LEGAL_URLS.terminosUso,
    cookies: OFFICIAL_LEGAL_URLS.cookies,
}

const SOCIAL_LINKS = {
    facebook: OFFICIAL_SOCIAL_URLS.facebook,
    instagram: OFFICIAL_SOCIAL_URLS.instagram,
    whatsapp: OFFICIAL_CONTACT_URLS.whatsapp,
    youtube: OFFICIAL_SOCIAL_URLS.youtube,
    linkedin: OFFICIAL_SOCIAL_URLS.linkedin,
}

const CONTACT_LINKS = {
    phone: OFFICIAL_CONTACT_URLS.phone,
    email: OFFICIAL_CONTACT_URLS.email,
}

export default function NewFooter() {
    return (
        <footer className="new-footer">
            <div className="new-footer__container">
                <div className="new-footer__grid">
                    <div className="new-footer__brand">
                        <Link
                            href={FOOTER_LINKS.home}
                            className="new-footer__logo-link"
                        >
                            <Image
                                src="/logo-foote.png"
                                alt="Colraices Logo"
                                fill
                                sizes="(max-width: 640px) 190px, (max-width: 1024px) 240px, 271px"
                                className="new-footer__logo"
                                priority
                            />
                        </Link>

                        <div className="new-footer__description">
                            <p>
                                El ecosistema de soluciones para colombianos en
                                el exterior.
                            </p>

                            <p className="new-footer__phone">
                                <Link href={CONTACT_LINKS.phone}>
                                    Teléfono: (57) 601 328 8939
                                </Link>
                            </p>

                            <p className="new-footer__email">
                                <Link href={CONTACT_LINKS.email}>
                                    info@colraices.co
                                </Link>
                            </p>
                        </div>

                        <div className="new-footer__socials">
                            <Link
                                href={SOCIAL_LINKS.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="new-footer__social-link"
                            >
                                <FaFacebookF size={14} />
                            </Link>

                            <Link
                                href={SOCIAL_LINKS.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="new-footer__social-link"
                            >
                                <FaInstagram size={14} />
                            </Link>

                            <Link
                                href={SOCIAL_LINKS.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="new-footer__social-link"
                            >
                                <FaWhatsapp size={14} />
                            </Link>

                            <Link
                                href={SOCIAL_LINKS.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                className="new-footer__social-link"
                            >
                                <FaYoutube size={14} />
                            </Link>

                            <Link
                                href={SOCIAL_LINKS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="new-footer__social-link"
                            >
                                <FaLinkedinIn size={14} />
                            </Link>
                        </div>
                    </div>

                    <div className="new-footer__column">
                        <h3 className="new-footer__title">Servicios</h3>

                        <div className="new-footer__links">
                            <Link href={FOOTER_LINKS.finanzas}>Finanzas</Link>
                            <Link href={FOOTER_LINKS.inmuebles}>Inmuebles</Link>
                            <Link href={FOOTER_LINKS.legalMigracion}>
                                Legal y Migración
                            </Link>
                            <Link href={FOOTER_LINKS.tourVivienda}>
                                Tour de la Vivienda
                            </Link>
                        </div>
                    </div>

                    <div className="new-footer__column">
                        <h3 className="new-footer__title">Empresa</h3>

                        <div className="new-footer__links">
                            <Link href={FOOTER_LINKS.quienesSomos}>
                                Quiénes somos
                            </Link>
                            <Link href={FOOTER_LINKS.trabajaConNosotros}>
                                Trabaja con nosotros
                            </Link>
                        </div>
                    </div>

                    <div className="new-footer__column">
                        <h3 className="new-footer__title">Recursos</h3>

                        <div className="new-footer__links">
                            <Link href={FOOTER_LINKS.blog}>Blog</Link>
                        </div>
                    </div>
                </div>

                <div className="new-footer__divider">
                    <div className="new-footer__bottom">
                        <p className="new-footer__copyright">
                            © 2026 Colraices. Colombia y España. Todos los
                            derechos reservados.
                        </p>

                        <div className="new-footer__legal">
                            <Link href={FOOTER_LINKS.politicaPrivacidad}>
                                Política de privacidad
                            </Link>
                            <Link href={FOOTER_LINKS.terminosUso}>
                                Términos de uso
                            </Link>
                            <Link href={FOOTER_LINKS.cookies}>Cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
