'use client'
import { useEffect } from 'react'
import FormularioContactoDatos from './FormularioContactoDatos'
import styles from './ModalFormulario.module.css'

export default function ModalFormulario({ isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        // Cleanup al desmontar
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    const handleFormSubmit = async (data) => {
        console.log('Datos del formulario desde modal:', data)
        // Aquí puedes agregar lógica adicional después del envío exitoso
        // Por ejemplo, cerrar el modal después de un delay
        setTimeout(() => {
            onClose()
        }, 2000)
    }

    return (
        <div className={styles.modalOverlay} onClick={handleBackdropClick}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    ×
                </button>

                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>
                        <span className={styles.titleBlue}>Recibe acompañamiento personalizado</span>
                    </h2>
                    <p className={styles.modalSubtitle}>
                        Uno de nuestros asesores expertos te contactará para guiarte en todo el proceso
                    </p>
                </div>

                <div className={styles.formContainer}>
                    <FormularioContactoDatos
                        onSubmit={handleFormSubmit}
                        showTitle={false}
                        className={styles.modalForm}
                    />
                </div>
            </div>
        </div>
    )
}
