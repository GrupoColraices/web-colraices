import TitleSection from "../components/TitleSection";
import ItemReciente from "../molecules/ItemReciente";

export const InmReciente = ({ inmRecientes }) => {
    return (
        <section className="slider-recientes">
            <TitleSection title={"Nuevas"} span={'propiedades'}>
                Los mejores proyectos en nuestro país los encuentras aquí, con diferentes tipos de inmuebles, en las mejores ciudades de Colombia.
            </TitleSection>
            <ItemReciente inmRecientes={inmRecientes} />
        </section>

    );
}

