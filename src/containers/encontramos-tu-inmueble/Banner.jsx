'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

export const Banner = () => {
    return (
        <Swiper
            navigation={true}
            modules={[Autoplay, Navigation]}
            slidesPerView={slidesView}
            spaceBetween={spaceBetween}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                    spaceBetween: 2,
                },
                1024: {
                    slidesPerView: slidesViewDesktop,
                    spaceBetween: 1,
                    navigation: false,
                },
            }}
        >
            <SwiperSlide></SwiperSlide>
        </Swiper>
    )
}
