'use client'
import { Controller, useForm } from 'react-hook-form';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import '@/sass/components/encontramos-tu-inmueble/Form.scss';
import { optionsProperty, optionsState, optionsTime } from '@/app/casas-apartamentos-colombia-desde-el-exterior/helpers/options';
import { peso, reverseFormat } from '@/app/casas-apartamentos-colombia-desde-el-exterior/helpers/formatCurrency';
import { Fieldset } from './Fieldset';
import { useState } from 'react';
export const Form = ({ cities: listCities, setLoading }) => {
    const { register, formState: { errors }, handleSubmit, control, reset } = useForm({ defaultValues: { name: "", phone: "", email: "" } });
    const [cities, setCities] = useState(listCities);
    const [label, setLabel] = useState('');
    const [value, setValue] = useState('');

    const filtered = cities?.filter((item) => {
        const search = label?.toLowerCase();
        const name = item?.slug.toLowerCase();
        return (search && name?.startsWith(search)) || name === search;
    });
    const storageDataSheet = (data) => {
        const scriptURL = "https://script.google.com/macros/s/AKfycby-eKee7ynU9TTPOJ5R_AF76v3YtJzy7k8dnT_Jd91AVbxHpSfp06JaPOrrYhxmX6oR/exec";
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("phone", data.phone);
        formData.append("email", data.email);
        formData.append("typeProperty", data.typeProperty);
        formData.append("cityOfInteres", data.cityOfInteres);
        formData.append("stateProperty", data.stateProperty);
        formData.append("budget", data.budget);
        formData.append("acquire", data.acquire);
        formData.append("bathrooms", data.bathrooms);
        formData.append("bedrooms", data.bedrooms);
        formData.append("parkinglot", data.parkinglot);
        formData.append("extraRequest", data.extraRequest);

        fetch(scriptURL, {
            method: "POST",
            body: formData
        }).then((response) => {
            try {
                if (response.status === 200) {
                    reset();
                    setLabel("")
                    setTimeout(() => {
                        setLoading(false);
                    }, "3000")
                }
            } catch (error) {
                console.log(error);
            }
        });
    }
    const onSubmit = (data) => {
        setLoading(true);
        storageDataSheet(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='fields-group'>
                <label className='field-content'> Nombre Completo
                    <input type="text" name='name' placeholder="Nombre Completo" {...register("name", { required: true })} />
                    {errors?.name && <span className='message-error'>Este campo es requerido</span>}
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
                                Teléfono
                                <PhoneInput
                                    {...field}
                                    onChange={(v) => field.onChange(v)}
                                    placeholder="Teléfono"
                                />
                                {errors?.phone && (<span className='message-error'>Este campo es requerido</span>)}
                            </label>
                        );
                    }}
                />
            </div>

            <label className='field-content'> Correo electrónico
                <input type="text" name='email' placeholder="general@gmail.com" {...register("email", { required: true })} />
                {errors?.email && <span className='message-error'>Este campo es requerido</span>}
            </label>
            <fieldset className='type-propertys-container'>
                <legend>Tipo de propiedad</legend>
                <div className='options-container'>
                    {optionsProperty?.map((item, id) => (
                        <label htmlFor="typeProperty" key={id}>
                            {item}
                            <input name="typeProperty" type="checkbox" value={item} {...register('typeProperty', { required: true })} />
                        </label>
                    ))}

                </div>
                {errors?.typeProperty && <span className='message-error'>Este campo es requerido</span>}
            </fieldset>

            <div className='grouped-fields'>
                <label className='field-content'>Ciudad de interés
                    <input type="text"
                        name='cityOfInteres'
                        value={label}
                        placeholder="Ciudad"
                        autoComplete='off'
                        onInput={(e) => {
                            setLabel(e.target.value)
                        }}
                        {...register("cityOfInteres", { required: true })} />
                    {errors?.cityOfInteres && <span className='message-error'>Este campo es requerido</span>}
                    <input type="hidden"
                        name='cityOfInteres'
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value)
                        }}
                    />
                    <ul className='list-cities'>
                        {filtered?.length === 0 && label?.length !== 0 && !label.includes(',') ? (
                            <li>No se encontraron resultados</li>
                        ) : (
                            filtered?.map((item) => (
                                <li
                                    key={item.slug}
                                    onClick={() => {
                                        setValue(item.slug);
                                        setLabel(`${item.nombre_ciudad}, Colombia`);
                                    }}
                                    role="button"
                                    tabIndex={0}
                                >
                                    {item.nombre_ciudad}
                                </li>
                            ))
                        )}
                    </ul>
                </label>
                <label htmlFor="stateProperty" className='field-content'>Tipo de inmueble
                    <select name="stateProperty" id='stateProperty' {...register("stateProperty", { required: true })} defaultValue="">
                        <option value="" disabled>Seleccione una opción</option>
                        {optionsState?.map((item, id) => (
                            <option value={item} key={id}>{item}</option>
                        ))}
                    </select>
                    {errors?.stateProperty && <span className='message-error'>Este campo es requerido</span>}
                </label>
            </div>

            <div className='fields-group'>
                <Controller
                    name={'budget'}
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                        <label className='field-content' htmlFor="budget">
                            ¿Cual es tu presupuesto máximo en pesos cop?
                            <input
                                type="text"
                                {...field}
                                onChange={(e) => {
                                    const numericValue =
                                        e.target.value.length === 1
                                            ? parseInt(e.target.value)
                                            : parseInt(reverseFormat(e.target.value))
                                    field.onChange(numericValue)
                                }}
                                value={isNaN(field.value) ? peso.format(0) : peso.format(field.value)}
                            />
                            {errors?.budget && <span className='message-error'>Este campo es requerido</span>}
                        </label>
                    )}
                />
                <label className='field-content'>¿En cuanto tiempo deseas adquirir el inmueble ?
                    <select name="acquire" {...register("acquire", { required: true })} defaultValue="">
                        <option value="" disabled>Seleccione una opción</option>
                        {optionsTime?.map((item, id) => (
                            <option value={item.value} key={id}>{item.label}</option>
                        ))}
                    </select>
                    {errors?.acquire && <span className='message-error'>Este campo es requerido</span>}
                </label>
            </div>
            <div className='field-content'>
                Elije las características
                <details>
                    <summary>+ 5 habitaciones</summary>

                    <Fieldset name={"bathrooms"} nameSection={"Baños"} register={register} required={false} count={5} />
                    <Fieldset name={"bedrooms"} nameSection={"Habitaciones"} register={register} required={false} count={5} />
                    <Fieldset name={"parkinglot"} nameSection={"Parqueadero"} register={register} required={false} count={5} />
                    <fieldset>
                        <input className='extra-request' type="text" name="extrarequest" placeholder='Escribe algun peticion extra ... '  {...register("extraRequest", { required: false })} />
                    </fieldset>
                </details>

            </div>

            <button type='submit' className='btn-send'>ENVIAR</button>
        </form>
    )
}
