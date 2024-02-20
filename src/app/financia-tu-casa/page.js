import { Header } from '@/components/Header'
import { Partners } from '@/components/Partners'
import { FinancingBanner } from '@/containers/financia-tu-casa/FinancingBanner'
import { FinancingCredits } from '@/containers/financia-tu-casa/FinancingCredits'
import { partners } from '@/helpers'
import '@/sass/containers/financia-tu-casa/FinancingPage.scss'
export default function FinancingPage() {
    return (
        <>
            <Header />
            <main className="financing-main">
                <FinancingBanner />
                <section className="financing-partners">
                    <Partners partners={partners} />
                </section>
                <FinancingCredits />
            </main>
        </>
    )
}
