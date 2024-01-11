'use client'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { TitleSection } from '../../components/TitleSection'
import { SideMenuFavorites } from '../../components/SideMenuFavorites'
import { useCurrency } from '../../hooks/useCurrency'
import { CompareFavorites } from '../../Templates/CompareFavorites'


export default function CompareProperties() {
    const [width, setWidth] = useState(false)
    const [favorites, setFavorites] = useState([])
    const [compare, setCompare] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [formatePrice] = useCurrency();
    useEffect(() => {
        if (window.innerWidth < 930) {
            setWidth(true)
        }
        const response = localStorage?.getItem('favoritos');
        setFavorites(JSON.parse(response));
    }, [setWidth])

    const handleCheckboxChange = (selectedItem) => {
        setSelectedItems((items) => {
            if (items.find((item) => item.id === selectedItem.id)) {
                return items.filter((item) => item.id !== selectedItem.id);
            }
            if (width) {
                return items.length < 2 ? [...items, selectedItem] : items;
            } else {
                return items.length < 3 ? [...items, selectedItem] : items;
            }
        });
    }
    return (
        <>

            <Navbar />
            <section className='container-compare-properties'>
                <SideMenuFavorites />
                <section className='compare-properties-content'>
                    <TitleSection title={`${width ? "Compara" : "Compara y elige"}`} span={`${width ? "propiedades" : "tu hogar ideal"}`} >
                        {width ? "Selecciona 2 propiedades para comparar" : "Selecciona, escribenos y nosotros hacemos lo demás"}
                    </TitleSection>
                    {!compare ?
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
                                        <input type="checkbox"
                                            checked={selectedItems.some((selectedItem) => selectedItem.id === item.id)}
                                            onChange={() => handleCheckboxChange(item)} />
                                    </div>
                                )}
                            </div>
                            <button className='button-compare' type="button" onClick={() => setCompare(true)} disabled={selectedItems.length < 2}>Comparar</button>
                        </div> : <CompareFavorites selectedItems={selectedItems} />}
                </section>
            </section>
        </>
    )

}
