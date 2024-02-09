'use client'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import ItemFavorite from '../../molecules/ItemFavorite'
import { APIURL } from '../../config'
import Navbar from '../../components/Navbar'
import { SideMenuFavorites } from '../../components/SideMenuFavorites'
import  TitleSection from '../../components/TitleSection'
import { finalFilteredProperties, getMaxPrice, mostFrequent, mostFrequentType } from '../../helpers/filterFavorite'

export default function RecommendedForYou() {
    const [properties, setProperties] = useState([])
    const [updateFavorites, setUpdateFavorites] = useState(false)
    const [favorites, setFavorites] = useState([])
    const [frequency, setFrequency] = useState([])

    const { data: propertiesData } = useSWR(`${APIURL}filtro-region`, async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data.data
    })
    useEffect(() => {
        const fetchData = () => {
            try {
                const storedFavorites = localStorage?.getItem('favoritos')
                const parsedFavorites = JSON.parse(storedFavorites)
                setFavorites(parsedFavorites)

                const countFrequency = (favorites, key) => {
                    return favorites?.reduce((count, property) => {
                        const propertyKey = property[key]
                        count[propertyKey] = (count[propertyKey] || 0) + 1
                        return count
                    }, {})
                }

                const getMaxFrequency = (frequencyCounting) => Math.max(...Object.values(frequencyCounting))

                const getLargestItems = (frequencyCounting, maxFrequency, limit) => {
                    const allLargestItems = Object.keys(frequencyCounting).filter(
                        (key) => frequencyCounting[key] === maxFrequency
                    )
                    return allLargestItems.slice(0, limit)
                }

                const regionFrequencyCounting = countFrequency(parsedFavorites, 'region')
                const cityFrequencyCounting = countFrequency(parsedFavorites, 'ciudad')

                const maxRegionFrequency = getMaxFrequency(regionFrequencyCounting)
                const maxCityFrequency = getMaxFrequency(cityFrequencyCounting)

                const frequencies =
                    maxRegionFrequency > maxCityFrequency
                        ? getLargestItems(regionFrequencyCounting, maxRegionFrequency, 2)
                        : getLargestItems(cityFrequencyCounting, maxCityFrequency, 2)
                setFrequency(frequencies)

                const filteredProperties = propertiesData?.filter(
                    (property) => frequencies.includes(property.ciudad) || frequencies.includes(property.region)
                )
                setProperties(filteredProperties || [])
            } catch (error) {
                console.error('Error:', error)
            }
        }

        fetchData()
    }, [propertiesData])
    const state = mostFrequent(favorites, 'estado')
    const propertyType = mostFrequent(favorites, 'tipo')
    const maxPrice = getMaxPrice(favorites)
    const result = finalFilteredProperties(properties, state, propertyType, maxPrice, favorites, frequency)

    return (
        <>
            <Navbar />
            <section className="container-for-you">
                <SideMenuFavorites />
                <section className="content-for-you">
                    <TitleSection title={`Recomendaciones`} span={`para ti`}>
                        Recomendaciones de propiedades que se ajustan a tu búsqueda
                    </TitleSection>
                    <div className="container-inmuebles">
                        {result?.map((inmueble) => (
                            <ItemFavorite
                                key={inmueble?.id}
                                itemProperty={inmueble}
                                setUpdateFavorites={setUpdateFavorites}
                            />
                        ))}
                    </div>
                </section>
            </section>
        </>
    )
}
