'use client'
import React, { useState } from "react";
import { Input } from "../../components/Input";
import { Select } from '../../components/Select'
import { optionsTipo, optionsEstado, optionsBaths, optionsRooms } from "../../helpers/options";
import { actionScroll } from "../../helpers/actionScroll";
import { onlyNumbers, peso, reverseFormat } from "../../helpers/formatCurrency";

import { AiOutlineInfoCircle } from "react-icons/ai";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
export default function Filter({
    filterCl,
    setFilterCl,
    optionsSearch,
    inputs, handleInputs,
    setInputs,
    validateField,
    label: labelFilter,
    setLabel, validateSearch,
    setIsNotFound,
    setValidateField,
    scrolling, }) {

    //State fields Selects
    const [isDropdownProperty, setIsDropwnProperty] = useState(false);
    const [isDropdownState, setIsDropdownState] = useState(false);

    /**
     * Filters an array of options based on a search criteria.
     *
     * @param {Array} optionsSearch - The array of options to be filtered.
     * @param {string} labelFilter - The search criteria to filter options by.
     * @returns {Array} - An array containing the filtered options.
     */
    const filtered = optionsSearch?.filter((item) => {
        const search = labelFilter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const name = item.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return (search && name.startsWith(search) || name === search);
    })
    return (
        <>
            <div className="container__filter">
                <div className={`field__cities ${(validateSearch || validateField) && "outline__error"}`}>
                    <img src={'/portal-inmobiliario/img/colraicesInmobiliario/icons/search.svg'} alt="Icon" />
                    <input
                        name={'city'}
                        type='text'
                        value={labelFilter}
                        placeholder='Ciudad o departamento'
                        autoComplete="off"
                        onChange={(e) => {
                            setLabel(e.target.value);
                            setIsNotFound(false); setValidateField(false)
                        }}
                    />
                    <input type="hidden"
                        value={inputs.city}
                        onChange={(e) => { handleInputs({ name: e.target.name, value: e.target.value }); }} />
                    {validateField && labelFilter.length === 0 ?
                        <span className="message-error">Este campo es requerido</span>
                        : validateSearch &&
                        <span className="message-error">No hay inmuebles en esta zona</span>
                    }
                    <Tippy
                        animation="scale"
                        theme={'dark'}
                        content="Escriba y seleccione la ciudad o departamento de la lista"
                    >
                        <p className="tippy-field-cities">
                            <AiOutlineInfoCircle />
                        </p>
                    </Tippy>
                </div>
                <Select
                    name={'typeProperty'}
                    label={`${inputs.typeProperty !== '0' ? inputs.typeProperty : 'Tipo de Propiedad'}`}
                    isDropdown={isDropdownProperty}
                    toggleDropdown={setIsDropwnProperty}
                />
                <Select
                    name={'state'}
                    label={`${inputs.state !== '0' ? inputs.state : 'Estado'}`}
                    isDropdown={isDropdownState}
                    toggleDropdown={setIsDropdownState}
                />
                <div className="container__buttons">
                    <button type="submit" className="button__search">
                        <span>Buscar</span>
                    </button>
                    <button
                        type="button"
                        className="button__filter"
                        onClick={() => {
                            if (labelFilter.length !== 0) {
                                setFilterCl(!filterCl);
                                actionScroll(scrolling);
                            }
                        }}
                    >
                        <img src="/portal-inmobiliario/img/colraicesInmobiliario/icons/filter_small.svg" alt="Icon" />
                    </button>
                </div>
            </div>
            <div className="container__search">
                <ul className={"list__options"}>
                    {filtered.length === 0 && labelFilter.length !== 0 && !labelFilter.includes(',') ?
                        <li>No se encontraron resultados</li>
                        :
                        filtered.map((item) => (
                            <li key={item.label}
                                onClick={() => {
                                    setInputs({ ...inputs, city: item.slug });
                                    setLabel(`${item.label}, Colombia`);
                                }}

                            >
                                {item.label}

                            </li>
                        ))}
                </ul>
            </div>

            <div className="container__list">
                {isDropdownProperty &&
                    <ul className="items__list">
                        {optionsTipo?.map((option, index) =>
                            <li key={index}>
                                <input
                                    name='typeProperty'
                                    type="checkbox"
                                    value={option.value}
                                    checked={inputs.typeProperty === option.value}
                                    onChange={(e) => {
                                        handleInputs({ name: e.target.name, value: e.target.checked ? e.target.value : '0' });
                                        setIsDropwnProperty(!isDropdownProperty)
                                    }} />
                                {option.label}
                            </li>)}
                    </ul>
                }
            </div>

            <div className="container__list-state" id="result">
                {isDropdownState &&
                    <ul className="items__list">
                        {optionsEstado?.map((option, index) =>
                            <li key={index}>
                                <input
                                    name='state'
                                    type="checkbox"
                                    value={option.value}
                                    checked={inputs.state === option.value}
                                    onChange={(e) => {
                                        handleInputs({ name: e.target.name, value: e.target.checked ? e.target.value : '0' });
                                        setIsDropdownState(!isDropdownState)
                                    }} />
                                {option.label}
                            </li>)}
                    </ul>}
            </div>


            <div className={`advanced__filter ${filterCl && 'open'}`}>
                <img src="/portal-inmobiliario/img/colraicesInmobiliario/icons/arrow_up.svg"
                    onClick={() => {
                        if (labelFilter.length > 0) {
                            setFilterCl(!filterCl);
                        }
                    }} alt="Icon" />
                <div className="container__inputs">
                    <h2>Precio</h2>
                    <div className="container__fields">
                        <Input
                            name={'precioDesde'}
                            label={'Minimo'}
                            type={'text'}
                            value={isNaN(inputs.precioDesde) ? peso.format('0') : peso.format(inputs.precioDesde)}
                            action={(e) => {
                                handleInputs({ name: e.target.name, value: reverseFormat(e.target.value) === '' ? '0' : reverseFormat(e.target.value) })
                            }}
                            placeholder={'COP $ ###.###.###'}
                            customClass={'field__input'}
                        />

                        <Input
                            name={'precioHasta'}
                            label={'Máximo'}
                            type={'text'}
                            value={isNaN(inputs.precioHasta) ? peso.format('0') : peso.format(inputs.precioHasta)}
                            action={(e) => { handleInputs({ name: e.target.name, value: reverseFormat(e.target.value) === '' ? '0' : reverseFormat(e.target.value) }) }}
                            placeholder={'COP $ ###.###.###'}
                            customClass={'field__input'}
                        />
                    </div>
                </div>

                <div className="container__checkboxes">
                    <h2>No. Habitaciones</h2>
                    <ul className="items__list">
                        {optionsRooms?.map((option, index) =>
                            <li key={index}><input
                                name={'rooms'}
                                className="field__checkbox"
                                type="checkbox"
                                value={option.value}
                                checked={inputs.rooms === option.value}
                                onChange={(e) =>
                                    handleInputs({ name: e.target.name, value: e.target.checked ? e.target.value : '0' })} />
                                {option.label}
                            </li>)}
                    </ul>
                </div>
                <div className="container__checkboxes bathrooms">
                    <h2>No. Baños</h2>
                    <ul className="items__list">
                        {optionsBaths?.map((option, index) =>
                            <li key={index}>
                                <input
                                    name={'baths'}
                                    className="field__checkbox"
                                    type="checkbox"
                                    value={option.value}
                                    checked={inputs.baths === option.value}
                                    onChange={(e) =>
                                        handleInputs({ name: e.target.name, value: e.target.checked ? e.target.value : '0' })} />
                                {option.label}
                            </li>)}
                    </ul>
                </div>
                <div className="container__inputs">
                    <h2>Área</h2>
                    <div className="container__fields">
                        <Input
                            name={'areaDesde'}
                            label={'Desde'}
                            type={'text'}
                            placeholder={'Ej: 60'}
                            value={inputs.areaDesde !== '0' ? inputs.areaDesde : ''}
                            onlyNumbers={onlyNumbers}
                            action={(e) => { handleInputs({ name: e.target.name, value: e.target.value === '' ? '0' : e.target.value }) }}
                            customClass={'field__input'}
                        />
                        <Input
                            name={'areaHasta'}
                            label={'Hasta'}
                            type={'text'}
                            placeholder={'Ej: 120'}
                            value={inputs.areaHasta !== '0' ? inputs.areaHasta : ''}
                            onlyNumbers={onlyNumbers}
                            action={(e) => { handleInputs({ name: e.target.name, value: e.target.value === '' ? '0' : e.target.value }) }}
                            customClass={'field__input'}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

