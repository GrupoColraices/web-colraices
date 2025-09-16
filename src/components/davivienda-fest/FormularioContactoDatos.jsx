'use client'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { PhoneInput } from 'react-international-phone'
import AES from 'crypto-js/aes'
import styles from './FormularioContactoDatos.module.css'
import 'react-international-phone/style.css'

export default function FormularioContactoDatos({
    onSubmit,
    showTitle = true,
    className = '',
    titleText = 'Déjanos tus datos.',
    subtitleText = 'Te contactaremos',
}) {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        watch,
    } = useForm({
        defaultValues: {
            nombres: '',
            apellidos: '',
            email: '',
            telefono: '',
            interes: '',
            aceptaTerminos: false,
        },
    })

    // Observar todos los campos para determinar si el formulario está completo
    const watchedFields = watch()

    // Función para verificar si todos los campos están completos
    const isFormComplete = () => {
        const { nombres, apellidos, email, telefono, interes, aceptaTerminos } = watchedFields
        return (
            nombres?.trim() &&
            apellidos?.trim() &&
            email?.trim() &&
            telefono?.trim() &&
            interes?.trim() &&
            aceptaTerminos &&
            selectedCountry &&
            Object.keys(errors).length === 0
        )
    }

    const [selectedCountry, setSelectedCountry] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [urlSafe, setUrlSafe] = useState(null)

    const secretKey = process.env.NEXT_PUBLIC_CRYPTO_KEY

    const getCountryNameInSpanish = (countryCode) => {
        if (!countryCode) return ''
        const code = countryCode.toUpperCase()
        const displayNames = new Intl.DisplayNames(['es'], { type: 'region' })
        return displayNames.of(code) ?? code
    }

    const createSendUrl = (data) => ({
        name: data.nombres,
        last_name: data.apellidos,
        email: data.email,
        phone: data.telefono,
        country_id: selectedCountry,
    })

    const handleFormSubmit = async (data) => {
        setIsLoading(true)
        setErrorMessage('')

        // Validación adicional del país
        if (!selectedCountry) {
            setErrorMessage('Por favor, ingresa un número de teléfono válido para detectar tu país.')
            setIsLoading(false)
            return
        }

        try {
            const payload = {
                name: data.nombres,
                last_name: data.apellidos,
                email: data.email,
                phone_number: data.telefono,
                best_contact_time: data.interes,
                country_id: selectedCountry,
                entrada_por_qr: 'Global Fest',
            }

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_HUBSPOT_ENDPOINT}/v1/client/create/contact-campaign`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        client_id: process.env.NEXT_PUBLIC_CLIENT_SECRET_ID,
                        secret_id: process.env.NEXT_PUBLIC_HUBSPOT_SECRET_ID,
                    },
                    body: JSON.stringify(payload),
                }
            )

            const result = await response.json()

            if (!response.ok) {
                setErrorMessage('Error inesperado, intenta más tarde.')
                return
            }

            if (!result.is_new_contact) {
                // el cliente ya existe
                setErrorMessage('Ups! Ya estás registrado. Te contactaremos pronto.')
                return
            }

            // Encriptar datos para URL segura
            const sendUrl = createSendUrl(data)
            const encrypted = AES.encrypt(JSON.stringify(sendUrl), secretKey).toString()
            setUrlSafe(encodeURIComponent(encrypted))
            setSubmitted(true)

            // Llamar onSubmit original si existe
            if (onSubmit) {
                await onSubmit({
                    nombres: data.nombres,
                    apellidos: data.apellidos,
                    email: data.email,
                    telefono: data.telefono,
                    pais: selectedCountry,
                    interes: data.interes,
                    aceptaTerminos: data.aceptaTerminos,
                })
            }
        } catch (error) {
            console.error('Error al enviar datos:', error)
            setErrorMessage('Error inesperado, intenta más tarde.')
        } finally {
            setIsLoading(false)
        }
    }

    // Vista de éxito
    if (submitted) {
        return (
            <div className={`${styles.formSection} ${className}`}>
                <div className={styles.successView}>
                    <h2 className={styles.successTitle}>
                        ¡Gracias!{' '}
                        <span className={styles.successSubtitle}>Tus datos se han registrado exitosamente.</span>
                    </h2>
                    <p className={styles.successMessage}>
                        Con este primer paso, tu futuro en Colombia ya empezó a tomar forma. En breve te contactaremos.
                    </p>
                    {/* {urlSafe && (
                        <a
                            href={`${process.env.NEXT_PUBLIC_CDC_ENDPOINT}?data=${urlSafe}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.creditButton}
                        >
                            Descubre tu cupo de crédito en 2 minutos
                        </a>
                    )} */}
                </div>
            </div>
        )
    }

    return (
        <div className={`${styles.formSection} ${className}`}>
            {showTitle && (
                <div className={styles.formHeader}>
                    <p className={styles.formTitle}>
                        <span className={styles.titleText}>{titleText}</span>{' '}
                        <span className={styles.contactText}>{subtitleText}</span>
                    </p>
                </div>
            )}

            <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
                {/* Nombres */}
                <div className={styles.fieldContainer}>
                    <input
                        type="text"
                        placeholder="Nombres"
                        className={styles.input}
                        maxLength={25}
                        disabled={isLoading}
                        {...register('nombres', {
                            required: 'Este campo es requerido',
                            minLength: {
                                value: 2,
                                message: 'El nombre debe tener al menos 2 caracteres',
                            },
                        })}
                    />
                    {errors.nombres && <p className={styles.messageError}>{errors.nombres?.message}</p>}
                </div>

                {/* Apellidos */}
                <div className={styles.fieldContainer}>
                    <input
                        type="text"
                        placeholder="Apellidos"
                        className={styles.input}
                        maxLength={30}
                        disabled={isLoading}
                        {...register('apellidos', {
                            required: 'Este campo es requerido',
                            minLength: {
                                value: 2,
                                message: 'El apellido debe tener al menos 2 caracteres',
                            },
                        })}
                    />
                    {errors.apellidos && <p className={styles.messageError}>{errors.apellidos?.message}</p>}
                </div>

                {/* Email */}
                <div className={styles.fieldContainer}>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        className={styles.input}
                        maxLength={50}
                        disabled={isLoading}
                        {...register('email', {
                            required: 'Este campo es requerido',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Correo electrónico inválido',
                            },
                            minLength: {
                                value: 5,
                                message: 'El correo debe tener al menos 5 caracteres',
                            },
                        })}
                    />
                    {errors.email && <p className={styles.messageError}>{errors.email?.message}</p>}
                </div>

                {/* Teléfono Internacional */}
                <Controller
                    control={control}
                    name="telefono"
                    rules={{
                        required: 'El teléfono es requerido',
                        minLength: {
                            value: 8,
                            message: 'El teléfono debe tener al menos 8 dígitos',
                        },
                        maxLength: {
                            value: 20,
                            message: 'El teléfono no puede tener más de 20 dígitos',
                        },
                    }}
                    render={({ field }) => (
                        <div className={styles.phoneContainer}>
                            <PhoneInput
                                {...field}
                                onChange={(phone, meta) => {
                                    if (!isLoading) {
                                        const countryInSpanish = getCountryNameInSpanish(meta?.country?.iso2)
                                        setSelectedCountry(countryInSpanish)
                                        field.onChange(phone)
                                    }
                                }}
                                placeholder="Teléfono"
                                className={styles.phoneInputAdvanced}
                                disabled={isLoading}
                                style={{
                                    '--react-international-phone-text-color': '#333',
                                    '--react-international-phone-selected-dropdown-item-background-color':
                                        'rgba(224, 2, 8, 0.05)',
                                    '--react-international-phone-dropdown-item-background-color-hover':
                                        'rgba(224, 2, 8, 0.05)',
                                }}
                            />
                            {errors?.telefono && <p className={styles.messageError}>{errors.telefono?.message}</p>}
                        </div>
                    )}
                />

                {/* Campo de horario de contacto */}
                <div className={styles.fieldContainer}>
                    <select
                        className={`${styles.input} ${styles.selectInput}`}
                        disabled={isLoading}
                        {...register('interes', {
                            required: 'Por favor, selecciona tu horario preferido de contacto',
                        })}
                        defaultValue=""
                    >
                        <option value="" disabled>
                            ¿Cuál es tu mejor horario para contactarte?
                        </option>
                        <option value="Mañanas (8:00 AM – 12:00 PM)">Mañanas (8:00 AM – 12:00 PM)</option>
                        <option value="Tardes (2:00 PM – 6:00 PM)">Tardes (2:00 PM – 6:00 PM)</option>
                        <option value="Noches (7:00 PM – 9:00 PM)">Noches (7:00 PM – 9:00 PM)</option>
                        <option value="Flexible/Cualquier horario">Flexible/Cualquier horario</option>
                    </select>
                    {errors.interes && <p className={styles.messageError}>{errors.interes?.message}</p>}
                </div>

                {/* Checkbox de términos */}
                <div className={styles.checkboxGroup}>
                    <div className={styles.customCheckbox}>
                        <input
                            type="checkbox"
                            id="terms"
                            className={styles.hiddenCheckbox}
                            disabled={isLoading}
                            {...register('aceptaTerminos', { required: 'Debes aceptar el tratamiento de datos' })}
                        />
                        <label htmlFor="terms" className={styles.checkboxContainer}>
                            <span className={styles.customCheckboxBox}>
                                <span className={styles.checkmark}>✓</span>
                            </span>
                            <span className={styles.checkboxText}>
                                He leído y aceptado el{' '}
                                <button type="button" className={styles.link}>
                                    tratamiento de mis datos personales
                                </button>
                            </span>
                        </label>
                    </div>
                    {errors.aceptaTerminos && <p className={styles.messageError}>{errors.aceptaTerminos?.message}</p>}
                </div>

                {/* Mensaje de error general */}
                {errorMessage && (
                    <div className={styles.errorContainer}>
                        <p className={styles.errorMessage}>{errorMessage}</p>
                    </div>
                )}

                {/* Botón de envío */}
                <button type="submit" className={styles.submitButton} disabled={isLoading || !isFormComplete()}>
                    {isLoading ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
        </div>
    )
}
