import { CardTestimonial } from '@/components/molecules/CardTestimonial'
import '@/sass/containers/home/TestimonialSection.scss'
import { testimonialsData } from '@/helpers'
import { TitleLine } from '@/components/TitleLine'

export const TestimonialSection = () => {
    return (
        <section className="Testimonial-container">
            <div className="testimonial-texts">
                <div className='text-title'>
                    <div>
                        <TitleLine left={true} top={50} width={7.5} />
                        <h2>Juntos,</h2>
                        <TitleLine right={true} top={50} width={7.5} />
                    </div>
                    <span>alcanzamos tu meta</span>

                    <p>Desde el inicio de tu búsqueda hasta la emoción de recibir las llaves, Colraices hace posible tu sueño de casa en Colombia.</p>
                </div>
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
