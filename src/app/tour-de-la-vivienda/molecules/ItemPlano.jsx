'use client'
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export const ItemPlano = ({ planos, titulo }) => {
    return (
        <>
            <article className='itemPlano'>
                <p>Planos</p>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {planos?.map((plano, index) => (
                        <SwiperSlide key={`plano-${index}`}>
                            <img className='itemPlano__img' src={plano} alt={titulo} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </article>
        </>
    )
}

