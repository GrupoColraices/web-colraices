'use client'

import Link from 'next/link'

const NEW_WEB_URL = 'https://colraices.com'

const navLinks = [
    {
        label: 'Inicio',
        href: `${NEW_WEB_URL}/`,
    },
    {
        label: 'Crédito y finanzas',
        href: `${NEW_WEB_URL}/financia-tu-casa`,
    },
    {
        label: 'Nosotros',
        href: `${NEW_WEB_URL}/nosotros`,
    },
    {
        label: 'Blog',
        href: `${NEW_WEB_URL}/blog`,
    },
    {
        label: 'Tour de la Vivienda',
        href: '/casas-apartamentos-colombia-desde-el-exterior',
        active: true,
    },
]

export default function TourNavbar() {
    return (
        <header className="tour-navbar">
            <div className="tour-navbar__content">
                <Link href={`${NEW_WEB_URL}/`} className="tour-navbar__logo">
                    Colraices
                </Link>

                <nav className="tour-navbar__nav">
                    {navLinks.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={
                                item.active
                                    ? 'tour-navbar__link tour-navbar__link--active'
                                    : 'tour-navbar__link'
                            }
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}