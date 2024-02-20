

import { Button } from '@/components/Button'
import '@/sass/containers/proximamente/coming-soon.scss'
export default function ComingSoonPage() {
    return (
        <section className="container-coming-soon">
            <h1>Página <span>en construcción</span></h1>
            <p>
                Nos complace anunciar que <span>Colraices</span> está trabajando arduamente en la creación de este nuevo
                servicio que pronto estará disponible para nuestros clientes.
            </p>
            <p>
                Nuestro equipo está comprometido en proporcionar una experiencia en línea excepcional para nuestros
                usuarios y hemos estado trabajando diligentemente para garantizar que nuestro servicio sea fácil de
                usar, seguro y confiable.
            </p>
            <img src="/coming-soon.svg" alt="Proceso de construción" />
            <Button />
        </section>
    )
}
