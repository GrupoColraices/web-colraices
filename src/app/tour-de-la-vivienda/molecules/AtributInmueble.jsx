import React from 'react';
import { GiElevator, GiPoliceOfficerHead, GiWashingMachine, GiTreeSwing, GiDesk } from "react-icons/gi";
import { FaPaintRoller, FaSwimmingPool } from "react-icons/fa";
import { BiBuildingHouse, BiChair } from "react-icons/bi";
import { BsBicycle } from "react-icons/bs";
import { MdPark, MdBalcony, MdElectricalServices } from "react-icons/md";

export const AtributInmueble = ({ pro_ser }) => {

    return (
        <article className='atributosInmueble'>
            <p className='atributosInmueble__titel'>Atributos</p>
            <div className='atributosInmueble__icon'>
                {pro_ser?.map(product => (
                    <ul className='atributosInmueble__icon__item' key={product.id}>
                        <li>{product.attribute_name}</li>
                    </ul>
                ))}
            </div>
        </article>
    )
}
