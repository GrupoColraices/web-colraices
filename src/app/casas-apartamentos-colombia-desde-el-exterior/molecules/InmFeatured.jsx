'use client'
import { useCurrency } from '../hooks/useCurrency'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { block } from 'million/react';
import { useEffect, useState } from 'react'
import { ItemFeatured } from './ItemFeatured'



export default block(function InmFeatured({ itemProperty }) {
    const [isClient, setIsClient] = useState(false)


    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        isClient && (
            <Swiper
                className='swiper-item-featured'
                navigation={true}
                pagination={{ dynamicBullets: true }}
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={8}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 8,
                    },
                    930: {
                        slidesPerView: 1,
                        spaceBetween: 1,
                    },
                }}
            >
                {
                    itemProperty?.map((item) => (
                        <SwiperSlide key={item.id}>
                            <ItemFeatured item={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        )
    )
})

