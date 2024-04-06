import React from 'react'
import '@/sass/containers/historia/Banner.scss'
export const Banner = () => {
    return (
        <header className='header-container'>
            <div className='header-content'>
                <h1>20 años cumpliendo el sueño:
                    <span> casa propia en Colombia</span>
                </h1>
                <p>Ofrecemos opciones de inmuebles, te
                    asesoramos para que te sientas seguro,
                    te
                    guiamos hacia el mejor crédito y estamos
                    ahí cuando
                    recibas las llaves de tu casa.
                </p>
            </div>
            <img src="/img/historia/historia-banner.webp" alt="Mujer Alegre Haciendo un Gesto de Pulgar Arriba delante de un Fondo Azul" />
        </header>
    )
}
