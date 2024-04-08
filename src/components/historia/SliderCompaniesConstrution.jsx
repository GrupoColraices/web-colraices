'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { logosCompaniesConstruction } from "@/helpers";
export const SliderCompaniesConstrution = () => {
    return (
        <div className="swiper-container">
            <Swiper
                navigation={true}
                loop={true}
                modules={[Pagination, Navigation]}
                slidesPerView={2}
                spaceBetween={5}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                }}
                className="companies-construction-slider"
            >
                {logosCompaniesConstruction?.map((logo) => (
                    <SwiperSlide key={logo.id}>
                        <div>
                            <img src={logo.src} alt="Logo  de la empresa constructora" />

                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}
