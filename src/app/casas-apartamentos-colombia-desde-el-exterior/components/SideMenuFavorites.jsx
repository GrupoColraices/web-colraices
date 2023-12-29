import Image from 'next/image'
import Link from 'next/link'
import medal from '../../../../public/portal-inmobiliario/img/colraicesInmobiliario/icons/medal.svg';
import heart from '../../../../public/portal-inmobiliario/img/colraicesInmobiliario/icons/heart.svg';
import AB from '../../../../public/portal-inmobiliario/img/colraicesInmobiliario/icons/AB.svg';
import billetera from '../../../../public/portal-inmobiliario/img/colraicesInmobiliario/icons/billetera.svg';


export const SideMenuFavorites = () => {
    return (
        <div className="container-leftBar">
            <Link href={'/casas-apartamentos-colombia-desde-el-exterior'} className="item-rightBar">
                <Image src={medal} alt="rocket" width={40} height={40} />
                <p>Para ti</p>
            </Link>
            <Link href={'/casas-apartamentos-colombia-desde-el-exterior/favoritos'} className="item-rightBar">
                <Image src={heart} alt="rocket" width={40} height={40} />
                <p>Mis inmuebles favoritos</p>
            </Link>
            <Link href={'/casas-apartamentos-colombia-desde-el-exterior/favoritos/comparar-propiedades'} className="item-rightBar">
                <Image src={AB} alt="rocket" width={40} height={40} />
                <p>Comparar propiedades</p>
            </Link>
            <Link href={'https://colraices.com/cupocreditoalinstante/'} target="_blank" className="item-rightBar">
                <Image src={billetera} alt="rocket" width={40} height={40} />
                <p>Simulación de cuota</p>
            </Link>
        </div>
    )
}
