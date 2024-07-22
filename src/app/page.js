import { Partners } from '@/components/Partners'
import { Header } from '@/components/Header'
import RecommendedProjects from '@/containers/home/RecommendedProjects'
import { BannerSection } from '@/containers/home/BannerSection'
import { HistorySection } from '@/containers/home/HistorySection'
import { PropertySection } from '@/containers/home/PropertySection'
import { ServiceSection } from '@/containers/home/ServiceSection'
import { TestimonialSection } from '@/containers/home/TestimonialSection'
import { constructionCompany } from '@/helpers'
import '@/sass/containers/home/Home.scss'
import { Scripts } from '@/helpers/Scripts'


export const metadata = {
    title: 'Comprar casa en Colombia desde el exterior | Colraices',
    description: 'Comprar casa en Colombia desde el exterior | Colraices',
}

export default function HomePage() {
    return (
        <>
            <Scripts />
            <Header />
            <BannerSection />
            <PropertySection />
            <ServiceSection />
            <RecommendedProjects />
            <div className='container-partners-responsive'>
                <Partners partners={constructionCompany} />
            </div>
            <HistorySection />
            <TestimonialSection />
        </>
    )
}
