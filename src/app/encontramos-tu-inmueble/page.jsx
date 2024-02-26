import { Banner } from '@/containers/encontramos-tu-inmueble/Banner'
import { APIURL } from '@/helpers/api';

export default async function WeFoundYourProperty() {
    const cities = await getCities();
    return (
        <>
            <Banner cities={cities} />
        </>
    )
}
export async function getCities() {
    const fetching = await fetch(`${APIURL}/cities`);
    const response = await fetching.json();
    return response?.data;
}
