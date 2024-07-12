'use client'
import { CartTextCol } from '../components/CartTextCol'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { useEffect, useState, useContext } from 'react';
import { block } from 'million/react';
import { FairMode } from '../Context/Mode';
export default block(function ItemEligenos({ description, img, children, slideshow, slidesView, slidesViewDesktop, spaceBetween, customClass, fair }) {
    const [isClient, setIsClient] = useState(false)
    const { fairMode } = useContext(FairMode)
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        isClient && (
            <div className={`container__eligenos-item`}>
                <article className={`eligenos__item ${customClass && customClass} ${fair && fairMode && "disabled"} `} >
                    <CartTextCol description={description}>
                        {children}
                    </CartTextCol>
                    <div className='container__img'>
                        <img src={img} alt="image" />
                    </div>
                    {slideshow &&
                        <div className='slider'>
                            <Swiper
                                navigation={true}
                                modules={[Navigation]}
                                slidesPerView={slidesView}
                                spaceBetween={spaceBetween}
                                loop={true}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 3,
                                        spaceBetween: 2,
                                    },
                                    930: {
                                        slidesPerView: slidesViewDesktop,
                                        spaceBetween: 1,
                                    },
                                }}
                            >
                                {slideshow?.map((slide, index) =>
                                    <SwiperSlide key={index}>
                                        <div className='container__img-item'>
                                            <img src={slide} alt="Logo" />
                                        </div>

                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    }
                </article>
            </div>
        )
    )
})
