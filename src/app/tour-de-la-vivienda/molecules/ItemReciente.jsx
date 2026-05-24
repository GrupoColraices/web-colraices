'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ItemInmueble } from '../molecules/ItemInmueble'
import { block } from 'million/react'
import { useEffect, useState } from 'react'
export default block(function ItemReciente({ inmRecientes }) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        isClient && (
            <div className="container__reciente">
                <Swiper
                    navigation={true}
                    pagination={{ dynamicBullets: true }}
                    modules={[Pagination, Navigation]}
                    slidesPerView={1}
                    spaceBetween={8}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 2,
                        },
                        930: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                    }}
                >
                    {inmRecientes?.map((inmuebleRecionete) => (
                        <SwiperSlide key={inmuebleRecionete.id} className="mySlide">
                            <ItemInmueble dataInmueble={inmuebleRecionete} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        )
    )
})
