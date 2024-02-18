'use client'
import Link from 'next/link'
import '@/sass/components/gestionamos-tu-credito/Button.scss';

export const Button = ({ URL, text }) => {
    return (
        <Link href={URL} className='btn-link'>{text}</Link>
    )
}
