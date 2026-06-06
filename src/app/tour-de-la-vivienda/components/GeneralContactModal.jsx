'use client'

import { useEffect, useRef, useState } from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function GeneralContactModal({
    open,
    onClose,
    title = 'Te contactamos para ayudarte',
    subtitle = 'a invertir y construir patrimonio en Colombia',
    source = 'formulario_general',
    serviceInterest = 'Contacto general',
    showHelpField = false,
}) {
    const submittingRef = useRef(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState('idle')
    const [validationError, setValidationError] = useState('')

    useEffect(() => {
        if (!open) return

        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose()
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = originalOverflow
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [open, onClose])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (submittingRef.current || isSubmitting) return

        const form = event.currentTarget
        const formData = new FormData(form)
        const fieldValue = (name) => String(formData.get(name) ?? '').trim()

        const firstname = fieldValue('nombre_completo')
        const email = fieldValue('correo_electronico')
        const phone = fieldValue('telefono')
        const country = fieldValue('pais_residencia')
        const bestCallDay = fieldValue('mejor_dia_llamada')
        const timeSlot = fieldValue('franja_horaria')
        const acceptedPrivacyPolicy = Boolean(formData.get('acepta_politica'))

        if (!firstname || !email || !phone || !country || !bestCallDay || !timeSlot) {
            setSubmitStatus('idle')
            setValidationError('Completa todos los campos obligatorios antes de enviar.')
            return
        }

        if (!EMAIL_REGEX.test(email)) {
            setSubmitStatus('idle')
            setValidationError('Ingresa un correo electrónico válido.')
            return
        }

        if (!acceptedPrivacyPolicy) {
            setSubmitStatus('idle')
            setValidationError('Debes aceptar la política de tratamiento de datos para continuar.')
            return
        }

        const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
        const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID

        if (!portalId || !formId) {
            setValidationError('')
            setSubmitStatus('error')
            return
        }

        submittingRef.current = true
        setIsSubmitting(true)
        setSubmitStatus('idle')
        setValidationError('')

        try {
            const response = await fetch(
                `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        fields: [
                            { name: 'firstname', value: firstname },
                            { name: 'email', value: email },
                            { name: 'phone', value: phone },
                            { name: 'country', value: country },
                            { name: 'mejor_dia_para_llamarte', value: bestCallDay },
                            { name: 'franja_horaria', value: timeSlot },
                            {
                                name: 'en_que_podemos_ayudarte',
                                value: showHelpField
                                    ? fieldValue('ayuda_requerida')
                                    : serviceInterest,
                            },
                            {
                                name: 'acepto_politica_de_tratamiento_de_datos',
                                value: acceptedPrivacyPolicy ? 'true' : '',
                            },
                            { name: 'servicio_de_interes', value: serviceInterest },
                            { name: 'origen_del_formulario', value: source },
                            { name: 'titulo_del_modal', value: title },
                            { name: 'pagina_de_origen', value: window.location.pathname },
                            { name: 'url_de_origen', value: window.location.href },
                            { name: 'fuente_del_formulario', value: 'Web Colraices' },
                        ],
                        context: {
                            pageUri: window.location.href,
                            pageName: document.title || window.location.pathname,
                        },
                    }),
                },
            )

            if (!response.ok) {
                throw new Error('HubSpot submission failed')
            }

            form.reset()
            setSubmitStatus('success')
        } catch {
            setSubmitStatus('error')
        } finally {
            submittingRef.current = false
            setIsSubmitting(false)
        }
    }

    if (!open) return null

    return (
        <div className="tour-contact-modal" onClick={onClose}>
            <div
                className="tour-contact-modal__dialog"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="tour-contact-modal__header">
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar formulario"
                        className="tour-contact-modal__close"
                    >
                        ×
                    </button>

                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>

                <form className="tour-contact-modal__form" onSubmit={handleSubmit}>
                    <input type="hidden" name="source" value={source} />

                    {submitStatus === 'success' && (
                        <p className="tour-contact-modal__success">
                            Gracias. Hemos recibido tus datos y te contactaremos pronto.
                        </p>
                    )}

                    {(validationError || submitStatus === 'error') && (
                        <p className="tour-contact-modal__error">
                            {validationError || 'No pudimos enviar el formulario. Intenta nuevamente.'}
                        </p>
                    )}

                    <div className="tour-contact-modal__grid">
                        <label className="tour-contact-modal__field tour-contact-modal__field--full">
                            <span>Nombre Completo: *</span>
                            <input
                                name="nombre_completo"
                                type="text"
                                required
                            />
                        </label>

                        <label className="tour-contact-modal__field">
                            <span>Correo Electrónico: *</span>
                            <input
                                name="correo_electronico"
                                type="email"
                                required
                            />
                        </label>

                        <label className="tour-contact-modal__field">
                            <span>Teléfono: *</span>
                            <input
                                name="telefono"
                                type="tel"
                                required
                                placeholder="+57 300 123 4567"
                            />
                        </label>

                        <label className="tour-contact-modal__field tour-contact-modal__field--full">
                            <span>País de residencia: *</span>
                            <select
                                name="pais_residencia"
                                required
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Selecciona tu país
                                </option>
                                <option value="Alemania">Alemania</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Brasil">Brasil</option>
                                <option value="Bélgica">Bélgica</option>
                                <option value="Canadá">Canadá</option>
                                <option value="Chile">Chile</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Dinamarca">Dinamarca</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="España">España</option>
                                <option value="Estados Unidos">Estados Unidos</option>
                                <option value="Finlandia">Finlandia</option>
                                <option value="Francia">Francia</option>
                                <option value="Irlanda">Irlanda</option>
                                <option value="Italia">Italia</option>
                                <option value="México">México</option>
                                <option value="Noruega">Noruega</option>
                                <option value="Nueva Zelanda">Nueva Zelanda</option>
                                <option value="Panamá">Panamá</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Países Bajos">Países Bajos</option>
                                <option value="Perú">Perú</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Reino Unido">Reino Unido</option>
                                <option value="Suecia">Suecia</option>
                                <option value="Suiza">Suiza</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Venezuela">Venezuela</option>
                            </select>
                        </label>

                        <label className="tour-contact-modal__field">
                            <span>Mejor día para llamarte: *</span>
                            <input
                                name="mejor_dia_llamada"
                                type="date"
                                required
                            />
                        </label>

                        <label className="tour-contact-modal__field">
                            <span>Franja horaria: *</span>
                            <select
                                name="franja_horaria"
                                required
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Selecciona
                                </option>
                                <option value="Mañana">Mañana</option>
                                <option value="Tarde">Tarde</option>
                                <option value="Noche">Noche</option>
                            </select>
                        </label>

                        {showHelpField && (
                            <label className="tour-contact-modal__field tour-contact-modal__field--full">
                                <span>¿En qué podemos ayudarte?: *</span>
                                <input
                                    name="ayuda_requerida"
                                    type="text"
                                    required
                                />
                            </label>
                        )}
                    </div>

                    <label className="tour-contact-modal__privacy">
                        <input
                            name="acepta_politica"
                            type="checkbox"
                            required
                        />
                        <span>Acepto la política de tratamiento de datos *</span>
                    </label>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="tour-contact-modal__submit"
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
            </div>
        </div>
    )
}