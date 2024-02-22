'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { stepTitles } from "@/helpers";
import '@/sass/containers/encontramos-tu-inmueble/Banner.scss'
import { Form } from "@/components/encontramos-tu-inmueble/Form";

export const Banner = () => {
    return (
        <section className="container-banner">
            <img className="img-figure" src="/encontramos-tu-inmueble/img/animated-figure.png" alt="" />
            <div className="content-slider">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    spaceBetween={1}
                    speed={1000}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 2,
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 1,
                        },
                    }}
                >
                    {stepTitles?.map((item) =>
                        <SwiperSlide key={item.id}>
                            <h1 className="section-title"><span>Paso {item.id}</span>{item.title}</h1>
                        </SwiperSlide>
                    )}
                </Swiper>
                <img className="img-items" loading="lazy" src="/encontramos-tu-inmueble/img/items-icons.webp" alt="Image" />
            </div>
            <div className="content-form">
                <h2>Dinos como buscas tu hogar y te ayudaremos a encontrarlo </h2>
                <p>Completa el formualrio con tus preferencias</p>
                <Form />
            </div>
        </section>
    )
}
