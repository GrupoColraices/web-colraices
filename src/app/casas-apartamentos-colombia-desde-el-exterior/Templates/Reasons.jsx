import React from 'react'
import TitleSection from '../components/TitleSection'

export const Reasons = () => {
    return (
        <section className='container-reasons'>
            <div className='content-reasons'>
                <TitleSection title={'Razones para no perderte la feria'} ></TitleSection>
                <ul>
                    <li><img src="/portal-inmobiliario/img/colraicesInmobiliario/icons/price-tag.svg" alt="Icono etiqueta precio" /> Precios exclusivos durante la feria</li>
                    <li><img src="/portal-inmobiliario/img/colraicesInmobiliario/icons/paper.svg" alt="Icono Papel" /> Tu pre-aprobado sin papeleos y al instante</li>
                    <li><img src="/portal-inmobiliario/img/colraicesInmobiliario/icons/user-women.svg" alt="Icono usuario" />
                        Atención personalizada y especializada para colombianos en el exterior
                    </li>
                </ul>
            </div>
        </section>
    )
}
