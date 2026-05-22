'use client'

import Link from 'next/link'
import { useState } from 'react'
import { OFFICIAL_CONTACT_URLS, OFFICIAL_MARKETING_URLS } from '@/lib/officialUrls'

const navLinks = [
    { label: 'Home', href: OFFICIAL_MARKETING_URLS.inicio },
    { label: 'Finanzas', href: OFFICIAL_MARKETING_URLS.hubFinanzas },
    { label: 'Inmuebles', href: OFFICIAL_MARKETING_URLS.hubInmueble },
    { label: 'Legal y Migración', href: OFFICIAL_MARKETING_URLS.hubLegalMigratorio },
    { label: 'Tour de la Vivienda', href: OFFICIAL_MARKETING_URLS.tourVivienda, active: true },
    { label: 'Blog', href: OFFICIAL_MARKETING_URLS.blog },
]

export default function TourNavbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="tour-new-navbar">
            <div className="tour-new-navbar__container">
                <Link href={OFFICIAL_MARKETING_URLS.inicio} className="tour-new-navbar__logo">
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
                    href={OFFICIAL_CONTACT_URLS.asesoria}
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
                        href={OFFICIAL_CONTACT_URLS.asesoria}
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
