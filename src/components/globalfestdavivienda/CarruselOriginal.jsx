'use client'
import { ContextLikeProvider } from '../../app/tour-de-la-vivienda/Context/Like'
import { InmReciente } from '../../app/tour-de-la-vivienda/Templates/InmReciente'
// Importar los estilos del carrusel
import '../../app/tour-de-la-vivienda/sass/app.scss'

export default function CarruselOriginal({ inmRecientes }) {
    return (
        <ContextLikeProvider>
            <InmReciente inmRecientes={inmRecientes} />
        </ContextLikeProvider>
    )
}
