'use client'
import { useContext, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '@/sass/components/Header.scss'
import { NavLink } from './NavLink'
import { navbarLinks } from '@/helpers'
import { FormContext } from '@/context/FormContext'

export const Header = () => {
    const navRef = useRef()
    const { formState, setFormState } = useContext(FormContext);

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    return (
        <header className="Header-container">
            <Link href="/">
                <Image src="/logo.svg" alt="Logo Colraices" width={170} height={40} quality={100} />
            </Link>

            <div className="navbar-links-desktop">
                {navbarLinks.map((link) => (
                    <NavLink key={link.href} label={link.label} href={link.href} isExternal={link.isExternal} />
                ))}
                <button className='request-assistance' onClick={() => setFormState(!formState)}>Solicitar Asesoría</button>
            </div>

            <nav className="responsive_nav" ref={navRef}>
                <button className="Header-btn-close" onClick={showNavBar}>
                    <Image src="/icons/close_icon.svg" alt="Close icon" width={17} height={17} />
                </button>
                <Link href="/">
                    <Image src="/logo.svg" alt="Logo Colraices" width={200} height={55} quality={100} />
                </Link>
                <div className="navbar-links">
                    {navbarLinks.map((link) => (
                        <NavLink key={link.href} label={link.label} href={link.href} isExternal={link.isExternal} />
                    ))}
                    <button className='request-assistance' onClick={() => setFormState(!formState)}>Solicitar Asesoría</button>
                </div>
            </nav>

            <button className="Header-btn-open" onClick={showNavBar}>
                <Image src="/icons/hamburguer_icon.svg" alt="Hamburgures icon" width={17} height={11} />
            </button>
        </header>
    )
}
