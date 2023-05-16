import { CardTestimonial } from '@/components/CardTestimonial'
import Link from 'next/link'
import React from 'react'
import '@/sass/containers/home/TestimonialSection.scss'

export const TestimonialSection = () => {
    return <section className='Testimonial-container'>
        <div>
            <h2>Alcanza tus metas
                <span> con nosotros.</span>
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
            <button type='button'><Link href='/' target='_blank'>Vive la experiencia Colraices</Link></button>
        </div>
        <div>
            <CardTestimonial title={'Testimonio de cliente'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus lacus, molestie vitae pretium at, gravida sit amet dui. Morbi ut tempus ante, vel mattis lorem. Proin vel'}></CardTestimonial>
            <CardTestimonial title={'Testimonio de cliente'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus lacus, molestie vitae pretium at, gravida sit amet dui. Morbi ut tempus ante, vel mattis lorem. Proin vel'}></CardTestimonial>
            <CardTestimonial title={'Testimonio de cliente'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus lacus, molestie vitae pretium at, gravida sit amet dui. Morbi ut tempus ante, vel mattis lorem. Proin vel'}></CardTestimonial>
        </div>

    </section>
}
