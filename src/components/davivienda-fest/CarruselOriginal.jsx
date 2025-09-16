'use client'
import { ContextLikeProvider } from '../../app/casas-apartamentos-colombia-desde-el-exterior/Context/Like'
import { InmReciente } from '../../app/casas-apartamentos-colombia-desde-el-exterior/Templates/InmReciente'
// Importar los estilos del carrusel
import '../../app/casas-apartamentos-colombia-desde-el-exterior/sass/app.scss'

export default function CarruselOriginal({ inmRecientes }) {
    return (
        <ContextLikeProvider>
            <InmReciente inmRecientes={inmRecientes} />
        </ContextLikeProvider>
    )
}
