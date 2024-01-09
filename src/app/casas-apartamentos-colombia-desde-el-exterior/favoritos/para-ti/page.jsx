"use client"
import { useEffect, useState } from 'react';
import ItemFavorite from '../../molecules/ItemFavorite';
import { APIURL } from '../../config';
import Navbar from '../../components/Navbar';
import { SideMenuFavorites } from '../../components/SideMenuFavorites';
import { TitleSection } from '../../components/TitleSection';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fetchDataWithRetry = async (url, maxRetries = 3) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const resp = await fetch(url);
      if (resp.status === 429) {

        await delay(1000);
      }
      const data = await resp.json();
      return data;
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }

      await delay(Math.pow(2, attempt) * 1000);
    }
  }
};

export default function RecommendedForYou() {
  const [inmuebles, setInmuebles] = useState([]);
  const [updateFavorites, setUpdateFavorites] = useState(false);

  useEffect(() => {
    const fetchCityData = async (city) => {
      const url = `${APIURL}filtro?city=${city}`;
      return await fetchDataWithRetry(url);
    };

    const processResults = (results) => {
      let combinedInmuebles = results.reduce((combined, result) => {
        const slicedData = result.data.slice(0, 3);
        return combined.concat(slicedData);
      }, []);
      setInmuebles(combinedInmuebles);
    };

    const fetchData = async () => {
      try {
        const response = localStorage?.getItem('favoritos');
        const favorites = JSON.parse(response);

        const countFrequency = (favorites, key) => {
          return favorites?.reduce((count, property) => {
            const propertyKey = property[key].toLowerCase().replace(/\s+/g, '-');
            count[propertyKey] = (count[propertyKey] || 0) + 1;
            return count;
          }, {});
        };

        const getMaxFrequency = (frequencyCounting) => Math.max(...Object.values(frequencyCounting));

        const getLargestItems = (frequencyCounting, maxFrequency, limit) => {
          const allLargestItems = Object.keys(frequencyCounting)
            .filter((key) => frequencyCounting[key] === maxFrequency);
          return allLargestItems.slice(0, limit);
        };

        const regionFrequencyCounting = countFrequency(favorites, 'region');
        const cityFrequencyCounting = countFrequency(favorites, 'ciudad');

        const maxRegionFrequency = getMaxFrequency(regionFrequencyCounting);
        const maxCityFrequency = getMaxFrequency(cityFrequencyCounting);

        const frequency = maxRegionFrequency > maxCityFrequency
          ? getLargestItems(regionFrequencyCounting, maxRegionFrequency, 2)
          : getLargestItems(cityFrequencyCounting, maxCityFrequency, 2);

        const resultPromises = frequency.map(city => fetchCityData(city));
        const results = await Promise.all(resultPromises);

        processResults(results);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <section className='container-for-you'>
        <SideMenuFavorites />
        <section className='content-for-you'>
          <TitleSection title={`Recomendaciones`} span={`para ti`} >
            Recomendaciones de propiedades que se ajustan a tu búsqueda

          </TitleSection>
          <div className='container-inmuebles'>
            {inmuebles?.map(inmueble => (
              <ItemFavorite key={inmueble.id} itemProperty={inmueble} setUpdateFavorites={setUpdateFavorites} />
            ))}

          </div>
        </section>

      </section>
    </>
  );
}
