'use client'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import styled from '@emotion/styled';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/sass/containers/home/BannerSection.scss'

export const SliderBanner = ({ banners }) => {
    const StyledSwiperSlide = styled(SwiperSlide)`
    background-image: none;
    @media (min-width: 930px) {
      background-image: ${({ imageUrl }) => imageUrl ? `url(${imageUrl})` : 'none'};
      background-size: cover;
      background-position: center;
    }
  `;
    const BannerContainer = styled.div`
    background-image: ${({ imageUrl }) => imageUrl ? `url(${imageUrl})` : 'none'};
  @media (min-width: 930px) {
    background-image: none;
  }
`;
    return (
        <section className='container-flex'>
            <Swiper
                observer={true}
                observeParents={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: true }}
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                    {banners?.map((item, index) => {
                        const bannerContent = (
                            <BannerContainer className='banner-container' imageUrl={item.responsive_image}>
                                <div className="banner-title">
                                    {item.button_text && item.title && <h1 className="title">{item.title}</h1>}
                                    {item.description && <p>{item.description}</p>}
                                </div>
                            </BannerContainer>
                        );
    
                        return (
                            <StyledSwiperSlide key={index} imageUrl={item.file}>
                                {item.is_external === "1" ? (
                                    <a 
                                        href={item.link} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', display: 'block' }}
                                    >
                                        {bannerContent}
                                    </a>
                                ) : (
                                    bannerContent
                                )}
                            </StyledSwiperSlide>
                        );
                    })}
            </Swiper>
        </section>
    )
}