'use client'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/sass/containers/home/BannerSection.scss'

export const SliderBanner = ({ banners }) => {
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
                                <h1 className="title title-portal-inmobiliario">{item.title}</h1>
                                {item.description && <p>{item.description}</p>}
                                {item.button_text && <Link href={item.link} target={item.is_external === 1 ? '_blank' : '_self'}>{item.button_text}</Link>}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    )
}