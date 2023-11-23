'use client'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '@/sass/components/Header.scss'
import { NavLink } from './NavLink'
import { navbarLinks } from '@/helpers'

export const Header = () => {
    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    return (
        <header className="Header-container">
            <Image src="/logo.svg" alt="Logo Colraices" width={170} height={40} quality={100} />
            
            <div className='navbar-links-desktop'>
                {navbarLinks.map((link) => (
                    <NavLink key={link.href} label={link.label} href={link.href} />
                ))}
            </div>

            <nav className='responsive_nav' ref={navRef}>
                <button className="Header-btn-close" onClick={showNavBar}>
                    <Image src="/icons/close_icon.svg" alt="Close icon" width={17} height={17} />
                </button>
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="Logo Colraices"
                        width={200}
                        height={55}
                        quality={100}
                    />
                </Link>
                <div className='navbar-links'>
                    {navbarLinks.map((link) => (
                        <NavLink key={link.href} label={link.label} href={link.href} />
                    ))}
                </div>
            </nav>

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
