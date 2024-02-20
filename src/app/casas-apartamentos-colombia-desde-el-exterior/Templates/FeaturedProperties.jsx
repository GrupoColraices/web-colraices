import ItemFeatured from '../molecules/ItemFeatured';
import ItemTextFeatured from '../molecules/ItemTextFeatured';
import { itemsEligenos } from '../helpers/options';

export default function FeaturedProperties({ inmFeatured }) {
    return (
        <section className='container-featured'>
            <div className='container-items-featured'>
                <h1>Explora nuestras <span> propiedades destacadas</span></h1>
                <ul>
                    {itemsEligenos.map((item) => (
                        <li key={item.id}><img src={item.src} alt="Text icon" /><p>{item.text}</p></li>
                    ))}
                </ul>
            </div>
            <ItemFeatured itemProperty={inmFeatured} />
            <ItemTextFeatured />
        </section>
    )
}
