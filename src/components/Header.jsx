'use client'

import { useRef } from 'react'
import Image from 'next/image'

import '@/sass/components/Header.scss'
import { NavLink } from './NavLink'
import Link from 'next/link'

export const Header = () => {
    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }
    return (
        <header className="Header-container">
            <Image src="/logo.webp" alt="Logo Colraices" width={160} height={40} />

            <nav ref={navRef}>
                <button className="Header-btn-close" onClick={showNavBar}>
                    <Image src="/icons/close_icon.svg" alt="Close icon" width={17} height={17} />
                </button>
                <Link href="/">
                    <Image src="/logo.webp" alt="Logo Colraices" width={160} height={40} />
                </Link>

                <NavLink label="Inmuebles" href="#" onClick={showNavBar} />
                <NavLink label="Crédito" href="#" onClick={showNavBar} />
                <NavLink label="Contacto" href="/contacto" onClick={showNavBar} />
                <NavLink label="Blog" href="/blog" onClick={showNavBar} />
            </nav>

            <input type="text" placeholder="Buscar" />
            <button className="Header-btn-open" onClick={showNavBar}>
                <Image
                    src="/icons/hamburguer_icon.svg"
                    alt="Hamburgures icon"
                    width={17}
                    height={11}
                />
            </button>
        </header>
    )
}
