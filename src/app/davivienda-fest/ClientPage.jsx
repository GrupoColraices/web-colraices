'use client'
import { useState } from 'react'
import BeneficiosCard from '../../components/davivienda-fest/BeneficiosCard'
import FormularioContacto from '../../components/davivienda-fest/FormularioContacto'
import CarruselPersonalizado from '../../components/davivienda-fest/CarruselPersonalizado'
import ArticulosSection from '../../components/davivienda-fest/ArticulosSection'
import ModalFormulario from '../../components/davivienda-fest/ModalFormulario'
import styles from './davivienda-fest.module.css'
import cardStyles from '../../components/davivienda-fest/BeneficiosCard.module.css'

export default function ClientPage({ inmRecientes, articles }) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className={styles.pageContainer}>
            <FormularioContacto />
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
                        imageContent={<img src="/davivienda-fest/house.png" alt="Casa" />}
                    />

                    {/* Card 2 - Teléfono simple */}
                    <BeneficiosCard
                        title="Tu cupo de crédito, en segundos y sin costo."
                        highlightText=""
                        description={
                            <div className={cardStyles.descriptionContainer}>
                                <p className={cardStyles.descriptionText}>
                                    Puedes autogestionarlo en línea en minutos, o hacerlo con el acompañamiento de un
                                    asesor Colraices que te guiará 24h
                                </p>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        window.open(
                                            'https://colraices.com/cupocreditodavivienda/?utm_source=chatgpt.com',
                                            '_blank'
                                        )
                                    }}
                                    className={cardStyles.customButton}
                                >
                                    Quiero autogestionarme
                                    <img src="/davivienda-fest/cursor.svg" alt="Cursor" />
                                </button>
                                <button className={cardStyles.customButtonLast} onClick={handleOpenModal}>
                                    Acompañamiento de asesor <img src="/davivienda-fest/cursor.svg" alt="Cursor" />
                                </button>
                            </div>
                        }
                        imageContent={<img src="/davivienda-fest/hand-phone.png" alt="Teléfono" />}
                    />

                    {/* Card 3 - Edificios */}
                    <BeneficiosCard
                        title="Más opciones para elegir"
                        highlightText="en tu inversión."
                        description={
                            <div className={cardStyles.descriptionContainer}>
                                <p className={cardStyles.descriptionText}>
                                    Durante el Global Fest accede a un rango amplio de apartaestudios y lofts,
                                    <span className={cardStyles.descriptionBold}> elige el </span>
                                    metraje que potenciará tu patrimonio.
                                </p>
                            </div>
                        }
                        imageContent={<img src="/davivienda-fest/hand-house.png" alt="Edificios" />}
                    />
                </div>
            </div>
            <CarruselPersonalizado inmRecientes={inmRecientes} />
            <ArticulosSection articles={articles} />

            {/* Modal */}
            <ModalFormulario isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    )
}
