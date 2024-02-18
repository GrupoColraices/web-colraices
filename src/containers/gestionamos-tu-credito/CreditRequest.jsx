import { Partners } from '@/components/Partners';
import { Button } from '@/components/gestionamos-tu-credito/Button'
import { TitleSection } from '@/components/gestionamos-tu-credito/TitleSection';
import { partners } from '@/helpers';
import '@/sass/containers/gestionamos-tu-credito/CreditRequest.scss';


export const CreditRequest = () => {
    return (
        <section className='container-credit-request'>
            <div className='content-credit-request'>
                <div className='content-text'>
                    <h3>¿Listo para solicitar el
                        crédito para tu vivienda?
                    </h3>
                    <p>Te entregamos el pre aprobado de tu crédito
                        con un banco de renombre en Colombia.
                    </p>
                    <Button text={"LO QUIERO"} URL={"/"} />
                </div>
                <div className='content-graphic'>
                    <img src="/gestionamos-tu-credito/img/image-movil.webp" alt="" />
                    <div className='content-items'>
                        <p className='item-paragraph'>Te damos la respuesta en
                            un día</p>
                        <p className='item-paragraph'>Enviamos el resultado a tu
                            correo</p>
                        <p className='item-paragraph'>Con el
                            banco que
                            elijas</p>
                    </div>

                </div>
            </div>

            <TitleSection text={"Hacemos un análisis completo para que el sí de"} span={"nuestros aliados a tu crédito sea un hecho"} />
            <Partners partners={partners} customClass={"partners-managing-your-credit"} />
        </section>
    )
}
