import RecommendedProjects from '@/containers/home/RecommendedProjects'
import { BannerSection } from '@/containers/home/BannerSection'
import { HistorySection } from '@/containers/home/HistorySection'
import { PropertySection } from '@/containers/home/PropertySection'
import { ServiceSection } from '@/containers/home/ServiceSection'
import { TestimonialSection } from '@/containers/home/TestimonialSection'
import '@/sass/containers/home/Home.scss'
import { Scripts } from '@/helpers/Scripts'
import { SliderLogos } from '@/components/SliderLogos'

export const metadata = {
    title: 'Comprar casa en Colombia desde el exterior | Colraices',
    description: 'Comprar casa en Colombia desde el exterior | Colraices',
}
const getBanners = async () => {
    const fetching = await fetch(`https://blog.colraices.com/api/v1/banners`, { cache: "no-store" });
    const response = await fetching.json();
    return response?.data;
}

const bannersTest = [

    {
       "id":9,
       "title":"Compra casa desde 27.000 USD",
       "description":null,
       "button_text":null,
       "link":"https:\/\/api.whatsapp.com\/send\/?phone=15136479405&text=Soy+colombiano+en+el+exterior+y+quiero+m%C3%A1s+informaci%C3%B3n+sobre+los+inmuebles+de+27.000+USD&type=phone_number&app_absent=0",
       "is_external":"1",
       "file":"https://i.ibb.co/qL73j8bn/banners-Mesa-de-trabajo-1.jpg",
       "responsive_image":"https://i.ibb.co/FkjFfLRq/movil-Mesa-de-trabajo-1-copia-3.jpg"
    },
    {
       "id":12,
       "title":"\u00bfC\u00f3mo quieres tu casa en Colombia?",
       "description":null,
       "button_text":null,
       "link":"https:\/\/colraices.com\/encontramos-tu-inmueble",
       "is_external":"1",
       "file":"https://i.ibb.co/XZcBTWLJ/banners-Mesa-de-trabajo-1-copia-2.jpg",
       "responsive_image":"https://i.ibb.co/mVJgXsw2/movil-Mesa-de-trabajo-1-copia-4.jpg"
    },
    {
       "id":13,
       "title":"Tu apartamento desde 29.900 USD",
       "description":null,
       "button_text":null,
       "link":"https:\/\/wa.me\/15136479405?text=Soy%20colombiano%20en%20el%20exterior%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20inmuebles%20de%2029.000%20USD",
       "is_external":"1",
       "file":"https://i.ibb.co/5hcTkydj/banners-Mesa-de-trabajo-1-copia.jpg",
       "responsive_image":"https://i.ibb.co/mVJgXsw2/movil-Mesa-de-trabajo-1-copia-4.jpg"
    }
 
]
export default async function HomePage() {
    const banners = await getBanners();
    return (
        <>
            <Scripts />
            <BannerSection banners={banners} />
            <PropertySection />
            <ServiceSection />
            <RecommendedProjects />
            <div className='container-partners-responsive'>
                <SliderLogos />
            </div>
            <HistorySection />
            <TestimonialSection />
        </>
    )
}