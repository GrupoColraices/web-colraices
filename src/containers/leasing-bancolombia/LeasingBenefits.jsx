import TitleSection from '@/app/casas-apartamentos-colombia-desde-el-exterior/components/TitleSection'
import { LeasingCard } from '@/components/leasing-bancolombia/LeasingCard'
import { cardItems } from '@/helpers'
import "@/sass/containers/leasing-bancolombia/LeasingBenefits.scss"

export const LeasingBenefits = () => {
    return (
        <section className='container-benefits'>
            <TitleSection title={`!Más beneficios para que obtengas`} span={`tu leasing habitacional ahora mismo!`}>
            </TitleSection>
            <div className='content'>
                {cardItems.map((item) =>
                    <LeasingCard key={item.id} data={item} />
                )}
            </div>
        </section>
    )
}
