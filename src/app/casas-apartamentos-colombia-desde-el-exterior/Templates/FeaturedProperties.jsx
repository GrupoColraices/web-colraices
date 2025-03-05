import InmFeatured from '../molecules/InmFeatured';
import ItemTextFeatured from '../molecules/ItemTextFeatured';
import { itemsEligenos } from '../helpers/options';
import { SliderLogosAllied } from '@/components/SliderLogosAlliedCompanies';
import '@/sass/containers/home/Home.scss'

export default function FeaturedProperties({ inmFeatured }) {
    return (
        <>
            <section className='container-fair-mode'>
                <h1>Juntos llegamos a los<span> Colombianos en el exterior</span></h1>
                <div className='container-slider-fair'>
                    <SliderLogosAllied/>
                </div>
            </section>
            <section className='container-featured'>
                <div className='container-items-featured'>
                    <h1>!Descubre el<span> Inmueble estrella!</span></h1>
                    <ul>
                        {itemsEligenos.map((item) => (
                            <li key={item.id}><img src={item.src} alt="Text icon" /><p>{item.text}</p></li>
                        ))}
                    </ul>
                </div>
                <InmFeatured itemProperty={inmFeatured} />
                <ItemTextFeatured />
            </section>
        </>
    )
}
