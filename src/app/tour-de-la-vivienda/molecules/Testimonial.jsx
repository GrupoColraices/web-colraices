'use client'
import { block } from 'million/react';
import { useEffect, useState } from 'react';
export default block(function Testimonial({ testimonial }) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    const { nombre, testimonio } = testimonial;
    return (
        isClient && (
            <article className="card-container" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="111" data-aos-offset="0">
                <div className="card">
                    <img src='/portal-inmobiliario/img/colraicesInmobiliario/icons/testimonial.svg' alt="Icon cliente satisfecho" />
                    <h3>{nombre}</h3>
                </div>
                <p>{testimonio}</p>
            </article>
        )
    )
});
