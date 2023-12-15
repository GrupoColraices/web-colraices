'use client'
import Image from "next/image"
import Link from "next/link"
import rocket from '../../../../public/portal-inmobiliario/img/colraicesInmobiliario/icons/rocket.svg';
import medal from '../../../../public/portal-inmobiliario/img/colraicesInmobiliario/icons/medal.svg';
import heart from '../../../../public/portal-inmobiliario/img/colraicesInmobiliario/icons/heart.svg';
import AB from '../../../../public/portal-inmobiliario/img/colraicesInmobiliario/icons/AB.svg';
import colateral from '../../../../public/portal-inmobiliario/img/colraicesInmobiliario/icons/colateral.svg';
import billetera from '../../../../public/portal-inmobiliario/img/colraicesInmobiliario/icons/billetera.svg';
import close from '../../../../public/portal-inmobiliario/img/colraicesInmobiliario/icons/X.svg';

const RightBar = ({ closeRightBar }) => {
    return (
        <div className="container-rightBar">
            <Image onClick={closeRightBar} className="closeIcon" src={close} alt="rocket" width={40} height={40} />


            <Link href={'/casas-apartamentos-colombia-desde-el-exterior'} className="item-rightBar">
                <Image src={medal} alt="rocket" width={40} height={40} />
                <p>Para ti</p>
            </Link>

            <Link href={'casas-apartamentos-colombia-desde-el-exterior/favoritos'} className="item-rightBar">
                <Image src={heart} alt="rocket" width={40} height={40} />
                <p>Mis inmuebles favoritos</p>
            </Link>

            {/* <Link href={'/'} className="item-rightBar">
        <Image src={heart} alt="rocket" width={40} height={40} />
        <p>Contacto</p>
    </Link> */}

            <Link href={'/casas-apartamentos-colombia-desde-el-exterior/favoritos'} className="item-rightBar">
                <Image src={AB} alt="rocket" width={40} height={40} />
                <p>Comparar propiedades</p>
            </Link>

            {/* <Link href={'/'} className="item-rightBar">
        <Image src={colateral} alt="rocket" width={40} height={40} />
        <p>Pre-aprueba tu crédito</p>
    </Link> */}

            <Link href={'https://colraices.com/cupocreditoalinstante/'} target="_blank" className="item-rightBar">
                <Image src={billetera} alt="rocket" width={40} height={40} />
                <p>Simulación de cuota</p>
            </Link>
        </div>
    )
}

export default RightBar