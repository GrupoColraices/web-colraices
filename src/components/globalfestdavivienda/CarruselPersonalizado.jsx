'use client'
import { ContextLikeProvider } from '../../app/casas-apartamentos-colombia-desde-el-exterior/Context/Like'
import ItemReciente from '../../app/casas-apartamentos-colombia-desde-el-exterior/molecules/ItemReciente'
import styles from '../../app/globalfestdavivienda/globalfestdavivienda.module.css'
import carruselStyles from './CarruselPersonalizado.module.css'
// Importar los estilos del carrusel
import '../../app/casas-apartamentos-colombia-desde-el-exterior/sass/app.scss'

export default function CarruselPersonalizado({ inmRecientes }) {
    return (
        <ContextLikeProvider>
            {/* Títulos personalizados de Davivienda */}
            <div className={styles.contentWrapper}>
                <div className={styles.titleSection}>
                    <h1 className={styles.mainTitleBlue}>Proyectos de vivienda en Colombia</h1>
                </div>
                <p className={styles.descriptionContent}>
                    Descubre en línea y al instante{' '}
                    <span className={styles.descriptionContentRed}>cuánto puedes financiar con Davivienda.</span>
                </p>
                <p className={styles.descriptionContent}>Gratis, rápido y sin complicaciones.</p>
            </div>

            {/* Carrusel con estilos personalizados de Davivienda */}
            <section className={`slider-recientes ${carruselStyles.carruselDavivienda}`}>
                <ItemReciente inmRecientes={inmRecientes} />
            </section>
        </ContextLikeProvider>
    )
}
