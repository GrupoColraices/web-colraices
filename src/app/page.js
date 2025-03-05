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