import { BiBath, BiBorderAll, BiBed } from "react-icons/bi";
import { IoCarSport } from "react-icons/io5";

export const PropInmuebles = ({ fecha, habitaciones, baños, area_const, garajes }) => {
    return (
        <section className='propInmuebles'>
            <div className="construction-date">
                <p className='date'>
                    Fecha de Construcción:
                </p>
                <p>{fecha}</p>
            </div>
            <div className="container-info-construction">
                <div className='propInmuebles__item'>
                    <BiBed />
                    <p>{habitaciones} Habitaciones</p>
                </div>
                <div className='propInmuebles__item'>
                    <BiBath />
                    <p>{baños} Baños</p>
                </div>
                <div className='propInmuebles__item'>
                    <BiBorderAll />
                    <p>{area_const}<span>m2</span></p>
                </div>
            </div>


        </section>
    )
}
