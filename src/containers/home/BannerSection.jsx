'use client'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/sass/containers/home/BannerSection.scss'
import { FormBannerMain } from '@/components/FormBannerMain';
import { SliderLogos } from '@/components/SliderLogos';

export const BannerSection = ({ banners }) => {
    return (
        <section className='container-flex'>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {banners?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='banner-container' style={{ backgroundImage: `url(${item.file})` }}>
                            <div className="banner-title">
                                <h1 className="title">{item.title}</h1>
                                <p>{item.description}</p>
                                <Link href={item.link} target="_blank">{item.button_text}</Link>
                            </div>
                            {index === 0 && <FormBannerMain />}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='partners'>
                <SliderLogos />
            </div>
        </section>
    )
}
