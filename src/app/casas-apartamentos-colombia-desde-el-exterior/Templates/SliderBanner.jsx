'use client'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/sass/containers/home/BannerSection.scss'

export const SliderBanner = ({ banners }) => {
    const dataArray = [
        {
            title: "¡Los bancos en Colombia bajaron las tasas!",
            description: "Stay updated with ",
            buttonText: "Explore Now",
            link: "https://www.technologyreview.com/",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTcwMjR8MHwxfGFsbHwxfHx8fHx8fHwxNjE5MTI3NDA2&ixlib=rb-1.2.1&q=80&w=1080"
        },
        {
            title: "Health and Wellness",
            description: "Find tips and resources to improve your physical and mental well-being.",
            buttonText: "Get Started",
            link: "https://www.who.int/",
            image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTcwMjR8MHwxfGFsbHwxfHx8fHx8fHwxNjE5MTI3NDA2&ixlib=rb-1.2.1&q=80&w=1080"
        },
        {
            title: "Sustainable Living",
            description: "Learn how to live sustainably and reduce your environmental impact.",
            buttonText: "Discover More",
            link: "https://www.wwf.org/",
            image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTcwMjR8MHwxfGFsbHwxfHx8fHx8fHwxNjE5MTI3NDA2&ixlib=rb-1.2.1&q=80&w=1080"
        },
    ];


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
                        <div className='banner-container' style={{ backgroundImage: `url(${item.image})` }}>
                            <div className="banner-title">
                                <h1 className="title">{item.title}</h1>
                                <p>{item.description}</p>
                                <Link href={'/casas-apartamentos-colombia-desde-el-exterior'} target="_blank">Buscar mi casa</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    )
}