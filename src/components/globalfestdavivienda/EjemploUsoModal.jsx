'use client'
import ModalContacto, { useModalContacto } from './ModalContacto'

export default function EjemploUsoModal() {
    const { isOpen, openModal, closeModal } = useModalContacto()

    return (
        <div style={{ padding: '20px' }}>
            <h3>Ejemplo de uso del Modal de Contacto</h3>

            <button
                onClick={openModal}
                style={{
                    background: '#e00208',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontFamily: 'Montserrat, sans-serif',
                }}
            >
                Abrir Modal de Contacto
            </button>

            <ModalContacto isOpen={isOpen} onClose={closeModal} title="¡Contáctanos!" />
        </div>
    )
}
