'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Virtual } from 'swiper';
import 'swiper/css/virtual';
import '@/sass/components/SliderLogos.scss';

export const SliderLogosAllied = () => {
    const fairCompanies = [
        '/icons/bancolombia_icon.svg',
        '/icons/davivienda_icon.svg',
        '/icons/bancounion_icon.svg',
        '/img/historia/logo-bolivar.webp',
        '/img/historia/logo-londono-gomez.jpg',
        '/img/historia/logo-camu.png',
    ];

    return (
        <Swiper
            navigation={false}
            modules={[Autoplay, Navigation, Virtual]}
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={20}
            loop={true}
            autoplay={{
                delay: 0,
            }}
            speed={1000}
            className={`slider-container`}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                930: {
                    slidesPerView: 7,
                    spaceBetween: 20,
                    centeredSlides: false
                },
            }}
            virtual={true}
        >
            {fairCompanies?.map((slide, index) => (
                <SwiperSlide key={index} virtualIndex={index}>
                    <Image src={slide} width={150} height={60} alt="logo" />
                </SwiperSlide>
            ))}
        </Swiper>

    );
};