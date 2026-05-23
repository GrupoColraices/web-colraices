import TitleSection from "../components/TitleSection";
import ItemReciente from "../molecules/ItemReciente";

export const InmReciente = ({ inmRecientes }) => {
    return (
        <section className="slider-recientes">
            <TitleSection title={"¡Proyectos en Colombia que puedes"} span={'conocer desde el exterior.'}>
                Explora inmuebles en distintas ciudades, compara opciones y avanza desde el país donde vives.
            </TitleSection>
            <ItemReciente inmRecientes={inmRecientes} />
        </section>

    );
}

