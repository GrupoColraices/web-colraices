'use client'

import Link from 'next/link'
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
    FaLinkedinIn,
} from 'react-icons/fa'
import '../sass/components/_newFooter.scss'

/* ================================
   LINKS NUEVA WEB COLRAICES
   Cambiar aquí cuando tengas las URLs finales
================================ */

const NEW_WEB_URL = 'https://colraices.com'

// Cambia esta ruta por el logo blanco real que tengas en /public
const FOOTER_LOGO = '/logoWhite.svg'

const FOOTER_LINKS = {
    home: `${NEW_WEB_URL}/`,
    finanzas: `${NEW_WEB_URL}/finanzas`,
    inmuebles: `${NEW_WEB_URL}/inmuebles`,
    legalMigracion: `${NEW_WEB_URL}/legal-migracion`,
    tourVivienda: `${NEW_WEB_URL}/tour-vivienda`,
    quienesSomos: `${NEW_WEB_URL}/quienes-somos`,
    trabajaConNosotros: `${NEW_WEB_URL}/trabaja-con-nosotros`,
    blog: `${NEW_WEB_URL}/blog`,
    politicaPrivacidad: `${NEW_WEB_URL}/politica-de-privacidad`,
    terminosUso: `${NEW_WEB_URL}/terminos-de-uso`,
    cookies: `${NEW_WEB_URL}/cookies`,
}

const SOCIAL_LINKS = {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    whatsapp: 'https://wa.me/576013288939',
    youtube: 'https://youtube.com',
    linkedin: 'https://linkedin.com',
}

const CONTACT_LINKS = {
    phone: 'tel:+576013288939',
    email: 'mailto:info@colraices.co',
}

export default function NewFooter() {
    return (
        <footer className="tour-new-footer">
            <div className="tour-new-footer__container">
                <div className="tour-new-footer__top">
                    <div className="tour-new-footer__brand">
                        <Link
                            href={FOOTER_LINKS.home}
                            className="tour-new-footer__logo-link"
                        >
                            <img
                                src={FOOTER_LOGO}
                                alt="Colraices"
                                className="tour-new-footer__logo"
                            />
                        </Link>

                        <p className="tour-new-footer__text">
                            El ecosistema de soluciones para colombianos en el exterior.
                        </p>

                        <div className="tour-new-footer__contact">
                            <Link href={CONTACT_LINKS.phone}>
                                Teléfono: (57) 601 328 8939
                            </Link>

                            <Link href={CONTACT_LINKS.email}>
                                info@colraices.co
                            </Link>
                        </div>

                        <div className="tour-new-footer__socials">
                            <Link href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebookF />
                            </Link>

                            <Link href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </Link>

                            <Link href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <FaWhatsapp />
                            </Link>

                            <Link href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <FaYoutube />
                            </Link>

                            <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>

                    <div className="tour-new-footer__column">
                        <h3>Servicios</h3>
                        <Link href={FOOTER_LINKS.finanzas}>Finanzas</Link>
                        <Link href={FOOTER_LINKS.inmuebles}>Inmuebles</Link>
                        <Link href={FOOTER_LINKS.legalMigracion}>Legal y Migración</Link>
                        <Link href={FOOTER_LINKS.tourVivienda}>Tour de la Vivienda</Link>
                    </div>

                    <div className="tour-new-footer__column">
                        <h3>Empresa</h3>
                        <Link href={FOOTER_LINKS.quienesSomos}>Quiénes somos</Link>
                        <Link href={FOOTER_LINKS.trabajaConNosotros}>Trabaja con nosotros</Link>
                    </div>

                    <div className="tour-new-footer__column">
                        <h3>Recursos</h3>
                        <Link href={FOOTER_LINKS.blog}>Blog</Link>
                    </div>
                </div>

                <div className="tour-new-footer__bottom">
                    <p>© 2026 Colraices. Colombia y España. Todos los derechos reservados.</p>

                    <div className="tour-new-footer__legal">
                        <Link href={FOOTER_LINKS.politicaPrivacidad}>Política de privacidad</Link>
                        <Link href={FOOTER_LINKS.terminosUso}>Términos de uso</Link>
                        <Link href={FOOTER_LINKS.cookies}>Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}