'use client'
import Image from 'next/image';
import { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Box, LinearProgress, Typography } from '@mui/material';
import { FormContext } from '@/context/FormContext';
import '@/sass/components/FormRequestAssistence.scss'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

export const FormRequestAssistence = () => {
    const { formState, setFormState } = useContext(FormContext);
    const { register, handleSubmit, formState: { errors }, control, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const storageDataSheet = (data) => {
        const scriptURL = "https://script.google.com/macros/s/AKfycbzLMSgQ3VaZXfyOChiQZeZmwAaixPS7YwTMgPr8EvhFfumeM5vTu6ckeNnWmarwz6nZ/exec";
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("phone", data.phone);
        formData.append("email", data.email);
        formData.append("date", data.date);
        formData.append("time", data.time);
        fetch(scriptURL, {
            method: "POST",
            body: formData
        }).then((response) => {
            try {
                if (response.status === 200) {
                    setLoading(false);
                    toast("¡Hemos recibido tu solicitud!");
                    reset();
                    setFormState(false);
                }
            } catch (error) {
                console.log(error);
            }
        });
    }

    const onSubmit = async (data) => {
        storageDataSheet(data)
        setLoading(true);
    }
    return (
        <>

            <div className={`container-request-assistence ${formState && "open"}`}>
            </div>
            <Toaster
                position="top-right"
                toastOptions={{
                    success: {
                        duration: 5000,
                    },
                    style: {
                        background: "linear-gradient(180deg, #142656 0%, rgb(48 75 145) 40%)",
                        color: '#fff',
                    },
                    icon: "🏠👏"
                }}
            />

            <form className={`request-assistence ${formState && "open-form"}`} onSubmit={handleSubmit(onSubmit)}>
                <button className="btn-close" type='button' onClick={() => { setFormState(!formState); reset(); }}>
                    <Image src="/icons/close_icon.svg" alt="Close icon" width={17} height={17} />
                </button>
                <h2>Te ayudamos a encontrar <span>tu casa ideal</span></h2>
                <label htmlFor="name">
                    Nombre Completo *
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nombres y apellidos"
                        {...register('name', { required: 'El nombre es obligatorio' })}
                    />
                    {errors.name && <span className='message-error'>{errors.name.message}</span>}
                </label>

                <label htmlFor="email">
                    Correo Electrónico *
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="mail@gmail.com"
                        {...register('email', {
                            required: 'El correo electrónico es obligatorio',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Correo electrónico inválido',
                            },
                        })}
                    />
                    {errors.email && <span className='message-error'>{errors.email.message}</span>}
                </label>
                <Controller
                    control={control}
                    name={'phone'}
                    defaultValue=""
                    rules={{
                        required: true,
                        minLength: 8,
                        maxLength: 15,
                    }}
                    render={({ field }) => {
                        return (
                            <label className='field-content'>
                                Teléfono * Sin indicativo del país
                                <PhoneInput
                                    {...field}
                                    onChange={(v) => field.onChange(v)}
                                    placeholder="Teléfono"
                                />
                                {errors?.phone && (<span className='message-error'>El teléfono es obligatorio</span>)}
                            </label>
                        );
                    }}
                />

                <label htmlFor="date">
                    ¿Cuál es el mejor día para llamarte?
                    <input
                        type="date"
                        id="date"
                        name="date"
                        {...register('date')}
                    />
                    {errors.date && <span className='message-error'>{errors.date.message}</span>}
                </label>

                <label htmlFor="time">
                    ¿Cuál es la mejor hora para llamarte?
                    <input
                        type="time"
                        id="time"
                        name="time"
                        {...register('time')}
                    />
                    {errors.time && <span className='message-error'>{errors.time.message}</span>}
                </label>
                {loading ?
                    <Box sx={{ width: '50%', height: "clamp(28.5rem, 28.5rem, 95.7rem)", margin: '0 auto' }}>
                        <LinearProgress sx={{ backgroundColor: '#2a3f77' }} />
                        <Typography variant='h4' sx={{ color: '#2a3f77' }}>
                            Enviando...
                        </Typography>
                    </Box>
                    : <button className='submit' type="submit">Enviar</button>
                }
            </form>
        </>
    )

}
