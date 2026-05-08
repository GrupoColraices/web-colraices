'use client'

import Link from 'next/link'
import { useState } from 'react'

const HOME_URL = process.env.NEXT_PUBLIC_HOME_URL || '#'
const FINANZAS_URL = process.env.NEXT_PUBLIC_FINANZAS_URL || '#'
const INMUEBLES_URL = process.env.NEXT_PUBLIC_INMUEBLES_URL || '#'
const LEGAL_MIGRACION_URL = process.env.NEXT_PUBLIC_LEGAL_MIGRACION_URL || '#'
const TOUR_VIVIENDA_URL = process.env.NEXT_PUBLIC_TOUR_VIVIENDA_URL || '#'
const BLOG_URL = process.env.NEXT_PUBLIC_BLOG_URL || '#'
const CONTACTO_URL = process.env.NEXT_PUBLIC_CONTACTO_URL || '#'

const navLinks = [
    { label: 'Home', href: HOME_URL },
    { label: 'Finanzas', href: FINANZAS_URL },
    { label: 'Inmuebles', href: INMUEBLES_URL },
    { label: 'Legal y Migración', href: LEGAL_MIGRACION_URL },
    { label: 'Tour de la Vivienda', href: TOUR_VIVIENDA_URL, active: true },
    { label: 'Blog', href: BLOG_URL },
]

export default function TourNavbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="tour-new-navbar">
            <div className="tour-new-navbar__container">
                <Link href={HOME_URL} className="tour-new-navbar__logo">
                    <img
                        src="/logo-nuevo.png"
                        alt="Colraices"
                        className="tour-new-navbar__logo-img"
                    />
                </Link>

                <nav className="tour-new-navbar__nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={
                                link.active
                                    ? 'tour-new-navbar__link tour-new-navbar__link--active'
                                    : 'tour-new-navbar__link'
                            }
                        >
                            <span className="tour-new-navbar__link-text">
                                {link.label}
                            </span>
                        </Link>
                    ))}
                </nav>

                <Link
                    href={CONTACTO_URL}
                    className="tour-new-navbar__cta"
                >
                    Solicitar Asesoría
                </Link>

                <button
                    type="button"
                    className={`tour-new-navbar__menu ${isOpen ? 'is-open' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Abrir menú"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            <div className={`tour-new-navbar__mobile ${isOpen ? 'is-open' : ''}`}>
                <div className="tour-new-navbar__mobile-content">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={
                                link.active
                                    ? 'tour-new-navbar__mobile-link tour-new-navbar__mobile-link--active'
                                    : 'tour-new-navbar__mobile-link'
                            }
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        href={CONTACTO_URL}
                        onClick={() => setIsOpen(false)}
                        className="tour-new-navbar__mobile-cta"
                    >
                        Solicitar Asesoría
                    </Link>
                </div>
            </div>
        </header>
    )
}