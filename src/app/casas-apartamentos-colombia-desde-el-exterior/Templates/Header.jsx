'use client'
import React, { useEffect, useState } from 'react'
import { links } from '../helpers/options'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { block } from 'million/react';


export default block(function Header() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(links[0].label);
    const route = usePathname();
    const pathName = '/casas-apartamentos-colombia-desde-el-exterior/'

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        isClient && (
            <header className={`wrapper ${route === `${pathName}favoritos` || route === `${pathName}favoritos/para-ti` || route === `${pathName}favoritos/comparar-propiedades` ? 'fav-position' : 'custom-position'}`}>
                <nav className="dropdown" data-open={isOpen}>
                    <label htmlFor="dropdown__toggle" className="dropdown__active">
                        <span id="dropdown__selected">{selectedOption}</span>

                        <img src={!isOpen ? "/portal-inmobiliario/img/colraicesInmobiliario/icons/hamburguer.svg" : "/portal-inmobiliario/img/colraicesInmobiliario/icons/close_hamburguer.svg"} className='dropdown__icon' alt="Icon" />
                    </label>
                    <input className="dropdown__toggle"
                        type="checkbox" name="dropdown__toggle"
                        id="dropdown__toggle" aria-controls="dropdown__list"
                        checked={isOpen} onChange={handleToggle} />
                    <ul className={`dropdown__list ${isOpen ? 'open' : ''}`}>
                        {links?.slice(1)?.map((option) => (
                            <li key={option.id} className="dropdown__item">
                                <Link
                                    href={option.url}
                                    data-option={option?.label}
                                    className={selectedOption === option.label ? 'active' : ''}
                                    onClick={() => handleOptionClick(option.label)}
                                >
                                    {option?.label}
                                </Link>
                            </li>

                        ))}
                        <li className='dropdown__item'><a href="#contact">Contacto</a></li>
                    </ul>
                </nav>
            </header>
        )

    );
});

