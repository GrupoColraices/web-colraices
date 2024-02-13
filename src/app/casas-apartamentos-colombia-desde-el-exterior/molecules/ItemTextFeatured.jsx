'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ItemTextFeatured({ itemsEligenos }) {
    return (
        <>
            <Swiper
                className='swiper-text-featured'
                navigation={true}
                pagination={{ clickable: false }}
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={8}
                loop={true}
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

                {itemsEligenos?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='container-item-text'>
                            <article>
                                <img src={item.src} alt="Icon" />
                                <p>{item.text}</p>
                            </article>
                        </div>
                    </SwiperSlide>
                ))
                }

            </Swiper>
        </>

    )
}
