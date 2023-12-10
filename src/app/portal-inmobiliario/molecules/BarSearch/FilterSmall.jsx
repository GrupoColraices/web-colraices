'use client'
import React, { useEffect, useContext, useState } from 'react'
import { useRouter } from 'next/navigation';
import { Filtro } from '../../Context/Filtro';
import { ButtonFavorite } from '../../components/ButtonFavorite';
import { SmallFilterField } from '../../components/SmallFilterField';
import { optionsTipo, optionsEstado, optionsBaths, optionsRooms } from "../../helpers/options";
import { peso, reverseFormat } from "../../helpers/formatCurrency";
import { APIURL } from '../../config';

export const FilterSmall = ({ inmueble }) => {

    const router = useRouter();
    const { inputs, handleInputs, setInputs, label: labelFilter, setLabel } = useContext(Filtro);
    const [filterCl, setFilterCl] = useState(false);
    const [validate, setValidate] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);
    const [ciudades, setCiudades] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        const ciudadData = async () => {
            const resp = await fetch(`${APIURL}cities`);
            const data = await resp.json();
            setCiudades(data.data);
        }
        const departamentoData = async () => {
            const resp = await fetch(`${APIURL}regions`);
            const data = await resp.json();
            setDepartments(data.data);
        }
        departamentoData();
        ciudadData();
    }, []);
    /**
     * Generates search options by concatenating cities and departments.
     *
     * @param {Array} ciudades - Array of objects representing cities.
     * @param {Array} departments - Array of objects representing departments.
     * @returns {Array} Array of search options with labels and slugs.
     */
    const optionsSearch = [...ciudades, ...departments]?.map(obj => {
        return {
            label: obj.nombre_ciudad || obj.nombre_region,
            slug: obj.slug,
        };
    });

    const isFound = (optionsSearch?.some((item) => item.label === labelFilter));
    const sendData = (e) => {
        e.preventDefault();
        if (inputs.city != "0" && labelFilter.length > 0 && isFound) {
            const routeSegments = [inputs.city, inputs.typeProperty, inputs.state];
            const routeQuery = [
                `habitaciones=${inputs.rooms}`,
                `area-desde=${inputs.areaDesde}`,
                `area-hasta=${inputs.areaHasta}`,
                `banos=${inputs.baths}`,
                `desde=${inputs.precioDesde}`,
                `hasta=${inputs.precioHasta}`,]
            const filterSegments = routeSegments.filter((segment) => segment !== '0');
            const filterQuery = routeQuery.filter((query) => query.split('=')[1] !== '0');
            router.push(`/portal-inmobiliario/filtrados/${filterSegments.join('/')}?${filterQuery.join('&')}`)
        } else {
            e.preventDefault();
            setValidate(true);
            if (!isFound && labelFilter.length > 0) {
                setIsNotFound(true);
            }
        }
    }
    const toggle = () => {
        setOpen(!open);
    }
    return (
        <>
            <div className={`container-filter ${open && 'open'}`}></div>
            <div className='container-buttons'>
                <button className='button-filter' type='button' onClick={() => toggle()}>
                    <img src="/portal-inmobiliario/img/colraicesInmobiliario/icons/adjust-vertical.svg" alt="Icon" />
                    Filtros</button>
                <ButtonFavorite inmueble={inmueble} />
            </div>

            <aside className={`${open && 'open-aside'}`}>
                <div className='header'>
                    <img src="/portal-inmobiliario/img/colraicesInmobiliario/icons/logo-color.svg" alt="Icon" />
                </div>
                <div className='content'>
                    <div className='container-action'>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none">
                                <path d="M12 1V12M12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18M12 12C13.6569 12 15 13.3431 15 15C15 16.6569 13.6569 18 12 18M12 18V21M4 21V10M4 10C2.34315 10 1 8.65685 1 7C1 5.34315 2.34315 4 4 4M4 10C5.65685 10 7 8.65685 7 7C7 5.34315 5.65685 4 4 4M4 4V1" stroke="#2A3F77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Filtros
                        </p>
                        <button onClick={() => { toggle() }}>
                            <img src="/portal-inmobiliario/img/colraicesInmobiliario/icons/close-circle-color.svg" alt="Icon" />
                        </button>
                    </div>
                    <form onSubmit={sendData}>
                        <div className={`container-input ${(isNotFound || validate) && "outline__error"}`}>
                            <img src="/portal-inmobiliario/img/colraicesInmobiliario/icons/ubication.svg" alt="Icon" />
                            <input
                                name={'city'}
                                type='text'
                                value={labelFilter}
                                placeholder='Ciudad o departamento'
                                autoComplete="off"
                                onChange={(e) => { setLabel(e.target.value); setIsNotFound(false); setValidate(false) }}
                            />
                            <input type="hidden"
                                value={inputs.city}
                                onChange={(e) => { handleInputs({ name: e.target.name, value: e.target.value }); }} />
                            {validate && labelFilter.length === 0 ?
                                <span className="message-error">Este campo es requerido</span>
                                : isNotFound &&
                                <span className="message-error">No hay inmuebles en esta zona</span>
                            }

                        </div>
                        <div className="container__search">
                            <ul className={"list__options"}>
                                {optionsSearch.filter((item) => {
                                    const search = labelFilter.toLowerCase();
                                    const name = item.label.toLowerCase();
                                    return (search && name.startsWith(search) && name !== search);
                                }).map((item) => (
                                    <li key={item.label}
                                        onClick={() => {
                                            setInputs({ ...inputs, city: item.slug });
                                            setLabel(item.label);
                                        }}
                                    >
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <SmallFilterField
                            name={'typeProperty'}
                            type={'checkbox'}
                            label={`${inputs.typeProperty !== '0' ? inputs.typeProperty : 'Tipo de Propiedad'}`}
                            checked={inputs?.typeProperty}
                            options={optionsTipo}
                        />
                        <SmallFilterField
                            name={'state'}
                            type={'checkbox'}
                            label={`${inputs.state !== '0' ? inputs.state : 'Estado'}`}
                            checked={inputs?.state}
                            options={optionsEstado}
                        />
                        <SmallFilterField
                            name={'rooms'}
                            type={'checkbox'}
                            label={`${inputs.rooms !== '0' ? inputs.rooms : 'No. Habitaciones'}`}
                            checked={inputs?.rooms}
                            options={optionsRooms}
                        />
                        <SmallFilterField
                            name={'baths'}
                            type={'checkbox'}
                            label={`${inputs.baths !== '0' ? inputs.baths : 'No. Baños'}`}
                            checked={inputs?.baths}
                            options={optionsBaths}
                        />
                        <SmallFilterField
                            name={'area'}
                            type={'text'}
                            label={'Area'}
                            action={(e) => { handleInputs({ name: e.target.name, value: e.target.value === '' ? '0' : e.target.value }) }}
                            fieldFrom={'areaDesde'}
                            fieldTo={'areaHasta'}
                            placeholderFrom={'Ej: 120'}
                            placeholderTo={'Ej: 150'}
                            valueFrom={inputs.areaDesde !== '0' ? inputs.areaDesde : ''}
                            valueTo={inputs.areaHasta !== '0' ? inputs.areaHasta : ''}
                        />
                        <SmallFilterField
                            name={'price'}
                            type={'text'}
                            label={'Precio'}
                            action={(e) => { handleInputs({ name: e.target.name, value: reverseFormat(e.target.value) === '' ? '0' : reverseFormat(e.target.value) }) }}
                            fieldFrom={'precioDesde'}
                            fieldTo={'precioHasta'}
                            placeholderFrom={'Minimo'}
                            placeholderTo={'Maximo'}
                            valueFrom={isNaN(inputs.precioDesde) ? peso.format('0') : peso.format(inputs.precioDesde)}
                            valueTo={isNaN(inputs.precioHasta) ? peso.format('0') : peso.format(inputs.precioHasta)}
                        />
                        <button type="submit" className="button-search">
                            Aplicar filtros
                        </button>
                    </form>
                </div>

            </aside>
        </>
    )
}
