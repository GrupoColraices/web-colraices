import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { PhoneInput } from 'react-international-phone'
import { BsQuestionCircle } from 'react-icons/bs'
import Image from 'next/image'
import Tippy from '@tippyjs/react'
import '@/sass/components/campaing/CampaignLeadForm.scss'
import TitleSection from '@/app/casas-apartamentos-colombia-desde-el-exterior/components/TitleSection'
import 'react-international-phone/style.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import Logo from '../../public/logo.svg'
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
  const [submitted, setSubmitted] = useState(false)
  const [hasValue, setHasValue] = useState(false);

  const onSubmit = (data) => {
    // Objeto listo para envío al backend
    const payload = {
      name: data.name,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone,
      best_contact_time: data.schedule, // string
      service_taken: 'campaign',
    }
    console.log('Payload a enviar:', payload)
    // Aquí iría la llamada fetch/fetcher al backend
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="campaing-form success-view">
        <div className="logo-wrapper">
          <Image src={Logo} alt="Logo Colraices" width={150} height={50} />
        </div>
        <section>
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
                        href: 'https://colraices.com/cupocreditoalinstante',
                    }}
                >
                    {' '}
                    Descubre tu cupo de crédito en 2 minutos
                </InternalLink>
            </div>
            <picture>
                <img
                    src="/img/financia/financia-tu-casa-banner.webp"
                    alt="Mujer sonriendo mientras solicita financiación para su casa"
                />
            </picture>
        </section>
      </section>
    )
  }

  return (
    <section className="campaing-form">
      <div className="title-wide">
        <Image src={Logo} alt="Logo Colraices" width={170} height={40} quality={100} />
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
                    {...register('lastName', { 
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
                                onChange={(v) => field.onChange(v)}
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
                <option value="" disabled>Selecciona tu mejor horario</option>
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
                    {' '}He leído y acepto el tratamiento de mis datos personales.
                </label>
                {errors.consent && <p className="message-error">Debes aceptar el tratamiento de datos</p>}
            </fieldset>

            <button className="btn-send" type="submit">
                Enviar
            </button>
        </form>
      </div>
    </section>
  )
}