import { Button } from '@/components/gestionamos-tu-credito/Button'
import '@/sass/containers/gestionamos-tu-credito/Banner.scss';

export const Banner = () => {
    return (
        <section className="container-manage-credit max-width">
            <div className="content-text">
                <img src="/gestionamos-tu-credito/img/banner-icons.svg" alt="Image" />
                <h1>Abrimos la puerta al crédito
                    para tu casa en Colombia
                </h1>
                <p>En tiempo real, con resultados precisos
                    y sin
                    importar donde estés.
                </p>
                <Button text={"VER MAS"} URL={"#bank-loank"} />
            </div>
            <img className='image-banner' src="/gestionamos-tu-credito/img/image-banner.webp" alt="Image" />
        </section>
    )
}
