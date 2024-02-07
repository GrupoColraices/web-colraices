import dynamic from 'next/dynamic';
const ItemFeatured = dynamic(() => import('../molecules/ItemFeatured'))
const ItemTextFeatured = dynamic(() => import('../molecules/ItemTextFeatured'))
import { APIURL } from '../config';
import { itemsEligenos } from '../helpers/options';


export const FeaturedProperties = async () => {
    const fetching = await fetch(`${APIURL}likes`);
    const response = await fetching.json();
    const inmFeatured = response?.data;
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
            <ItemTextFeatured itemsEligenos={itemsEligenos} />
        </section>
    )
}