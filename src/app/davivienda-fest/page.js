import BeneficiosCard from '../../components/davivienda-fest/BeneficiosCard'
import styles from './davivienda-fest.module.css'
import cardStyles from '../../components/davivienda-fest/BeneficiosCard.module.css'

export default function DaviviendaFest() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrapper}>
                <img
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                    src="/davivienda-fest/fondo-pc.jpg"
                />
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.titleSection}>
                    <h1 className={styles.mainTitle}>Beneficios</h1>
                </div>
                <div className={styles.cardsContainer}>
                    {/* Card 1 - Casa */}
                    <BeneficiosCard
                        title="El poder de financiar"
                        highlightText="Casi todo tu hogar."
                        description={
                            <div className={cardStyles.descriptionContainer}>
                                <p className={cardStyles.descriptionBold}>En el Global Fest tu crédito crece:</p>
                                <span className={cardStyles.descriptionText}>Hasta el </span>
                                <span className={cardStyles.descriptionHighlight}>90% de financiación en Leasing </span>
                                <span className={cardStyles.descriptionText}>
                                    para que tu inversión requiera menos de tus ahorros y más de tus oportunidades.
                                </span>
                            </div>
                        }
                        imageContent={<img src="/davivienda-fest/house.svg" alt="Casa" />}
                    />

                    {/* Card 2 - Teléfono simple */}
                    <BeneficiosCard
                        title="Tu cupo de crédito,"
                        highlightText="en segundos y sin costo."
                        description="Puedes autogestionarlo en línea en minutos, o hacerlo con el acompañamiento de un asesor Colraices que te guiará 24h."
                        imageContent={<img src="/davivienda-fest/hand-phone.svg" alt="Teléfono" />}
                    />

                    {/* Card 3 - Edificios */}
                    <BeneficiosCard
                        title="Más opciones para elegir"
                        highlightText="en tu inversión."
                        description="Durante el Global Fest accede a un rango amplio de apartaestudios y lofts, elige aquel inmueble que potenciará tu patrimonio."
                        imageContent={<img src="/davivienda-fest/hand-house.svg" alt="Edificios" />}
                    />
                </div>
            </div>
        </div>
    )
}
