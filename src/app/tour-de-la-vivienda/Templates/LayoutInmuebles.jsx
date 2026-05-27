'use client'
import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import { Banner } from '../../tour-de-la-vivienda/Templates/Banner';
import TitleSection from '../../tour-de-la-vivienda/components/TitleSection';
import { TitleNavbar } from '../../tour-de-la-vivienda/components/TitleNavbar';
import ItemFavorite from '../../tour-de-la-vivienda/molecules/ItemFavorite';
import Pagination from '../../tour-de-la-vivienda/components/Pagination';
import { usePagination } from '../../tour-de-la-vivienda/hooks/usePagination';
import { ItemInmueble } from '../../tour-de-la-vivienda/molecules/ItemInmueble';
import { ItemFormResultado } from '../../tour-de-la-vivienda/molecules/ItemFormResultado';
import { scrollSection } from '../helpers/actionScroll';
import { BarSearch } from '../../tour-de-la-vivienda/molecules/BarSearch';
import { SideMenuFavorites } from '../components/SideMenuFavorites';


export const LayoutInmuebles = ({ loading, inmuebles, Notion, Elim, inm, fav, setUpdateFavorites }) => {
    const sortedInmuebles = inmuebles.sort((a, b) => b.is_fair_mode - a.is_fair_mode);
    const { currentItems, currentPage, handleNextPage, handlePrevPage, totalPages } = usePagination(3, sortedInmuebles)
    const [fid, setFid] = useState(false)
    const observar = useRef(null)

    // useEffect(() => {
    //     observar.current = new IntersectionObserver(function (entries) {
    //         setFid(entries[0].isIntersecting);
    //     }, { root: null });
    //     observar.current.observe(document.querySelector('.sticky-barSearch'));

    //     const bar = document.querySelector('.barSearch');
    //     const containerFilter = document.querySelector('.container__filter');
    //     const containerList = document.querySelector('.container__list');
    //     const containerState = document.querySelector('.container__list-state');
    //     const containerSearch = document.querySelector('.container__search');

    //     fid ? bar.classList.remove('fijo') : bar.classList.add('fijo');
    //     fid ? containerFilter?.classList.remove('sticky') : containerFilter?.classList.add('sticky');
    //     fid ? containerList?.classList.remove('sticky__list') : containerList?.classList.add('sticky__list');
    //     fid ? containerState?.classList.remove('sticky__state') : containerState?.classList.add('sticky__state');
    //     fid ? containerSearch?.classList.remove('sticky__search') : containerSearch?.classList.add('sticky__search');
    //     return () => {
    //         observar.current && observar.current.disconnect();
    //     }

    // }, [fid]);
    return (
        <>
            {!fav && < Banner />}
            {fav && <TitleNavbar title={"Mis favoritos"} />}

            <section className={fav ? 'favSection' : 'inmRegion'}>
                <div className={fav ? 'favSection__flex' : 'inmRegion__grid'}>
                    {!fav && <TitleSection
                        title={inm ? "¡A falta de uno, muchos más!" : "Estos son los proyectos"}
                        span={inm ? "Estos inmuebles tienen detalles que encajan con tu búsqueda" : "que tenemos para ti"}
                    />}

                    {fav &&
                        <div className='only-desktop'>
                            <TitleSection
                                title={"Aquí están tus"}
                                span={"inmuebles favoritos."}
                            >
                                Ingresa al que más te gusta, regístrate y nosotros nos encargamos del resto.
                            </TitleSection>
                        </div>
                    }

                    {fav &&
                        <div className='sticky-barSearch only-desktop container-barSearch'>
                            <BarSearch />
                        </div>
                    }


                    {fav ?
                        <div className="favSection-menu">
                            <SideMenuFavorites />
                            <section className='only-desktop-flex favSection__grid__inm'>
                                {inmuebles?.map(inmueble => (
                                    <ItemFavorite key={inmueble.id} itemProperty={inmueble} setUpdateFavorites={setUpdateFavorites} />
                                ))}
                            </section>

                            <section className='only-mobile  favSection__grid__inm'>
                                {currentItems?.map(inmueble => (
                                    <ItemFavorite key={inmueble.id} itemProperty={inmueble} setUpdateFavorites={setUpdateFavorites} />
                                ))}
                            </section>
                        </div>
                        :
                        <section className='inmRegion__grid__inm'>
                            {inmuebles?.map(inmueble => (
                                <ItemInmueble key={inmueble.id} dataInmueble={inmueble} Notion={Notion} Elim={Elim} />
                            ))}
                        </section>
                    }

                    {fav && <div className='container-flex-center'>
                        <Pagination handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} currentPage={currentPage} totalPages={totalPages} />
                    </div>}
                </div>

                {!fav && <ItemFormResultado />}

            </section>
        </>
    )
}


LayoutInmuebles.propTypes = {
    loading: PropTypes.bool.isRequired,
    inmuebles: PropTypes.array.isRequired
}
