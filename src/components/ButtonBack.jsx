import Link from 'next/link'
import '@/sass/components/ButtonBack.scss'

export const ButtonBack = ({ text = 'Volver al Inicio' }) => {
    return (
        <Link className='button-back' href={'/'}>{text}</Link>
    )
}
