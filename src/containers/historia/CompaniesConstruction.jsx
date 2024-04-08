import { SliderCompaniesConstrution } from "@/components/historia/SliderCompaniesConstrution"
import "@/sass/containers/historia/CompaniesConstruction.scss";

export const CompaniesConstruction = () => {
    return (
        <section className="companies-construction-container">
            <div className="companies-construction-content">
                <h2>Trabajamos con <span>constructoras de renombre ...</span></h2>
                <p>para que compres tu casa en Colombia con seguridad y tranquilidad.</p>
            </div>
            <SliderCompaniesConstrution />
        </section>
    )
}
