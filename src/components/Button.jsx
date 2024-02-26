"use client"
import Link from 'next/link'
import '@/sass/components/Button.scss'

export const Button = ({ text = 'Volver al Inicio' }) => {
    return (
        <Link className='global-button' href={'/'}>{text}</Link>
    )
}
