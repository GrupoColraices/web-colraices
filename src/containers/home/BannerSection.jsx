'use client'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import styled from '@emotion/styled';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/sass/containers/home/BannerSection.scss'
import { FormBannerMain } from '@/components/FormBannerMain';
import { SliderLogos } from '@/components/SliderLogos';

export const BannerSection = ({ banners }) => {
    const StyledSwiperSlide = styled(SwiperSlide)`
    background-image: none;
    @media (min-width: 930px) {
      background-image: ${({ imageUrl }) => imageUrl ? `url(${imageUrl})` : 'none'};
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
                            {index === 0 && <FormBannerMain />}
                        </BannerContainer>
                    );
                    return (
                        <StyledSwiperSlide key={index} imageUrl={item.file}>
                            {item.is_external === 1 ? (
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
            <div className='partners'>
                <SliderLogos />
            </div>
        </section>
    )
}
