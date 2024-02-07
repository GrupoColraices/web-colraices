
import { TitleSection } from "../components/TitleSection";
import { ItemReciente } from "../molecules/ItemReciente";
import { APIURL } from '../config';


export const InmReciente = async () => {
    const fetching = await fetch(`${APIURL}properties`);
    const response = await fetching.json();
    const data = response?.data;
    return (
        <section className="slider-recientes">
            <TitleSection title={"Nuevas"} span={'propiedades'}>
                Los mejores proyectos en nuestro país los encuentras aquí, con diferentes tipos de inmuebles, en las mejores ciudades de Colombia.
            </TitleSection>
            <ItemReciente inmRecientes={data} />
        </section>

    );
}

