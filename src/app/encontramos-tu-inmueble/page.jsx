import { Header } from '@/components/Header';
import { Banner } from '@/containers/encontramos-tu-inmueble/Banner'
import { APIURL } from '@/helpers/api';


export const metadata = {
    title: ' Encontramos tu casa en Colombia | Venta de casas para colombianos en el exterior',
    description: "Nos especializamos en encontrar casas y apartamento nuevos y usados en venta en ciudades como Bogotá, Cali y Barranquilla para colombianos en el exterior Además, ofrecemos asesoramiento en créditos hipotecarios y leasing habitacional.",
    keywords: "Casa en colombia, casas para alquilar,compra de casas en Colombia,comprar casa Colombia,finca raiz cali,casas en venta barranquilla,casas en venta bogota,venta de casas en cali,invertir en vivienda,credito de vivienda usada,crédito para casa nueva,credito hipotecario en línea,davivienda leasing,leasing habitacional,credito bancario para casa,calcular credito hipotecario,bancolombia vivienda usada,Bancolombia vivienda nueva,compra de vivienda usada Davivienda"
}
export default async function WeFoundYourProperty() {
    const cities = await getCities();
    return (
        <>  <Header />
            <Banner cities={cities} />
        </>
    )
}
export async function getCities() {
    const fetching = await fetch(`${APIURL}/cities`);
    const response = await fetching.json();
    return response?.data;
}
