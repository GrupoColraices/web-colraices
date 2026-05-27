'use client'
import { useContext, useEffect, useRef, useState } from 'react';
import { AtributInmueble } from '../molecules/AtributInmueble';
import { DesInmuebles } from '../molecules/DesInmuebles';
import { ItemFormulario } from '../molecules/ItemFormulario';
import { ItemPlano } from '../molecules/ItemPlano';
import { PrecioInmueble } from '../molecules/PrecioInmueble';
import { PropInmuebles } from '../molecules/PropInmuebles';
import { TitleInmueble } from '../molecules/TitleInmueble';
import { BannerInmueble } from '../Templates/BannerInmueble';
import { InmSimilares } from '../Templates/InmSimilares';
import { FilterSmall } from '../molecules/BarSearch/FilterSmall';
import { BarSearch } from '../molecules/BarSearch';
import TitleSection from '../components/TitleSection';
import { useFairMode } from '../hooks/useFairMode';


export const Inmueble = ({ inmueble, response }) => {
    const { titulo, descripcion, baños, precio, precio_feria, habitaciones, garajes, area_const, fecha_const, pro_ser, region, ciudad, like, imagenes, planos, fecha_inicial_feria, fecha_final_feria, tipo, url, num_img,is_fair_mode
    } = inmueble;
    const { currency, setCurrency, discountRate, convertedPrice } = useFairMode(precio, precio_feria)
    const similaresRegion = response.similares_region;
    const existPlano = planos?.length > 0 && true;
    const existSimilar = similaresRegion?.length > 0 && true;
    const isInFair = Boolean(is_fair_mode)
    const [fid, setFid] = useState(false)
    const observar = useRef(null)
    useEffect(() => {
        observar.current = new IntersectionObserver(function (entries) {
            setFid(entries[0].isIntersecting);
        }, { root: null });
        observar.current.observe(document.querySelector('.sticky-barSearch'));

        const bar = document.querySelector('.barSearch');
        const containerFilter = document.querySelector('.container__filter');
        const containerList = document.querySelector('.container__list');
        const containerState = document.querySelector('.container__list-state');
        const containerSearch = document.querySelector('.container__search');

        fid ? bar.classList.remove('fijo') : bar.classList.add('fijo');
        fid ? containerFilter?.classList.remove('sticky') : containerFilter?.classList.add('sticky');
        fid ? containerList?.classList.remove('sticky__list') : containerList?.classList.add('sticky__list');
        fid ? containerState?.classList.remove('sticky__state') : containerState?.classList.add('sticky__state');
        fid ? containerSearch?.classList.remove('sticky__search') : containerSearch?.classList.add('sticky__search');
        return () => {
            observar.current && observar.current.disconnect();
        }

    }, [fid]);
    return (
        <>
            <BannerInmueble imagenes={imagenes} numberImages={num_img} video={url} />
            <section className='inmueblee'>
                <FilterSmall inmueble={inmueble} />
                <div className='sticky-barSearch'>
                    <BarSearch visibility={true} scrolling={400} />
                </div>
                <div className='inmueble__grid'>
                    <main className='inmueble__main'>
                        <TitleInmueble
                            titulo={titulo}
                            region={region}
                            ciudad={ciudad}
                            tipo_inmueble={tipo}
                            inmueble={inmueble}
                            discountRate={discountRate}
                            isInFair={isInFair}
                            fairMode={isInFair}
                        />
                        <div className='container-price-mobile'>
                            <PrecioInmueble
                                price={convertedPrice}
                                currency={currency}
                                setCurrency={setCurrency}
                                fairMode={isInFair}
                                isInFair={isInFair}
                            />
                        </div>


                        <PropInmuebles
                            fecha={fecha_const}
                            habitaciones={habitaciones}
                            baños={baños}
                            area_const={area_const}
                            garajes={garajes}
                        />
                        <DesInmuebles
                            title={titulo}
                            description={descripcion}
                        />
                        <AtributInmueble
                            pro_ser={pro_ser}
                        />

                        {existPlano &&
                            <ItemPlano
                                planos={planos}
                                titulo={titulo}
                            />
                        }

                        {/* <ItemMap
                            lat={Number(inmueble.coordenadas?.lat)}
                            lng={Number(inmueble.coordenadas?.lng)}
                        /> */}
                    </main>

                    <section className='content-side'>
                        <div className='container-price-desktop'>
                            <PrecioInmueble
                                price={convertedPrice}
                                currency={currency}
                                setCurrency={setCurrency}
                                fairMode={isInFair}
                                isInFair={isInFair}
                            />
                        </div>

                        <div className='inmueble__formularios'>
                            <ItemFormulario />
                        </div>
                    </section>

                </div>
                {existSimilar &&
                    <>
                        <TitleSection title={'También te pueden interesar'} span={'estos proyectos:'} />
                        <InmSimilares
                            similares={similaresRegion}
                        />
                    </>
                }

            </section>
        </>
    )
}
