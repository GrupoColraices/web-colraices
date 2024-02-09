'use client'
import Link from 'next/link'
import Image from 'next/image'
import { MdLocationOn } from 'react-icons/md'
import { useCurrency } from '../hooks/useCurrency'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function ItemFeatured({ itemProperty }) {
    const [formatePrice] = useCurrency();
    return (
        <Swiper
            className='swiper-item-featured'
            navigation={true}
            pagination={{ dynamicBullets: true }}
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={8}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                },
                930: {
                    slidesPerView: 1,
                    spaceBetween: 1,
                },
            }}
        >
            {
                itemProperty?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='container-item-featured'>
                            <article>
                                <div>
                                    <Image width={327} height={327} src={item.thumbnail} alt="Image Property" />
                                </div>
                                <h1>{item.titulo}</h1>
                                <p className='price'>Desde {formatePrice(item.precio)} COP</p>
                                <p className='ubication'><MdLocationOn className="icon" />{item.ciudad} - {item.region}</p>
                                <ul className='information'><li>Desde {item.area_const}m²</li> <li>{item.habitaciones} Hab</li> <li>{item.baños} Baños</li></ul>
                                <button className='btn-view' type='button'><Link href={`/casas-apartamentos-colombia-desde-el-exterior/inmueble/${item.slug}`}>Ver Proyecto</Link></button>
                            </article>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

