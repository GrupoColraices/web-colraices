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
import Script from 'next/script'

export const metadata = {
    title: 'Comprar casa en Colombia desde el exterior | Colraices',
    description: 'Comprar casa en Colombia desde el exterior | Colraices',
}

export default function HomePage() {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CVV2GJKD7D" />
            <Script id="google-analytics">
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-CVV2GJKD7D');`}
            </Script>
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
