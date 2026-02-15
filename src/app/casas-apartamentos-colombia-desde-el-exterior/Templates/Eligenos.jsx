import TitleSection from '../components/TitleSection'
import ItemEligenos from '../molecules/ItemEligenos'

export const Eligenos = () => {
    const constructionCompanies = [
        '/img/historia/logo-camacol-valle.webp',
        '/img/historia/logo-colpatria.png',
        '/img/historia/logo-bolivar.webp',
        '/img/historia/logo-contex.png',
        '/img/historia/logo-londono-gomez.jpg',
        '/img/historia/logo-ciencuadras.png',
        '/img/historia/logo-gojom.webp',
        '/img/historia/logo-jaramillo-mora-rojo.webp',
        '/img/historia/logo-recinto.png',
        '/img/historia/logo-optimo.webp',
        '/img/historia/logo-grupo-platinium-itimo.webp',
        '/img/historia/logo-habi.webp',
        '/img/historia/logo-buendia.webp',
        '/img/historia/logo-camu.png',
        '/img/historia/logo-prodesa.webp',
        '/img/historia/logo-espacios-libres.webp',
        '/img/historia/logo-constructora-centenario.webp',
        '/img/historia/logo-cupula.png',
        '/img/historia/logo-jm.png',
    ]
    return (
        <main className="eligenos">
            <div className="section__title">
                <TitleSection title={'Por qué elegirnos'} shadow={true}>
                    Encontrarás un servicio de calidad que te acompañará de forma personalizada en el proceso de comprar
                    tu casa en Colombia desde el exterior. Te ofrecemos las mejores oportunidades para invertir y crecer
                    económicamente.
                </TitleSection>
            </div>
            <div className="eligenos__container">
                <ItemEligenos
                    description={
                        'Invierte de forma segura y confiable en nuestros proyectos inmobiliarios, respaldados por importantes constructoras aliadas en Colombia.'
                    }
                    img={'/portal-inmobiliario/img/eligenos/aliados.webp'}
                    slideshow={constructionCompanies}
                    slidesView={2}
                    slidesViewDesktop={3}
                    spaceBetween={0}
                    customClass={'construction'}
                >
                    <span>Nuestras</span> constructoras aliadas
                </ItemEligenos>
                <ItemEligenos
                    description={
                        'Nuestros inmuebles nuevos y usados pasan por un riguroso proceso de verificación para garantizar su calidad y características específicas. Con Colraices, invierte con confianza y seguridad en la propiedad que deseas.'
                    }
                    img={'/portal-inmobiliario/img/eligenos/inmuebles.webp'}
                    customClass={'housing'}
                    fair={true}
                >
                    Viviendas con las
                    <span>mejores condiciones</span>
                </ItemEligenos>
                <ItemEligenos
                    description={
                        'Accede fácilmente a créditos de nuestros bancos aliados reconocidos a nivel nacional e internacional por sus beneficios y trayectoria en apoyo a los colombianos en el exterior. Confía en Colraices para hacer una inversión segura y exitosa.'
                    }
                    img={'/portal-inmobiliario/img/eligenos/constructoras.webp'}
                    slideshow={['/portal-inmobiliario/img/aliados/1.svg', '/portal-inmobiliario/img/aliados/11.webp']}
                    slidesView={3}
                    slidesViewDesktop={3}
                    spaceBetween={10}
                >
                    Nuestros aliados
                    <span>financieros</span>
                </ItemEligenos>
            </div>
        </main>
    )
}
