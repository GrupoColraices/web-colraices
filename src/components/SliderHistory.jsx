'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

import '@/sass/components/SliderHistory.scss'
import { CardHistory } from './molecules/CardHistory'
import { historyData } from '@/helpers'
export const SliderHistory = () => {
    return (
        <Swiper
            navigation={true}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                    spaceBetween: 2,
                },
            }}
            modules={[Navigation]}
            className="History-slider"
        >
            {historyData?.map((card) => (
                <SwiperSlide key={card.id}>
                    <CardHistory data={card}></CardHistory>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
