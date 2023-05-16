import Link from 'next/link'
import React from 'react'
import { CardTestimonial } from '@/components/molecules/CardTestimonial'
import '@/sass/containers/home/TestimonialSection.scss'
import { testimonialsData } from '@/helpers'

export const TestimonialSection = () => {
    return (
        <section className="Testimonial-container">
            <div>
                <h2>
                    Alcanza tus metas
                    <span> con nosotros.</span>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                </p>
                <button type="button">
                    <Link href="/" target="_blank">
                        Vive la experiencia Colraices
                    </Link>
                </button>
            </div>
            <div>
                {testimonialsData.map((testimonial) => (
                    <CardTestimonial
                        key={testimonial.id}
                        title={testimonial.title}
                        paragraph={testimonial.content}
                    />
                ))}
            </div>
        </section>
    )
}
