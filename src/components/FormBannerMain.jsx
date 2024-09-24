'use client'
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IoIosArrowDown } from "react-icons/io";
import { Box, LinearProgress, Typography } from '@mui/material';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import '@/sass/components/FormBannerMain.scss'

export const FormBannerMain = () => {
    const { register, handleSubmit, formState: { errors }, control, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const storageDataSheet = (data) => {
        const scriptURL = "https://script.google.com/macros/s/AKfycbxq9-yW4MwLh6g-rfQZ1p1epF8mUz1rHfNFv8JH5VdzNAwNSo8LdpMLbIfeDCe_UcgH/exec";
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        fetch(scriptURL, {
            method: "POST",
            body: formData
        }).then((response) => {
            try {
                if (response.status === 200) {
                    setLoading(false);
                    toast("¡Hemos recibido tu solicitud!");
                    reset();
                    setIsFormVisible(false);
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
        <div className={`container-banner-main ${isFormVisible ? 'open' : ''}`}>
            <h2>Déjanos tus datos
                y te contactamos</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                            <div className='content-phone'>
                                <label className='field-content'>
                                    Teléfono *
                                </label>
                                <PhoneInput
                                    {...field}
                                    defaultCountry="co"
                                    onChange={(v) => field.onChange(v)}
                                    placeholder="Teléfono"
                                />
                                {errors?.phone && (<span className='message-error'>El teléfono es obligatorio</span>)}
                            </div>
                        );
                    }}
                />
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
                {loading ?
                    <Box sx={{ width: '50%', margin: '0 auto' }}>
                        <LinearProgress sx={{ backgroundColor: '#2a3f77' }} />
                        <Typography variant='h4' sx={{ color: '#2a3f77' }}>
                            Enviando...
                        </Typography>
                    </Box>
                    : <button className='submit' type="submit">Enviar</button>
                }
            </form>
            <button className='form-toggle-btn' type='button' onClick={() => setIsFormVisible(!isFormVisible)}>Ingresa tús datos
                <IoIosArrowDown size={26} className={`arrow ${isFormVisible ? 'open' : ''}`} />
            </button>
        </div >
    )
}
