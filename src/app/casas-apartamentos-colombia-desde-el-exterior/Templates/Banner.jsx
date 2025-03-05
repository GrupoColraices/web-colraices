'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { BarSearch } from '../molecules/BarSearch'
import { FairMode } from '../Context/Mode'
import { usePathname } from 'next/navigation'
import { SliderBanner } from './SliderBanner'
import { APIURL } from '../config'
import useSWR from 'swr'

export const Banner = (props) => {
    const pathName = usePathname()
    const { main } = props
    const [fid, setFid] = useState(false)
    const video = useRef(null)
    const observar = useRef(null)
    const [width, setWidth] = useState(false)
    const { fairMode, setFairMode, fairRoutes } = useContext(FairMode)
    const [isFair, setIsFair] = useState(fairMode)
    const { data: banners } = useSWR(`${APIURL}banners`, async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data?.data
    })
    useEffect(() => {
        if (window.innerWidth < 930) {
            setWidth(true)
        }
        if (fairRoutes.has(pathName)) {
            setFairMode(true)
        }
        if (pathName.includes('filtrados') && fairMode) {
            setIsFair(false)
        }
        // observar.current = new IntersectionObserver(function (entries) {
        //     setFid(entries[0].isIntersecting);
        // }, { root: null });
        // video?.current?.play();
        // observar?.current?.observe(document.querySelector('.sticky-barSearch'));

        // const bar = document.querySelector('.barSearch');
        // const containerFilter = document.querySelector('.container__filter');
        // const containerList = document.querySelector('.container__list');
        // const containerState = document.querySelector('.container__list-state');
        // const containerSearch = document.querySelector('.container__search');

        // fid ? bar.classList.remove('fijo') : bar.classList.add('fijo');
        // fid ? containerFilter?.classList.remove('sticky') : containerFilter?.classList.add('sticky');
        // fid ? containerList?.classList.remove('sticky__list') : containerList?.classList.add('sticky__list');
        // fid ? containerState?.classList.remove('sticky__state') : containerState?.classList.add('sticky__state');
        // fid ? containerSearch?.classList.remove('sticky__search') : containerSearch?.classList.add('sticky__search');
        // return () => {
        //     observar.current && observar.current.disconnect();
        // }
    }, [])
    const bannersTest = [
        {
            id: 9,
            title: 'Compra casa desde 27.000 USD',
            description: null,
            button_text: null,
            link: 'https://api.whatsapp.com/send/?phone=15136479405&text=Soy+colombiano+en+el+exterior+y+quiero+m%C3%A1s+informaci%C3%B3n+sobre+los+inmuebles+de+27.000+USD&type=phone_number&app_absent=0',
            is_external: '1',
            file: 'https://i.ibb.co/qL73j8bn/banners-Mesa-de-trabajo-1.jpg',
            responsive_image: "https://i.ibb.co/FkjFfLRq/movil-Mesa-de-trabajo-1-copia-3.jpg",
        },
        {
            id: 12,
            title: '\u00bfC\u00f3mo quieres tu casa en Colombia?',
            description: null,
            button_text: null,
            link: 'https://colraices.com/encontramos-tu-inmueble',
            is_external: '1',
            file: 'https://i.ibb.co/XZcBTWLJ/banners-Mesa-de-trabajo-1-copia-2.jpg',
            responsive_image: "https://i.ibb.co/mVJgXsw2/movil-Mesa-de-trabajo-1-copia-4.jpg",
        },
        {
            id: 13,
            title: 'Tu apartamento desde 29.900 USD',
            description: null,
            button_text: null,
            link: 'https://wa.me/15136479405?text=Soy%20colombiano%20en%20el%20exterior%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20inmuebles%20de%2029.000%20USD',
            is_external: '1',
            file: 'https://i.ibb.co/5hcTkydj/banners-Mesa-de-trabajo-1-copia.jpg',
            responsive_image: "https://i.ibb.co/mVJgXsw2/movil-Mesa-de-trabajo-1-copia-4.jpg",
        },
    ]
    return (
        <section className="banner-section">
            <SliderBanner banners={bannersTest} />
            {/* <div className={`sticky-barSearch banner ${!main && 'bannermin'}`} aria-disabled={fairMode} >
                <div className={`video`} aria-disabled={isFair}>
                    <div className='main-content'>
                        <h1>La feria</h1>
                        <img src="/portal-inmobiliario/img/colraicesInmobiliario/home/persons.webp" alt="Image of family" />
                        <img src="/portal-inmobiliario/img/colraicesInmobiliario/home/red-stripe.webp" alt="Red stripe" />
                        <img src="/portal-inmobiliario/img/colraicesInmobiliario/home/logo-colraices.webp" alt="Colraices logo" />
                        <div className="content-text">
                            <h2>¡Aterrizó en <span>Canadá!</span></h2>
                            <p><span>18</span> <span> <strong>de julio</strong> al <strong>18</strong> de agosto </span> </p>
                        </div>
                    </div>
                </div>

                <div className='banner-content' aria-disabled={fairMode} >
                    <div className='banner__text' aria-disabled={fairMode}>
                    </div>

                </div>

            </div> */}
            <BarSearch />
        </section>
    )
}
