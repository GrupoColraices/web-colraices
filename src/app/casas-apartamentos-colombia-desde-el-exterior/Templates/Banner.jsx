'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { BarSearch } from '../molecules/BarSearch'
import { FairMode } from '../Context/Mode'
import { usePathname } from 'next/navigation'


export const Banner = (props) => {
    const pathName = usePathname();
    const { main } = props
    const [fid, setFid] = useState(false)
    const video = useRef(null)
    const observar = useRef(null)
    const [width, setWidth] = useState(false)
    const { fairMode, setFairMode, fairRoutes } = useContext(FairMode);

    useEffect(() => {
        if (window.innerWidth < 930) {
            setWidth(true)
        }
        if (fairRoutes.has(pathName)) {
            setFairMode(true);
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
                <div className='video' aria-disabled={fairMode}>
                    <video autoPlay muted loop ref={video}>
                        <source src={"/portal-inmobiliario/video/banner.mp4"} type="video/mp4" />
                        <source src="/portal-inmobiliario/video/banner.avi" type='video/avi' />
                    </video>
                    <div className='main-content'>
                        <h1>La feria</h1>
                        <img src="/portal-inmobiliario/img/colraicesInmobiliario/home/persons.webp" alt="Image of family" />
                        <img src="/portal-inmobiliario/img/colraicesInmobiliario/home/red-stripe.webp" alt="Red stripe" />
                        <img src="/portal-inmobiliario/img/colraicesInmobiliario/home/logo.svg" alt="Colraices logo" />
                        <div className="content-text">
                            <h2>¡Aterrizó en <span>Canadá!</span></h2>
                            <p><span>18</span> <span> <strong>de julio</strong> al <strong>18</strong> de agosto </span> </p>
                        </div>
                    </div>
                </div>


                <div className='banner-content' aria-disabled={fairMode} >
                    <div className='banner__text' aria-disabled={fairMode}>
                        <Link href={'/'}>
                            <img src="/portal-inmobiliario/img/colraicesInmobiliario/home/logo.svg" alt="Colraices logo" />
                        </Link>
                    </div>
                    {!width && <BarSearch />}
                </div>

            </div>
            {width && <BarSearch />}
        </section>
    )
}
