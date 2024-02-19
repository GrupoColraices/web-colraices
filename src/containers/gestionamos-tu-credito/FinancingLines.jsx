
import { Button } from '@/components/gestionamos-tu-credito/Button';
import '@/sass/containers/gestionamos-tu-credito/FinancingLines.scss';

export const FinancingLines = () => {
    return (
        <section className='container-financing-lines'>
            <div className='content-financing-lines'>
                <div>
                    <p>
                        Conoce más sobre nuestras líneas de financiación para tu
                        casa en Colombia
                    </p>
                    <Button text={"SABER MÀS "} URL={"/financia-tu-casa"} target={"_blank"} />
                </div>
            </div>
        </section>
    )
}
