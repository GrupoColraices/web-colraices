
import TitleSection from "../components/TitleSection";
import Testimonial from "../molecules/Testimonial";
import { testimonios } from "../helpers/options";

export const Testimoniales = () => {
    const testimoniales = testimonios;

    return (
        <section className="container-testimonial">
            <TitleSection span={"Testimonios"}>
                Estas historias tienen algo en común: colombianos que decidieron transformar su esfuerzo en el exterior en patrimonio en Colombia.
            </TitleSection>
            <section className="testimoniales-cards">
                {testimoniales?.map((testimonial) => (
                    <Testimonial
                        key={testimonial.id}
                        testimonial={testimonial}
                    />
                ))}
            </section>
        </section>
    );
};
