'use client'
import { useState, useContext } from 'react'
import { Input } from './Input'
import { onlyNumbers } from "../helpers/formatCurrency";
import { Filtro } from '../Context/Filtro';


export const SmallFilterField = ({ name, type, checked, options, action, label, icon, fieldFrom, fieldTo, placeholderFrom, placeholderTo, valueFrom, valueTo }) => {
    const { handleInputs } = useContext(Filtro);

    //State fields Selects
    const [open, setOpen] = useState({
        typeProperty: false,
        state: false,
        rooms: false,
        baths: false,
        area: false,
        price: false,

    });
    const handleUpdate = (field) => {
        setOpen((prevState) => ({ ...prevState, [field]: !prevState[field] }));
    }
    return (
        <>
            <div className='container-select'>
                <img src={`/portal-inmobiliario/img/colraicesInmobiliario/icons/${name}.svg`} alt="Icon" />
                <button type='button' onClick={() => {
                    handleUpdate(name)
                }
                }>{label}
                    <img className={`${open[name] && 'icon-down'}`} src='/portal-inmobiliario/img/colraicesInmobiliario/icons/arrow_down.svg' alt='Icon' />
                </button>
            </div>
            {type === 'text' && open[name] ?
                <div className="container__fields container-field-text">
                    <Input
                        name={fieldFrom}
                        label={'Desde'}
                        type={'text'}
                        placeholder={placeholderFrom}
                        value={valueFrom}
                        onlyNumbers={onlyNumbers}
                        action={action}
                        customClass={'field__input'}
                    />
                    <Input
                        name={fieldTo}
                        label={'Hasta'}
                        type={'text'}
                        placeholder={placeholderTo}
                        value={valueTo}
                        onlyNumbers={onlyNumbers}
                        action={action}
                        customClass={'field__input'}
                    />
                </div>
                :
                <div className="container-options">
                    {open[name] &&
                        <ul className="items-list">
                            {options?.map((option, index) =>
                                <li key={index}>
                                    <input
                                        id={`${name}-${option.value}`}
                                        name={name}
                                        type={type}
                                        value={option.value}
                                        checked={checked === option.value}
                                        onChange={(e) => {
                                            handleInputs({ name: e.target.name, value: e.target.checked ? e.target.value : '0' });
                                            handleUpdate(name)
                                        }} />
                                    <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
                                </li>)}
                        </ul>
                    }

                </div>
            }
        </>
    )

}