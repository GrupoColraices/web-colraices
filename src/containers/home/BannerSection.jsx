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
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {banners?.map((item, index) => (
                    <StyledSwiperSlide key={index} imageUrl={item.file}>
                        <BannerContainer className='banner-container' imageUrl={item.responsive_image}>
                            <div className="banner-title">
                                <h1 className={`title ${index !== 0 && 'title-portal-inmobiliario'}`}>{item.title}</h1>
                                {item.description && <p>{item.description}</p>}
                                {item.button_text && <Link href={item.link} target={item.is_external === 1 ? '_blank' : '_self'}>{item.button_text}</Link>}
                            </div>
                            {index === 0 && <FormBannerMain />}
                        </BannerContainer>
                    </StyledSwiperSlide>
                ))}
            </Swiper>
            <div className='partners'>
                <SliderLogos />
            </div>
        </section >
    )
}
