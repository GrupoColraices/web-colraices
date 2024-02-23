import { Controller, useForm } from 'react-hook-form';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import '@/sass/components/encontramos-tu-inmueble/Form.scss';
import { optionsProperty, optionsState, optionsTime } from '@/app/casas-apartamentos-colombia-desde-el-exterior/helpers/options';
import { peso, reverseFormat } from '@/app/casas-apartamentos-colombia-desde-el-exterior/helpers/formatCurrency';
import { Fieldset } from './Fieldset';

export const Form = () => {
    const { register, formState: { errors }, handleSubmit, control, reset } = useForm({ defaultValues: { name: "", phone: "", email: "" } });
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    <input type="text" name='cityOfInteres' placeholder="Bogotá" {...register("cityOfInteres", { required: true })} />
                    {errors?.cityOfInteres && <span className='message-error'>Este campo es requerido</span>}
                </label>
                <label className='field-content'>Tipo de inmueble
                    <select name="stateProperty" {...register("stateProperty", { required: true })} defaultValue="">
                        <option value="" disabled>Seleccione una opción</option>
                        {optionsState?.map((item, id) => (
                            <option value={item} key={id}>{item}</option>
                        ))}
                    </select>
                    {errors?.stateProperty && <span className='message-error'>Este campo es requerido</span>}
                </label>
            </div>
            <Controller
                name={'budget'}
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                    <label className='field-content' htmlFor="budget">
                        Presupuesto máximo en COP
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
            <label className='field-content'>Deseas adquirirlo en ...
                <select name="acquire" {...register("acquire", { required: true })} defaultValue="">
                    <option value="" disabled>Seleccione una opción</option>
                    {optionsTime?.map((item, id) => (
                        <option value={item.value} key={id}>{item.label}</option>
                    ))}
                </select>
                {errors?.acquire && <span className='message-error'>Este campo es requerido</span>}
            </label>
            <div className='field-content'>
                Elije las características
                <details>
                    <summary>+ 5 habitaciones</summary>

                    <Fieldset name={"bathrooms"} nameSection={"Baños"} required={true} count={5} />
                    <Fieldset name={"bedrooms"} nameSection={"Habitaciones"} required={true} count={5} />
                    <Fieldset name={"parkinglot"} nameSection={"Parqueadero"} required={true} count={5} />
                    <fieldset>
                        <input className='extra-request' type="text" name="extrarequest" placeholder='Escribe algun peticion extra ... ' />
                    </fieldset>
                </details>

            </div>

            <button type='submit' className='btn-send'>ENVIAR</button>
        </form>
    )
}
