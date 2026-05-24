
import { APIURL } from '../../config/index';
import { Inmueble } from '../../Templates/Inmueble';

export async function generateMetadata({ params }) {
    const fetching = await fetch(`${APIURL}properties/${params.slug}`, { cache: 'no-cache' })
    const response = await fetching.json();
    const inmueble = response.data;
    const { tipo, ciudad, titulo } = inmueble;
    return {
        title: `${tipo} en venta en ${ciudad} | ${titulo}`
    }
}

export default async function InmuebleSingle({ params }) {
    const fetching = await fetch(`${APIURL}properties/${params.slug}`, { cache: 'no-cache' })
    const response = await fetching.json();
    const inmueble = response.data;

    return (
        <Inmueble inmueble={inmueble} response={response} />
    )
}
