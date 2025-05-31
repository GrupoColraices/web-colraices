'use client'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { PhoneInput } from 'react-international-phone'
import { BsQuestionCircle } from 'react-icons/bs'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Tippy from '@tippyjs/react'
import AES from 'crypto-js/aes'
import '@/sass/components/campaing/CampaignLeadForm.scss'
import TitleSection from '@/app/casas-apartamentos-colombia-desde-el-exterior/components/TitleSection'
import 'react-international-phone/style.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import Logo from '../../public/logo-azul-03.png'
import {optionsSchedule} from '@/app/casas-apartamentos-colombia-desde-el-exterior/helpers/options'
import { InternalLink } from '@/components/InternalLink'

export default function CampaignLeadForm() {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      last_name:'',
      email: '',
      phone: '',
      schedule: '',
      consent: false,
    }
  })

  const createSendUrl = (data) => ({
    name: data.name,
    last_name: data.last_name,
    email: data.email,
    phone: data.phone,
    country_id: selectedCountry,
  });
  const secretKey = process.env.NEXT_PUBLIC_CRYPTO_KEY
  const searchParams = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [hasValue, setHasValue] = useState(false)
  const [urlSafe, setUrlSafe] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [tooltipContent, setTooltipContent] = useState('')
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const entradaPorQr = searchParams.get('entrada_por_qr')

  const getCountryNameInSpanish = (countryCode) => {
    if (!countryCode) return ''
    const code = countryCode.toUpperCase()
    const displayNames = new Intl.DisplayNames(['es'], { type: 'region' })
    return displayNames.of(code) ?? code
  }


  const onSubmit = async (data) => {
    setIsLoading(true)
    setTooltipContent('Cargando…')
    setTooltipVisible(true)
    try{
        const payload = {
          name: data.name,
          last_name: data.last_name,
          email: data.email,
          phone_number: data.phone,
          best_contact_time: data.schedule,
          country_id: selectedCountry,
          ...(entradaPorQr && { entrada_por_qr: entradaPorQr }),
        }
        // Aquí iría la llamada fetch/fetcher al backend

        const response = await fetch(`${process.env.NEXT_PUBLIC_HUBSPOT_ENDPOINT}/v1/client/create/contact-campaign`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'client_id': process.env.NEXT_PUBLIC_CLIENT_SECRET_ID,
              'secret_id': process.env.NEXT_PUBLIC_HUBSPOT_SECRET_ID,
            },
            body: JSON.stringify(payload),
        })

        const result = await response.json()

        if (!response.ok) {
            setTooltipContent('Error inesperado, intenta más tarde.')
            return
        }

        if (!result.is_new_contact) {
            // el cliente ya existe
            setTooltipContent('Ya te encuentras registrado.')
            return
        }

        const sendUrl = createSendUrl(data)
        const encrypted = AES
          .encrypt(JSON.stringify(sendUrl), secretKey)
          .toString()

        setUrlSafe(encodeURIComponent(encrypted))
        setTooltipVisible(false)
        setSubmitted(true)

    } catch(error){
        console.error('Error al enviar datos:', error)
        setTooltipContent('Error inesperado, intenta más tarde.')
    } finally{
        setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <section className="campaing-form success-view">
        <div className="logo-wrapper">
          <Image src={Logo} alt="Logo Colraices" fill quality={100} style={{objectFit:'contain'}} priority/>
        </div>
        <section>
            <picture>
                <img
                    src="imagen-agradecimiento.png"
                    alt="Imagen de una casa"
                />
            </picture>
            <div className='response-text-block'>
                <h1>
                    Gracias,<span> tus datos se han registrado exitosamente.</span>
                </h1>
                <p>
                    Con este primer paso, tu futuro en Colombia ya empezó a tomar forma. En breve te contactaremos.
                </p>
                <InternalLink
                    options={{
                        type: 'anchor',
                        href: urlSafe
                           ?  `${process.env.NEXT_PUBLIC_CDC_ENDPOINT}?data=${urlSafe}`
                           : `${process.env.NEXT_PUBLIC_CDC_ENDPOINT}`,
                    }}
                >
                    {' '}
                    Descubre tu cupo de crédito en 2 minutos
                </InternalLink>
            </div>
        </section>
      </section>
    )
  }

  return (
    <section className="campaing-form">
      <div className="title-wide">
        <div className='logo-container'>
            <Image src={Logo} alt="Logo Colraices" fill quality={100} style={{objectFit:'contain'}} priority/>
        </div>
        <h1> 
            <span>Colombia siempre será tu casa. </span>Hoy puedes volver a ella transformando tu remesa en una inversión que construye futuro 
        </h1>
      </div>
      <div className='main-form'>
        <TitleSection title="Déjanos tus datos." span=" Te contactaremos" />
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <input
                    type="text"
                    placeholder="Nombre"
                    maxLength={25}
                    {...register('name', { 
                        required: "Este campo es requerido",
                        minLength:{
                            value:2,
                            message: "El nombre debe tener al menos 2 caracteres"
                        }
                    })}
                />
                {errors.name && <p className="message-error">{errors.name?.message}</p>}
            </fieldset>

            <fieldset>
                <input
                    type="text"
                    placeholder="Apellido"
                    maxLength={30}
                    {...register('last_name', { 
                        required: "Este campo es requerido",
                        minLength:{
                            value:2,
                            message: "El apellido debe tener al menos 2 caracteres"
                        }
                    })}
                />
                {errors.last_name && <p className="message-error">{errors.last_name?.message}</p>}
            </fieldset>

            <fieldset>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    maxLength={50}
                    {...register('email', { 
                        required: "Este campo es requerido",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Correo electrónico inválido"
                        },
                        minLength: {
                            value: 5,
                            message: "El correo debe tener al menos 5 caracteres"
                        }
                    })}
                />
                {errors.email && <p className="message-error">{errors.email?.message}</p>}
            </fieldset>

            <Controller
                control={control}
                name="phone"
                rules={{ required: true, minLength: 8, maxLength: 20 }}
                render={({ field }) => (
                    <fieldset className="container-phone">
                            <PhoneInput
                                {...field}
                                 onChange={(phone, meta) => {
                                    const countryInSpanish = getCountryNameInSpanish(meta?.country?.iso2)
                                    setSelectedCountry(countryInSpanish)
                                    field.onChange(phone)
                                }}
                                placeholder="Teléfono"
                            />
                            <Tippy
                                animation="scale"
                                theme={'dark'}
                                content="Teléfono del país de residencia"
                            >
                                <p className="tippy" id="tippy_title">
                                    <BsQuestionCircle />
                                </p>
                            </Tippy>
                            {errors?.phone && <p className="message-error"> Este campo es requerido</p>}
                        </fieldset>
                )}
            />

            <fieldset>
                <select
                    {...register('schedule', { 
                        required: true,
                        onChange: (e) => setHasValue(!!e.target.value)
                    })}
                    defaultValue=""
                    className={hasValue ? 'has-value' : ''}
                >
                <option value="" disabled>¿Cuál es tu mejor horario para contactarte?</option>
                {optionsSchedule.map(opt => (
                    <option key={opt.id} value={opt.value}>
                    {opt.label}
                    </option>
                ))}
                </select>
                {errors.schedule && <p className="message-error">Este campo es requerido</p>}
            </fieldset>

            <fieldset>
                <label className="checkbox-block">
                    <input
                        type="checkbox"
                        {...register('consent', { required: true })}
                    />
                    <span>
                        He leído y acepto el <a 
                            href="https://drive.google.com/file/d/14B-f-Y-ks_cOqjUXLBGGtsrzeQFnFOMu/view" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            tratamiento de mis datos personales
                        </a>.
                    </span>
                </label>
                {errors.consent && <p className="message-error">Debes aceptar el tratamiento de datos</p>}
            </fieldset>

            <Tippy
                content={tooltipContent}
                visible={tooltipVisible}
                onClickOutside={() => setTooltipVisible(false)}
                placement="bottom"
                animation="scale"
                duration={200}
            >
                <button className="btn-send" type="submit" disabled={isLoading}>
                    {isLoading ? 'Enviando…' : 'Enviar'}
                </button>
            </Tippy>
        </form>
      </div>
    </section>
  )
}