'use client'
import FormularioContactoDatos from './FormularioContactoDatos'
import styles from './FormularioContacto.module.css'

export default function FormularioContacto() {
    return (
        <div className={styles.container}>
            {/* Imagen de fondo */}
            <div className={styles.backgroundImage}>
                <img
                    src="/davivienda-fest/fondo-pc.jpg"
                    alt="Fondo Davivienda"
                    className={styles.bgImg}
                    onError={(e) => {
                        e.target.style.display = 'none'
                    }}
                />
            </div>

            {/* Contenido del formulario */}
            <div className={styles.content}>
                {/* Texto principal */}
                <div className={styles.textSection}>
                    <div className={styles.mainText}>
                        <p className={styles.textLineMin}>
                            <img width={12} src="/davivienda-fest/arrow.png" alt="flecha" />
                            Tu esfuerzo en el
                        </p>
                        <p className={styles.textLine}>exterior se convierte en</p>
                        <p className={styles.textLine}>
                            <span className={styles.highlight}> oportunidades en Colombia</span>
                        </p>
                    </div>

                    <div className={styles.mainText}>
                        <p className={styles.textLine}>
                            Con <img height={32} src="/davivienda-fest/logo-davivienda.png" alt="Davivienda" />
                        </p>
                        <div className={styles.textLine}>
                            Y
                            <img height={34} src="/logo-nuevo.png" alt="Colraices" />
                        </div>
                    </div>
                    <div className={styles.mainText}>
                        <p className={styles.textLineMin}>tu crédito abre la puerta a un</p>
                        <p className={styles.textLine}>
                            <span className={styles.highlightBlue}>hogar que construye futuro.</span>
                        </p>
                    </div>
                </div>

                {/* Formulario */}
                <FormularioContactoDatos
                    onSubmit={(data) => {
                        console.log('Datos del formulario:', data)
                        // Aquí puedes manejar el envío del formulario
                    }}
                />
            </div>
        </div>
    )
}
