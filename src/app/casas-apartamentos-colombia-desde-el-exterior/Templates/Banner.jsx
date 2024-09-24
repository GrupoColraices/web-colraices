'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { BarSearch } from '../molecules/BarSearch'
import { FairMode } from '../Context/Mode'
import { usePathname } from 'next/navigation'
import { SliderBanner } from './SliderBanner'
import { APIURL } from '../config'
import useSWR from 'swr'


export const Banner = (props) => {
    const pathName = usePathname();
    const { main } = props
    const [fid, setFid] = useState(false)
    const video = useRef(null)
    const observar = useRef(null)
    const [width, setWidth] = useState(false)
    const { fairMode, setFairMode, fairRoutes } = useContext(FairMode);
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
            setFairMode(true);
        }
        if (pathName.includes("filtrados") && fairMode) {
            setIsFair(false)
        }
        observar.current = new IntersectionObserver(function (entries) {
            setFid(entries[0].isIntersecting);
        }, { root: null });
        video?.current?.play();
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
        <section>
            <div className={`sticky-barSearch banner ${!main && 'bannermin'}`} aria-disabled={fairMode} >
                <div className={`video`} aria-disabled={isFair}>
                    <SliderBanner banners={banners} />
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
                    {!width && <BarSearch />}
                </div>

            </div>
            {width && <BarSearch />}
        </section>
    )
}
