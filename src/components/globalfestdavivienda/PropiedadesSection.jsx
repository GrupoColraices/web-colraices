'use client'
import { ContextLikeProvider } from '../../app/tour-de-la-vivienda/Context/Like'
import { InmReciente } from '../../app/tour-de-la-vivienda/Templates/InmReciente'
import TitleSection from '../../app/tour-de-la-vivienda/components/TitleSection'
import ItemReciente from '../../app/tour-de-la-vivienda/molecules/ItemReciente'
import styles from '../../app/globalfestdavivienda/globalfestdavivienda.module.css'
// Importar los estilos del carrusel
import '../../app/tour-de-la-vivienda/sass/app.scss'

export default function PropiedadesSection({ inmRecientes, useOriginalCarousel = false }) {
    return (
        <ContextLikeProvider>
            {useOriginalCarousel ? (
                // Carrusel original con su diseño completo
                <InmReciente inmRecientes={inmRecientes} />
            ) : (
                // Carrusel personalizado para Davivienda Fest
                <section className="slider-recientes">
                    <div className={styles.contentWrapper}>
                        <div className={styles.titleSection}>
                            <h1 className={styles.mainTitleBlue}>Proyectos de vivienda en Colombia</h1>
                        </div>
                        <p className={styles.descriptionContent}>
                            Descubre en línea y al instante{' '}
                            <span className={styles.descriptionContentRed}>
                                cuánto puedes financiar con Davivienda.
                            </span>
                        </p>
                        <p className={styles.descriptionContent}>Gratis, rápido y sin complicaciones.</p>
                    </div>
                    <ItemReciente inmRecientes={inmRecientes} />
                </section>
            )}
        </ContextLikeProvider>
    )
}
