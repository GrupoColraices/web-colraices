'use client'
import styles from './BeneficiosCard.module.css'

export default function BeneficiosCard({
    title,
    description,
    imageContent,
    buttons = [],
    highlightText = null,
    gradient = 'linear-gradient(180deg, rgba(42,63,119,0) -10%, #2A3F77 58%, #2A3F77 100%)',
}) {
    return (
        <div className={styles.card}>
            {/* Imagen como fondo */}
            <div className={styles.imageBackground}>{imageContent}</div>

            {/* Overlay con gradiente */}
            <div className={styles.overlay} style={{ background: gradient }}></div>

            {/* Contenido de texto */}
            <div className={styles.content}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>
                        <span>{title}</span>
                        {highlightText && <span className={styles.highlight}>{highlightText}</span>}
                    </h2>
                </div>

                <p className={`${styles.description} ${buttons.length > 0 ? styles.withButtons : ''}`}>{description}</p>

                {buttons.length > 0 && (
                    <div className={styles.buttonsContainer}>
                        {buttons.map((button, index) => (
                            <button key={index} className={styles.button}>
                                {button.text}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
