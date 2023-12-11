'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import '@/sass/components/SliderProperty.scss'
import Image from "next/image";

export const Slider = ({ immovables }) => {


    return (
        <Swiper
            pagination={{
                type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="Property-slider"
        >
            {immovables?.map((immovable) => (

                <SwiperSlide key={immovable.id}>
                    <div className="Slider-content">
                    <Image className="Slider-isotype" src={'/icons/isotipoIcon.svg'} width={178} height={172} alt="Icon"></Image>
                        <Image src={immovable.thumbnail
                        } width={500} height={410} alt="image"></Image>
                        <div>
                            <h4>{immovable.titulo}</h4>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
