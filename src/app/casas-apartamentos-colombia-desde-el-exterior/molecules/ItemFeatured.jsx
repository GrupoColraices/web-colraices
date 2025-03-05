"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { MdLocationOn } from 'react-icons/md'
import { useCurrency } from '../hooks/useCurrency'
import { useFairMode } from '../hooks/useFairMode'

export const ItemFeatured = ({ item }) => {
    const { thumbnail, titulo, precio, precio_feria, ciudad, region, area_const, habitaciones, baños, slug } = item;
    const { convertedPrice, currency } = useFairMode(precio, precio_feria);
    const [formatePrice] = useCurrency();

    return (
        <div className='container-item-featured'>
            <article>
                <div>
                    <Image width={327} height={327} src={thumbnail} alt="Image Property" />
                </div>
                <h1>{titulo}</h1>
                <p className='price'>Desde {formatePrice(convertedPrice.price)} {currency}</p>
                <p className='ubication'><MdLocationOn className="icon" />{ciudad} - {region}</p>
                <ul className='information'><li>Desde {area_const}m²</li> <li>{habitaciones} Hab</li> <li>{baños} Baños</li></ul>
                <button className='btn-view' type='button'><Link href={`/casas-apartamentos-colombia-desde-el-exterior/inmueble/${slug}`}>Ver Proyecto</Link></button>
            </article>
        </div>
    )
}
