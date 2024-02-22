'use client'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { BsQuestionCircle } from 'react-icons/bs'
import { PhoneInput } from 'react-international-phone'
import { Box, LinearProgress, ThemeProvider, Typography, createTheme } from '@mui/material'
import toast, { Toaster } from 'react-hot-toast'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import 'react-international-phone/style.css'
import '@/sass/components/gestionamos-tu-credito/Form.scss'
import TitleSection from '@/app/casas-apartamentos-colombia-desde-el-exterior/components/TitleSection'

export const Form = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        control,
        reset,
    } = useForm({ defaultValues: { name: '', phone: '', email: '' } })
    const [loading, setLoading] = useState(false)
    const theme = createTheme({
        palette: {
            primary: {
                main: '#354676',
            },
            secondary: {
                main: '#b08c47',
            },
        },
    })
    const storageDataSheet = (data) => {
        const scriptURL =
            'https://script.google.com/macros/s/AKfycbyhFRpcHTMm8EmtvgzHI3lR9cgSB9neosa0uo_2E00Ucvs70cfApCyIcFP0FH3b1I9_jA/exec'
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('phone', data.phone)
        formData.append('email', data.email)

        fetch(scriptURL, {
            method: 'POST',
            body: formData,
        }).then((response) => {
            try {
                console.log(response.status)
                if (response.status === 200) {
                    setLoading(false)
                    toast('!Hemos recibido tu solicitud! ')
                    reset()
                }
            } catch (error) {
                console.log(error)
            }
        })
    }
    const onSubmit = (data) => {
        setLoading(true)
        storageDataSheet(data)
    }
    return (
        <section className="container-form" id="seccion-de-contacto">
            <Toaster
                position="top-right"
                toastOptions={{
                    success: {
                        duration: 5000,
                    },
                    style: {
                        background: 'linear-gradient(180deg, #142656 0%, rgb(48 75 145) 40%)',
                        color: '#fff',
                    },
                    icon: '🏠👏',
                }}
            />
            {loading ? (
                <ThemeProvider theme={theme}>
                    <Box sx={{ width: '40%', height: '100%', margin: 'auto' }}>
                        <LinearProgress color="primary" />
                        <Typography variant="h4" color="primary">
                            Enviando...
                        </Typography>
                    </Box>
                </ThemeProvider>
            ) : (
                <>
                    <TitleSection title={'Déjanos tus datos.'} span={' Te contactaremos'} />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset>
                            <input
                                type="text"
                                placeholder="Nombre Completo"
                                {...register('name', { required: true })}
                            />
                            {errors?.name && <p className="message-error"> Este campo es requerido</p>}
                        </fieldset>
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
                                )
                            }}
                        />
                        <fieldset>
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                {...register('email', { required: true })}
                            />
                            {errors?.email && <p className="message-error"> Este campo es requerido</p>}
                        </fieldset>
                        <button className="btn-send" type="submit">
                            REGíSTRATE
                        </button>
                    </form>
                </>
            )}
        </section>
    )
}
