'use client'

import Link from 'next/link'
import { useState } from 'react'

const NEW_WEB_URL = process.env.NEXT_PUBLIC_NEW_WEB_URL || ''
const NEW_WEB_TOUR_URL = process.env.NEXT_PUBLIC_NEW_WEB_TOUR_URL || ''

const navLinks = [
    { label: 'Home', href: `${NEW_WEB_URL}/` },
    { label: 'Finanzas', href: `${NEW_WEB_URL}/finanzas` },
    { label: 'Inmuebles', href: `${NEW_WEB_URL}/inmuebles` },
    { label: 'Legal y Migración', href: `${NEW_WEB_URL}/legal-migracion` },
    { label: 'Tour de la Vivienda', href: NEW_WEB_TOUR_URL, active: true },
    { label: 'Blog', href: `${NEW_WEB_URL}/blog` },
]

export default function TourNavbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="tour-new-navbar">
            <div className="tour-new-navbar__container">
                <Link href={`${NEW_WEB_URL}/`} className="tour-new-navbar__logo">
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
                    href={`${NEW_WEB_URL}/contacto`}
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
                        href={`${NEW_WEB_URL}/contacto`}
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