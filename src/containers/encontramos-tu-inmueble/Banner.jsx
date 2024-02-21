'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { stepTitles } from "@/helpers";

export const Banner = () => {
    return (
        <Swiper
            navigation={true}
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={1}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 2,
                    navigation: false,
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 1,
                    navigation: false,
                },
            }}
        >
            {stepTitles?.map((item) =>
                <SwiperSlide key={item.id}>
                    <h1 className=""><span>Paso{item.id}</span>{item.title}</h1>
                </SwiperSlide>
            )}
        </Swiper>
    )
}
