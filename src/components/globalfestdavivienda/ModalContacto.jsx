'use client'
import { useState } from 'react'
import FormularioContactoDatos from './FormularioContactoDatos'
import styles from './ModalContacto.module.css'

export default function ModalContacto({ isOpen, onClose, title = 'Contacto' }) {
    if (!isOpen) return null

    const handleSubmit = (data) => {
        console.log('Datos del modal:', data)
        // Aquí puedes manejar el envío del formulario
        // Por ejemplo, enviar a una API

        // Cerrar modal después del envío
        onClose()
    }

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    <button className={styles.closeButton} onClick={onClose} aria-label="Cerrar modal">
                        ×
                    </button>
                </div>

                <div className={styles.content}>
                    <FormularioContactoDatos
                        onSubmit={handleSubmit}
                        showTitle={false} // No mostrar título porque ya está en el header
                        className={styles.modalForm}
                    />
                </div>
            </div>
        </div>
    )
}

// Hook para usar el modal
export function useModalContacto() {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return {
        isOpen,
        openModal,
        closeModal,
    }
}
