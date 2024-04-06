import { Partners } from '@/components/Partners'
import { partners } from '@/helpers'
import '@/sass/containers/historia/Banks.scss'
export const Banks = () => {
    return (
        <section className='banks-container'>
            <h2>
                <span>Facilitamos tu inversión :</span>
                Somos aliados
                de los principales bancos en Colombia</h2>
            <div className='history-partners'>
                <Partners partners={partners} />
            </div>
        </section>
    )
}
