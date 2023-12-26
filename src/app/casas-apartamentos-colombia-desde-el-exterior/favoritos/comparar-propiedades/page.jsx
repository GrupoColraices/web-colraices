'use client'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { TitleSection } from '../../components/TitleSection'
import { SideMenuFavorites } from '../../components/SideMenuFavorites'
import { useCurrency } from '../../hooks/useCurrency'
import Link from 'next/link'


export default function CompareProperties() {
    const [width, setWidth] = useState(false)
    const [favorites, setFavorites] = useState([])
    const [formatePrice] = useCurrency();
    useEffect(() => {
        if (window.innerWidth < 930) {
            setWidth(true)
        }
        const response = localStorage?.getItem('favoritos');
        setFavorites(JSON.parse(response));
    }, [setWidth])
    return (
        <>

            <Navbar />
            <section className='container-compare-properties'>
                <TitleSection title={`${width ? "Compara" : "Compara y elige"}`} span={`${width ? "propiedades" : "tu hogar ideal"}`} >
                    {width ? "Selecciona 2 propiedades para comparar" : "Selecciona, escribenos y nosotros hacemos lo demás"}
                </TitleSection>
                <section className='compare-properties-content'>
                    <SideMenuFavorites />
                    <div className='container-selectable-properties'>
                        <h2>Comparar <span>propiedades</span></h2>
                        <p>Selecciona entre 2 o 3 propiedades para comparar</p>
                        <div className='selectable-properties'>
                            {favorites?.map((item) =>
                                <div className='property-attributes' key={item.id}>
                                    <div className='image-container'>
                                        <img src={item.thumbnail} alt="image properties" />
                                    </div>
                                    <div>
                                        <h3>{item.titulo}</h3>
                                        <p>{item.region}</p>
                                        <p>{formatePrice(item.precio)}</p>
                                    </div>
                                    <input type="checkbox" />
                                </div>
                            )}
                        </div>
                        <Link href='/casas-apartamentos-colombia-desde-el-exterior/favoritos/comparar-propiedades/comparacion' onClick={() => { console.log('click') }}>Comparar</Link>
                    </div>
                </section>
            </section>
        </>
    )

}
