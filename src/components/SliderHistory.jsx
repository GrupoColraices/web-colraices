'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";

import '@/sass/components/SliderHistory.scss'

export const SliderHistory = () => {
    const historyData = [
        { id: 1, image: '/imageHistory1.svg' },
        { id: 2, image: '/imageHistory2.svg' },
        { id: 3, image: '/imageHistory3.svg' },
        // { id: 4, image: '/prueba.png' },
    ]
    return (

        <Swiper
            navigation={true}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                    spaceBetween: 2,
                },
            }} modules={[Navigation]} className="History-slider">
            {historyData?.map((card) => (<SwiperSlide key={card.id}><Image src={card.image} width={313} height={377} quality={100} alt="Historicos" ></Image></SwiperSlide>))}

        </Swiper>
    );
};
