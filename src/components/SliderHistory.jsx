'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";


import '@/sass/components/SliderHistory.scss'
import { CardHistory } from "./molecules/CardHistory";

export const SliderHistory = () => {
    const historyData = [
        { id: 1, title: '18 años', span: 'de experiencia', image: 'icons/experienciaIcon.svg' },
        { id: 2, title: '83 mil colombianos', span: 'atendidos en todo el mundo', image: 'icons/colombianosIcon.svg' },
        { id: 3, title: '11 mil', span: 'negocios', image: 'icons/negociosIcon.svg' },
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
            {historyData?.map((card) => (<SwiperSlide key={card.id}><CardHistory data={card}></CardHistory></SwiperSlide>))}

        </Swiper>
    );
};
