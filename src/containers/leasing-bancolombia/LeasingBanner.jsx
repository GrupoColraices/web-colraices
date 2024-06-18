import { Button } from '@/components/leasing-bancolombia/LeasingButton';
import '@/sass/containers/leasing-bancolombia/LeasingBanner.scss';

export const LeasingBanner = () => {
    return (
        <section className='container-leasing-banner'>
            <div className='content-text'>
                <h1>
                    Aprovecha nuevo
                    <span> Leasing
                        <img src="/leasing-bancolombia/icons/logo-bancolombia.svg" alt="Logo Bancolombia" />

                    </span>
                </h1>
                <p>¡Tu casa en Colombia con tasas bajísimas!</p>
                <img src="/leasing-bancolombia/img/image-banner.webp" alt="Imagen de mujer sonriendo" />

                <Button
                    text={"¿Cuánto te prestan?"}
                    URL={"https://colraices.com/credito-bancolombia-colombianos-en-el-exterior/"}
                />
            </div>
            <img className='image-banner' src="/leasing-bancolombia/img/image-banner.webp" alt="Imagen de mujer sonriendo" />
        </section>
    )
}
