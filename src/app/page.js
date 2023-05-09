import { BannerSection } from '@/containers/home/BannerSection'
import { HistorySection } from '@/containers/home/HistorySection'
import { PropertySection } from '@/containers/home/PropertySection'
import { ServiceSection } from '@/containers/home/ServiceSection'
import { TestimonialSection } from '@/containers/home/TestimonialSection'

export const metadata = {
    title: 'Comprar casa en Colombia desde el exterior | Colraices',
    description: 'Comprar casa en Colombia desde el exterior | Colraices',
}

export default function HomePage() {
    return (
        <>
            <BannerSection />
            <PropertySection />
            <ServiceSection />
            <HistorySection />
            <TestimonialSection />
        </>
    )
}
