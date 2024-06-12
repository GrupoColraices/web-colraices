'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper"
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css";
import "swiper/css/navigation";
import { GalleryProperty } from '../components/GalleryProperty';


export const BannerInmueble = ({ imagenes, video, numberImages }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const enlace = video != null && video?.substr(17, 50);
    return (
        <>
            <section className='banner-inmueble-container'>
                <Link href={'/'}>
                    <img className='logo' src="/portal-inmobiliario/img/colraicesInmobiliario/home/logo.svg" alt="colraices logo" />
                </Link>

                <GalleryProperty photos={imagenes} video={video} numberImages={numberImages} />

            </section>

            <section className='container__responsive'>
                <div className='content__header'>
                    <Link href={'/'}>
                        <img className='logo' src="/portal-inmobiliario/img/colraicesInmobiliario/home/logo.svg" alt="colraices logo" />
                    </Link>

                </div>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-navigation-size": "30px",
                        "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {video != null && <SwiperSlide><iframe className='container__video' src={`https://www.youtube.com/embed/${enlace}?controls=0&autoplay=1&loop=1&fs=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&mute=1`} allow="accelerometer; autoplay; gyroscope; web-share"></iframe></SwiperSlide>}
                    {imagenes.slice(0, 5).map((imagen, index) => (
                        <SwiperSlide key={`imagen-${index}`}>
                            <div className='image__slide'>
                                <img src={`${imagen}`} alt="imagen" />
                            </div>

                        </SwiperSlide>
                    ))}

                </Swiper>
            </section>
        </>
    )
}
